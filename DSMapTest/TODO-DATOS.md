# TODO — Capas de datos demográficos

Documento de trabajo para sumar datos demográficos georreferenciados al mapa de Villa Mercedes.
Creado: 2026-11-01. Ámbito: ciudad de Villa Mercedes / departamento Pedernera (San Luis).

## 0. Punto de partida

Ya implementado y en producción:

- `circuitos.geojson` — 22 circuitos electorales + resultados legislativas 2025 (CNE / Data CP).
- `data.json` — 89 establecimientos educativos del padrón oficial.
- `barrios.geojson` — barrios OSM (ODbL).
- `ruta-a.geojson` y `ruta-e.geojson` — recorridos de las líneas A y E de colectivos (datos de muestra).
- `renabap.geojson` — 7 barrios populares (RENABAP, datos 2023).
- `radios.geojson` — 170 radios censales urbanos de Villa Mercedes y Villa Reynolds (Censo 2022) con población, hogares, salud, NBI y servicios.
- `salud.geojson` — 86 establecimientos de salud (REFES 2026) con tipo, sector, circuito y precisión de coordenada.

La Fase 1 quedó cerrada (RENABAP, radios censales y REFES) y la Fase 2 está lista para empezar.

## 1. Criterio de priorización

Cada capa se evalúa con cuatro criterios:

| Criterio | Pregunta |
|---|---|
| Valor para políticas públicas | ¿Permite decidir una obra, una priorización o una asignación de recursos? |
| Granularidad | ¿Baja a barrio/radio o se queda en departamento? |
| Esfuerzo | Días de trabajo y complejidad de ingesta. |
| Vigencia y licencia | ¿Es posterior a 2010 y reutilizable con atribución? |

Regla: **no se agrega una capa que no cambie una decisión**. Un mapa de puntos sin denominador no es política pública; un indicador por radio con denominador sí.

## 2. Fase 1 — Primeras tres capas

### 2.1 RENABAP — Barrios Populares

**Valor:** identifica los asentamientos informales, su cantidad de hogares y viviendas. Es la capa que permite cruzar integración socio-urbana con circuitos electorales y con el mapa de escuelas.

| Campo | Detalle |
|---|---|
| Fuente | Subsecretaría de Integración Socio Urbana (RENABAP) |
| Recurso | `https://archivo.infraestructura.gob.ar/dataset/ssisu/20231205_info_publica.geojson` |
| Alternativas | CSV y GPKG en `https://datos.gob.ar/dataset/registro-nacional-de-barrios-populares` |
| Datos | diciembre 2023; publicación agosto 2025 |
| Geometría | polígono de barrio |
| Licencia | Creative Commons Attribution |
| Volumen | ~5.700 polígonos en todo el país |

**Pasos**

- [x] Descargar GeoJSON y CSV de referencia.
- [x] Filtrar provincia `San Luis`, departamento `Pedernera` / localidad `Villa Mercedes`.
- [x] Verificar nombres exactos de campos (nombre del barrio, hogares, viviendas, localidad) contra el CSV de referencias.
      El GeoJSON oficial publicado el 6/12/2023 expone `nombre_barrio` y `familias_aproximadas`; **no incluye viviendas**. La capa muestra `viviendas: null` como «Sin dato» para no inventar el valor.
- [x] Validar geometrías: anillos cerrados, sin autointersecciones, SRID 4326.
- [x] Simplificar a ~1,5 m de tolerancia y cuantizar coordenadas a 5 decimales.
- [x] Generar `renabap.geojson` con `metadata` en la raíz (fuente, URL, fecha de datos, fecha de generación, licencia, cantidad de features).
- [x] Agregar el acceso a la capa en `.map-actions` con checkbox y `aria-expanded`, dentro del botón unificado de capas (barrios, circuitos y RENABAP).
- [x] Carga perezosa (`loadRenabap()`) con `try/catch`, un solo `console.error` y toast ante fallo.
- [x] Pane propio por encima de barrios y por debajo de circuitos; popup con nombre, hogares, viviendas y circuitos intersectados.
- [x] Calcular por intersección: hogares RENABAP dentro de cada circuito y porcentaje sobre el total de hogares del circuito (cuando exista denominador censal).
      La intersección areal se precalcula en `tools/build-renabap.py` y los hogares se prorratean por área; el porcentaje sobre el total del circuito se muestra en el popup cuando la capa de radios censales aporta el denominador de hogares.
- [x] Sumar la atribución al control de Leaflet y al diálogo de créditos.

**Hecho cuando:** la capa se prende y apaga sin errores, el popup muestra hogares y viviendas, y cada circuito reporta cuántos barrios populares y hogares contiene.

> Estado 2026-11-01: implementado. El popup muestra hogares y «Sin dato» en viviendas porque la fuente oficial no publica ese campo; los circuitos muestran barrios populares y hogares RENABAP en su popup y como métricas del coropleta.

**Esfuerzo:** 0,5–1 jornada. **Riesgo:** polígonos que cruzan límites de circuitos → usar intersección por área, no centroide.

---

### 2.2 Radios censales 2022

**Valor:** es la única fuente que baja a escala intraurbana con variables de población, hogares y vivienda. Habilita densidad, estructura etaria, NBI, cobertura de salud y educación por radio, y permite construir un denominador poblacional para los circuitos.

| Campo | Detalle |
|---|---|
| Fuente | INDEC — Censo Nacional de Población, Hogares y Viviendas 2022 |
| Base | `https://redatam.indec.gob.ar/redarg/CENSOS/CPV2022/` (base REDATAM, ~500 MB) y resultados definitivos por radio en `datos.gob.ar` (usado: ZIP provincial de 2 MB) |
| Geometrías | cartografía de radios 2022 (INDEC / CONICET), corregida y estandarizada |
| Unidades | provincia → departamento → fracción → radio censal |
| Licencia | CC BY-SA 4.0 (INDEC) |

**Variables mínimas a extraer**

- [x] Población total por sexo y grandes grupos de edad (0–14, 15–64, 65+).
- [x] Cantidad de hogares y de viviendas.
- [x] Cobertura de salud (con y sin obra social / prepaga / plan estatal).
- [x] Nivel educativo alcanzado (secundario completo como umbral).
      Los CSV publicados son marginales y no permiten cruzar edad con máximo nivel de instrucción; se usa el **clima educativo del hogar** (bajo/muy bajo) como indicador equivalente y se documenta en `metadata.fields`.
- [x] Condiciones habitacionales: hacinamiento, calidad de materiales, acceso a agua y cloacas.
- [x] NBI calculada a partir de esos indicadores (no hay tabla publicada de NBI por radio para 2022).
      El Censo 2022 sí publica `NBI_TOT` por radio; se usa directamente en lugar de recalcularla.

**Pasos**

- [x] Descargar los datos definitivos por radio (CSV provincial) y el diccionario de variables.
      Se usó la base de resultados definitivos agregada a nivel de radio publicada en `datos.gob.ar` (no requiere REDATAM): `74-san-luis-2022.zip` + `radios-censales-2022.geojson`.
- [x] Identificar la tabla de radios y los códigos de geografía; documentar la relación código radio ↔ geometría.
      `codigo` = provincia (2) + departamento (3) + fracción (2) + radio (2); 170 radios urbanos/mixtos de Villa Mercedes y Villa Reynolds.
- [x] Exportar los indicadores por radio a CSV (una fila por radio).
- [x] Descargar y filtrar las geometrías de radios de Villa Mercedes / Pedernera.
- [x] Join por código de radio; verificar que no queden filas huérfanas en ninguno de los dos lados.
- [x] Excluir o marcar radios con población muy baja (secreto estadístico) antes de publicar porcentajes.
- [x] Simplificar geometrías y generar `radios.geojson` con `metadata`.
- [x] Capa coropleta con selector de métrica (población, densidad, % 65+, % sin cobertura de salud, % NBI, % sin cloacas, % sin gas de red, % clima educativo bajo).
- [x] Leyenda con min/max y valores nulos explícitos.
- [x] **Agregación a circuitos:** intersección radio↔circuito y tabla resumen por circuito.
      El prorrateo es **por área** porque los marginales publicados no permiten distribuir la población dentro del radio; los radios son pequeños frente a los circuitos y el error se limita a los bordes. Queda documentado en `metadata.notes`.
- [x] Con ese denominador, calcular electores por cada 100 habitantes y participación sobre población en edad de votar.
      La población en edad de votar se estima con los grupos quinquenales: 20+ más 2/5 del grupo 15–19.

**Hecho cuando:** cada circuito muestra población estimada, densidad y al menos dos indicadores de carencia, y el mapa permite comparar radios entre sí.

> Estado 2026-11-01: implementado. `radios.geojson` (170 radios, 132.858 habitantes, 45.537 hogares) se genera con `tools/build-radios.py`. La capa tiene coropleta, popup con 14 indicadores, leyenda propia y ajustes por métrica. Los circuitos incorporan población, densidad poblacional, % 65+, % sin cobertura de salud, % NBI, % sin cloacas, electores por 100 habitantes y participación sobre VAP.
>
> Decisión que habilita: priorizar obras y servicios (cloacas, gas, agua) y asignar recursos de salud/educación en los radios y circuitos con mayor carencia, usando un denominador poblacional común.

**Esfuerzo:** 3–5 jornadas. **Riesgos:** códigos de radio inconsistentes entre base y cartografía; radios partidos por límites de circuito; secreto estadístico en radios chicos.

---

### 2.3 REFES — Establecimientos de salud

**Valor:** completa el mapa de oferta de servicios. Hoy el proyecto muestra escuelas; con salud se puede medir accesibilidad y detectar áreas con población sin cobertura territorial.

| Campo | Detalle |
|---|---|
| Fuente | Ministerio de Salud — Registro Federal de Establecimientos de Salud |
| Recurso | `https://datos.salud.gob.ar/dataset/listado-establecimientos-de-salud-asentados-en-el-registro-federal-refes` · corte georreferenciado `https://sisa.msal.gov.ar/datos/descargas/georef/files/refes_georef.zip` |
| Datos | corte 2026-01-20 |
| Geometría | punto (latitud/longitud) |
| Licencia | Creative Commons Attribution 4.0 (CC BY 4.0) |

**Pasos**

- [x] Descargar el listado completo y quedarse con San Luis / Pedernera / Villa Mercedes.
      Se usó el corte georreferenciado 2026 (`refes_georef.zip`), que sí trae longitud/latitud para 57 de los 86 puntos publicados; el resto se completó con geocodificación marcada.
- [x] Normalizar tipo de establecimiento (hospital, CAPS, centro de salud, laboratorio, etc.) y sector (público/privado).
      9 tipos y 3 sectores normalizados en `tools/build-salud.py`; el sector distingue Público (provincial, municipal, nacional o universitario público), Privado y Otro.
- [x] Detectar puntos sin coordenadas o con coordenadas fuera del ejido; geocodificar contra Georef o descartar con registro.
      57 puntos usan la coordenada oficial REFES; 23 se geocodificaron contra OSM/Nominatim con precisión alta; 5 son aproximados y 1 de baja precisión. Se descartaron Posta Ciudad Jardín (a ~40 km) y Complejo Arcor (predio rural), ambos registrados en `metadata.dropped`.
- [x] Deduplicar por nombre + dirección.
      4 duplicados exactos eliminados y registrados: C.I.O.M, Centro de Salud Dental, Fonoaudiología Integral y CAPS Barrio Belgrano / Manuel Belgrano.
- [x] Generar `salud.geojson` con `metadata`.
      86 establecimientos, 57 KB; `metadata` incluye fuente, URL, fecha, licencia, conteos por tipo/sector/precisión y registros descartados.
- [x] Capa de puntos con clustering, popup con nombre, tipo, sector y dirección.
      Clustering con pane propio (`saludPane`, z 365) y popup con tipo, sector, financiamiento, dirección, circuito, precisión y enlace «Cómo llegar».
- [x] Filtros por tipo, sector y precisión de coordenada.
      La pestaña Salud permite apagar los 9 tipos, ver solo sector público y ver solo puntos con coordenada oficial; el resumen y la leyenda reflejan el filtro.
- [x] Ícono y color diferenciados por tipo; leyenda propia.
      Pines y clústeres coloreados por tipo, leyenda `#salud-legend` apilada con las de circuitos y radios.
- [x] Atribución y manejo de error equivalentes a las capas existentes.
      REFES / Ministerio de Salud (CC BY 4.0) + OSM (ODbL) en el control de Leaflet y en créditos; fallo con un `console.error`, toast y fila deshabilitada.
- [x] Calcular cuántos establecimientos hay por circuito.
      `applySaludToCircuitos()` escribe `salud` y `salud_publicos` en cada circuito; el coropleta expone ambas métricas y el popup del circuito muestra los conteos y habitantes por establecimiento.
- [x] Permitir mezclar capas para leer superposiciones.
      El panel de capas agrega `#layer-blend-mode` (normal, multiplicar, oscurecer, superponer, luz suave, aclarar) y lo aplica a los panes de polígonos; la intensidad de relleno sigue siendo por capa.

**Hecho cuando:** los establecimientos de salud aparecen georreferenciados y filtrables, y se puede calcular cuántos hay por circuito.

> Estado 2026-11-01: implementado. `salud.geojson` (86 establecimientos, 22 públicos, 6 descartados) se genera con `tools/build-salud.py`. La capa tiene clustering, filtros por tipo/sector/precisión, leyenda propia y popup con la marca de precisión. Los circuitos incorporan `salud` y `salud_publicos` y el coropleta expone la métrica. Verificado en navegador: activación/desactivación sin errores, filtros (86 → 22 públicos → 57 oficiales), popup y mezcla `multiply` sobre los cuatro panes de polígonos.
>
> Decisión que habilita: identificar circuitos y radios con menor oferta de salud por habitante y priorizar la localización de CAPS o la ampliación de servicios, usando un conteo comparable por circuito.
>
> Límite: los puntos con `geo_precision` distinta de `oficial` o `alta` no sirven para micro-localización; el conteo por circuito los incluye y así se documenta en el popup y en la leyenda.

**Esfuerzo:** 0,5 jornada. **Riesgo:** establecimientos dados de baja, direcciones mal geocodificadas o coordenadas oficiales no disponibles en el archivo abierto.

---

## 3. Fase 2 — Siguientes tres (mayor valor para políticas públicas)

### 3.1 Servicios básicos y déficit habitacional por radio

**Por qué:** agua, cloacas, gas y calidad de vivienda son las carencias que más directamente orientan obra pública municipal. Se derivan de la misma base REDATAM de la Fase 1, así que el costo marginal es bajo.

- [ ] Extraer por radio: acceso a red de agua, cloacas, gas de red y electricidad.
- [ ] Calcular hogares con hacinamiento (más de 3 personas por cuarto) y con materiales deficitarios.
- [ ] Construir un índice simple de déficit habitacional y publicarlo como métrica del coropleta.
- [ ] Cruzar con RENABAP: porcentaje de hogares en barrios populares con servicio de red.
- [ ] Exportar una tabla por circuito para priorización de obras.

**Hecho cuando:** el mapa responde “qué circuitos concentran hogares sin cloacas y sin gas” con una cifra.

**Esfuerzo:** 1–2 jornadas (sobre la base ya montada). **Depende de:** 2.2.

### 3.2 Accesibilidad a salud y educación por circuito

**Por qué:** convierte capas de puntos en una métrica de equidad territorial. Permite argumentar dónde falta un CAPS o una escuela, no solo dónde están.

- [ ] Calcular distancia de cada radio (o centroide de barrio) al establecimiento más cercano de salud y de educación, por nivel.
- [ ] Calcular población cubierta en un radio de 1.000 / 2.000 m (buffer) y población fuera de cobertura.
- [ ] Identificar circuitos con más población por establecimiento.
- [ ] Publicar un indicador de accesibilidad y un ranking de circuitos con déficit.
- [ ] Documentar el método (distancia euclidiana vs. red vial) y sus límites.

**Hecho cuando:** cada circuito tiene un indicador de accesibilidad y una lista de áreas sin cobertura razonable.

**Esfuerzo:** 2–3 jornadas. **Depende de:** 2.2 y 2.3.

### 3.3 Proyecciones y estadísticas vitales por localidad

**Por qué:** el censo es una foto cada diez años; las proyecciones y los nacimientos/defunciones permiten ver tendencia y planificar a 5–10 años (escuelas, centros de salud, vivienda).

- [ ] Incorporar proyecciones de población 2022–2040 por departamento y, si existe, por localidad.
- [ ] Incorporar nacimientos y defunciones por departamento (DEIS), últimos tres años disponibles.
- [ ] Calcular crecimiento anual, saldo vegetativo y relación niños por mujer en edad fértil.
- [ ] Mostrar la serie en un panel lateral, no como capa del mapa.
- [ ] Documentar que la desagregación departamental no equivale a la ciudad.

**Hecho cuando:** el panel muestra la tendencia demográfica y su impacto esperado en demanda de servicios.

**Esfuerzo:** 1–2 jornadas. **Fuente:** Dirección de Estadística y Censos de San Luis y anuarios de estadísticas vitales.

---

## 4. Backlog (no ahora)

| Capa | Por qué queda para después |
|---|---|
| Comunidades indígenas 2023 (IGN) | Alto valor de equidad, pero pocos registros en el ejido; revisar antes de invertir esfuerzo. |
| CUD / discapacidad | Buena para política social, pero la desagregación pública suele ser provincial. |
| WorldPop / GHSL (grillas 100 m) | Útil como textura de densidad, redundante si ya hay radios censales. |
| Relative Wealth Index (Meta, 2022) | Proxy de riqueza a 2,4 km; interesante, pero sin validación local. |
| Google Open Buildings | Sirve para crecimiento urbano, no para población. |
| Luces nocturnas VIIRS | Indicador económico indirecto; fuera del alcance demográfico. |
| BAHRA (localidades y asentamientos) | Referencia territorial útil; se solapa con RENABAP y OSM. |
| Catastro provincial | Requiere convenio y no es dato demográfico. |

---

## 5. Tareas transversales

- [ ] **Helper de intersección areal** reutilizable: intersección de polígonos con prorrateo por área o por población, usado por RENABAP, radios y accesibilidad.
- [ ] **Registro de atribuciones**: una sola estructura que alimente el control de Leaflet y el diálogo de créditos, para no duplicar texto por capa.
- [ ] **Convención de metadatos** en la raíz de cada GeoJSON: `title`, `source`, `source_url`, `data_date`, `generated`, `license`, `feature_count`.
- [ ] **Presupuesto de performance**: ninguna capa nueva por encima de ~1,5 MB sin simplificar; medir tiempo de carga en móvil.
- [x] **Actualizar `DEEPSEEK.md`** al cerrar cada capa: fuente, pane, z-index, comportamiento ante fallo y atribución.
- [ ] **Revisión de accesibilidad**: teclado, `aria-pressed`, `aria-live` para el toast y foco al cerrar popups.

## 6. Orden sugerido

| # | Capa | Depende de | Esfuerzo | Valor |
|---|---|---|---|---|
| 1 | RENABAP | — | 0,5–1 j | Alto, local |
| 2 | Radios censales 2022 | — | 3–5 j | Muy alto |
| 3 | REFES salud | — | 0,5 j | Medio-alto |
| 4 | Servicios y déficit habitacional | Radios | 1–2 j | Muy alto |
| 5 | Accesibilidad salud/educación | Radios + REFES | 2–3 j | Alto |
| 6 | Proyecciones y vitales | — | 1–2 j | Medio-alto |

La numeración sigue el orden de valor. **Ejecución recomendada: 1 → 3 → 2 → 4 → 5 → 6.** RENABAP y REFES dan resultado visible en un día y financian la espera de la base censal; los radios son los que habilitan todo lo demás.

## 7. Definición de terminado (global)

Una capa se considera cerrada cuando:

- se activa y desactiva sin errores de consola;
- tiene atribución visible y en el diálogo de créditos;
- falla de forma graceful (botón oculto, un `console.error`, toast explicativo);
- funciona en móvil y con teclado;
- sus datos son generados, no editados a mano;
- `DEEPSEEK.md` quedó actualizado;
- existe una frase clara de “qué decisión habilita esta capa”.
