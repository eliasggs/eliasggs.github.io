# DEEPSEEK.md

## 1. Executive Summary

Static, build-free single-page web app: interactive map of schools, institutes and universities in Villa Mercedes / Villa Reynolds (San Luis, Argentina). UI language: Spanish (es-AR).

| Aspect | Detail |
|---|---|
| Tech stack | Vanilla JS (ES2017, async/await, no modules/bundler), HTML5, CSS3 |
| Map | Leaflet 1.9.4 + Leaflet.markercluster 1.5.3 (unpkg CDN) |
| Tiles | OpenStreetMap |
| Fonts | Google Fonts: DM Sans (body), Fraunces (display) |
| Data | `data.json` (89 institutions, official registry snapshot) + `barrios.geojson` (112 OSM barrio polygons) + `ruta-a.geojson` / `ruta-e.geojson` / `ruta-este.geojson` (bus lines A, E and Este) + `circuitos.geojson` (22 electoral circuits + 2025 roll/participation) + `renabap.geojson` (7 barrios populares RENABAP 2023) + `radios.geojson` (170 radios censales 2022 con indicadores sociodemográficos) |
| Build / deps | None — no `package.json`, no node_modules, no git repo |
| Tests | None (manual browser verification only) |

## 2. Key Directory Structure

| Path | Responsibility |
|---|---|
| `index.html` | Full DOM shell: sidebar, search, filters, credits dialog, map canvas, unified layers panel, per-layer settings dialog, CDN `<script>` tags |
| `app.js` | All behavior in one IIFE (`"use strict"`): data load/normalize, filters, rendering, Leaflet map, layer toggles/settings, events |
| `styles.css` | Design tokens (`:root` custom props) + all layout/responsive rules |
| `data.json` | Source of truth for institutions (`meta` + `schools[]`) |
| `barrios.geojson` | Barrio/complejo polygons + label points for the map overlay (generated from OpenStreetMap, ODbL) |
| `ruta-a.geojson` | Línea A de colectivos (ida y vuelta): wrapper `{ _aviso?, rutas: [{ id, linea, nombre, tipo, empresa, horario, frecuencia, color, recorrido: [[lng, lat], …] }] }` (sample data, unverified) |
| `ruta-e.geojson` | Línea E de colectivos: GeoJSON `FeatureCollection` with two `LineString` features (ida y vuelta), each with its own `properties` (`id`, `linea: "E"`, `nombre`, `color`, …); la ida es verde y la vuelta usa otro tono de verde |
| `ruta-este.geojson` | Línea Este de colectivos: GeoJSON `FeatureCollection` with two `LineString` features (ida Hospital de Referencia Eva Perón → Terminal de Ómnibus y vuelta), each with its own `properties` (`id`, `linea: "ES"`, `nombre`, `color`, …); la ida es azul y la vuelta un azul más oscuro |
| `circuitos.geojson` | 22 electoral circuit polygons for Villa Mercedes (sección 3. Pedernera) + 2025 national legislative results by circuit; generated from official sources |
| `renabap.geojson` | 7 barrios populares of Villa Mercedes (RENABAP, data 2023-12-06) with `hogares`, `viviendas: null`, simplified geometry and precomputed areal intersections with circuits |
| `radios.geojson` | 170 urban/mixed census radios of Villa Mercedes and Villa Reynolds (INDEC, Censo 2022) with population, households, age, health coverage, NBI, services, education climate, area/density, circuit intersections and a per-circuit summary in `metadata.circuitos` |
| `tools/index.html` | "Editor de escuelas": single-file editor specialized in `data.json` (selects/checkboxes, validation, relocate by map click, download) |
| `tools/build-renabap.py` | Regenerates `renabap.geojson` from the official RENABAP GeoJSON + `circuitos.geojson` (Shapely; simplify, quantize, intersect) |
| `tools/build-radios.py` | Regenerates `radios.geojson` from INDEC Censo 2022 province CSVs + national radios GeoJSON (downloads, aggregates, simplifies, intersects circuits) |
| `app.js` → `EMBEDDED_DATA` block | Byte-for-byte JSON mirror of `data.json`, used only for `file://` fallback |

`app.js` internal order (keep it): header comment → `EMBEDDED_DATA` → constants (`TYPE_META`) → `state` → DOM cache → Helpers → Initialization → Filters and rendering → Map → Interactions → bootstrap.

**Data taxonomy (single source of truth)**
- `category` (pin/Tipo filter): `especial`, `autogestionada`, `generativa`, `tecnica`, `adultos`, `docente`, `universidad`, `formacion`, `artistica` + base school levels `inicial`, `primaria`, `secundaria` (pins/legend only, not in the Tipo dropdown).
- `orientations[]` (Orientación filter): `Ciencias naturales`, `Ciencias sociales y humanidades`, `Economía y administración`, `Informática y programación`, `Turismo`, `Educación técnica`, `Agro y ambiente`, `Arte, diseño y comunicación`, `Educación física y deportes`. Catalog mirrored in `meta.orientations` and the `#orientation-filter` options; each highschool's values are derived from its `degrees`.
- `degrees[]` ("Título egresado"): official titles from `Establecimientos EDUCATIVOS 2026.xlsx` column O, matched by CUE and split on `" -- "`. Only secondary-level schools have values; rendered in the map popup only when `levels` contains `Secundaria`.
- No zone/locality filtering. `locality` is data-only: shown just for non-Villa Mercedes records and used by search.
- `cue` is data-only; never render it in the UI.

**Barrios layer (map overlay)**
- Source: OpenStreetMap relations `boundary=administrative`, `admin_level` 9/10/11 inside the Villa Mercedes / Villa Reynolds area (Overpass API), ODbL.
- `barrios.geojson` is generated data — never edit coordinates by hand. Properties per feature: `name`, `level` (9 barrio, 10 barrio/complejo, 11 complejo), `osm` (`relation/<id>`), `label` (`[lat, lng]` centroid), optional `alt` / `local`.
- Regenerate with `rel["boundary"="administrative"]["admin_level"~"^(9|10|11)$"](-33.80,-65.60,-33.55,-65.20); out geom;`, stitching each relation's outer ways into rings, simplifying (~1.3 m) and keeping one `Polygon` per closed ring (`MultiPolygon` when a relation has several).
- Rendering: polygons in pane `barrioPane` (z 350), labels in `barrioLabelPane` (z 450) so pins stay on top. Labels are progressive: level 9 from z13, level 10 from z14.5, level 11 from z15.5 (driven by `data-barrio-zoom` on `#map`).
- The layer is toggled by `#layer-barrios` inside the unified layers panel (`#layers-panel`, opened by `#layers-toggle`); labels and fill opacity are configured from the Barrios tab of `#layer-settings-dialog`. If `barrios.geojson` fails to load (e.g. `file://`) the row is disabled and one `console.error` is logged.
- Clicking a polygon opens a popup with its name, aliases and the count of institutions inside (point-in-polygon against `state.schools`).
- Attribution is required: the Leaflet attribution control stays visible, and the credits dialog (opened from the sidebar `?` button) also credits OpenStreetMap; keep both.

**Panel de capas y ajustes por capa**
- `.map-actions` no longer carries one button per overlay. `#layers-toggle` (stack icon, `aria-expanded`, badge with the active count) opens `#layers-panel`, which lists `#layer-barrios`, `#layer-circuitos`, `#layer-radios` and `#layer-renabap` as checkboxes. Each row has its own gear (`#layer-settings-barrios|circuitos|radios|renabap`) that opens `#layer-settings-dialog`.
- The dialog is shared: a `role="tablist"` (`[data-layer-tab]`) switches between four `[data-layer-panel]` panels. `state.settingsLayer` keeps the active tab; `syncLayerSettings()` mirrors all state into the controls and disables RENABAP/radios-dependent circuit metrics until the corresponding layer is loaded.
- Layer state: `barrios` (on by default), `barrioLabels`, `barrioFillOpacity`; `circuitos` + its existing metric/label/opacity fields; `renabap`, `renabapLabels`, `renabapLabelValues`, `renabapFillOpacity`; `radios`, `radioMetric`, `radioLabels`, `radioLabelValues`, `radioFillOpacity`.
- Failure handling: `markLayerUnavailable(key, message)` disables the checkbox and gear, shows an explanatory meta line, hides the related legend and logs one `console.error` + toast. The layers button never hides.
- Panel behavior: closes on outside click, map click, popup open, `Escape`, or when a settings gear is pressed; focus returns to `#layers-toggle` when closed from the keyboard.

**Circuitos electorales (mapa)**
- `circuitos.geojson`: 22 polygons for Villa Mercedes (circuitos 3001A, 3001B and 3002–3021), generated from the official ArcGIS layer `Circuitos_electorales` (ULP Geo / Gobierno de San Luis). Electoral roll/participation data comes from the national legislative election of 26 October 2025 (Cámara Nacional Electoral, compiled by Data CP), joined by circuit ID.
- Feature properties: `id`, `circuito`, `label`, `seccion`, `localidad`, `electores`, `votantes`, `participacion`, `votos_positivos`, `votos_no_positivos`, `area_km2`, `densidad_electoral`; `loadCircuitos()` adds `instituciones` by point-in-polygon against `state.schools`, and `applyRenabapToCircuitos()` adds `renabap_barrios` / `renabap_hogares` from the precomputed intersections in `renabap.geojson`. Raw 2025 result fields may remain in the file for provenance but are not rendered. Root `metadata` stores sources and `citywide` totals.
- Rendering: lazily loaded by `#layer-circuitos` in the layers panel; polygons in pane `circuitoPane` (z 355, above barrios/RENABAP and below rutas/school pins), optional labels in `circuitoLabelPane` (z 356). `#circuit-legend` (top-left) shows the active metric, its min/max, a gradient and a summary (circuits, electors, participation or RENABAP totals).
- Settings: the Circuitos tab of `#layer-settings-dialog`. Metrics: `electores` (default), `participacion`, `votantes`, `densidad`, `superficie`, `escuelas`, `renabap_hogares` and `renabap_barrios` (enabled after RENABAP loads), plus the population metrics `poblacion`, `densidad_poblacional`, `pct_65_mas`, `pct_sin_cobertura_salud`, `pct_nbi`, `pct_sin_cloacas`, `electores_por_100` and `participacion_vap` (enabled after radios load; see `CIRCUITO_METRICS_RADIOS`). `circuitoColor()` interpolates each metric's sequential scale. Also controls labels (`circuitoLabels`), values on labels (`circuitoLabelValues`) and fill opacity (`circuitoFillOpacity`, 20–80%); `applyCircuitoVisuals()` repaints and `buildCircuitoLabels()` rebuilds markers. Labels only appear at zoom ≥ `CIRCUITO_LABEL_ZOOM` (14).
- Interaction: tooltip shows circuit + current metric; click opens a neutral popup with electors, voters, participation, area, electoral density, school count and, when RENABAP is loaded, barrios populares + hogares. When radios are loaded it also shows population, population density, % 65+, % without health coverage, % NBI, % without sewers, electors per 100 inhabitants and participation over VAP. The legend hides with `.is-obscured` while any Leaflet popup is open so it never covers it. Circuit attribution is added/removed with the layer.
- Citywide reference: 105,497 electors and 65.7% participation. The panel computes this from the features rather than hard-coding it.
- Failure behavior matches barrios/rutas: if `circuitos.geojson` cannot be read, the circuit row is disabled, its legend hides, one `console.error` is logged and a toast explains it. Never edit polygons/roll data by hand; regenerate from the official sources and keep attribution.

**Barrios populares RENABAP (mapa)**
- `renabap.geojson`: 7 polygons in Villa Mercedes, filtered from the official RENABAP GeoJSON (`renabap-2023-12-06.geojson`, SISU, data 2023-12-06, CC BY 4.0). Root `metadata` carries `title`, `source`, `source_url`, `data_url`, `data_date`, `generated`, `license`, `feature_count`, field notes and totals.
- Properties: `id` (`id_renabap`), `nombre`, `hogares` (from `familias_aproximadas`), `viviendas` (always `null`: the official GeoJSON does not publish it; the popup shows «Sin dato»), `localidad`, `departamento`, `provincia`, `area_ha`, `circuitos[]` (`id`, `label`, `ratio`, `hogares` prorated by area) and `label` (`[lat, lng]` representative point).
- Generated data — never edit by hand. Regenerate with `python tools/build-renabap.py` (downloads the official GeoJSON, simplifies ~1.5 m, quantizes to 5 decimals, validates with Shapely and intersects with `circuitos.geojson`).
- Rendering: lazily loaded by `#layer-renabap`; polygons in pane `renabapPane` (z 352, above barrios, below circuitos), optional labels in `renabapLabelPane` (z 357). Default style is a dashed orange outline with configurable fill (10–70%). Labels appear at zoom ≥ `RENABAP_LABEL_ZOOM` (14) and can include hogares.
- Popup: name, hogares, viviendas («Sin dato»), superficie, and the circuits it intersects with the percentage of its area and prorated hogares. Attribution is added to the Leaflet control while the layer is active and RENABAP is credited in the credits dialog.
- Circuit integration: `applyRenabapToCircuitos()` aggregates the precomputed intersections into `renabap_barrios` / `renabap_hogares`; the circuit popup shows both and the choropleth exposes them as metrics. When the radios layer provides `hogares`, the popup also computes the RENABAP share of the circuit's households.
- Failure: if `renabap.geojson` cannot be read, the row is disabled, one `console.error` is logged and a toast explains it.

**Radios censales 2022 (mapa)**
- `radios.geojson`: 170 radios urbanos/mixtos de Villa Mercedes y Villa Reynolds, generados con `tools/build-radios.py` a partir de los resultados definitivos del Censo 2022 por radio (INDEC, CC BY-SA 4.0) y la cartografía nacional de radios. Se excluyen los radios rurales del departamento General Pedernera.
- Propiedades: `codigo`, `slug`, `localidad`, `fraccion`, `radio`, `tipo`, `poblacion`, `mujeres`, `varones`, `p0_14`, `p15_64`, `p65_mas`, `p18_mas`, `hogares`, `viviendas`, `area_km2`, `densidad`, conteos y porcentajes de `sin_cobertura_salud`, `nbi_hogares`, `hacinamiento_hogares`, `sin_cloacas`, `sin_agua_red`, `sin_gas_red`, `materiales_deficitarios`, `clima_bajo`, `baja_poblacion`, `circuitos[]` y `label`.
- Metodología: los indicadores se suman de las categorías publicadas por el INDEC, sin imputación. Como los CSV son marginales, el nivel educativo se informa como clima educativo del hogar (no se puede cruzar edad con máximo nivel de instrucción). `p18_mas` es una estimación (20+ más 2/5 del grupo 15–19) usada solo para la participación sobre VAP. La población por circuito se prorratea por área de radio; `metadata.notes` lo documenta.
- Rendering: lazily loaded by `#layer-radios`; polygons in pane `radioPane` (z 351, above barrios, below RENABAP/circuitos), optional labels in `radioLabelPane` (z 354) from zoom 14.5. Default fill opacity 55% (range 20–85%). The fill is a sequential choropleth of the active `radioMetric` (`RADIO_METRICS`); `radioRanges` is computed from the features.
- Popup: radio code, locality, 14 indicators (population, households, dwellings, area, density, age groups, health coverage, NBI, sewer, gas, water, education climate) and the circuits it intersects. Low-population radios are flagged in the popup and drawn with a dashed outline.
- Legend: `#radios-legend` lives inside `#map-legends` together with `#circuit-legend`, so both stack and never overlap. `updateLegends()` shows/hides the wrapper and each legend; a popup obscures the whole wrapper.
- Circuit integration: `applyRadiosToCircuitos()` reads `metadata.circuitos` and writes `poblacion`, `hogares`, `densidad_poblacional`, `pct_65_mas`, `pct_sin_cobertura_salud`, `pct_nbi`, `pct_sin_cloacas`, `electores_por_100` and `participacion_vap` into the circuit features. Those metrics are enabled in the Circuitos tab only after the radios layer loads. `electores_por_100` uses the 2025 roll; `participacion_vap` uses voters over estimated 18+ population.
- Failure: if `radios.geojson` cannot be read, the row is disabled, its legend hides, one `console.error` is logged and a toast explains it.
- Attribution: added to the Leaflet control while the layer is active and credited in the credits dialog (INDEC, CC BY-SA 4.0).

**Recorridos de colectivos (mapa)**
- Data: `RUTAS_SOURCES` lists `ruta-a.geojson` (línea A, wrapper `{ rutas: [...] }` with `recorrido`), `ruta-e.geojson` (línea E, GeoJSON `FeatureCollection` with one `LineString` per direction: ida `#2E7D32` y vuelta `#66BB6A`) and `ruta-este.geojson` (línea Este, `FeatureCollection` con ida `#1E88E5` y vuelta `#0D47A1`). `normalizeRutas()` accepts both shapes (`recorrido` or `geometry.coordinates`), converts `[lng, lat]` to Leaflet `[lat, lng]`, validates coordinates, coerces fields and resolves each route's `linea` from `linea`, `id` or `nombre`. Invalid colors fall back to `RUTA_LINE_COLORS` (`A` orange, `E` green, `ES` blue) and then to `#F7683A`. Routes with fewer than 2 valid points are skipped.
- `#toggle-rutas` in `.map-actions` (between `Mi ubicación` and the layers button) opens `#rutas-panel`, a lightweight panel next to the actions that reuses the layers-panel chrome and switch styling. Its master switch (`#ruta-visible`) lazily loads all three files on first activation and toggles the whole layer; the per-line switches (`[data-ruta-linea]`, generated by `buildRutaLineRows()` from `RUTAS_SOURCES`) show or hide each line and are mirrored in `state.rutaLineas`. Rows/checkboxes come from `syncRutasControls()`; the panel closes on outside click, map click, popup, `Escape` or its close button (`#rutas-close`), returns focus to `#toggle-rutas`, and is mutually exclusive with `#layers-panel`. Polylines go in pane `rutaPane` (z 360, above barrios, below pins): a white casing (weight 9) plus the route-colored line (weight 5). Hover thickens the line; a sticky tooltip shows the route name; clicking opens a popup with `nombre`, `tipo`, `empresa`, `horario` and `frecuencia`.
- Line visibility: `loadRutas()` groups each route's casing, line and bus marker in a per-line `L.layerGroup` (`rutaGroups`); `applyRutaLineVisibility()` adds/removes those groups from `rutasLayer`, and the RAF loop skips markers of hidden lines. Unchecking the last line turns the master layer off; checking the master back on with every line off re-marks all three.
- Direction animation: one marker per route (`rutaBusPane`, z 470) advances along its coordinates in array order, looping every 18–45 s depending on length. Position is interpolated by cumulative haversine distance (`pointAtDistance`). The marker is a 30 px circular badge with the line letter (`A`, `E` or `ES`) in the line color plus a pulsing halo; it stays upright (no rotation) while moving. The RAF loop starts/stops with the layer and caps frame delta at 120 ms. With `prefers-reduced-motion: reduce` the pulse is disabled and the marker is drawn at the route start without animating.
- Partial failure: if one source fails, the other lines still load, the affected line is named in the toast and one `console.error` is logged. If all fail, the button hides itself and the toast explains the failure (same graceful degradation as barrios).
- Adding a line requires a new data file plus one entry in `RUTAS_SOURCES`; the letter icon is derived from `linea`/`id`/`nombre` (two characters max, e.g. `ES` for Línea Este).
- Attribution: route data is not OSM-derived; keep the `_aviso` truthful and replace sample coordinates before publishing. `ruta-este.geojson` keeps `_aviso` pointing to `FuentesRutas/este.pdf`.

**Mi ubicación (geolocalización)**
- `#locate-me` in `.map-actions` calls `geolocation.getCurrentPosition` (`enableHighAccuracy`, 12 s timeout), flies to the position (minimum zoom 16), drops a temporary pin (CSS `drop-pin-fall`), then reveals the pulsing dot and accuracy circle in pane `userLocationPane` (z 640) and fades the pin out. No popup: the result is announced through `#map-toast`.
- It is a toggle (`aria-pressed`): a second click removes marker and circle and cancels any pending timers. Errors (permission, GPS, timeout, insecure context) surface in `#map-toast`, a `role="status"` / `aria-live="polite"` region; the button exposes `aria-busy` while locating.
- Geolocation requires a secure context (`https://` or `localhost`); opened via `file://` the browser may deny it.

**Editor de escuelas (`tools/index.html`)**
- One self-contained file (inline CSS/JS, Leaflet CDN); separate from the app, no build. Specialized in `data.json`: requires a root object with a `schools[]` array; schools without coordinates stay in the JSON but get no marker.
- Curated form to avoid typos: `category`, `management`, `locality` and `sourceLabel` are `<select>`; `levels` and `orientations` are checkbox groups fed by the loaded file's values plus the app catalog; `degrees` is a one-title-per-line textarea (official text is never rewritten).
- `typeLabel` is derived from `category` + `levels` whenever either changes (base categories: Jardín / Escuela inicial, primaria, secundaria…; the other categories use `CATEGORY_LABELS`). `managementOriginal` is derived from `management`. The phone field edits `phoneDisplay` and syncs `phoneHref`; `phone` only fills when empty and clears when the phone is removed.
- `id`, `cue`, `lat`, `lng` and unknown fields are never edited in the form. Location changes via the pick button + map click and round to 6 decimals.
- Download validates every school first (name, at least one level, email, URL, phone), selects the first invalid one and aborts; otherwise it re-serializes the original root object pretty-printed as `<name>-editado.json`. After replacing `data.json`, regenerate `EMBEDDED_DATA`.

## 3. Code Conventions & Style Guidelines

- **Indentation**: 2 spaces; semicolons always; double quotes for JS strings; single quotes inside HTML.
- **Naming**: `camelCase` functions/vars, `UPPER_SNAKE` constants (`TYPE_META`, `OFFICIAL_RECORD`), `PascalCase` none (no classes).
- **CSS**: BEM-ish `block__element--modifier` (`.sidebar__hero`, `.popup__button--ghost`); class `is-*` for state (`.is-active`, `.is-open`); colors/radii/shadows only via `var(--token)`.
- **DOM**: IDs in `kebab-case` (HTML) mapped to camelCase `el.*` (JS); markup built by string concatenation, always through `escapeHTML()` / `escapeAttr()`.
- **JS style**: function declarations and `function () {}` expressions (no arrow functions, no classes, no ES modules); `Object.assign` for object building; `async/await` only in loaders.
- **Typing**: plain JS, no TypeScript/JSDoc; instead sanitize at the boundary in `normalizeSchools()` (coerce `Number(lat/lng)`, default `category`/`management`/`locality`, force `orientations` to an array).
- **Error handling**: `try/catch` per loader; `throw new Error("Spanish message (" + status + ")")`; log via `console.error`; degrade gracefully — embedded data fallback, `renderLoadError()`, `#map-error` panel.
- **Accessibility (required)**: `aria-label` / `aria-expanded` / `aria-pressed` / `aria-live`, `hidden` attr, `role="group"`, layer panel with checkbox switches and `role="tablist"` settings tabs, skip link, focus management on sidebar open/close, native `<dialog>` credits/settings modals (Escape + focus restore), keyboard `/` (focus search) and `Escape` (close layers panel/popup/sidebar/legend).
- **Encoding**: UTF-8, Spanish accents in all user-facing strings; never ASCII-ify content.

## 4. Frequent Commands

| Task | Command |
|---|---|
| Run (recommended) | `python -m http.server 8000` → `http://localhost:8000` |
| Run (alt) | `npx serve .` / open `index.html` directly (`file://` → embedded data) |
| Open JSON editor | Same server → `http://localhost:8000/tools/` (or open `tools/index.html` directly) |
| Syntax check | `node --check app.js` |
| JSON validity | `node -e "JSON.parse(require('fs').readFileSync('data.json'))"` |
| Rebuild RENABAP layer | `python tools/build-renabap.py` → rewrites `renabap.geojson` |
| Rebuild radios layer | `python tools/build-radios.py` → downloads INDEC sources and rewrites `radios.geojson` |
| Build | N/A (no build step) |
| Test | N/A — verify manually in browser (search, Nivel/Gestión/Tipo/Orientación filters, marker click, layers panel, per-layer settings tabs, mobile sidebar, console clean) |
| Lint | N/A (no linter configured) |

## 5. Agent Rules

**Never modify / never touch**
- `EMBEDDED_DATA` inside `app.js` by hand — it must stay an exact mirror of `data.json`; regenerate the whole block instead of patching it.
- `data.json` structure/records unless the task is explicitly about data; keep `meta.total` equal to `schools.length` and `meta.orientations` synced with the `<select>`.
- `degrees` text: never invent, translate, re-case or de-accent official titles; copy column O verbatim (only trimming spaces and splitting on `" -- "`).
- `cue` is internal: do not surface it in cards, popups or filters.
- `barrios.geojson`: do not rename barrios, change `level`, or edit coordinates by hand — it is generated from OSM and its attribution must stay visible.
- `circuitos.geojson`: generated from the official ULP Geo layer and CNE results; do not hand-edit geometry, vote totals, or source metadata, and keep the circuit attribution and credits entries.
- `renabap.geojson`: generated by `tools/build-renabap.py`; do not hand-edit geometry, `hogares`, `viviendas`, `circuitos` or metadata. `viviendas` stays `null` unless the official source publishes it — never estimate it.
- `radios.geojson`: generated by `tools/build-radios.py`; do not hand-edit geometry, indicators, circuit intersections, coverage or metadata. Never derive percentages that the INDEC marginals do not support (e.g. education by age); if a new indicator needs a cross-tabulation, document the limitation instead of estimating it.
- CDN URLs, library versions, and `<script>`/`<link>` order in `index.html`.
- The IIFE wrapper, `"use strict"`, and the top-of-file header comment.
- Do not add frameworks, bundlers, package managers, or new files unless explicitly requested.

**Editing rules**
- Match existing ES5-style function syntax and 2-space/quoted style; do not reformat untouched code.
- Preserve BEM class names, ID names, CSS tokens, and Spanish user-facing copy.
- Reuse helpers (`escapeHTML`, `normalizeText`, `debounce`, `setPressed`) instead of duplicating logic.
- Any new UI element must ship with its a11y attributes and be reachable via keyboard.

**Response rules**
- Report only verified changes; state explicitly when something was not tested in a browser.
- Prefer minimal diffs; explain any data/embedded-sync change.

**Git / commit**
- This directory is **not** a git repository: do not run `git init`, `git add`, or commit unless asked.
- If versioned later: Conventional Commits (`feat:`, `fix:`, `data:`), one logical change per commit, no generated artifacts.
