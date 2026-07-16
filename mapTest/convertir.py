"""
Conversor de planilla (Excel o CSV) a instituciones.json
para el mapa de instituciones educativas y culturales de Villa Mercedes.

CÓMO USARLO
-----------
1. Exportar la hoja de Google Sheets como Excel (.xlsx) o CSV.
   Si es Excel, podés tener varias pestañas (Escuelas, Universidades, etc.):
   el script las procesa TODAS automáticamente y las combina en un solo
   instituciones.json. La categoría de cada fila se decide por su columna
   "Tipo" (buscando una palabra clave adentro), no por el nombre de la
   pestaña — así que no importa cómo se llame la hoja ni si dos categorías
   comparten una misma pestaña.
2. Poner ese archivo en esta misma carpeta (o indicar la ruta con --archivo).
3. Correr:   python3 convertir.py archivo.xlsx
   (o)       python3 convertir.py archivo.csv
4. El script genera instituciones.json en esta misma carpeta.
5. Copiar ese instituciones.json a la carpeta del sitio (reemplaza al anterior).

ESTRUCTURA ESPERADA DE LA PLANILLA
------------------------------------
Columnas requeridas: Lat, Lng (o Long/Lon/Longitud), Tipo, y un nombre
                     (Nombre solo, o Denominación + Nro + Nombre)
Columnas opcionales: Turnos, Niveles, Tipo de Gestión, Modalidad, Orientación,
                     Descripción, Dirección, Mail de contacto institucional,
                     Teléfono, CantAlumnos

El script tolera variantes razonables de encabezado (mayúsculas, acentos,
"Lng" vs "Long", etc.) — ver ALIASES_COLUMNA más abajo para la lista
completa de variantes reconocidas. También acepta que los teléfonos estén
separados con "//" o con ";" (las dos convenciones que aparecieron en la
planilla real).

CÓMO SE DECIDE LA CATEGORÍA DE CADA FILA
------------------------------------------
Se lee la columna "Tipo" de cada fila y se busca una palabra clave conocida
en cualquier parte del texto (sin importar mayúsculas ni acentos). Por eso
"Escuela", "Universidad Provincial" y "Universidad Nacional" funcionan
igual de bien: alcanza con que la palabra clave esté en algún lugar.
Ver SUBCATEGORIA_KEYWORDS para agregar una categoría nueva.

CÓMO AGREGAR ALGO NUEVO EN EL FUTURO
--------------------------------------
  a) Campo simple (ej. "SitioWeb"): agregarlo a ALIASES_COLUMNA.
  b) Categoría nueva (ej. "Biblioteca"): agregarla a SUBCATEGORIA_KEYWORDS
     (y de paso a PREFIJO_ID, para que sus IDs se vean prolijos).
  c) Turno nuevo: agregarlo a TURNO_MAP.
"""

import sys
import json
import re
import math
import unicodedata
import pandas as pd


# ============================================================
# 1. ALIAS DE COLUMNAS
# ============================================================
# Cada campo puede venir con distintos nombres de encabezado según la hoja
# (ej. "Lng" en Escuelas, "Long" en Universidades). Se prueba cada alias en
# orden y se usa el primero que tenga datos.
ALIASES_COLUMNA = {
    "lat":          ["Lat"],
    "lng":          ["Lng", "Long", "Lon", "Longitud"],
    "denominacion": ["Denominación", "Denominacion"],
    "nro":          ["Nro", "N°", "Numero", "Número"],
    "nombre":       ["Nombre"],
    "tipo":         ["Tipo"],
    "turnos":       ["Turnos"],
    "niveles_str":  ["Niveles"],
    "tipo_gestion": ["TIPO DE GESTIÓN", "Tipo De Gestión", "Tipo de Gestión", "TIPO DE GESTION", "Tipo de gestion"],
    "modalidad":    ["Modalidad"],
    "orientacion":  ["Orientación", "Orientacion"],
    "descripcion":  ["Descripción", "Descripcion"],
    "direccion":    ["Dirección", "Direccion"],
    "email":        ["Mail de contacto institucional", "Email", "Mail", "Correo"],
    "telefono":     ["Teléfono", "Telefono"],
    "cant_alumnos": ["CantAlumnos", "Cant. Alumnos", "Cantidad de Alumnos"],
}


# ============================================================
# 2. CATEGORÍAS (palabra clave dentro de la columna "Tipo")
# ============================================================
# Se compara como substring dentro del texto de "Tipo" ya sin acentos y en
# minúsculas — por eso "Universidad Provincial" matchea "universidad" igual
# que "Universidad Nacional" o simplemente "Universidad".
SUBCATEGORIA_KEYWORDS = [
    ("universidad",                        "educativa", "universidad"),
    ("instituto de formacion docente",     "educativa", "ifd"),
    ("ifd",                                "educativa", "ifd"),
    ("instituto de formacion profesional", "educativa", "formacion_profesional"),
    ("formacion profesional",              "educativa", "formacion_profesional"),
    ("escuela",                            "educativa", "escuela"),
    ("cultural",                           "cultural",  None),
]

# Prefijo para el "id" de cada institución, según su subcategoría.
PREFIJO_ID = {
    "escuela":               "esc",
    "universidad":           "uni",
    "ifd":                   "ifd",
    "formacion_profesional": "fp",
    None:                    "cul",  # instituciones culturales (sin subcategoría)
}

# ============================================================
# 3. TURNOS
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


def quitar_acentos(texto):
    """Para comparar texto sin depender de que todos hayan tildado igual."""
    return "".join(c for c in unicodedata.normalize("NFD", texto) if unicodedata.category(c) != "Mn")


def obtener(fila, campo):
    """Busca el valor de `campo` probando todos sus alias de encabezado (ALIASES_COLUMNA)."""
    for alias in ALIASES_COLUMNA[campo]:
        if alias in fila.index:
            valor = fila[alias]
            if not es_vacio(valor):
                return valor
    return None


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


def capitalizar_preservando_siglas(texto):
    """
    Pone cada palabra en Title Case, salvo las que ya están enteramente en
    mayúsculas (2+ letras) — esas se asumen siglas (UNSL, IFD, U.P.R.O) y
    se dejan intactas en vez de convertirlas en 'Unsl'.
    """
    palabras = texto.split(" ")
    resultado = []
    for palabra in palabras:
        letras = [c for c in palabra if c.isalpha()]
        es_sigla = len(letras) >= 2 and all(c.isupper() for c in letras)
        resultado.append(palabra if es_sigla else palabra.capitalize())
    return " ".join(resultado)


def construir_nombre(denominacion, nro, nombre):
    """Denominación + N°Nro (si existen) + Nombre, con siglas preservadas."""
    partes = []
    denominacion = limpiar_texto(denominacion)
    if denominacion:
        partes.append(denominacion)
    nro_limpio = limpiar_numero(nro)
    if nro_limpio and nro_limpio != 0:
        partes.append(f"N°{nro_limpio}")
    nombre_limpio = limpiar_texto(nombre)
    if nombre_limpio:
        partes.append(capitalizar_preservando_siglas(nombre_limpio))
    resultado = " ".join(partes)
    return resultado if resultado else None


def parsear_lista(valor, patron_separador):
    """Divide un campo de texto por el patrón (regex) dado y limpia cada parte."""
    texto = limpiar_texto(valor)
    if texto is None:
        return []
    partes = re.split(patron_separador, texto)
    return [p.strip() for p in partes if p.strip()]


def parsear_telefonos(valor):
    """Números separados por '//' o ';' — se aceptan las dos convenciones."""
    return parsear_lista(valor, r"//|;")


def parsear_emails(valor):
    """Emails separados por ';'."""
    return parsear_lista(valor, r";")


def parsear_turnos(valor, avisos, nombre, hoja):
    """Texto separado por comas → claves internas del sitio."""
    texto = limpiar_texto(valor)
    if texto is None:
        return []
    turnos = []
    for parte in texto.split(","):
        clave_busqueda = quitar_acentos(parte.strip().lower())
        clave = TURNO_MAP.get(clave_busqueda)
        if clave is None:
            avisos.append(
                f"  - Hoja '{hoja}', '{nombre}': turno '{parte.strip()}' no reconocido. "
                f"Agregar a TURNO_MAP en convertir.py si es válido."
            )
            clave = clave_busqueda.replace(" ", "_")
        if clave not in turnos:
            turnos.append(clave)
    return turnos


def resolver_orientacion(fila, avisos, nombre, hoja):
    """
    Lee la orientación. Descarta el placeholder literal 'Orientación'
    que a veces queda en la planilla sin completar.
    """
    valor = limpiar_texto(obtener(fila, "orientacion"))
    if valor is None:
        return None
    if quitar_acentos(valor.strip().lower()) == "orientacion":
        avisos.append(f"  - Hoja '{hoja}', '{nombre}': Orientación tiene el placeholder sin completar, se descarta.")
        return None
    return valor


def resolver_subcategoria(tipo_crudo, avisos, nombre, hoja):
    texto = quitar_acentos((tipo_crudo or "").strip().lower())
    for palabra_clave, tipo, subcategoria in SUBCATEGORIA_KEYWORDS:
        if palabra_clave in texto:
            return tipo, subcategoria
    avisos.append(
        f"  - Hoja '{hoja}', '{nombre}': tipo '{tipo_crudo}' no reconocido, se asume 'educativa/escuela'."
    )
    return "educativa", "escuela"


# ============================================================
# Conversión principal
# ============================================================

def leer_hojas(ruta_archivo):
    """Devuelve una lista de (nombre_hoja, dataframe). Un CSV cuenta como una sola 'hoja'."""
    if ruta_archivo.lower().endswith(".csv"):
        return [("CSV", pd.read_csv(ruta_archivo))]
    excel = pd.ExcelFile(ruta_archivo)
    return [(hoja, pd.read_excel(excel, sheet_name=hoja)) for hoja in excel.sheet_names]


def convertir(ruta_archivo, ruta_salida):
    avisos  = []
    errores = []
    instituciones = []
    contadores_id = {}  # prefijo -> próximo número disponible

    for nombre_hoja, df in leer_hojas(ruta_archivo):
        for idx, fila in df.iterrows():
            nro_fila = idx + 2  # +2: la fila 1 es el encabezado, pandas arranca en 0

            nombre = construir_nombre(obtener(fila, "denominacion"), obtener(fila, "nro"), obtener(fila, "nombre"))
            lat = obtener(fila, "lat")
            lng = obtener(fila, "lng")

            if nombre is None:
                errores.append(f"Hoja '{nombre_hoja}', fila {nro_fila}: sin nombre (revisar Denominación/Nro/Nombre). Se omite.")
                continue
            if es_vacio(lat) or es_vacio(lng):
                errores.append(f"Hoja '{nombre_hoja}', fila {nro_fila} ('{nombre}'): falta latitud o longitud. Se omite.")
                continue
            try:
                lat, lng = float(lat), float(lng)
            except (ValueError, TypeError):
                errores.append(f"Hoja '{nombre_hoja}', fila {nro_fila} ('{nombre}'): lat/lng no son números válidos. Se omite.")
                continue

            tipo_crudo = limpiar_texto(obtener(fila, "tipo"))
            tipo, subcategoria = resolver_subcategoria(tipo_crudo, avisos, nombre, nombre_hoja)

            emails    = parsear_emails(obtener(fila, "email"))
            telefonos = parsear_telefonos(obtener(fila, "telefono"))

            prefijo = PREFIJO_ID[subcategoria] if tipo == "educativa" else PREFIJO_ID[None]
            contadores_id[prefijo] = contadores_id.get(prefijo, 0) + 1

            institucion = {
                "id":          f"{prefijo}-{contadores_id[prefijo]:03d}",
                "tipo":        tipo,
                "nombre":      nombre,
                "lat":         lat,
                "lng":         lng,
                "descripcion": limpiar_texto(obtener(fila, "descripcion")),
                "direccion":   limpiar_texto(obtener(fila, "direccion")),
                "emails":      emails,
                "telefonos":   telefonos,
                "cant_alumnos": limpiar_numero(obtener(fila, "cant_alumnos")),
            }

            if tipo == "educativa":
                institucion["subcategoria"] = subcategoria
                institucion["modalidad"]    = limpiar_texto(obtener(fila, "modalidad"))
                institucion["tipo_gestion"] = limpiar_texto(obtener(fila, "tipo_gestion"))
                institucion["orientacion"]  = resolver_orientacion(fila, avisos, nombre, nombre_hoja)
                institucion["turnos"]       = parsear_turnos(obtener(fila, "turnos"), avisos, nombre, nombre_hoja)
                institucion["niveles_str"]  = limpiar_texto(obtener(fila, "niveles_str"))

                campos_clave = [institucion["descripcion"], institucion["direccion"], telefonos]
                institucion["datos_pendientes"] = all(es_vacio(c) or c == [] for c in campos_clave)
                if institucion["datos_pendientes"]:
                    avisos.append(f"  - Hoja '{nombre_hoja}', '{nombre}': sin descripción, dirección ni teléfono (datos pendientes).")

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
