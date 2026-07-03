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

ESTRUCTURA ESPERADA DE LA PLANILLA
------------------------------------
Columnas requeridas: Lng, Lat, Denominación, Nro, Nombre, Tipo
Columnas opcionales: Turnos, Niveles, TIPO DE GESTIÓN, Modalidad, Orientación,
                     Descripción, Dirección, Mail de contacto institucional,
                     Teléfono, CantAlumnos

CÓMO AGREGAR UNA COLUMNA NUEVA EN EL FUTURO
--------------------------------------------
  a) Campo simple (ej. "SitioWeb"): agregarlo a COLUMNAS_INSTITUCION.
  b) Subcategoría nueva (ej. "Universidad"): agregarla a SUBCATEGORIA_MAP.
  c) Turno nuevo: agregarlo a TURNO_MAP.
"""

import sys
import json
import re
import math
import pandas as pd


# ============================================================
# 1. MAPEO DE COLUMNAS SIMPLES
# ============================================================
COLUMNAS_INSTITUCION = {
    "descripcion":  "Descripción",
    "direccion":    "Dirección",
    "email":        "Mail de contacto institucional",
    "telefono":     "Teléfono",
    "modalidad":    "Modalidad",
    "tipo_gestion": "TIPO DE GESTIÓN",
    "niveles_str":  "Niveles",
    "cant_alumnos": "CantAlumnos",
}

COL_DENOMINACION  = "Denominación"
COL_NRO           = "Nro"
COL_NOMBRE        = "Nombre"
COL_ORIENTACION   = "Orientación"
COL_TURNOS        = "Turnos"
COL_LNG           = "Lng"
COL_LAT           = "Lat"
COL_TIPO          = "Tipo"


# ============================================================
# 2. MAPEO DE SUBCATEGORÍAS
# ============================================================
SUBCATEGORIA_MAP = {
    "escuela":                          ("educativa", "escuela"),
    "universidad":                      ("educativa", "universidad"),
    "instituto de formación docente":   ("educativa", "ifd"),
    "ifd":                              ("educativa", "ifd"),
    "instituto de formación profesional": ("educativa", "formacion_profesional"),
    "formacion profesional":            ("educativa", "formacion_profesional"),
    "cultural":                         ("cultural",  None),
}

# ============================================================
# 3. MAPEO DE TURNOS
# ============================================================
TURNO_MAP = {
    "mañana":           "manana",
    "manana":           "manana",
    "tarde":            "tarde",
    "noche":            "noche",
    "doble turno":      "doble_turno",
    "doble jornada":    "jornada_completa",
    "jornada completa": "jornada_completa",
    "vespertino":       "vespertino",
}


# ============================================================
# Funciones de limpieza
# ============================================================

def es_vacio(valor):
    if valor is None:
        return True
    if isinstance(valor, float) and math.isnan(valor):
        return True
    if isinstance(valor, str) and valor.strip() == "":
        return True
    return False


def limpiar_texto(valor):
    if es_vacio(valor):
        return None
    texto = str(valor).strip()
    texto = re.sub(r"\s*\n\s*", " ", texto)
    texto = re.sub(r"\s+", " ", texto)
    return texto if texto else None


def limpiar_numero(valor):
    if es_vacio(valor):
        return None
    try:
        return int(float(valor))
    except (ValueError, TypeError):
        return None


def construir_nombre(denominacion, nro, nombre):
    """Denominación + N°Nro (si existe) + Nombre en Title Case."""
    partes = []
    denominacion = limpiar_texto(denominacion)
    if denominacion:
        partes.append(denominacion)
    nro_limpio = limpiar_numero(nro)
    if nro_limpio and nro_limpio != 0:
        partes.append(f"N°{nro_limpio}")
    nombre_limpio = limpiar_texto(nombre)
    if nombre_limpio:
        partes.append(nombre_limpio.title())
    resultado = " ".join(partes)
    return resultado if resultado else None


def parsear_lista(valor, separador):
    """Divide un campo de texto por el separador dado y limpia cada parte."""
    texto = limpiar_texto(valor)
    if texto is None:
        return []
    return [p.strip() for p in texto.split(separador) if p.strip()]


def parsear_telefonos(valor):
    """Números separados por '//'."""
    return parsear_lista(valor, "//")


def parsear_emails(valor):
    """Emails separados por ';'."""
    return parsear_lista(valor, ";")


def parsear_turnos(valor, avisos, nombre):
    """Texto separado por comas → claves internas del sitio."""
    texto = limpiar_texto(valor)
    if texto is None:
        return []
    turnos = []
    for parte in texto.split(","):
        clave_busqueda = parte.strip().lower()
        clave = TURNO_MAP.get(clave_busqueda)
        if clave is None:
            avisos.append(
                f"  - '{nombre}': turno '{parte.strip()}' no reconocido. "
                f"Agregar a TURNO_MAP en convertir.py si es válido."
            )
            clave = clave_busqueda.replace(" ", "_")
        if clave not in turnos:
            turnos.append(clave)
    return turnos


def resolver_orientacion(fila, avisos, nombre):
    """
    Lee la orientación. Descarta el placeholder literal 'Orientación'
    que a veces queda en la planilla sin completar.
    """
    valor = limpiar_texto(fila.get(COL_ORIENTACION))
    if valor is None:
        return None
    if valor.strip().lower() == "orientación":
        avisos.append(f"  - '{nombre}': Orientación tiene el placeholder sin completar, se descarta.")
        return None
    return valor


def resolver_subcategoria(tipo_crudo, avisos, nombre):
    clave = (tipo_crudo or "").strip().lower()
    resultado = SUBCATEGORIA_MAP.get(clave)
    if resultado is None:
        avisos.append(
            f"  - '{nombre}': tipo '{tipo_crudo}' no reconocido, se asume 'educativa/escuela'."
        )
        return "educativa", "escuela"
    return resultado


# ============================================================
# Conversión principal
# ============================================================

def convertir(ruta_archivo, ruta_salida):
    avisos  = []
    errores = []

    if ruta_archivo.lower().endswith(".csv"):
        df = pd.read_csv(ruta_archivo)
    else:
        df = pd.read_excel(ruta_archivo)

    instituciones = []

    for idx, fila in df.iterrows():
        nro_fila = idx + 2

        nombre = construir_nombre(fila.get(COL_DENOMINACION), fila.get(COL_NRO), fila.get(COL_NOMBRE))
        lat    = fila.get(COL_LAT)
        lng    = fila.get(COL_LNG)

        if nombre is None:
            errores.append(f"Fila {nro_fila}: sin nombre (revisar Denominación/Nro/Nombre). Se omite.")
            continue
        if es_vacio(lat) or es_vacio(lng):
            errores.append(f"Fila {nro_fila} ('{nombre}'): falta latitud o longitud. Se omite.")
            continue
        try:
            lat, lng = float(lat), float(lng)
        except (ValueError, TypeError):
            errores.append(f"Fila {nro_fila} ('{nombre}'): lat/lng no son números válidos. Se omite.")
            continue

        tipo_crudo = limpiar_texto(fila.get(COL_TIPO))
        tipo, subcategoria = resolver_subcategoria(tipo_crudo, avisos, nombre)

        emails    = parsear_emails(fila.get(COLUMNAS_INSTITUCION["email"]))
        telefonos = parsear_telefonos(fila.get(COLUMNAS_INSTITUCION["telefono"]))

        institucion = {
            "id":          f"{'edu' if tipo == 'educativa' else 'cul'}-{nro_fila:03d}",
            "tipo":        tipo,
            "nombre":      nombre,
            "lat":         lat,
            "lng":         lng,
            "descripcion": limpiar_texto(fila.get(COLUMNAS_INSTITUCION["descripcion"])),
            "direccion":   limpiar_texto(fila.get(COLUMNAS_INSTITUCION["direccion"])),
            "emails":      emails,
            "telefonos":   telefonos,
            "cant_alumnos": limpiar_numero(fila.get(COLUMNAS_INSTITUCION["cant_alumnos"])),
        }

        if tipo == "educativa":
            institucion["subcategoria"] = subcategoria
            institucion["modalidad"]    = limpiar_texto(fila.get(COLUMNAS_INSTITUCION["modalidad"]))
            institucion["tipo_gestion"] = limpiar_texto(fila.get(COLUMNAS_INSTITUCION["tipo_gestion"]))
            institucion["orientacion"]  = resolver_orientacion(fila, avisos, nombre)
            institucion["turnos"]       = parsear_turnos(fila.get(COL_TURNOS), avisos, nombre)
            institucion["niveles_str"]  = limpiar_texto(fila.get(COLUMNAS_INSTITUCION["niveles_str"]))

            campos_clave = [institucion["descripcion"], institucion["direccion"], telefonos]
            institucion["datos_pendientes"] = all(es_vacio(c) or c == [] for c in campos_clave)
            if institucion["datos_pendientes"]:
                avisos.append(f"  - '{nombre}': sin descripción, dirección ni teléfono (datos pendientes).")

        instituciones.append(institucion)

    resultado = {"instituciones": instituciones}
    with open(ruta_salida, "w", encoding="utf-8") as f:
        json.dump(resultado, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Conversión completa: {len(instituciones)} instituciones → {ruta_salida}\n")
    if errores:
        print(f"⚠️  {len(errores)} fila(s) omitida(s) por error grave:")
        for e in errores: print(f"  - {e}")
        print()
    if avisos:
        print(f"ℹ️  {len(avisos)} aviso(s) (incluidos en el JSON, pero revisar):")
        for a in avisos: print(a)
        print()
    if not errores and not avisos:
        print("Sin errores ni avisos. Todo perfecto. 🎉")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 convertir.py archivo.xlsx  (o archivo.csv)")
        sys.exit(1)
    ruta_entrada = sys.argv[1]
    ruta_salida  = sys.argv[2] if len(sys.argv) > 2 else "instituciones.json"
    convertir(ruta_entrada, ruta_salida)
