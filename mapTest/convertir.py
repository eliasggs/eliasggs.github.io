"""
Conversor de planilla (Excel o CSV) a instituciones.json
para el mapa de instituciones educativas y culturales de Villa Mercedes.

CÓMO USARLO
-----------
1. Exportar la hoja de Google Sheets como Excel (.xlsx) o CSV.
2. Poner ese archivo en esta misma carpeta (o indicar la ruta con --archivo).
3. Correr:   python3 convertir.py archivo.xlsx
   (o)       python3 convertir.py archivo.csv
4. El script genera instituciones.json en esta misma carpeta.
5. Copiar ese instituciones.json a la carpeta del sitio (reemplaza al anterior).

CÓMO AGREGAR UNA COLUMNA NUEVA EN EL FUTURO
--------------------------------------------
Si en la planilla agregan una columna nueva (ej. "Preescolar"), hay que:
  a) Si es un NIVEL nuevo (como Primaria/Secundaria): agregarlo a NIVELES_CONFIG
     más abajo, siguiendo el mismo patrón que los niveles existentes.
  b) Si es un campo simple de la institución (ej. "SitioWeb"): agregarlo a
     COLUMNAS_INSTITUCION más abajo.
No hace falta tocar el resto del script.
"""

import sys
import json
import re
import math
import pandas as pd


# ============================================================
# 1. MAPEO DE COLUMNAS SIMPLES (no booleanas, no por-nivel)
# ============================================================
# clave final en el JSON -> nombre exacto de columna en la planilla
COLUMNAS_INSTITUCION = {
    "nombre": "Nombre",
    "descripcion": "Descripción",
    "direccion": "Dirección",
    "email": "Mail",
    "telefono": "Teléfono",
    "cant_alumnos": "CantAlumos",  # ojo: typo real en la planilla, no corregir aquí
}

# Columnas de coordenadas (nombres fijos esperados)
COL_LNG = "Lng"
COL_LAT = "Lat"
COL_TIPO = "Tipo"


# ============================================================
# 2. MAPEO DE NIVELES EDUCATIVOS Y SUS TURNOS/HORARIOS ANIDADOS
# ============================================================
# Cada nivel tiene: la columna booleana que indica si la institución
# tiene ese nivel, y un diccionario de turnos con su columna de
# activo/inactivo y su columna de horario asociada.
#
# PARA AGREGAR UN NIVEL NUEVO (ej. "Preescolar"):
#   "preescolar": {
#       "columna_nivel": "Preescolar",
#       "turnos": {
#           "turno_manana": {"columna_activo": "Turno Mañana.2", "columna_horario": "HorariosPreM"},
#           ...
#       }
#   },
NIVELES_CONFIG = {
    "primario": {
        "columna_nivel": "Primaria",
        "turnos": {
            "turno_manana": {"columna_activo": "Turno Mañana", "columna_horario": "HorariosPTM"},
            "turno_tarde": {"columna_activo": "Turno Tarde", "columna_horario": "HorariosPTT"},
        },
    },
    "secundario": {
        "columna_nivel": "Secundaria",
        "turnos": {
            "turno_manana": {"columna_activo": "Turno Mañana.1", "columna_horario": "HorariosSTM"},
            "turno_tarde": {"columna_activo": "Turno Tarde.1", "columna_horario": "HorarioSTT"},
        },
    },
    "adultos": {
        "columna_nivel": "ModalidadAdultos",
        "turnos": {
            "turno_tarde": {"columna_activo": "Turno Tarde.2", "columna_horario": "HorarioATT"},
            "turno_noche": {"columna_activo": "Turno Noche", "columna_horario": "HorarioATN"},
        },
    },
}


# ============================================================
# 3. MAPEO DE TIPO DE INSTITUCIÓN
# ============================================================
# Valor de la columna "Tipo" en la planilla -> tipo interno del JSON
TIPO_MAP = {
    "escuela": "educativa",
    "educativa": "educativa",
    "cultural": "cultural",
}


# ============================================================
# Funciones de limpieza
# ============================================================

def es_vacio(valor):
    """True si el valor representa una celda vacía (NaN, None, string vacío)."""
    if valor is None:
        return True
    if isinstance(valor, float) and math.isnan(valor):
        return True
    if isinstance(valor, str) and valor.strip() == "":
        return True
    return False


def a_booleano_o_none(valor):
    """
    Convierte valores mezclados (1.0, 0.0, True, False, 'TRUE', 'FALSE', vacío)
    a True / False / None (None = sin dato todavía, no es lo mismo que False).
    """
    if es_vacio(valor):
        return None
    if isinstance(valor, bool):
        return valor
    if isinstance(valor, (int, float)):
        return bool(valor)
    if isinstance(valor, str):
        v = valor.strip().lower()
        if v in ("true", "1", "si", "sí"):
            return True
        if v in ("false", "0", "no"):
            return False
    return None


def limpiar_texto(valor):
    """Limpia strings: recorta espacios, saltos de línea, normaliza vacíos a None."""
    if es_vacio(valor):
        return None
    texto = str(valor).strip()
    texto = re.sub(r"\s*\n\s*", " ", texto)  # saltos de línea internos -> espacio
    texto = re.sub(r"\s+", " ", texto)        # espacios múltiples -> uno
    return texto if texto else None


def limpiar_horario(valor):
    """
    Limpia el campo de horario. 'unknown' (en cualquier capitalización)
    se traduce a un texto amigable para el usuario final.
    """
    texto = limpiar_texto(valor)
    if texto is None:
        return None
    if texto.lower() == "unknown":
        return "Horario a confirmar"
    return texto


def limpiar_numero(valor):
    """Convierte a int si es un número válido, si no devuelve None."""
    if es_vacio(valor):
        return None
    try:
        return int(float(valor))
    except (ValueError, TypeError):
        return None


# ============================================================
# Conversión principal
# ============================================================

def construir_niveles(fila, avisos, nombre_institucion):
    """
    A partir de una fila de la planilla, construye el diccionario "niveles"
    con la estructura: { nivel: None | {turno: {activo, horario}, ...} }
    """
    niveles = {}

    for clave_nivel, config in NIVELES_CONFIG.items():
        col_nivel = config["columna_nivel"]
        tiene_nivel = a_booleano_o_none(fila.get(col_nivel))

        if tiene_nivel is not True:
            # Si no tiene el nivel (False) o no hay dato (None), se guarda como None.
            # Distinguimos para el aviso: si es False explícito, no es un dato faltante.
            niveles[clave_nivel] = None
            continue

        turnos = {}
        for clave_turno, turno_cfg in config["turnos"].items():
            activo = a_booleano_o_none(fila.get(turno_cfg["columna_activo"]))
            horario = limpiar_horario(fila.get(turno_cfg["columna_horario"]))

            if activo is None and horario is None:
                continue  # ese turno ni se completó, no lo incluimos vacío

            turnos[clave_turno] = {
                "activo": bool(activo) if activo is not None else None,
                "horario": horario,
            }

        if not turnos:
            avisos.append(
                f"  - '{nombre_institucion}': tiene nivel '{clave_nivel}' pero sin turnos completados todavía."
            )

        niveles[clave_nivel] = turnos if turnos else {}

    return niveles


def fila_tiene_algun_nivel_completo(niveles):
    return any(v for v in niveles.values())


def convertir(ruta_archivo, ruta_salida):
    avisos = []
    errores = []

    # ---- Lectura del archivo (acepta xlsx o csv) ----
    if ruta_archivo.lower().endswith(".csv"):
        df = pd.read_csv(ruta_archivo)
    else:
        df = pd.read_excel(ruta_archivo)

    instituciones = []

    for idx, fila in df.iterrows():
        numero_fila_planilla = idx + 2  # +2: encabezado + base 1

        nombre = limpiar_texto(fila.get(COLUMNAS_INSTITUCION["nombre"]))
        lat = fila.get(COL_LAT)
        lng = fila.get(COL_LNG)

        # ---- Validaciones críticas: sin esto, la institución no se puede ubicar ----
        if nombre is None:
            errores.append(f"Fila {numero_fila_planilla}: sin nombre. Se omite esta fila.")
            continue

        if es_vacio(lat) or es_vacio(lng):
            errores.append(f"Fila {numero_fila_planilla} ('{nombre}'): falta latitud o longitud. Se omite esta fila.")
            continue

        try:
            lat = float(lat)
            lng = float(lng)
        except (ValueError, TypeError):
            errores.append(f"Fila {numero_fila_planilla} ('{nombre}'): lat/lng no son números válidos. Se omite esta fila.")
            continue

        # ---- Tipo de institución ----
        tipo_crudo = limpiar_texto(fila.get(COL_TIPO))
        tipo = TIPO_MAP.get((tipo_crudo or "").lower())
        if tipo is None:
            avisos.append(f"  - Fila {numero_fila_planilla} ('{nombre}'): tipo '{tipo_crudo}' no reconocido, se asume 'educativa'.")
            tipo = "educativa"

        institucion = {
            "id": f"{'edu' if tipo == 'educativa' else 'cul'}-{numero_fila_planilla:03d}",
            "tipo": tipo,
            "nombre": nombre,
            "lat": lat,
            "lng": lng,
            "descripcion": limpiar_texto(fila.get(COLUMNAS_INSTITUCION["descripcion"])),
            "direccion": limpiar_texto(fila.get(COLUMNAS_INSTITUCION["direccion"])),
            "email": limpiar_texto(fila.get(COLUMNAS_INSTITUCION["email"])),
            "telefono": limpiar_texto(fila.get(COLUMNAS_INSTITUCION["telefono"])),
            "cant_alumnos": limpiar_numero(fila.get(COLUMNAS_INSTITUCION["cant_alumnos"])),
        }

        if tipo == "educativa":
            niveles = construir_niveles(fila, avisos, nombre)
            institucion["niveles"] = niveles
            institucion["datos_pendientes"] = not fila_tiene_algun_nivel_completo(niveles)
            if institucion["datos_pendientes"]:
                avisos.append(f"  - '{nombre}': sin ningún nivel/turno completado todavía (datos pendientes).")

        instituciones.append(institucion)

    # ---- Guardar resultado ----
    resultado = {"instituciones": instituciones}
    with open(ruta_salida, "w", encoding="utf-8") as f:
        json.dump(resultado, f, ensure_ascii=False, indent=2)

    # ---- Reporte final ----
    print(f"\n✅ Conversión completa: {len(instituciones)} instituciones escritas en {ruta_salida}\n")

    if errores:
        print(f"⚠️  {len(errores)} fila(s) con error grave (NO se incluyeron en el JSON):")
        for e in errores:
            print(f"  - {e}")
        print()

    if avisos:
        print(f"ℹ️  {len(avisos)} aviso(s) (se incluyeron en el JSON, pero revisar):")
        for a in avisos:
            print(a)
        print()

    if not errores and not avisos:
        print("Sin errores ni avisos. Todo perfecto. 🎉")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 convertir.py archivo.xlsx  (o archivo.csv)")
        sys.exit(1)

    ruta_entrada = sys.argv[1]
    ruta_salida = sys.argv[2] if len(sys.argv) > 2 else "instituciones.json"
    convertir(ruta_entrada, ruta_salida)
