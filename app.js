/* ==========================================================================
   Mapa educativo · Villa Mercedes
   App estática: Leaflet + datos oficiales en data.json.
   ========================================================================== */

(function () {
  "use strict";

  /* Datos embebidos generados a partir de data.json. Se usan únicamente cuando
     el navegador abre el sitio con file:// y no permite leer el JSON. */
  /* EMBEDDED_DATA:START */
  const EMBEDDED_DATA = {"meta":{"city":"Villa Mercedes y Villa Reynolds","province":"San Luis","country":"Argentina","center":[-33.6797,-65.4616],"source":"Mapa Educativo Nacional y sitios oficiales de las universidades","sourceUrl":"https://mapa.educacion.gob.ar/mapa-interactivo","registry":"Escuelas: Padrón enero 2025 · Universidades: sitios oficiales (2026)","generated":"2026-10-24","total":89,"zones":["Villa Mercedes","Villa Reynolds"],"orientations":["Ciencias naturales","Ciencias sociales y humanidades","Economía y administración","Informática y programación","Turismo","Educación técnica","Agro y ambiente","Arte, diseño y comunicación","Educación física y deportes"]},"schools":[{"id":"740054101","cue":"740054101","name":"Centro de Formación Profesional N° 2 Director Mario Néstor Gómez","officialName":"CENTRO DE FORMACIÓN PROFESIONAL N° 2 DIRECTOR MARIO NÉSTOR GÓMEZ","address":"Avenida 25 de Mayo 1350 Colón","phone":"433641","phoneDisplay":"+54 2657 433-641","phoneHref":"tel:+542657433641","email":"colegio_n15@yahoo.com.ar","typeLabel":"Formación profesional y oficios","category":"formacion","levels":["Formación profesional"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667408,"lng":-65.466847,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740054101","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740054301","cue":"740054301","name":"Centro de Formación Profesional N° 4 Nicolasa Berrondo de Quiroga","officialName":"CENTRO DE FORMACIÓN PROFESIONAL N°4 NICOLASA BERRONDO DE QUIROGA","address":"Dr. Mestre 1325","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Formación profesional y oficios","category":"formacion","levels":["Formación profesional"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667381,"lng":-65.468728,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740054301","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740034700","cue":"740034700","name":"Centro Educativo de Nivel Secundario N° 1","officialName":"CENTRO EDUCATIVO DE NIVEL SECUNDARIO N° 1","address":"Ayacucho 76 Centro","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"cens1@sanluis.gov.ar","typeLabel":"Educación de Jóvenes y Adultos","category":"adultos","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689836,"lng":-65.468986,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Economía y administración"],"degrees":["BACHILLER CIENCIAS NATURALES Y BACHILLER ECONOMIA Y ADMINISTRACION"]},{"id":"740058100","cue":"740058100","name":"Centro Educativo N° 10 Ramiro Podetti","officialName":"CENTRO EDUCATIVO N°10 RAMIRO PODETTI","address":"Amaro Galán, Manzana 6, ATE II","phone":"4433259","phoneDisplay":"+54 2657 443-3259","phoneHref":"tel:+5426574433259","email":"centroeducativo10@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.698686,"lng":-65.440339,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740058100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Educación técnica"],"degrees":["TECNICA ORIENTACION INDUSTRIAS DE PROCESOS","TECNICA ORIENTACION QUIMICA"]},{"id":"740059500","cue":"740059500","name":"Centro Educativo N° 20 Juan Wenceslao Gez","officialName":"CENTRO EDUCATIVO N°20 JUAN WENCESLAO GEZ","address":"Zabala Ortiz 975 Independencia","phone":"433203","phoneDisplay":"+54 2657 433-203","phoneHref":"tel:+542657433203","email":"centroeducativo20@sanluis.gov.ar","typeLabel":"Escuela primaria y secundaria","category":"secundaria","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667475,"lng":-65.438642,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740059500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración","Educación técnica"],"degrees":["BACHILLER ECONOMÍA Y ADMINISTRACIÓN","BACHILLER PROFESIONAL SECUNDARIO ENERGIA ELECTRICA","TECNICA ORIENTACION ELECTRONICA"]},{"id":"740059000","cue":"740059000","name":"Centro Educativo N° 9 Doctor Juan Llerena","officialName":"CENTRO EDUCATIVO N° 9 DOCTOR JUAN LLERENA","address":"General Paz 555 Centro","phone":"432746","phoneDisplay":"+54 2657 432-746","phoneHref":"tel:+542657432746","email":"cens9@sanluis.gov.ar","typeLabel":"Escuela primaria y secundaria","category":"secundaria","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.683217,"lng":-65.4632,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740059000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Ciencias sociales y humanidades","Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTACIÓN CIENCIAS NATURALES","BACHILLER ORIENTACION CIENCIAS SOCIALES","BACHILLER ORIENTACION COMUNICACION"]},{"id":"740034300","cue":"740034300","name":"Colegio Instituto San Buenaventura","officialName":"COLEGIO INSTITUTO SAN BUENAVENTURA","address":"9 de Julio 1749 Rafael Origone","phone":"422755","phoneDisplay":"+54 2657 422-755","phoneHref":"tel:+542657422755","email":"secretaria_secundaria@hotmail.com","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.661967,"lng":-65.454714,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración","Informática y programación"],"degrees":["BACHILLER ORIENTACION ECONOMIA Y ADMINISTRACION","BACHILLER ORIENTACION ROBOTICA Y PROGRAMACION"]},{"id":"740077400","cue":"740077400","name":"Colegio Isabel la Católica","officialName":"COLEGIO ISABEL LA CATOLICA","address":"9 de Julio 1719","phone":"154755872","phoneDisplay":"+54 9 2657 475-5872","phoneHref":"tel:+54926574755872","email":null,"typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.662666,"lng":-65.454689,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740077400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740019500","cue":"740019500","name":"Colegio N° 11 Benito Juárez","officialName":"COLEGIO N°11 BENITO JUAREZ","address":"Ayacucho 76 Centro","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"colegio11@sanluis.gov.ar","typeLabel":"Escuela secundaria","category":"secundaria","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689725,"lng":-65.469119,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740019500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración"],"degrees":["BACHILLER ORIENTACION ECONOMIA Y ADMINISTRACION"]},{"id":"740025100","cue":"740025100","name":"Colegio N° 2 Juan Esteban Pedernera","officialName":"COLEGIO N° 2 JUAN ESTEBAN PEDERNERA","address":"Avenida Mitre 873","phone":"420194","phoneDisplay":"+54 2657 420-194","phoneHref":"tel:+542657420194","email":"colegio2@sanluis.gov.ar","typeLabel":"Escuela secundaria","category":"secundaria","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.677406,"lng":-65.462553,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740025100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Ciencias sociales y humanidades","Economía y administración"],"degrees":["BACHILLER ECONOMIA Y ADMINISTRACION","BACHILLER ORIENTACIÓN CIENCIAS NATURALES","BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740034800","cue":"740034800","name":"Colegio Sagrado Corazón","officialName":"COLEGIO SAGRADO CORAZON","address":"Avenida Mitre 1222 Estación","phone":"421183","phoneDisplay":"+54 2657 421-183","phoneHref":"tel:+542657421183","email":"adm.sc@mcabrini.org.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.670967,"lng":-65.460831,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración"],"degrees":["BACHILLER ORIENTACION ECONOMIA Y ADMINISTRACION"]},{"id":"740034500","cue":"740034500","name":"Escuela Asistencial N° 36 Gobernador Carlos Alric","officialName":"ESC. ASISTENCIAL N° 36 GOBERNADOR CARLOS ALRIC","address":"Venezuela 775 San José","phone":"427234","phoneDisplay":"+54 2657 427-234","phoneHref":"tel:+542657427234","email":"escuela36@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.697075,"lng":-65.452033,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales"],"degrees":["BACHILLER ORIENTACIÓN CIENCIAS NATURALES"]},{"id":"740038500","cue":"740038500","name":"Escuela de Jornada Completa N° 444 María Eva Duarte de Perón","officialName":"ESCUELA DE JORNADA COMPLETA N° 444 MARIA EVA DUARTE DE PERON","address":"9 de Julio 1100 Alte. Brown","phone":"421640","phoneDisplay":"+54 2657 421-640","phoneHref":"tel:+542657421640","email":"escuelahogar3@sanluis.gov.ar","typeLabel":"Escuela primaria","category":"primaria","levels":["Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.674008,"lng":-65.457803,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740038500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740053400","cue":"740053400","name":"Escuela de Nivel Inicial N° 13 Doctor Ricardo Zavala Ortiz","officialName":"ESCUELA DE NIVEL INICIAL N° 13 DOCTOR RICARDO ZAVALA ORTIZ","address":"9 de Julio y La Rioja, Almirante Brown","phone":"421640","phoneDisplay":"+54 2657 421-640","phoneHref":"tel:+542657421640","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.679231,"lng":-65.437331,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740053400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740074900","cue":"740074900","name":"Escuela de Nivel Inicial N° 18 Benteveo","officialName":"ESCUELA DE NIVEL INICIAL N° 18 BENTEVEO","address":"Nueva Urbanización","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.677269,"lng":-65.433394,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740074900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740076000","cue":"740076000","name":"Escuela de Nivel Inicial N° 21 Jardín Construyendo Sueños","officialName":"ESCUELA DE NIVEL INICIAL N° 21 JARDÍN CONSTRUYENDO SUEÑOS","address":"General Paz 555","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.683403,"lng":-65.46315,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740076000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740076100","cue":"740076100","name":"Escuela de Nivel Inicial N° 22 Un Mundo de Sueños","officialName":"ESCUELA DE NIVEL INICIAL N° 22 UN MUNDO DE SUEÑOS","address":"Zabala Ortiz 970 Independencia","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667808,"lng":-65.438808,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740076100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740070900","cue":"740070900","name":"Escuela de Nivel Inicial N° 8 Maestras Mercedinas","officialName":"ESCUELA DE NIVEL INICIAL N° 8 MAESTRAS MERCEDINAS","address":"Juan Llerena y Montevideo","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.675061,"lng":-65.474447,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740070900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740014100","cue":"740014100","name":"Escuela Especial N° 6 Doctora María Montessori","officialName":"ESC. ESPECIAL N° 6 DOCTORA MARIA MONTESSORI","address":"Maipú 350","phone":"431506","phoneDisplay":"+54 2657 431-506","phoneHref":"tel:+542657431506","email":"escuelaespecial6@sanluis.gov.ar","typeLabel":"Educación Especial","category":"especial","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.676167,"lng":-65.455783,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740014100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740072300","cue":"740072300","name":"Escuela Generativa Alberdi Club","officialName":"ESCUELA GENERATIVA ALBERDI CLUB","address":"Belgrano 972","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.6748,"lng":-65.465367,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740072300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Educación física y deportes"],"degrees":["BACHILLER ORIENTACIÓN EDUCACIÓN FÍSICA"]},{"id":"740072400","cue":"740072400","name":"Escuela Generativa Club Jorge Newbery","officialName":"ESCUELA GENERATIVA CLUB JORGE NEWBERY","address":"Suipacha y Buenos Aires","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.68745,"lng":-65.461033,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740072400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Educación física y deportes"],"degrees":["BACHILLER ORIENTACIÓN EDUCACIÓN FÍSICA"]},{"id":"740075000","cue":"740075000","name":"Escuela Generativa Estación Recrear","officialName":"ESCUELA GENERATIVA ESTACIÓN RECREAR","address":"Mitre 1600","phone":"15631351","phoneDisplay":"+54 9 2657 631-351","phoneHref":"tel:+5492657631351","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.664219,"lng":-65.458517,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740075000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTACION EN ARTE TEATRO","BACHILLER ORIENTACIÓN ARTE DANZA","BACHILLER ORIENTADO ARTE MUSICA"]},{"id":"740072500","cue":"740072500","name":"Escuela Generativa GEA","officialName":"ESCUELA GENERATIVA GEA","address":"Maipú s/n, 1000 Viviendas Este","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.682483,"lng":-65.426089,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740072500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACIÓN CIENCIAS NATURALES","BACHILLER CIENCIAS SOCIALES"]},{"id":"740072800","cue":"740072800","name":"Escuela Generativa GEN Z","officialName":"ESCUELA GENERATIVA  GEN Z","address":"Ruta Costanera Sur 475, Parque La Pedrera","phone":"15582289","phoneDisplay":"+54 9 2657 582-289","phoneHref":"tel:+5492657582289","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.685011,"lng":-65.494719,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740072800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Educación física y deportes"],"degrees":["BACHILLER ORIENTACIÓN EDUCACIÓN FÍSICA"]},{"id":"740077000","cue":"740077000","name":"Escuela Generativa María Eva Duarte de Perón “Construyendo Infancias”","officialName":"Escuela Generativa María Eva Duarte de Perón “Construyendo Infancias”,","address":"Granaderos Puntanos y Teniente Pereyra Eva Perón 2","phone":"15223695","phoneDisplay":"+54 9 2657 223-695","phoneHref":"tel:+5492657223695","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.659278,"lng":-65.429989,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740077000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740073900","cue":"740073900","name":"Escuela Generativa Terra Mater","officialName":"ESCUELA GENERATIVA TERRA MATER","address":"Ruta Costanera Sur 475, Parque La Pedrera","phone":"15582289","phoneDisplay":"+54 9 2657 582-289","phoneHref":"tel:+5492657582289","email":null,"typeLabel":"Escuela Generativa","category":"generativa","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.685931,"lng":-65.494667,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740073900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Agro y ambiente","Educación física y deportes"],"degrees":["BACHILLER ORIENTACION AGRO Y AMBIENTE","BACHILLER EDUCACIÓN FÍSICA"]},{"id":"740025300","cue":"740025300","name":"Escuela N° 106 Profesor Tomás Ferrari","officialName":"ESC.N° 106 PROFESOR TOMAS FERRARI","address":"Paunero 1152, Colón","phone":"434377","phoneDisplay":"+54 2657 434-377","phoneHref":"tel:+542657434377","email":"escuela106@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.669339,"lng":-65.474514,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740025300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTACION ARTES VISUALES"]},{"id":"740046700","cue":"740046700","name":"Escuela N° 11 2 de Abril (Inicial y Primaria)","officialName":"ESC. N° 11  2 DE ABRIL","address":"Colectora Norte Ruta N° 7, km 697, Ciudad Jardín","phone":"426985","phoneDisplay":"+54 2657 426-985","phoneHref":"tel:+542657426985","email":"escuela11@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.640453,"lng":-65.475408,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740046700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740046701","cue":"740046701","name":"Escuela N° 11 2 de Abril (Secundaria)","officialName":"ESC. N° 11  2 DE ABRIL","address":"Ruta N° 7, km 697, Ciudad Jardín","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela secundaria","category":"secundaria","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.640553,"lng":-65.475303,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740046701","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades","Agro y ambiente"],"degrees":["BACHILLER ORIENTACION AGRO Y AMBIENTE","BACHILLER CIENCIAS SOCIALES"]},{"id":"740025400","cue":"740025400","name":"Escuela N° 12 Tomasa G. de Quiroga","officialName":"ESC.N° 12 TOMASA G.DE QUIROGA","address":"Juan Llerena y Montevideo, Las Mirandas","phone":"430906","phoneDisplay":"+54 2657 430-906","phoneHref":"tel:+542657430906","email":"escuela12@sanluis.gov.ar","typeLabel":"Escuela primaria","category":"primaria","levels":["Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.675103,"lng":-65.474489,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740025400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740030300","cue":"740030300","name":"Escuela N° 147 Provincia de Mendoza","officialName":"ESC. N° 147 PROVINCIA DE MENDOZA","address":"Carlos Pellegrini 312, Villa Celestina","phone":"433973","phoneDisplay":"+54 2657 433-973","phoneHref":"tel:+542657433973","email":"escuela147@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.65825,"lng":-65.451175,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740030300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740052100","cue":"740052100","name":"Escuela N° 148 Provincia de Chubut","officialName":"ESC. N°148 PROVINCIA DE CHUBUT","address":"Jorge Newbery, Extremo Este s/n","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"escuela148@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.700189,"lng":-65.428322,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740052100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740038600","cue":"740038600","name":"Escuela N° 150 Provincia de Santa Fe","officialName":"ESC. N° 150 PROVINCIA DE SANTA FE","address":"Avenida Mitre 946, Altos del Oeste","phone":"433229","phoneDisplay":"+54 2657 433-229","phoneHref":"tel:+542657433229","email":"escuela150@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.668992,"lng":-65.478725,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740038600","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740030700","cue":"740030700","name":"Escuela N° 152 Alas Argentinas","officialName":"ESC. N° 152 ALAS ARGENTINAS","address":"Leonismo Argentino 675, Justo Daract","phone":"422498","phoneDisplay":"+54 2657 422-498","phoneHref":"tel:+542657422498","email":"escuela152@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.680742,"lng":-65.458944,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740030700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTACION ARTES VISUALES"]},{"id":"740026200","cue":"740026200","name":"Escuela N° 176 Maestra Nélida Esther Pérez de Ferrer","officialName":"ESC. N° 176 MAESTRA NELIDA ESTHER PEREZ DE FERRER","address":"Doctor Mestre 510, Las Mirandas","phone":"433788","phoneDisplay":"+54 2657 433-788","phoneHref":"tel:+542657433788","email":"escuela176@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.681969,"lng":-65.473278,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740026200","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740030900","cue":"740030900","name":"Escuela N° 187 José Hernández","officialName":"ESC. N° 187 JOSE HERNANDEZ","address":"Braulio Moyano y Lamadrid, El Pimpollo","phone":"434851","phoneDisplay":"+54 2657 434-851","phoneHref":"tel:+542657434851","email":"escuela187@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.664494,"lng":-65.470428,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740030900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740041200","cue":"740041200","name":"Escuela N° 240 Provincia de Corrientes","officialName":"ESC. N° 240 PROVINCIA DE CORRIENTES","address":"Teodoro Fels 87","phone":"423000","phoneDisplay":"+54 2657 423-000","phoneHref":"tel:+542657423000","email":"escuela240@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.665339,"lng":-65.462164,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740041200","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740035900","cue":"740035900","name":"Escuela N° 29 Remedios Escalada de San Martín","officialName":"ESC. N° 29 REMEDIOS ESCALADA DE SAN MARTIN","address":"Córdoba y Pedernera","phone":"432854","phoneDisplay":"+54 2657 432-854","phoneHref":"tel:+542657432854","email":"escuela29@sanluis.gov.ar","typeLabel":"Escuela primaria y secundaria","category":"secundaria","levels":["Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.680297,"lng":-65.464544,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740035900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACIÓN CIENCIAS NATURALES","BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740034400","cue":"740034400","name":"Escuela N° 30 General Pedernera","officialName":"ESC N° 30 GENERAL PEDERNERA","address":"Pedernera 175 Centro","phone":"423799","phoneDisplay":"+54 2657 423-799","phoneHref":"tel:+542657423799","email":"escuela30@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689528,"lng":-65.467361,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740047500","cue":"740047500","name":"Escuela N° 31 Mariano Moreno","officialName":"ESC. N° 31 MARIANO MORENO","address":"Lavalle 339 Centro","phone":"421975","phoneDisplay":"+54 2657 421-975","phoneHref":"tel:+542657421975","email":"escuela31@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.686847,"lng":-65.465383,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740047500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTADO EN COMUNICACION"]},{"id":"740034600","cue":"740034600","name":"Escuela N° 32 Justo Daract","officialName":"ESC. N° 32 JUSTO DARACT","address":"Italia 242, Pringles","phone":"423764","phoneDisplay":"+54 2657 423-764","phoneHref":"tel:+542657423764","email":"escuela32@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689683,"lng":-65.460794,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034600","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740029700","cue":"740029700","name":"Escuela N° 321 Ingeniero Aviador Eduardo Bradley (Inicial y Primaria)","officialName":"ESC. N° 321 INGENIERO AVIADOR EDUARDO BRADLEY","address":"25 de Mayo, extremo sur, Paraje El Fortín","phone":"435572","phoneDisplay":"+54 2657 435-572","phoneHref":"tel:+542657435572","email":"escuela321@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.704111,"lng":-65.478292,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740029700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740029701","cue":"740029701","name":"Escuela N° 321 Ingeniero Aviador Eduardo Bradley (Secundaria)","officialName":"ESC. N° 321 INGENIERO AVIADOR EDUARDO BRADLEY","address":"25 de Mayo, extremo sur, Paraje El Fortín","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela secundaria","category":"secundaria","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.704419,"lng":-65.478522,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740029701","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades","Agro y ambiente"],"degrees":["BACHILLER ORIENTACION AGRO Y AMBIENTE","BACHILLER CIENCIAS SOCIALES"]},{"id":"740045700","cue":"740045700","name":"Escuela N° 33 Vicente Dupuy","officialName":"ESCUELA N° 33 VICENTE DUPUY","address":"Dr. Zabala Ortiz 185 Estación","phone":"422036","phoneDisplay":"+54 2657 422-036","phoneHref":"tel:+542657422036","email":"escuela33@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.664089,"lng":-65.455694,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740045700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Informática y programación"],"degrees":["BACHILLER ORIENTACION INFORMATICA"]},{"id":"740014900","cue":"740014900","name":"Escuela N° 34 Raúl Basilio Díaz","officialName":"ESCUELA N° 34 RAUL BASILIO DIAZ","address":"Pueyrredón 760 Centro","phone":"425476","phoneDisplay":"+54 2657 425-476","phoneHref":"tel:+542657425476","email":"escuela34@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.685347,"lng":-65.476036,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740014900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION LENGUAS"]},{"id":"740045600","cue":"740045600","name":"Escuela N° 371 Juan Bautista Alberdi","officialName":"ESC. N° 371 JUAN BAUTISTA ALBERDI","address":"Zavala Ortiz 567 El Criollo","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"escuela371@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.665792,"lng":-65.447486,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740045600","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740035000","cue":"740035000","name":"Escuela N° 388 Sargento Eduardo Romero","officialName":"ESC. N° 388 SARGENTO EDUARDO ROMERO","address":"1° de Mayo y Pte. Perón San José","phone":"422614","phoneDisplay":"+54 2657 422-614","phoneHref":"tel:+542657422614","email":"escuela388@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.694419,"lng":-65.456167,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740035000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740031000","cue":"740031000","name":"Escuela N° 40 Doctor Ricardo Rojas","officialName":"ESC. N° 40 DOCTOR RICARDO ROJAS","address":"Courchod 175 Villa Celestina Courchod y 9 de Julio","phone":"422638","phoneDisplay":"+54 2657 422-638","phoneHref":"tel:+542657422638","email":"escuela40@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.655156,"lng":-65.452808,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740031000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ORIENTADO EN COMUNICACION"]},{"id":"740034900","cue":"740034900","name":"Escuela N° 43 Doctor Tomás Jofré","officialName":"ESC. N° 43 DOCTOR TOMAS JOFRE","address":"Tucumán 781 Santa Rita de Casia","phone":"427215","phoneDisplay":"+54 2657 427-215","phoneHref":"tel:+542657427215","email":"escuela43@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689089,"lng":-65.450025,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales"],"degrees":["BACHILLER ORIENTACIÓN CIENCIAS NATURALES"]},{"id":"740062900","cue":"740062900","name":"Escuela N° 431 Profesora Ángela Nelly Chenau de Vecino","officialName":"ESCUELA N° 431 PROFESORA ANGELA NELLY CHENAU DE VECINO","address":"B° Jardín Sur, Manzana 6014","phone":"423129","phoneDisplay":"+54 2657 423-129","phoneHref":"tel:+542657423129","email":"escuela431@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.704386,"lng":-65.434367,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740062900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740074400","cue":"740074400","name":"Escuela N° 445 Río Quinto","officialName":"ESCUELA N° 445 RIO QUINTO","address":"Maipú s/n","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela primaria","category":"primaria","levels":["Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.682914,"lng":-65.426322,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740074400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740047300","cue":"740047300","name":"Escuela N° 46 Gobernador León Guillet","officialName":"ESC. N° 46 GOBERNADOR LEON GUILLET","address":"Riobamba 446 San Antonio","phone":"422415","phoneDisplay":"+54 2657 422-415","phoneHref":"tel:+542657422415","email":"escuela46@sanluis.gov.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.68525,"lng":-65.476347,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740047300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740034000","cue":"740034000","name":"Escuela N° 69 Maestra Olga Ester Sarden","officialName":"ESC. N° 69 MAESTRA OLGA ESTER SARDEN","address":"Pasaje Martín Fierro 1386 Obras Sanitarias","phone":"426628","phoneDisplay":"+54 2657 426-628","phoneHref":"tel:+542657426628","email":"escuela69@sanluis.gov.ar","typeLabel":"Escuela inicial, primaria y secundaria","category":"secundaria","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.689569,"lng":-65.436064,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740034000","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740061700","cue":"740061700","name":"Escuela Pública Autogestionada N° 6 Dr. Luis Roberto Barroso","officialName":"ESCUELA PUBLICA AUTOGESTIONADA N°6  DR. LUIS ROBERTO BARROSO","address":"Ministro Berrondo 925, Plan Lote Eva Perón I","phone":"430116","phoneDisplay":"+54 2657 430-116","phoneHref":"tel:+542657430116","email":"escuelaexp6@sanluis.gov.ar","typeLabel":"Escuela Autogestionada","category":"autogestionada","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.659656,"lng":-65.437228,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740061700","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias naturales","Informática y programación","Educación técnica"],"degrees":["BACHILLER ORIENTACION INFORMATICA","BACHILLER ORIENTACIÓN CIENCIAS NATURALES Y TECNICA ORIENTACION ELECTRONICA"]},{"id":"740061400","cue":"740061400","name":"Escuela Pública Autogestionada N° 7 Eduardo Galeano","officialName":"ESCUELA PUBLICA AUTOGESTIONADAL N° 7 EDUARDO GALEANO","address":"Chacabuco 1000 Pablo Díaz","phone":"432189","phoneDisplay":"+54 2657 432-189","phoneHref":"tel:+542657432189","email":"escuelaexp7@sanluis.gov.ar","typeLabel":"Escuela Autogestionada","category":"autogestionada","levels":["Inicial","Primaria","Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.670331,"lng":-65.48305,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740061400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Educación física y deportes"],"degrees":["BACHILLER ORIENTACIÓN EDUCACIÓN FÍSICA"]},{"id":"740061200","cue":"740061200","name":"Escuela Pública Autogestionada N° 8 Leonardo da Vinci","officialName":"ESCUELA PUBLICA AUTOGESTIONADA N° 8 LEONARDO DA VINCI","address":"Bélgica 1100, Almirante Brown","phone":"420591","phoneDisplay":"+54 2657 420-591","phoneHref":"tel:+542657420591","email":"direccionldvinci@yahoo.com.ar","typeLabel":"Escuela Autogestionada","category":"autogestionada","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.680492,"lng":-65.437822,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740061200","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740065680","cue":"740065680","name":"Escuela Pública Digital de Adultos Gandhi","officialName":"ESCUELA PUBLICA DIGITAL DE ADULTOS GANDHI","address":"Avenida Jorge Luis Ruffa","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Educación de Jóvenes y Adultos","category":"adultos","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.685114,"lng":-65.495853,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740065680","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740065660","cue":"740065660","name":"Escuela Pública Digital de Adultos N° 58 Plan de Inclusión Aula 1","officialName":"ESCUELA PUBLICA DIGITAL ADULTOS N° 58 PLAN DE INCLUSION AULA 1","address":"Teodoro Fels s/n, ex Escuela Industrial","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Educación de Jóvenes y Adultos","category":"adultos","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.663617,"lng":-65.470633,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740065660","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración"],"degrees":["Economía y Administración"]},{"id":"740065681","cue":"740065681","name":"Escuela Pública Digital de Adultos Pedernera","officialName":"ESCUELA PUBLICA DIGITAL DE ADULTOS PEDERNERA","address":"Pringles y Pedernera","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Educación de Jóvenes y Adultos","category":"adultos","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.673503,"lng":-65.457414,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740065681","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740065685","cue":"740065685","name":"Escuela Pública Digital de Adultos Sarmiento","officialName":"ESCUELA PUBLICA DIGITAL DE ADULTOS SARMIENTO","address":"Almafuerte 671","phone":"0266","phoneDisplay":"","phoneHref":"","email":null,"typeLabel":"Educación de Jóvenes y Adultos","category":"adultos","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.67935,"lng":-65.471186,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740065685","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740014200","cue":"740014200","name":"Escuela Secundaria de Arte N° 1 Profesor Gaspar Digenaro","officialName":"ESCUELA SECUNDARIA DE ARTE N° 1 PROFESOR GASPAR DIGENARO","address":"Junín 33 Centro","phone":"4652000","phoneDisplay":"+54 2657 465-2000","phoneHref":"tel:+5426574652000","email":"escueladeartesvm@yahoo.com.ar","typeLabel":"Escuela de Arte","category":"artistica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.686133,"lng":-65.467078,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740014200","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Arte, diseño y comunicación"],"degrees":["BACHILLER ARTE ORIENTACION PINTURA","BACHILLER ARTE ORIENTACION ARTES VISUALES"]},{"id":"740053300","cue":"740053300","name":"Escuela Técnica N° 14 Mtro. del Sup. Trib. de Just. Dr. Luis Ángel Luco","officialName":"ESCUELA TECNICA N° 14 MTRO.DEL SUP.TRIB.DE JUST.DR. LUIS ANGEL LUCO","address":"Cruce ex Ruta Nacional 7 y Provincial N° 2","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"colegio14@sanluis.gov.ar","typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.677197,"lng":-65.503778,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740053300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Agro y ambiente"],"degrees":["TECNICA ORIENTACION PRODUCCION AGROPECUARIA"]},{"id":"740054100","cue":"740054100","name":"Escuela Técnica N° 15 Ingeniero Agustín Mercau","officialName":"ESCUELA TÉCNICA N° 15 INGENIERO AGUSTIN MERCAU","address":"Avenida 25 de Mayo 1350 Colón","phone":"423171","phoneDisplay":"+54 2657 423-171","phoneHref":"tel:+542657423171","email":"colegio_n15@yahoo.com.ar","typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667506,"lng":-65.466803,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740054100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Educación técnica"],"degrees":["TECNICA ORIENTACION EQUIPOS E INSTALACIONES ELECTROMECANICAS"]},{"id":"740033800","cue":"740033800","name":"Escuela Técnica N° 17 V Brigada Aérea","officialName":"ESCUELA TECNICA N°17 V BRIGADA AEREA","address":"Ruta Provincial N° 24 y Acceso Aeródromo","phone":"422114","phoneDisplay":"+54 2657 422-114","phoneHref":"tel:+542657422114","email":null,"typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","locality":"Villa Reynolds","lat":-33.7172528,"lng":-65.3851556,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740033800","sourceLabel":"Ficha oficial","orientations":["Educación técnica"],"degrees":["TECNICA ORIENTACION AERONAUTICA","TECNICA ORIENTACION AUTOMOTORES","TECNICA ORIENTACION ELECTRONICA"]},{"id":"740054300","cue":"740054300","name":"Escuela Técnica N° 18 Nicolasa Berrondo de Quiroga","officialName":"ESCUELA TECNICA N° 18 NICOLASA BERRONDO DE QUIROGA","address":"Dr. Mestre 1325 Colón","phone":"436273","phoneDisplay":"+54 2657 436-273","phoneHref":"tel:+542657436273","email":"colegio18@sanlui.gov.ar","typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria","Formación profesional"],"management":"Pública","managementOriginal":"Estatal","lat":-33.667414,"lng":-65.468739,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740054300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración","Educación técnica"],"degrees":["BACHILLER PROFESIONAL SECUNDARIO GASTRONOMIA","TECNICA ORIENTACION GESTION Y ADMINISTRACION DE LAS ORGANIZACIONES"]},{"id":"740047100","cue":"740047100","name":"Escuela Técnica N° 19 Bernardino Rivadavia","officialName":"ESCUELA TECNICA N° 19 BERNARDINO RIVADAVIA","address":"Chacabuco 975 Pablo Díaz","phone":"433627","phoneDisplay":"+54 2657 433-627","phoneHref":"tel:+542657433627","email":"coln19@yahoo.com.ar","typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.670214,"lng":-65.483131,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740047100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Agro y ambiente"],"degrees":["TECNICA ORIENTACION TECNOLOGIA DE LOS ALIMENTOS"]},{"id":"740014300","cue":"740014300","name":"Escuela Técnica N° 20 Antonio D. Berni","officialName":"ESCUELA TECNICA N° 20 ANTONIO D. BERNI","address":"Pje. Dorrego y Tte. Turrado 828 Viviendas","phone":"423326","phoneDisplay":"+54 2657 423-326","phoneHref":"tel:+542657423326","email":"colegio20vm@yahoo.com.ar","typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.673014,"lng":-65.476661,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740014300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Informática y programación"],"degrees":["TECNICA ORIENTACION INFORMATICA PROFESIONAL Y PERSONAL"]},{"id":"740066100","cue":"740066100","name":"Escuela Técnica N° 3 Eva Duarte de Perón","officialName":"ESCUELA TECNICA N° 3  EVA DUARTE DE PERON","address":"9 de Julio y Rioja","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Escuela Técnica","category":"tecnica","levels":["Secundaria"],"management":"Pública","managementOriginal":"Estatal","lat":-33.674033,"lng":-65.457731,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740066100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Turismo"],"degrees":["TECNICA ORIENTACION TURISMO"]},{"id":"740047400","cue":"740047400","name":"Instituto Cultural Argentino","officialName":"INSTITUTO CULTURAL ARGENTINO","address":"Gobernador Alric 374, Las Mirandas","phone":"423182","phoneDisplay":"+54 2657 423-182","phoneHref":"tel:+542657423182","email":"instituto@arnet.com","typeLabel":"Instituto de formación docente","category":"docente","levels":["Inicial","Primaria","Secundaria","Superior"],"management":"Privada","managementOriginal":"Privado","lat":-33.676731,"lng":-65.472003,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740047400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración"],"degrees":["BACHILLER ECONOMIA Y ADMINISTRACION"]},{"id":"740062100","cue":"740062100","name":"Instituto de Formación Docente Continua - Villa Mercedes","officialName":"INSTITUTO DE FORMACION DOCENTE CONTINUA - VILLA MERCEDES","address":"9 de Julio 1147 Almirante Brown","phone":"432142","phoneDisplay":"+54 2657 432-142","phoneHref":"tel:+542657432142","email":null,"typeLabel":"Instituto de formación docente","category":"docente","levels":["Superior"],"management":"Pública","managementOriginal":"Estatal","lat":-33.673342,"lng":-65.457233,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740062100","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740061800","cue":"740061800","name":"Instituto Modelo Bilingüe San Marcos","officialName":"INSTITUTO MODELO BILINGÜE SAN MARCOS","address":"Av. Mitre 915 San Martín","phone":"434338","phoneDisplay":"+54 2657 434-338","phoneHref":"tel:+542657434338","email":"institutosanmarcosvm@hotmail.com","typeLabel":"Escuela primaria","category":"primaria","levels":["Primaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.676636,"lng":-65.462261,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740061800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740059300","cue":"740059300","name":"Instituto Nacional de Informática","officialName":"INSTITUTO NACIONAL DE INFORMATICA","address":"Zabala Ortiz 143 Estación","phone":"426185","phoneDisplay":"+54 2657 426-185","phoneHref":"tel:+542657426185","email":"indi.edu@infobae.com.ar","typeLabel":"Escuela secundaria","category":"secundaria","levels":["Secundaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.663822,"lng":-65.456494,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740059300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Economía y administración"],"degrees":["BACHILLER ECONOMIA Y ADMINISTRACION"]},{"id":"740057300","cue":"740057300","name":"Instituto Nuestra Señora del Carmen","officialName":"Inst. Nuestra Sra. del Carmen","address":"Almafuerte 371, Las Mirandas","phone":"424612","phoneDisplay":"+54 2657 424-612","phoneHref":"tel:+542657424612","email":"insc-vm@yahoo.com.ar","typeLabel":"Instituto de formación docente","category":"docente","levels":["Inicial","Primaria","Secundaria","Superior"],"management":"Privada","managementOriginal":"Privado","lat":-33.684242,"lng":-65.472783,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740057300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":["Ciencias sociales y humanidades"],"degrees":["BACHILLER ORIENTACION CIENCIAS SOCIALES"]},{"id":"740063601","cue":"740063601","name":"Instituto Superior de Educación Física - Villa Mercedes","officialName":"INSTITUTO SUPERIOR DE EDUCACION FISICA - VILLA MERCEDES","address":"Pedernera 635","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Instituto de formación docente","category":"docente","levels":["Superior"],"management":"Privada","managementOriginal":"Privado","lat":-33.681581,"lng":-65.464767,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740063601","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740053500","cue":"740053500","name":"Instituto Superior de Lengua Inglesa Nivel Terciario","officialName":"INSTITUTO SUPERIOR DE LENGUA INGLESA NIVEL TERCIARIO","address":"Balcarce 582","phone":"431782","phoneDisplay":"+54 2657 431-782","phoneHref":"tel:+542657431782","email":"isli@csi.vmercedes.com.ar","typeLabel":"Instituto de formación docente","category":"docente","levels":["Superior"],"management":"Privada","managementOriginal":"Privado","lat":-33.681886,"lng":-65.463853,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740053500","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740026400","cue":"740026400","name":"Jardín de Infantes N° 2 Remedios Escalada de San Martín","officialName":"JARDIN DE INFANTES N° 2 REMEDIOS ESCALADA DE SAN MARTIN","address":"España 170 Centro","phone":"424932","phoneDisplay":"+54 2657 424-932","phoneHref":"tel:+542657424932","email":"esc2sanmartin@sanluis.gov.ar","typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.687444,"lng":-65.470625,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740026400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740066600","cue":"740066600","name":"Jardín de Infantes Soy Feliz - Escuela Primaria Blandina Varetto de Ferrari","officialName":"JARDIN DE INFANTES SOY FELIZ-ESCUELA PRIMARIA  BLANDINA VARETTO DE FERRARI","address":"Avenida Mitre 1416 Estación","phone":"437063","phoneDisplay":"+54 2657 437-063","phoneHref":"tel:+542657437063","email":"jardinsoyfelizfca@yahoo.com.ar","typeLabel":"Escuela inicial y primaria","category":"primaria","levels":["Inicial","Primaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.665686,"lng":-65.459033,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740066600","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740064800","cue":"740064800","name":"Jardín Manuelita","officialName":"JARDIN MANUELITA","address":"Belgrano 576 Centro","phone":"422734","phoneDisplay":"+54 2657 422-734","phoneHref":"tel:+542657422734","email":"jardinmanuelita1@hotmail.com","typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Privada","managementOriginal":"Privado","lat":-33.681942,"lng":-65.467497,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740064800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740078200","cue":"740078200","name":"Jardín Maternal Mis Primeros Pasitos","officialName":"JARDIN MATERNAL MIS PRIMEROS PASITOS","address":"Edison 1381","phone":"4450000","phoneDisplay":"+54 2657 445-0000","phoneHref":"tel:+5426574450000","email":"j.m.pasitos@hotmail.com","typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.690231,"lng":-65.436119,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740078200","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740078300","cue":"740078300","name":"Jardín Maternal Tutú Maramba","officialName":"JARDIN MATERNAL TUTU MARAMBA","address":"B° Virgen de Pompeya, Manzana 6, Pirker","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":"jardintutumaramba@hotmail.com","typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.6985,"lng":-65.439649,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740078300","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740078400","cue":"740078400","name":"Jardín Maternal Víctor Endeiza","officialName":"JARDIN MATERNAL VICTOR ENDEIZA","address":"Brasil 1769","phone":"154702810","phoneDisplay":"+54 9 2657 470-2810","phoneHref":"tel:+54926574702810","email":null,"typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Pública","managementOriginal":"Estatal","lat":-33.663147,"lng":-65.450363,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740078400","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740061900","cue":"740061900","name":"La Casa de los Ositos","officialName":"LA CASA DE LOS OSITOS","address":"Av. Mitre 915 San Martín","phone":"434338","phoneDisplay":"+54 2657 434-338","phoneHref":"tel:+542657434338","email":"institutosanmarcosvm@hotmail.com","typeLabel":"Jardín de infantes","category":"inicial","levels":["Inicial"],"management":"Privada","managementOriginal":"Privado","lat":-33.676725,"lng":-65.462269,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740061900","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"740065800","cue":"740065800","name":"San Valentín","officialName":"SAN VALENTIN","address":"Belgrano 576 Centro","phone":"422734","phoneDisplay":"+54 2657 422-734","phoneHref":"tel:+542657422734","email":null,"typeLabel":"Escuela primaria","category":"primaria","levels":["Primaria"],"management":"Privada","managementOriginal":"Privado","lat":-33.681942,"lng":-65.467497,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740065800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"uccuyo-villa-mercedes","cue":null,"name":"Universidad Católica de Cuyo – Subsede Villa Mercedes","officialName":"Universidad Católica de Cuyo – Subsede Villa Mercedes","address":"Suipacha 1758","phone":"","phoneDisplay":"","phoneHref":"","email":null,"typeLabel":"Universidad","category":"universidad","levels":["Superior"],"management":"Privada","managementOriginal":"Privado","locality":"Villa Mercedes","lat":-33.6620896,"lng":-65.4532406,"sourceUrl":"https://uccuyo.edu.ar/","sourceLabel":"Sitio oficial","orientations":[],"degrees":[]},{"id":"ucongreso-villa-mercedes","cue":null,"name":"Universidad de Congreso – Extensión Áulica Villa Mercedes","officialName":"Universidad de Congreso – Extensión Áulica Villa Mercedes","address":"Suipacha 1777","phone":"5492664360408","phoneDisplay":"+54 9 266 436-0408","phoneHref":"tel:+5492664360408","email":"villamercedes@ucongreso.edu.ar","typeLabel":"Universidad","category":"universidad","levels":["Superior"],"management":"Privada","managementOriginal":"Privado","locality":"Villa Mercedes","lat":-33.6620285,"lng":-65.4534138,"sourceUrl":"https://www.ucongreso.edu.ar/sedes-y-extensiones-aulicas/localizacion-villa-mercedes/","sourceLabel":"Sitio oficial","orientations":[],"degrees":[]},{"id":"unsl-campus-villa-mercedes","cue":null,"name":"Universidad Nacional de San Luis (UNSL) – Campus Villa Mercedes","officialName":"Universidad Nacional de San Luis – Campus Villa Mercedes","address":"Ruta Provincial N° 55, extremo norte, Campus Universitario","phone":"02657 531000","phoneDisplay":"+54 2657 531-000","phoneHref":"tel:+542657531000","email":null,"typeLabel":"Universidad","category":"universidad","levels":["Superior"],"management":"Pública","managementOriginal":"Estatal","locality":"Villa Mercedes","lat":-33.644225,"lng":-65.447806,"sourceUrl":"https://www.fcejs.unsl.edu.ar/","sourceLabel":"Sitio oficial","orientations":[],"degrees":[]},{"id":"unvime-villa-mercedes","cue":null,"name":"Universidad Nacional de Villa Mercedes (UNViMe)","officialName":"Universidad Nacional de Villa Mercedes","address":"Ruta Provincial N° 55, extremo norte, Campus Universitario","phone":"2657 613569","phoneDisplay":"+54 2657 613-569","phoneHref":"tel:+542657613569","email":"secprivada@unvime.edu.ar","typeLabel":"Universidad","category":"universidad","levels":["Superior"],"management":"Pública","managementOriginal":"Estatal","locality":"Villa Mercedes","lat":-33.644498,"lng":-65.445159,"sourceUrl":"https://www.unvime.edu.ar/ubicaciones/","sourceLabel":"Sitio oficial","orientations":[],"degrees":[]},{"id":"740066800","cue":"740066800","name":"Universidad Provincial de Oficios Eva Perón","officialName":"UNIVERSIDAD PROVINCIAL DE OFICIOS EVA PERÓN","address":"9 de Julio y Rioja","phone":"4452000","phoneDisplay":"+54 2657 445-2000","phoneHref":"tel:+5426574452000","email":null,"typeLabel":"Universidad","category":"universidad","levels":["Superior","Formación profesional"],"management":"Pública","managementOriginal":"Estatal","lat":-33.674008,"lng":-65.457803,"sourceUrl":"https://mapa.educacion.gob.ar/legajo/740066800","locality":"Villa Mercedes","sourceLabel":"Ficha oficial","orientations":[],"degrees":[]},{"id":"siglo21-villa-mercedes","cue":null,"name":"Universidad Siglo 21 – CAU Villa Mercedes","officialName":"Universidad Siglo 21 – CAU Villa Mercedes","address":"Belgrano, frente a Plaza Constitucional","phone":"2657 202405","phoneDisplay":"+54 2657 202-405","phoneHref":"tel:+542657202405","email":null,"typeLabel":"Universidad","category":"universidad","levels":["Superior"],"management":"Privada","managementOriginal":"Privado","locality":"Villa Mercedes","lat":-33.6842674,"lng":-65.467956,"sourceUrl":"https://21.edu.ar/","sourceLabel":"Sitio oficial","orientations":[],"degrees":[]}]};
  /* EMBEDDED_DATA:END */

  const TYPE_META = {
    inicial: { emoji: "🧸", color: "#d99a2b", label: "Inicial" },
    primaria: { emoji: "🏫", color: "#37805d", label: "Primaria" },
    secundaria: { emoji: "🎓", color: "#356e9e", label: "Secundaria" },
    especial: { emoji: "💙", color: "#7a62b8", label: "Educación Especial" },
    autogestionada: { emoji: "🌿", color: "#2f7d6b", label: "Escuela Autogestionada" },
    generativa: { emoji: "🎒", color: "#fec925", ink: "#7a5200", label: "Escuela Generativa" },
    tecnica: { emoji: "⚙️", color: "#c0653a", label: "Escuela Técnica" },
    adultos: { emoji: "📚", color: "#b45e6a", label: "Educación de Jóvenes y Adultos" },
    docente: { emoji: "📖", color: "#1f7a78", label: "Instituto de formación docente" },
    universidad: { emoji: "🏛️", color: "#5c4b8a", label: "Universidad" },
    formacion: { emoji: "🛠️", color: "#6b7d3c", label: "Formación profesional y oficios" },
    artistica: { emoji: "🎭", color: "#a45f9a", label: "Escuela de Arte" }
  };

  const GOOGLE_MAPS_DIR = "https://www.google.com/maps/dir/?api=1&destination=";
  const OFFICIAL_RECORD = "https://mapa.educacion.gob.ar/legajo/";
  const BARRIOS_URL = "./barrios.geojson";
  const BARRIO_LEVEL_LABEL = { 9: "Barrio", 10: "Barrio", 11: "Complejo habitacional" };
  const CIRCUITOS_URL = "./circuitos.geojson";
  const CIRCUITO_METRICS = {
    electores: {
      label: "Cantidad de electores",
      short: "Electores",
      colors: ["#eef4ff", "#1f4e8c"],
      decimals: 0,
      suffix: ""
    },
    participacion: {
      label: "Participación",
      short: "Participación",
      colors: ["#e5f4fa", "#145a86"],
      decimals: 1,
      suffix: "%"
    },
    votantes: {
      label: "Cantidad de votantes",
      short: "Votantes",
      colors: ["#f4f0ff", "#4b2d8f"],
      decimals: 0,
      suffix: ""
    },
    densidad: {
      label: "Densidad electoral",
      short: "Electores/km²",
      colors: ["#fff1dc", "#a63d0b"],
      decimals: 0,
      suffix: " elect./km²"
    },
    superficie: {
      label: "Superficie del circuito",
      short: "Superficie",
      colors: ["#eaf7ee", "#256b45"],
      decimals: 1,
      suffix: " km²"
    },
    escuelas: {
      label: "Instituciones educativas",
      short: "Instituciones",
      colors: ["#fdf0f6", "#8a2b5c"],
      decimals: 0,
      suffix: ""
    },
    renabap_hogares: {
      label: "Hogares en barrios populares",
      short: "Hogares RENABAP",
      colors: ["#fff1e6", "#a13a0c"],
      decimals: 0,
      suffix: ""
    },
    renabap_barrios: {
      label: "Barrios populares",
      short: "Barrios populares",
      colors: ["#fdecec", "#9b2c2c"],
      decimals: 0,
      suffix: ""
    },
    poblacion: {
      label: "Población del circuito",
      short: "Población",
      colors: ["#fff4e8", "#a63d0b"],
      decimals: 0,
      suffix: " hab."
    },
    densidad_poblacional: {
      label: "Densidad poblacional",
      short: "Hab./km²",
      colors: ["#fdf6e3", "#8a5a00"],
      decimals: 0,
      suffix: " hab./km²"
    },
    pct_65_mas: {
      label: "Población de 65 años y más",
      short: "% 65+",
      colors: ["#f4f0ff", "#4b2d8f"],
      decimals: 1,
      suffix: "%"
    },
    pct_sin_cobertura_salud: {
      label: "Personas sin cobertura de salud",
      short: "% sin cobertura",
      colors: ["#fff0f0", "#a02c2c"],
      decimals: 1,
      suffix: "%"
    },
    pct_nbi: {
      label: "Hogares con necesidades básicas insatisfechas",
      short: "% NBI",
      colors: ["#fff1e6", "#9b2c2c"],
      decimals: 1,
      suffix: "%"
    },
    pct_sin_cloacas: {
      label: "Hogares sin cloacas",
      short: "% sin cloacas",
      colors: ["#eef7f2", "#1f6b45"],
      decimals: 1,
      suffix: "%"
    },
    electores_por_100: {
      label: "Electores por 100 habitantes",
      short: "Elect./100 hab.",
      colors: ["#eef4ff", "#1f4e8c"],
      decimals: 1,
      suffix: ""
    },
    participacion_vap: {
      label: "Participación sobre población en edad de votar",
      short: "Participación/VAP",
      colors: ["#e5f4fa", "#145a86"],
      decimals: 1,
      suffix: "%"
    }
  };
  const CIRCUITO_METRICS_RADIOS = [
    "poblacion",
    "densidad_poblacional",
    "pct_65_mas",
    "pct_sin_cobertura_salud",
    "pct_nbi",
    "pct_sin_cloacas",
    "electores_por_100",
    "participacion_vap"
  ];
  const CIRCUITO_LABEL_ZOOM = 14;
  const CIRCUITO_ATTRIBUTION =
    'Circuitos: <a href="https://ulpgeo.maps.arcgis.com/apps/webappviewer/index.html?id=99ce6ec913cd44a3aace8481e0d52297" target="_blank" rel="noopener noreferrer">ULP Geo</a> · Padrón: <a href="https://www.electoral.gob.ar/" target="_blank" rel="noopener noreferrer">CNE</a>';
  const RENABAP_URL = "./renabap.geojson";
  const RENABAP_LABEL_ZOOM = 14;
  const RENABAP_ATTRIBUTION =
    'Barrios populares: <a href="https://www.argentina.gob.ar/obras-publicas/sisu/renabap/mapa" target="_blank" rel="noopener noreferrer">RENABAP</a> (SISU)';
  const RADIOS_URL = "./radios.geojson";
  const RADIOS_LABEL_ZOOM = 14.5;
  const RADIOS_ATTRIBUTION =
    'Radios censales: <a href="https://www.indec.gob.ar/indec/web/Nivel4-Tema-2-41-165" target="_blank" rel="noopener noreferrer">INDEC</a> · Censo 2022 (CC BY-SA 4.0)';
  const RADIO_METRICS = {
    poblacion: {
      label: "Población",
      short: "Población",
      colors: ["#fff6ea", "#b8430a"],
      decimals: 0,
      suffix: " hab."
    },
    densidad: {
      label: "Densidad poblacional",
      short: "Hab./km²",
      colors: ["#fdf6e3", "#8a5a00"],
      decimals: 0,
      suffix: " hab./km²"
    },
    pct_65_mas: {
      label: "Población de 65 años y más",
      short: "% 65+",
      colors: ["#f4f0ff", "#4b2d8f"],
      decimals: 1,
      suffix: "%"
    },
    pct_sin_cobertura_salud: {
      label: "Personas sin cobertura de salud",
      short: "% sin cobertura",
      colors: ["#fff0f0", "#a02c2c"],
      decimals: 1,
      suffix: "%"
    },
    pct_nbi: {
      label: "Hogares con NBI",
      short: "% NBI",
      colors: ["#fff1e6", "#9b2c2c"],
      decimals: 1,
      suffix: "%"
    },
    pct_sin_cloacas: {
      label: "Hogares sin cloacas",
      short: "% sin cloacas",
      colors: ["#eef7f2", "#1f6b45"],
      decimals: 1,
      suffix: "%"
    },
    pct_sin_gas_red: {
      label: "Hogares sin gas de red",
      short: "% sin gas de red",
      colors: ["#eef4fb", "#245b8a"],
      decimals: 1,
      suffix: "%"
    },
    pct_clima_bajo: {
      label: "Hogares con clima educativo bajo",
      short: "% clima bajo",
      colors: ["#fbf1e8", "#7a4a2a"],
      decimals: 1,
      suffix: "%"
    }
  };
  const RUTAS_SOURCES = [
    { url: "./ruta-a.geojson", linea: "A" },
    { url: "./ruta-e.geojson", linea: "E" },
    { url: "./ruta-este.geojson", linea: "ES" }
  ];
  const RUTA_COLOR_DEFAULT = "#F7683A";
  const RUTA_LINE_COLORS = { A: "#F7683A", E: "#2E7D32", ES: "#1E88E5" };
  const RUTA_LINE_NAMES = { A: "Línea A", E: "Línea E", ES: "Línea Este" };
  const RUTA_LINE_SHORT = { A: "A", E: "E", ES: "Este" };
  const LOCATION_ZOOM = 16;
  const LOCATION_TIMEOUT = 12000;
  const PIN_DROP_MS = 620;
  const PIN_LINGER_MS = 280;
  const PIN_FADE_MS = 260;

  const state = {
    schools: [],
    filtered: [],
    query: "",
    level: "Todos",
    management: "Todas",
    type: "Todos",
    orientation: "Todas",
    selectedId: null,
    dataLoaded: false,
    barrios: true,
    barrioLabels: true,
    barrioFillOpacity: 0.07,
    rutas: false,
    rutaLineas: { A: true, E: true, ES: true },
    circuitos: false,
    circuitoMetric: "electores",
    circuitoLabels: false,
    circuitoLabelValues: false,
    circuitoFillOpacity: 0.55,
    renabap: false,
    renabapLabels: false,
    renabapLabelValues: false,
    renabapFillOpacity: 0.35,
    radios: false,
    radioMetric: "poblacion",
    radioLabels: false,
    radioLabelValues: false,
    radioFillOpacity: 0.55,
    settingsLayer: "circuitos"
  };

  let map = null;
  let clusterLayer = null;
  let usesCluster = false;
  let mapReady = false;
  const markersById = new Map();

  let barriosLayer = null;
  let barrioLabelGroup = null;
  let barriosRequest = null;
  let barriosUnavailable = false;
  const barrioCounts = new Map();
  const barrioFeatures = new Map();

  let circuitosLayer = null;
  let circuitosRequest = null;
  let circuitosUnavailable = false;
  let circuitosMeta = null;
  let circuitoRanges = {};
  let circuitoAttributionAdded = false;
  let circuitoLabelGroup = null;

  let renabapLayer = null;
  let renabapLabelGroup = null;
  let renabapRequest = null;
  let renabapUnavailable = false;
  let renabapFeatures = [];
  let renabapMeta = null;
  let renabapAttributionAdded = false;

  let radiosLayer = null;
  let radiosLabelGroup = null;
  let radiosRequest = null;
  let radiosUnavailable = false;
  let radiosFeatures = [];
  let radiosMeta = null;
  let radiosAttributionAdded = false;
  let radioRanges = {};

  let rutasLayer = null;
  let rutaGroups = {};
  let rutasRequest = null;
  let rutasUnavailable = false;
  let rutasCount = 0;
  let rutasFaltantes = [];
  let rutaAnimations = [];
  let rutaFrame = null;
  let rutaLastTs = 0;

  let userMarker = null;
  let userCircle = null;
  let locatePending = false;
  let toastTimer = null;
  let dropPinMarker = null;
  let locationTimers = [];
  let locationActive = false;
  let locationToken = 0;

  const el = {};
  const mobileMedia = window.matchMedia("(max-width: 900px)");

  const icons = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.3 7-11.5a7 7 0 1 0-14 0C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.8h2.7l1.4 4.2-2 1.4a13.4 13.4 0 0 0 5.9 5.9l1.4-2 4.2 1.4v2.7a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 6a2 2 0 0 1 2-2.2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 14.5v3A2.5 2.5 0 0 1 15.5 20h-9A2.5 2.5 0 0 1 4 17.5v-9A2.5 2.5 0 0 1 6.5 6h3"/></svg>'
  };

  /* Helpers ----------------------------------------------------------------- */

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function escapeAttr(value) {
    return escapeHTML(value).replace(/`/g, "&#96;");
  }

  function normalizeText(value) {
    return String(value == null ? "" : value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function normalizeSchools(data) {
    const source = Array.isArray(data) ? data : data && Array.isArray(data.schools) ? data.schools : [];
    return source
      .map(function (school, index) {
        const category = TYPE_META[school.category] ? school.category : "primaria";
        const meta = TYPE_META[category];
        const lat = Number(school.lat);
        const lng = Number(school.lng);
        const levels = Array.isArray(school.levels) ? school.levels.filter(Boolean) : [];
        const orientations = Array.isArray(school.orientations) ? school.orientations.filter(Boolean) : [];
        const degrees = Array.isArray(school.degrees) ? school.degrees.filter(Boolean) : [];
        const name = String(school.name || "Institución educativa").trim();
        return Object.assign({}, school, {
          id: String(school.id || school.cue || "school-" + index),
          name: name,
          officialName: school.officialName || name,
          category: category,
          emoji: meta.emoji,
          color: meta.color,
          typeLabel: school.typeLabel || meta.label,
          levels: levels,
          orientations: orientations,
          degrees: degrees,
          management: school.management || "Pública",
          locality: school.locality || "Villa Mercedes",
          lat: Number.isFinite(lat) ? lat : null,
          lng: Number.isFinite(lng) ? lng : null,
          searchText: normalizeText([
            name,
            school.officialName,
            school.address,
            school.phone,
            school.phoneDisplay,
            school.email,
            school.cue,
            school.typeLabel,
            school.management,
            school.locality,
            levels.join(" "),
            orientations.join(" "),
            degrees.join(" "),
            school.category
          ].join(" "))
        });
      })
      .filter(function (school) {
        return school.name;
      })
      .sort(function (a, b) {
        return a.name.localeCompare(b.name, "es", { sensitivity: "base" });
      });
  }

  async function loadSchools() {
    try {
      const response = await fetch("./data.json", { cache: "no-store" });
      if (!response.ok) throw new Error("No se pudo leer data.json (" + response.status + ")");
      const data = await response.json();
      const schools = normalizeSchools(data);
      if (!schools.length) throw new Error("data.json no contiene instituciones");
      return schools;
    } catch (error) {
      if (EMBEDDED_DATA) {
        const embeddedSchools = normalizeSchools(EMBEDDED_DATA);
        if (embeddedSchools.length) {
          console.info("Usando los datos embebidos para abrir el mapa sin servidor local.");
          return embeddedSchools;
        }
      }
      throw error;
    }
  }

  function pluralize(count, singular, plural) {
    return count === 1 ? singular : plural;
  }

  function getMeta(school) {
    return TYPE_META[school.category] || { emoji: "📍", color: "#b8430a", label: "Institución" };
  }

  /* Initialization ---------------------------------------------------------- */

  function start() {
    cacheElements();
    bindEvents();
    buildRutaLineRows();
    syncRutasControls();
    mapReady = initMap();
    syncLayersPanel();
    loadData();
    if (mapReady) syncBarrios();
  }

  function cacheElements() {
    el.sidebar = document.getElementById("sidebar");
    el.backdrop = document.getElementById("sidebar-backdrop");
    el.openSidebar = document.getElementById("open-sidebar");
    el.closeSidebar = document.getElementById("close-sidebar");
    el.search = document.getElementById("search-input");
    el.searchClear = document.getElementById("search-clear");
    el.levelFilter = document.getElementById("level-filter");
    el.managementFilter = document.getElementById("management-filter");
    el.typeFilter = document.getElementById("type-filter");
    el.orientationFilter = document.getElementById("orientation-filter");
    el.clearFilters = document.getElementById("clear-filters");
    el.resultsCount = document.getElementById("results-count");
    el.resultsTotal = document.getElementById("results-total");
    el.mobileCount = document.getElementById("mobile-count");
    el.list = document.getElementById("school-list");
    el.zoomIn = document.getElementById("zoom-in");
    el.zoomOut = document.getElementById("zoom-out");
    el.resetView = document.getElementById("reset-view");
    el.locateMe = document.getElementById("locate-me");
    el.mapToast = document.getElementById("map-toast");
    el.rutasToggle = document.getElementById("toggle-rutas");
    el.rutasPanel = document.getElementById("rutas-panel");
    el.rutasClose = document.getElementById("rutas-close");
    el.rutaVisible = document.getElementById("ruta-visible");
    el.rutasMeta = document.getElementById("rutas-meta");
    el.rutasLineas = document.getElementById("rutas-lineas");
    el.layersToggle = document.getElementById("layers-toggle");
    el.layersPanel = document.getElementById("layers-panel");
    el.layersClose = document.getElementById("layers-close");
    el.layersBadge = document.getElementById("layers-badge");
    el.layerBarrios = document.getElementById("layer-barrios");
    el.layerCircuitos = document.getElementById("layer-circuitos");
    el.layerRenabap = document.getElementById("layer-renabap");
    el.layerRadios = document.getElementById("layer-radios");
    el.layerMetaBarrios = document.getElementById("layer-meta-barrios");
    el.layerMetaCircuitos = document.getElementById("layer-meta-circuitos");
    el.layerMetaRenabap = document.getElementById("layer-meta-renabap");
    el.layerMetaRadios = document.getElementById("layer-meta-radios");
    el.layerBarriosRow = document.querySelector('[data-layer-row="barrios"]');
    el.layerCircuitosRow = document.querySelector('[data-layer-row="circuitos"]');
    el.layerRenabapRow = document.querySelector('[data-layer-row="renabap"]');
    el.layerRadiosRow = document.querySelector('[data-layer-row="radios"]');
    el.layerSettingsBarrios = document.getElementById("layer-settings-barrios");
    el.layerSettingsCircuitos = document.getElementById("layer-settings-circuitos");
    el.layerSettingsRenabap = document.getElementById("layer-settings-renabap");
    el.layerSettingsRadios = document.getElementById("layer-settings-radios");
    el.layerSettingsDialog = document.getElementById("layer-settings-dialog");
    el.closeLayerSettings = document.getElementById("close-layer-settings");
    el.closeLayerSettingsDone = document.getElementById("close-layer-settings-done");
    el.resetLayerSettings = document.getElementById("reset-layer-settings");
    el.layerTabs = document.querySelectorAll("[data-layer-tab]");
    el.layerPanels = document.querySelectorAll("[data-layer-panel]");
    el.barrioShowLabels = document.getElementById("barrio-show-labels");
    el.barrioFillOpacity = document.getElementById("barrio-fill-opacity");
    el.barrioFillOpacityOutput = document.getElementById("barrio-fill-opacity-output");
    el.circuitMetricRadios = document.querySelectorAll('input[name="circuit-metric"]');
    el.circuitShowLabels = document.getElementById("circuit-show-labels");
    el.circuitShowValues = document.getElementById("circuit-show-values");
    el.circuitFillOpacity = document.getElementById("circuit-fill-opacity");
    el.circuitFillOpacityOutput = document.getElementById("circuit-fill-opacity-output");
    el.renabapShowLabels = document.getElementById("renabap-show-labels");
    el.renabapShowValues = document.getElementById("renabap-show-values");
    el.renabapFillOpacity = document.getElementById("renabap-fill-opacity");
    el.renabapFillOpacityOutput = document.getElementById("renabap-fill-opacity-output");
    el.radioMetricRadios = document.querySelectorAll('input[name="radio-metric"]');
    el.radioShowLabels = document.getElementById("radio-show-labels");
    el.radioShowValues = document.getElementById("radio-show-values");
    el.radioFillOpacity = document.getElementById("radio-fill-opacity");
    el.radioFillOpacityOutput = document.getElementById("radio-fill-opacity-output");
    el.mapLegends = document.getElementById("map-legends");
    el.circuitLegend = document.getElementById("circuit-legend");
    el.circuitMetricLabel = document.getElementById("circuit-metric-label");
    el.circuitScale = document.getElementById("circuit-scale");
    el.circuitRangeMin = document.getElementById("circuit-range-min");
    el.circuitRangeMax = document.getElementById("circuit-range-max");
    el.circuitSummary = document.getElementById("circuit-summary");
    el.radiosLegend = document.getElementById("radios-legend");
    el.radiosLegendNote = document.getElementById("radios-legend-note");
    el.radiosMetricLabel = document.getElementById("radios-metric-label");
    el.radiosScale = document.getElementById("radios-scale");
    el.radiosRangeMin = document.getElementById("radios-range-min");
    el.radiosRangeMax = document.getElementById("radios-range-max");
    el.radiosSummary = document.getElementById("radios-summary");
    el.legend = document.getElementById("legend");
    el.legendToggle = document.getElementById("legend-toggle");
    el.legendPanel = document.getElementById("legend-panel");
    el.mapError = document.getElementById("map-error");
    el.openCredits = document.getElementById("open-credits");
    el.creditsDialog = document.getElementById("credits-dialog");
    el.closeCredits = document.getElementById("close-credits");
  }

  function initMap() {
    if (!window.L) {
      showMapError();
      return false;
    }

    try {
      map = L.map("map", {
        zoomControl: false,
        attributionControl: true,
        minZoom: 11,
        maxZoom: 19,
        zoomSnap: 0.25,
        wheelPxPerZoomLevel: 110
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // Las pantallas táctiles priorizan fluidez sobre nitidez: las teselas
        // retina cuadruplican el trabajo de descarga y decodificación.
        detectRetina: !mobileMedia.matches,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
      }).addTo(map);

      map.attributionControl.setPrefix(false);
      map.attributionControl.addAttribution(
        'Barrios: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> (ODbL)'
      );
      map.setView([-33.6797, -65.4616], 13);

      map.createPane("barrioPane").style.zIndex = 350;
      map.createPane("radioPane").style.zIndex = 351;
      map.createPane("renabapPane").style.zIndex = 352;
      map.createPane("radioLabelPane").style.zIndex = 354;
      map.getPane("radioLabelPane").style.pointerEvents = "none";
      map.createPane("circuitoPane").style.zIndex = 355;
      map.createPane("circuitoLabelPane").style.zIndex = 356;
      map.getPane("circuitoLabelPane").style.pointerEvents = "none";
      map.createPane("renabapLabelPane").style.zIndex = 357;
      map.getPane("renabapLabelPane").style.pointerEvents = "none";
      map.createPane("rutaPane").style.zIndex = 360;
      map.createPane("rutaBusPane").style.zIndex = 470;
      map.getPane("rutaBusPane").style.pointerEvents = "none";
      map.createPane("barrioLabelPane").style.zIndex = 450;
      map.getPane("barrioLabelPane").style.pointerEvents = "none";
      map.createPane("userLocationPane").style.zIndex = 640;

      usesCluster = typeof L.markerClusterGroup === "function";
      if (usesCluster) {
        clusterLayer = L.markerClusterGroup({
          showCoverageOnHover: false,
          zoomToBoundsOnClick: true,
          spiderfyOnMaxZoom: true,
          removeOutsideVisibleBounds: true,
          maxClusterRadius: 48,
          disableClusteringAtZoom: 17,
          iconCreateFunction: createClusterIcon
        });
      } else {
        clusterLayer = L.layerGroup();
      }
      clusterLayer.addTo(map);

      map.on("zoomend", updateMarkerSelection);
      map.on("resize", updateMarkerSelection);
      map.on("zoomend", updateBarrioZoom);
      map.on("zoomend", updateBarrioLabelsVisibility);
      map.on("zoomend", updateCircuitLabelsVisibility);
      map.on("zoomend", updateRenabapLabelsVisibility);
      map.on("zoomend", updateRadioLabelsVisibility);
      map.on("click", function () {
        closeLayersPanel(false);
        closeRutasPanel(false);
      });
      map.on("popupopen", function () {
        if (el.mapLegends) el.mapLegends.classList.add("is-obscured");
        closeLayersPanel(false);
        closeRutasPanel(false);
      });
      map.on("popupclose", function () {
        if (el.mapLegends) el.mapLegends.classList.remove("is-obscured");
      });

      return true;
    } catch (error) {
      console.error("No se pudo inicializar el mapa", error);
      showMapError();
      return false;
    }
  }

  function createClusterIcon(cluster) {
    const children = cluster.getAllChildMarkers();
    const counts = {};
    children.forEach(function (marker) {
      const category = marker.options && marker.options.schoolCategory;
      if (category) counts[category] = (counts[category] || 0) + 1;
    });
    const dominant = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    })[0];
    const meta = dominant && TYPE_META[dominant] ? TYPE_META[dominant] : null;
    const color = meta ? meta.color : "#b8430a";
    const ink = meta && meta.ink ? ";--cluster-ink:" + meta.ink : "";
    const count = children.length;
    return L.divIcon({
      html: '<div style="--cluster-color:' + color + ink + '"><span>' + count + "</span></div>",
      className: "marker-cluster school-cluster",
      iconSize: L.point(43, 43)
    });
  }

  /* Capas y ajustes --------------------------------------------------------- */

  function syncLayersPanel() {
    if (el.layerBarrios) {
      el.layerBarrios.checked = state.barrios && !barriosUnavailable;
      el.layerBarrios.disabled = barriosUnavailable;
    }
    if (el.layerCircuitos) {
      el.layerCircuitos.checked = state.circuitos && !circuitosUnavailable;
      el.layerCircuitos.disabled = circuitosUnavailable;
    }
    if (el.layerRenabap) {
      el.layerRenabap.checked = state.renabap && !renabapUnavailable;
      el.layerRenabap.disabled = renabapUnavailable;
    }
    if (el.layerRadios) {
      el.layerRadios.checked = state.radios && !radiosUnavailable;
      el.layerRadios.disabled = radiosUnavailable;
    }
    const active = [
      state.barrios && !barriosUnavailable,
      state.circuitos && !circuitosUnavailable,
      state.renabap && !renabapUnavailable,
      state.radios && !radiosUnavailable
    ].filter(Boolean).length;
    if (el.layersBadge) {
      el.layersBadge.textContent = String(active);
      el.layersBadge.hidden = active === 0;
    }
    if (el.layersToggle) {
      el.layersToggle.setAttribute(
        "aria-label",
        active ? "Capas del mapa (" + active + " activas)" : "Capas del mapa"
      );
    }
  }

  function markLayerUnavailable(key, message) {
    if (key === "barrios") barriosUnavailable = true;
    if (key === "circuitos") circuitosUnavailable = true;
    if (key === "renabap") renabapUnavailable = true;
    if (key === "radios") radiosUnavailable = true;
    state[key] = false;
    updateLegends();

    const row = el["layer" + key.charAt(0).toUpperCase() + key.slice(1) + "Row"];
    const checkbox = el["layer" + key.charAt(0).toUpperCase() + key.slice(1)];
    const gear = el["layerSettings" + key.charAt(0).toUpperCase() + key.slice(1)];
    const meta = el["layerMeta" + key.charAt(0).toUpperCase() + key.slice(1)];
    if (row) row.classList.add("is-unavailable");
    if (meta) meta.textContent = message;
    if (checkbox) {
      checkbox.checked = false;
      checkbox.disabled = true;
    }
    if (gear) gear.disabled = true;
    if (state.settingsLayer === key) {
      setLayerSettingsTab(firstAvailableLayerTab());
    }
    syncLayersPanel();
  }

  function firstAvailableLayerTab() {
    const candidates = [
      ["barrios", barriosUnavailable],
      ["circuitos", circuitosUnavailable],
      ["radios", radiosUnavailable],
      ["renabap", renabapUnavailable]
    ];
    const available = candidates.filter(function (item) { return !item[1]; });
    return available.length ? available[0][0] : "circuitos";
  }

  function openLayersPanel() {
    if (!el.layersPanel || !el.layersToggle) return;
    closeRutasPanel(false);
    el.layersPanel.hidden = false;
    el.layersToggle.setAttribute("aria-expanded", "true");
  }

  function closeLayersPanel(returnFocus) {
    if (!el.layersPanel || el.layersPanel.hidden) return;
    el.layersPanel.hidden = true;
    if (el.layersToggle) el.layersToggle.setAttribute("aria-expanded", "false");
    if (returnFocus && el.layersToggle) el.layersToggle.focus({ preventScroll: true });
  }

  function toggleLayersPanel() {
    if (!el.layersPanel) return;
    if (el.layersPanel.hidden) openLayersPanel();
    else closeLayersPanel(true);
  }

  function openRutasPanel() {
    if (!el.rutasPanel || !el.rutasToggle) return;
    closeLayersPanel(false);
    el.rutasPanel.hidden = false;
    el.rutasToggle.setAttribute("aria-expanded", "true");
  }

  function closeRutasPanel(returnFocus) {
    if (!el.rutasPanel || el.rutasPanel.hidden) return;
    el.rutasPanel.hidden = true;
    if (el.rutasToggle) el.rutasToggle.setAttribute("aria-expanded", "false");
    if (returnFocus && el.rutasToggle) el.rutasToggle.focus({ preventScroll: true });
  }

  function toggleRutasPanel() {
    if (!el.rutasPanel) return;
    if (el.rutasPanel.hidden) openRutasPanel();
    else closeRutasPanel(true);
  }

  function setLayerSettingsTab(layer) {
    const allowed = ["barrios", "circuitos", "radios", "renabap"];
    state.settingsLayer = allowed.indexOf(layer) === -1 ? "circuitos" : layer;
    syncLayerSettings();
  }

  function syncLayerSettings() {
    const current = state.settingsLayer;
    el.layerTabs.forEach(function (tab) {
      const active = tab.dataset.layerTab === current;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
      const unavailable =
        (tab.dataset.layerTab === "barrios" && barriosUnavailable) ||
        (tab.dataset.layerTab === "circuitos" && circuitosUnavailable) ||
        (tab.dataset.layerTab === "radios" && radiosUnavailable) ||
        (tab.dataset.layerTab === "renabap" && renabapUnavailable);
      tab.disabled = unavailable;
    });
    el.layerPanels.forEach(function (panel) {
      panel.hidden = panel.dataset.layerPanel !== current;
    });

    if (el.barrioShowLabels) el.barrioShowLabels.checked = state.barrioLabels;
    if (el.barrioFillOpacity) {
      el.barrioFillOpacity.value = String(Math.round(state.barrioFillOpacity * 100));
    }
    if (el.barrioFillOpacityOutput) {
      el.barrioFillOpacityOutput.textContent = Math.round(state.barrioFillOpacity * 100) + "%";
    }

    const renabapReady = renabapFeatures.length > 0;
    const radiosReady = radiosFeatures.length > 0;
    if (!renabapReady && /^renabap_/.test(state.circuitoMetric)) {
      state.circuitoMetric = "electores";
    }
    if (!radiosReady && CIRCUITO_METRICS_RADIOS.indexOf(state.circuitoMetric) !== -1) {
      state.circuitoMetric = "electores";
    }
    el.circuitMetricRadios.forEach(function (radio) {
      radio.checked = radio.value === state.circuitoMetric;
      const required = radio.closest("[data-requires]");
      if (required) {
        radio.disabled = required.dataset.requires === "radios" ? !radiosReady : !renabapReady;
      }
    });
    if (el.circuitShowLabels) el.circuitShowLabels.checked = state.circuitoLabels;
    if (el.circuitShowValues) {
      el.circuitShowValues.checked = state.circuitoLabelValues;
      el.circuitShowValues.disabled = !state.circuitoLabels;
    }
    if (el.circuitFillOpacity) {
      el.circuitFillOpacity.value = String(Math.round(state.circuitoFillOpacity * 100));
    }
    if (el.circuitFillOpacityOutput) {
      el.circuitFillOpacityOutput.textContent = Math.round(state.circuitoFillOpacity * 100) + "%";
    }

    if (el.renabapShowLabels) el.renabapShowLabels.checked = state.renabapLabels;
    if (el.renabapShowValues) {
      el.renabapShowValues.checked = state.renabapLabelValues;
      el.renabapShowValues.disabled = !state.renabapLabels;
    }
    if (el.renabapFillOpacity) {
      el.renabapFillOpacity.value = String(Math.round(state.renabapFillOpacity * 100));
    }
    if (el.renabapFillOpacityOutput) {
      el.renabapFillOpacityOutput.textContent = Math.round(state.renabapFillOpacity * 100) + "%";
    }

    if (el.radioMetricRadios) {
      el.radioMetricRadios.forEach(function (radio) {
        radio.checked = radio.value === state.radioMetric;
      });
    }
    if (el.radioShowLabels) el.radioShowLabels.checked = state.radioLabels;
    if (el.radioShowValues) {
      el.radioShowValues.checked = state.radioLabelValues;
      el.radioShowValues.disabled = !state.radioLabels;
    }
    if (el.radioFillOpacity) {
      el.radioFillOpacity.value = String(Math.round(state.radioFillOpacity * 100));
    }
    if (el.radioFillOpacityOutput) {
      el.radioFillOpacityOutput.textContent = Math.round(state.radioFillOpacity * 100) + "%";
    }
  }

  function openLayerSettings(layer) {
    if (!el.layerSettingsDialog) return;
    setLayerSettingsTab(layer);
    closeLayersPanel(false);
    closeRutasPanel(false);
    if (typeof el.layerSettingsDialog.showModal === "function") {
      el.layerSettingsDialog.showModal();
    } else {
      el.layerSettingsDialog.setAttribute("open", "");
    }
  }

  function closeLayerSettings() {
    if (!el.layerSettingsDialog) return;
    if (typeof el.layerSettingsDialog.close === "function" && el.layerSettingsDialog.open) {
      el.layerSettingsDialog.close();
    } else {
      el.layerSettingsDialog.removeAttribute("open");
    }
  }

  function resetLayerSettings() {
    if (state.settingsLayer === "barrios") {
      state.barrioLabels = true;
      state.barrioFillOpacity = 0.07;
      applyBarrioVisuals();
    } else if (state.settingsLayer === "renabap") {
      state.renabapLabels = false;
      state.renabapLabelValues = false;
      state.renabapFillOpacity = 0.35;
      applyRenabapVisuals(true);
    } else if (state.settingsLayer === "radios") {
      state.radioMetric = "poblacion";
      state.radioLabels = false;
      state.radioLabelValues = false;
      state.radioFillOpacity = 0.55;
      applyRadioVisuals(true);
    } else {
      state.circuitoMetric = "electores";
      state.circuitoLabels = false;
      state.circuitoLabelValues = false;
      state.circuitoFillOpacity = 0.55;
      applyCircuitoVisuals(true);
    }
    syncLayerSettings();
  }

  /* Barrios ---------------------------------------------------------------- */

  function barrioStyle(feature) {
    const level = Number(feature.properties.level) || 9;
    const color = level >= 11 ? "#8a5a8f" : level === 10 ? "#b98a2e" : "#1f7a78";
    return {
      pane: "barrioPane",
      color: color,
      weight: 1.2,
      opacity: 0.55,
      fillColor: color,
      fillOpacity: state.barrioFillOpacity
    };
  }

  function applyBarrioVisuals() {
    if (barriosLayer) barriosLayer.setStyle(barrioStyle);
    updateBarrioLabelsVisibility();
  }

  function loadBarrios() {
    if (barriosLayer) return Promise.resolve(barriosLayer);
    if (barriosRequest) return barriosRequest;

    barriosRequest = fetch(BARRIOS_URL, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo leer barrios.geojson (" + response.status + ")");
        return response.json();
      })
      .then(function (data) {
        barriosLayer = L.geoJSON(data, {
          pane: "barrioPane",
          style: barrioStyle,
          onEachFeature: bindBarrioFeature
        });
        barrioLabelGroup = L.layerGroup(buildBarrioLabels(data));
        return barriosLayer;
      })
      .catch(function (error) {
        console.error("No se pudieron cargar los barrios", error);
        barriosRequest = null;
        markLayerUnavailable("barrios", "No se pudo cargar la capa de barrios");
        showMapToast("No pudimos cargar los barrios.", 6000);
        return null;
      });

    return barriosRequest;
  }

  function buildBarrioLabels(data) {
    const features = (data && data.features) || [];
    return features
      .map(function (feature) {
        const props = feature.properties || {};
        if (!props.label || !props.name) return null;
        const level = Number(props.level) || 9;
        return L.marker(props.label, {
          pane: "barrioLabelPane",
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "barrio-label barrio-label--" + level,
            html: '<span class="barrio-label__text">' + escapeHTML(props.name) + "</span>",
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          })
        });
      })
      .filter(Boolean);
  }

  function bindBarrioFeature(feature, layer) {
    const props = feature.properties || {};
    if (!props.name) return;
    if (props.osm) barrioFeatures.set(props.osm, feature);

    layer.bindTooltip(escapeHTML(props.name), {
      sticky: true,
      direction: "top",
      opacity: 1,
      className: "barrio-tooltip"
    });

    layer.bindPopup(function () {
      return buildBarrioPopup(props);
    }, {
      maxWidth: 262,
      minWidth: 210,
      className: "barrio-popup",
      closeButton: true
    });

    layer.on("mouseover", function () {
      layer.setStyle({ weight: 2, opacity: 0.85, fillOpacity: 0.16 });
    });
    layer.on("mouseout", function () {
      layer.setStyle(barrioStyle(feature));
    });
  }

  function buildBarrioPopup(props) {
    const kind = BARRIO_LEVEL_LABEL[Number(props.level)] || "Barrio";
    const count = state.dataLoaded ? countSchoolsInBarrio(props.osm) : null;
    const countLabel =
      count === null
        ? "Cargando instituciones…"
        : count === 1
          ? "1 institución educativa"
          : count + " instituciones educativas";
    return (
      '<div class="popup popup--barrio">' +
        '<p class="popup__type">' + escapeHTML(kind) + "</p>" +
        '<h3 class="popup__name">' + escapeHTML(props.name) + "</h3>" +
        '<p class="barrio-popup__count" aria-live="polite">' + countLabel + "</p>" +
        (props.alt ? '<p class="barrio-popup__alias">También conocido como «' + escapeHTML(props.alt) + "»</p>" : "") +
      "</div>"
    );
  }

  function countSchoolsInBarrio(osmId) {
    if (barrioCounts.has(osmId)) return barrioCounts.get(osmId);
    const feature = barrioFeatures.get(osmId);
    if (!feature) return 0;
    const count = state.schools.filter(function (school) {
      return school.lat != null && school.lng != null && isPointInFeature(school.lat, school.lng, feature.geometry);
    }).length;
    if (state.dataLoaded) barrioCounts.set(osmId, count);
    return count;
  }

  function isPointInFeature(lat, lng, geometry) {
    if (!geometry) return false;
    const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
    return polygons.some(function (polygon) {
      const ring = polygon[0];
      const inside = isPointInRing(lng, lat, ring);
      if (!inside) return false;
      return !polygon.slice(1).some(function (hole) {
        return isPointInRing(lng, lat, hole);
      });
    });
  }

  function isPointInRing(lng, lat, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0];
      const yi = ring[i][1];
      const xj = ring[j][0];
      const yj = ring[j][1];
      if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    return inside;
  }

  function syncBarrios() {
    const visible = state.barrios && !barriosUnavailable && mapReady;
    syncLayersPanel();
    if (!mapReady) return;

    if (!visible) {
      if (barriosLayer && map.hasLayer(barriosLayer)) map.removeLayer(barriosLayer);
      if (barrioLabelGroup && map.hasLayer(barrioLabelGroup)) map.removeLayer(barrioLabelGroup);
      return;
    }

    loadBarrios().then(function (layer) {
      if (!layer || !state.barrios) return;
      if (!map.hasLayer(layer)) layer.addTo(map);
      updateBarrioZoom();
      updateBarrioLabelsVisibility();
    });
  }

  function updateBarrioLabelsVisibility() {
    if (!mapReady || !barrioLabelGroup) return;
    const show = state.barrios && state.barrioLabels && map.getZoom() >= 13;
    if (show && !map.hasLayer(barrioLabelGroup)) barrioLabelGroup.addTo(map);
    else if (!show && map.hasLayer(barrioLabelGroup)) map.removeLayer(barrioLabelGroup);
  }

  function updateBarrioZoom() {
    if (!mapReady) return;
    const zoom = map.getZoom();
    const bucket = zoom < 13 ? "off" : zoom < 14.5 ? "far" : zoom < 15.5 ? "mid" : "near";
    map.getContainer().setAttribute("data-barrio-zoom", bucket);
  }

  /* Circuitos electorales --------------------------------------------------- */

  function formatNumber(value) {
    const number = Number(value);
    return Number.isFinite(number)
      ? number.toLocaleString("es-AR", { maximumFractionDigits: 0 })
      : "—";
  }

  function formatPct(value) {
    const number = Number(value);
    return Number.isFinite(number)
      ? number.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%"
      : "—";
  }

  function formatHectares(value) {
    const number = Number(value);
    return Number.isFinite(number)
      ? number.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " ha"
      : "—";
  }

  function circuitoMetricConfig() {
    return CIRCUITO_METRICS[state.circuitoMetric] || CIRCUITO_METRICS.electores;
  }

  function circuitoMetricValue(props, metric) {
    if (metric === "participacion") return Number(props.participacion);
    if (metric === "votantes") return Number(props.votantes);
    if (metric === "densidad") return Number(props.densidad_electoral);
    if (metric === "superficie") return Number(props.area_km2);
    if (metric === "escuelas") return Number(props.instituciones);
    if (metric === "renabap_hogares") return Number(props.renabap_hogares);
    if (metric === "renabap_barrios") return Number(props.renabap_barrios);
    if (CIRCUITO_METRICS_RADIOS.indexOf(metric) !== -1) return Number(props[metric]);
    return Number(props.electores);
  }

  function formatMetricNumber(value, metric) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "—";
    const config = CIRCUITO_METRICS[metric] || CIRCUITO_METRICS.electores;
    return (
      number.toLocaleString("es-AR", {
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals
      }) + config.suffix
    );
  }

  function countSchoolsInGeometry(geometry) {
    if (!geometry || !state.schools.length) return 0;
    return state.schools.filter(function (school) {
      return school.lat != null && school.lng != null && isPointInFeature(school.lat, school.lng, geometry);
    }).length;
  }

  function computeCircuitoRanges(features) {
    const values = {};
    Object.keys(CIRCUITO_METRICS).forEach(function (metric) {
      values[metric] = [];
    });
    (features || []).forEach(function (feature) {
      const props = feature.properties || {};
      Object.keys(values).forEach(function (metric) {
        const value = circuitoMetricValue(props, metric);
        if (Number.isFinite(value)) values[metric].push(value);
      });
    });
    const ranges = {};
    Object.keys(values).forEach(function (metric) {
      const list = values[metric];
      ranges[metric] = list.length
        ? [Math.min.apply(null, list), Math.max.apply(null, list)]
        : [0, 0];
    });
    return ranges;
  }

  function hexToRgb(value) {
    const hex = String(value || "").replace("#", "");
    const full = hex.length === 3
      ? hex.split("").map(function (char) { return char + char; }).join("")
      : hex;
    return {
      r: parseInt(full.slice(0, 2), 16),
      g: parseInt(full.slice(2, 4), 16),
      b: parseInt(full.slice(4, 6), 16)
    };
  }

  function mixHexColor(from, to, ratio) {
    const t = Math.max(0, Math.min(1, ratio));
    const a = hexToRgb(from);
    const b = hexToRgb(to);
    return (
      "rgb(" +
      Math.round(a.r + (b.r - a.r) * t) + "," +
      Math.round(a.g + (b.g - a.g) * t) + "," +
      Math.round(a.b + (b.b - a.b) * t) +
      ")"
    );
  }

  function circuitoColor(props) {
    const metric = state.circuitoMetric;
    const config = CIRCUITO_METRICS[metric] || CIRCUITO_METRICS.electores;
    const range = circuitoRanges[metric] || [0, 0];
    const value = circuitoMetricValue(props, metric);
    const span = range[1] - range[0];
    const ratio = span > 0 ? (value - range[0]) / span : 0.5;
    return mixHexColor(config.colors[0], config.colors[1], ratio);
  }

  function circuitoStyle(feature) {
    return {
      pane: "circuitoPane",
      color: "#4b2d8f",
      weight: 1.2,
      opacity: 0.58,
      fillColor: circuitoColor(feature.properties || {}),
      fillOpacity: state.circuitoFillOpacity
    };
  }

  function circuitoLabel(props) {
    return (
      (props.label || "Circuito") + " · " +
      circuitoMetricConfig().short + " " +
      formatMetricNumber(circuitoMetricValue(props, state.circuitoMetric), state.circuitoMetric)
    );
  }

  function buildCircuitoLabels() {
    if (!circuitosLayer || !mapReady) return;
    if (circuitoLabelGroup && map.hasLayer(circuitoLabelGroup)) map.removeLayer(circuitoLabelGroup);
    circuitoLabelGroup = L.layerGroup();

    circuitosLayer.eachLayer(function (layer) {
      const props = (layer.feature && layer.feature.properties) || {};
      const text =
        (props.circuito || props.id || "") +
        (state.circuitoLabelValues
          ? " · " + formatMetricNumber(circuitoMetricValue(props, state.circuitoMetric), state.circuitoMetric)
          : "");
      const marker = L.marker(layer.getBounds().getCenter(), {
        pane: "circuitoLabelPane",
        interactive: false,
        keyboard: false,
        icon: L.divIcon({
          className: "circuit-label",
          html: '<span class="circuit-label__text">' + escapeHTML(text) + "</span>",
          iconSize: [0, 0],
          iconAnchor: [0, 0]
        })
      });
      marker.feature = layer.feature;
      circuitoLabelGroup.addLayer(marker);
    });

    updateCircuitLabelsVisibility();
  }

  function updateCircuitLabelsVisibility() {
    if (!mapReady || !circuitoLabelGroup) return;
    const show =
      state.circuitos &&
      state.circuitoLabels &&
      map.getZoom() >= CIRCUITO_LABEL_ZOOM;
    if (show && !map.hasLayer(circuitoLabelGroup)) circuitoLabelGroup.addTo(map);
    else if (!show && map.hasLayer(circuitoLabelGroup)) map.removeLayer(circuitoLabelGroup);
  }

  function loadCircuitos() {
    if (circuitosLayer) return Promise.resolve(circuitosLayer);
    if (circuitosRequest) return circuitosRequest;

    circuitosRequest = fetch(CIRCUITOS_URL, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo leer circuitos.geojson (" + response.status + ")");
        return response.json();
      })
      .then(function (data) {
        const features = data && Array.isArray(data.features) ? data.features : [];
        if (!features.length) throw new Error("circuitos.geojson no contiene circuitos");
        circuitosMeta = data.metadata || null;
        features.forEach(function (feature) {
          const props = feature.properties || {};
          props.instituciones = countSchoolsInGeometry(feature.geometry);
        });
        circuitoRanges = computeCircuitoRanges(features);
        circuitosLayer = L.geoJSON(data, {
          pane: "circuitoPane",
          style: circuitoStyle,
          onEachFeature: bindCircuitoFeature
        });
        buildCircuitoLabels();
        applyRenabapToCircuitos();
        applyRadiosToCircuitos();
        syncLayerSettings();
        return circuitosLayer;
      })
      .catch(function (error) {
        console.error("No se pudieron cargar los circuitos electorales", error);
        circuitosRequest = null;
        markLayerUnavailable("circuitos", "No se pudo cargar la capa de circuitos");
        if (el.circuitLegend) el.circuitLegend.hidden = true;
        if (state.settingsLayer === "circuitos") closeLayerSettings();
        showMapToast("No pudimos cargar los circuitos electorales.", 6000);
        return null;
      });

    return circuitosRequest;
  }

  function bindCircuitoFeature(feature, layer) {
    const props = feature.properties || {};
    layer.bindTooltip(function () {
      return escapeHTML(circuitoLabel(props));
    }, {
      sticky: true,
      direction: "top",
      opacity: 1,
      className: "circuit-tooltip"
    });

    layer.bindPopup(function () {
      return buildCircuitoPopup(props);
    }, {
      maxWidth: 300,
      minWidth: 272,
      className: "circuit-popup"
    });

    layer.on("mouseover", function () {
      layer.setStyle({ weight: 2.6, opacity: 1, fillOpacity: 0.7 });
      if (layer.bringToFront) layer.bringToFront();
    });
    layer.on("mouseout", function () {
      layer.setStyle(circuitoStyle(feature));
    });
  }

  function buildCircuitoPopup(props) {
    const stats = [
      ["Electores", formatNumber(props.electores)],
      ["Votantes", formatNumber(props.votantes)],
      ["Participación", formatPct(props.participacion)],
      ["Superficie", formatMetricNumber(props.area_km2, "superficie")],
      ["Densidad electoral", formatMetricNumber(props.densidad_electoral, "densidad")],
      ["Instituciones", formatNumber(props.instituciones)]
    ];
    if (Number.isFinite(Number(props.renabap_hogares))) {
      stats.push(["Barrios populares", formatNumber(props.renabap_barrios)]);
      stats.push(["Hogares en barrios populares", formatNumber(props.renabap_hogares)]);
      if (Number.isFinite(Number(props.hogares)) && Number(props.hogares) > 0) {
        stats.push([
          "RENABAP sobre hogares del circuito",
          formatPct((Number(props.renabap_hogares) / Number(props.hogares)) * 100)
        ]);
      }
    }
    if (Number.isFinite(Number(props.poblacion))) {
      stats.push(["Población (Censo 2022)", formatNumber(props.poblacion)]);
      stats.push(["Densidad poblacional", formatMetricNumber(props.densidad_poblacional, "densidad_poblacional")]);
      stats.push(["65 años y más", formatPct(props.pct_65_mas)]);
      stats.push(["Sin cobertura de salud", formatPct(props.pct_sin_cobertura_salud)]);
      stats.push(["Hogares con NBI", formatPct(props.pct_nbi)]);
      stats.push(["Hogares sin cloacas", formatPct(props.pct_sin_cloacas)]);
      stats.push(["Electores por 100 hab.", formatMetricNumber(props.electores_por_100, "electores_por_100")]);
      stats.push(["Participación sobre VAP", formatPct(props.participacion_vap)]);
    }
    const rows = stats.map(function (item) {
      return (
        '<div class="circuito-popup__stat">' +
          "<dt>" + escapeHTML(item[0]) + "</dt>" +
          "<dd>" + escapeHTML(item[1]) + "</dd>" +
        "</div>"
      );
    }).join("");

    return (
      '<div class="popup popup--circuito" style="--pin:#1f4e8c">' +
        '<div class="popup__top">' +
          '<div class="popup__icon" aria-hidden="true">📊</div>' +
          "<div>" +
            '<p class="popup__type">Villa Mercedes · Sección 3. Pedernera</p>' +
            '<h3 class="popup__name">' + escapeHTML(props.label || "Circuito") + "</h3>" +
          "</div>" +
        "</div>" +
        '<div class="popup__body">' +
          '<dl class="circuito-popup__stats">' + rows + "</dl>" +
          '<p class="circuito-popup__note">La densidad usa la superficie del polígono. Las instituciones se cuentan desde el directorio educativo.</p>' +
          '<p class="circuito-popup__source">Padrón y resultados: CNE · Geometría: ULP Geo</p>' +
        "</div>" +
      "</div>"
    );
  }

  function setCircuitoAttribution(active) {
    if (!mapReady || !map || !map.attributionControl) return;
    if (active && !circuitoAttributionAdded) {
      map.attributionControl.addAttribution(CIRCUITO_ATTRIBUTION);
      circuitoAttributionAdded = true;
    } else if (!active && circuitoAttributionAdded) {
      map.attributionControl.removeAttribution(CIRCUITO_ATTRIBUTION);
      circuitoAttributionAdded = false;
    }
  }

  function refreshCircuitoInstituciones() {
    if (!circuitosLayer) return;
    const features = [];
    circuitosLayer.eachLayer(function (layer) {
      const props = (layer.feature && layer.feature.properties) || {};
      props.instituciones = countSchoolsInGeometry(layer.feature.geometry);
      features.push(layer.feature);
    });
    circuitoRanges = computeCircuitoRanges(features);
    circuitosLayer.setStyle(circuitoStyle);
    buildCircuitoLabels();
    updateCircuitoPanel();
  }

  function updateCircuitoPanel() {
    if (!circuitosMeta) return;
    const metric = state.circuitoMetric;
    const config = CIRCUITO_METRICS[metric] || CIRCUITO_METRICS.electores;
    const range = circuitoRanges[metric] || [0, 0];
    const features = (circuitosLayer && circuitosLayer.getLayers) ? circuitosLayer.getLayers() : [];
    const citywide = circuitosMeta.citywide || {};
    let electores = 0;
    let votantes = 0;

    features.forEach(function (layer) {
      const props = (layer.feature && layer.feature.properties) || {};
      electores += Number(props.electores) || 0;
      votantes += Number(props.votantes) || 0;
    });
    if (!features.length) {
      electores = Number(citywide.electores) || 0;
      votantes = Number(citywide.votantes) || 0;
    }
    const count = features.length || Number(circuitosMeta.circuit_count) || 0;
    const participation = electores > 0 ? (votantes / electores) * 100 : 0;

    if (el.circuitMetricLabel) el.circuitMetricLabel.textContent = config.label;
    if (el.circuitScale) {
      el.circuitScale.style.background =
        "linear-gradient(90deg, " + config.colors[0] + ", " + config.colors[1] + ")";
    }
    if (el.circuitRangeMin) el.circuitRangeMin.textContent = formatMetricNumber(range[0], metric);
    if (el.circuitRangeMax) el.circuitRangeMax.textContent = formatMetricNumber(range[1], metric);
    if (el.circuitSummary) {
      if (/^renabap_/.test(metric)) {
        let total = 0;
        if (metric === "renabap_barrios") {
          total = renabapFeatures.length;
        } else {
          features.forEach(function (layer) {
            const props = (layer.feature && layer.feature.properties) || {};
            total += Number(circuitoMetricValue(props, metric)) || 0;
          });
        }
        el.circuitSummary.innerHTML =
          "<strong>" + formatNumber(total) + "</strong> " +
          (metric === "renabap_barrios" ? "barrios populares" : "hogares en barrios populares") +
          " · " + count + " circuitos";
      } else if (CIRCUITO_METRICS_RADIOS.indexOf(metric) !== -1) {
        let total = 0;
        features.forEach(function (layer) {
          const props = (layer.feature && layer.feature.properties) || {};
          total += Number(props.poblacion) || 0;
        });
        el.circuitSummary.innerHTML =
          "<strong>" + formatNumber(total) + "</strong> habitantes (Censo 2022) · " +
          count + " circuitos";
      } else {
        el.circuitSummary.innerHTML =
          "<strong>" + count + " circuitos</strong> · " +
          formatNumber(electores) + " electores · " +
          formatPct(participation) + " de participación";
      }
    }
  }

  function applyCircuitoVisuals(rebuildLabels) {
    if (circuitosLayer) circuitosLayer.setStyle(circuitoStyle);
    if (rebuildLabels) buildCircuitoLabels();
    updateCircuitoPanel();
  }

  function syncCircuitos() {
    const visible = state.circuitos && !circuitosUnavailable && mapReady;
    syncLayersPanel();
    updateLegends();
    if (!mapReady) return;

    if (!visible) {
      setCircuitoAttribution(false);
      if (circuitosLayer && map.hasLayer(circuitosLayer)) map.removeLayer(circuitosLayer);
      if (circuitoLabelGroup && map.hasLayer(circuitoLabelGroup)) map.removeLayer(circuitoLabelGroup);
      return;
    }

    loadCircuitos().then(function (layer) {
      if (!layer || !state.circuitos) return;
      if (!map.hasLayer(layer)) layer.addTo(map);
      setCircuitoAttribution(true);
      updateCircuitLabelsVisibility();
      updateCircuitoPanel();
      const count = layer.getLayers ? layer.getLayers().length : 0;
      showMapToast(count + " circuitos electorales en el mapa.", 4000);
    });
  }

  /* Radios censales (Censo 2022) ------------------------------------------- */

  function radioMetricConfig() {
    return RADIO_METRICS[state.radioMetric] || RADIO_METRICS.poblacion;
  }

  function radioMetricValue(props, metric) {
    return props[metric] == null ? NaN : Number(props[metric]);
  }

  function formatRadioMetric(value, metric) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "—";
    const config = RADIO_METRICS[metric] || RADIO_METRICS.poblacion;
    return (
      number.toLocaleString("es-AR", {
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals
      }) + config.suffix
    );
  }

  function computeRadioRanges(features) {
    const values = {};
    Object.keys(RADIO_METRICS).forEach(function (metric) {
      values[metric] = [];
    });
    (features || []).forEach(function (feature) {
      const props = feature.properties || {};
      Object.keys(values).forEach(function (metric) {
        const value = radioMetricValue(props, metric);
        if (Number.isFinite(value)) values[metric].push(value);
      });
    });
    const ranges = {};
    Object.keys(values).forEach(function (metric) {
      const list = values[metric];
      ranges[metric] = list.length
        ? [Math.min.apply(null, list), Math.max.apply(null, list)]
        : [0, 0];
    });
    return ranges;
  }

  function radioColor(props) {
    const metric = state.radioMetric;
    const config = RADIO_METRICS[metric] || RADIO_METRICS.poblacion;
    const range = radioRanges[metric] || [0, 0];
    const value = radioMetricValue(props, metric);
    const span = range[1] - range[0];
    const ratio = span > 0 ? (value - range[0]) / span : 0.5;
    return mixHexColor(config.colors[0], config.colors[1], ratio);
  }

  function radioStyle(feature) {
    const props = feature.properties || {};
    return {
      pane: "radioPane",
      color: props.baja_poblacion ? "#8a7060" : "#7a4a2a",
      weight: 0.7,
      opacity: 0.45,
      dashArray: props.baja_poblacion ? "3 2" : null,
      fillColor: radioColor(props),
      fillOpacity: state.radioFillOpacity
    };
  }

  function applyRadioVisuals(rebuildLabels) {
    if (radiosLayer) radiosLayer.setStyle(radioStyle);
    if (rebuildLabels) {
      if (radiosLabelGroup && mapReady && map.hasLayer(radiosLabelGroup)) {
        map.removeLayer(radiosLabelGroup);
      }
      radiosLabelGroup = L.layerGroup(buildRadioLabels());
    }
    updateRadioLabelsVisibility();
    updateRadiosPanel();
  }

  function loadRadios() {
    if (radiosLayer) return Promise.resolve(radiosLayer);
    if (radiosRequest) return radiosRequest;

    radiosRequest = fetch(RADIOS_URL, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo leer radios.geojson (" + response.status + ")");
        return response.json();
      })
      .then(function (data) {
        const features = data && Array.isArray(data.features) ? data.features : [];
        if (!features.length) throw new Error("radios.geojson no contiene radios censales");
        radiosFeatures = features;
        radiosMeta = data.metadata || null;
        radioRanges = computeRadioRanges(features);
        radiosLayer = L.geoJSON(data, {
          pane: "radioPane",
          style: radioStyle,
          onEachFeature: bindRadioFeature
        });
        radiosLabelGroup = L.layerGroup(buildRadioLabels());
        applyRadiosToCircuitos();
        syncLayerSettings();
        updateLegends();
        return radiosLayer;
      })
      .catch(function (error) {
        console.error("No se pudieron cargar los radios censales", error);
        radiosRequest = null;
        markLayerUnavailable("radios", "No se pudo cargar la capa de radios censales");
        showMapToast("No pudimos cargar los radios censales.", 6000);
        return null;
      });

    return radiosRequest;
  }

  function buildRadioLabels() {
    return radiosFeatures
      .map(function (feature) {
        const props = feature.properties || {};
        if (!props.label) return null;
        const text =
          "R " + props.slug +
          (state.radioLabelValues
            ? " · " + formatRadioMetric(radioMetricValue(props, state.radioMetric), state.radioMetric)
            : "");
        return L.marker(props.label, {
          pane: "radioLabelPane",
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "radio-label",
            html: '<span class="radio-label__text">' + escapeHTML(text) + "</span>",
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          })
        });
      })
      .filter(Boolean);
  }

  function updateRadioLabelsVisibility() {
    if (!mapReady || !radiosLabelGroup) return;
    const show = state.radios && state.radioLabels && map.getZoom() >= RADIOS_LABEL_ZOOM;
    if (show && !map.hasLayer(radiosLabelGroup)) radiosLabelGroup.addTo(map);
    else if (!show && map.hasLayer(radiosLabelGroup)) map.removeLayer(radiosLabelGroup);
  }

  function bindRadioFeature(feature, layer) {
    const props = feature.properties || {};
    layer.bindTooltip(function () {
      return escapeHTML(
        "Radio " + props.slug + " · " + formatNumber(props.poblacion) + " hab."
      );
    }, {
      sticky: true,
      direction: "top",
      opacity: 1,
      className: "radio-tooltip"
    });

    layer.bindPopup(function () {
      return buildRadioPopup(props);
    }, {
      maxWidth: 310,
      minWidth: 270,
      className: "radio-popup"
    });

    layer.on("mouseover", function () {
      layer.setStyle({ weight: 2, opacity: 1, fillOpacity: Math.min(0.85, state.radioFillOpacity + 0.15) });
      if (layer.bringToFront) layer.bringToFront();
    });
    layer.on("mouseout", function () {
      layer.setStyle(radioStyle(feature));
    });
  }

  function radioStatRows(props) {
    return [
      ["Población", formatNumber(props.poblacion)],
      ["Hogares", formatNumber(props.hogares)],
      ["Viviendas", formatNumber(props.viviendas)],
      ["Superficie", formatMetricNumber(props.area_km2, "superficie")],
      ["Densidad", formatRadioMetric(props.densidad, "densidad")],
      ["0–14 años", formatNumber(props.p0_14)],
      ["15–64 años", formatNumber(props.p15_64)],
      ["65 años y más", formatNumber(props.p65_mas) + " · " + formatPct(props.pct_65_mas)],
      ["Sin cobertura de salud", formatNumber(props.sin_cobertura_salud) + " · " + formatPct(props.pct_sin_cobertura_salud)],
      ["Hogares con NBI", formatNumber(props.nbi_hogares) + " · " + formatPct(props.pct_nbi)],
      ["Hogares sin cloacas", formatNumber(props.sin_cloacas) + " · " + formatPct(props.pct_sin_cloacas)],
      ["Hogares sin gas de red", formatNumber(props.sin_gas_red) + " · " + formatPct(props.pct_sin_gas_red)],
      ["Hogares sin agua de red", formatNumber(props.sin_agua_red) + " · " + formatPct(props.pct_sin_agua_red)],
      ["Clima educativo bajo", formatNumber(props.clima_bajo) + " · " + formatPct(props.pct_clima_bajo)]
    ].map(function (item) {
      return (
        '<div class="circuito-popup__stat">' +
          "<dt>" + escapeHTML(item[0]) + "</dt>" +
          "<dd>" + escapeHTML(item[1]) + "</dd>" +
        "</div>"
      );
    }).join("");
  }

  function buildRadioPopup(props) {
    const circuitos = Array.isArray(props.circuitos) ? props.circuitos : [];
    const circuitText = circuitos.length
      ? circuitos
          .map(function (item) {
            const ratio = Math.round((Number(item.ratio) || 0) * 100);
            return "<strong>" + escapeHTML(item.label || item.id) + "</strong> (" + ratio + " %)";
          })
          .join(" · ")
      : "Sin intersección con circuitos";
    const baja = props.baja_poblacion
      ? '<p class="radio-popup__note">Radio con menos de 50 habitantes: los porcentajes son poco robustos.</p>'
      : "";

    return (
      '<div class="popup popup--radio" style="--pin:#b8430a">' +
        '<div class="popup__top">' +
          '<div class="popup__icon" aria-hidden="true">👥</div>' +
          "<div>" +
            '<p class="popup__type">' + escapeHTML(props.localidad || "Villa Mercedes") + " · Radio " + escapeHTML(props.slug) + "</p>" +
            '<h3 class="popup__name">Radio censal ' + escapeHTML(props.codigo) + "</h3>" +
          "</div>" +
        "</div>" +
        '<div class="popup__body">' +
          '<dl class="circuito-popup__stats">' + radioStatRows(props) + "</dl>" +
          baja +
          '<p class="renabap-popup__circuitos">' + circuitText + "</p>" +
          '<p class="radio-popup__note">Los porcentajes usan la población o los hogares del radio como denominador. El clima educativo bajo agrupa los hogares con clima bajo y muy bajo.</p>' +
          '<p class="radio-popup__source">INDEC · Censo Nacional 2022 · resultados por radio</p>' +
        "</div>" +
      "</div>"
    );
  }

  function applyRadiosToCircuitos() {
    if (!circuitosLayer || !radiosMeta || !radiosMeta.circuitos) return;
    const summary = radiosMeta.circuitos;
    const features = [];
    circuitosLayer.eachLayer(function (layer) {
      const props = (layer.feature && layer.feature.properties) || {};
      const values = summary[String(props.id)];
      if (values) {
        CIRCUITO_METRICS_RADIOS.forEach(function (metric) {
          if (!(metric in props) && values[metric] != null) props[metric] = values[metric];
        });
        props.poblacion = values.poblacion;
        props.hogares = values.hogares;
      }
      features.push(layer.feature);
    });
    circuitoRanges = computeCircuitoRanges(features);
    applyCircuitoVisuals(true);
    syncLayerSettings();
  }

  function setRadiosAttribution(active) {
    if (!mapReady || !map || !map.attributionControl) return;
    if (active && !radiosAttributionAdded) {
      map.attributionControl.addAttribution(RADIOS_ATTRIBUTION);
      radiosAttributionAdded = true;
    } else if (!active && radiosAttributionAdded) {
      map.attributionControl.removeAttribution(RADIOS_ATTRIBUTION);
      radiosAttributionAdded = false;
    }
  }

  function updateRadiosPanel() {
    if (!radiosMeta) return;
    const metric = state.radioMetric;
    const config = RADIO_METRICS[metric] || RADIO_METRICS.poblacion;
    const range = radioRanges[metric] || [0, 0];
    const coverage = radiosMeta.coverage || {};

    if (el.radiosMetricLabel) el.radiosMetricLabel.textContent = config.label;
    if (el.radiosScale) {
      el.radiosScale.style.background =
        "linear-gradient(90deg, " + config.colors[0] + ", " + config.colors[1] + ")";
    }
    if (el.radiosRangeMin) el.radiosRangeMin.textContent = formatRadioMetric(range[0], metric);
    if (el.radiosRangeMax) el.radiosRangeMax.textContent = formatRadioMetric(range[1], metric);
    if (el.radiosLegendNote) {
      el.radiosLegendNote.textContent =
        formatNumber(coverage.radios_urbano_mixto || radiosFeatures.length) + " radios urbanos · Villa Mercedes y Villa Reynolds";
    }
    if (el.radiosSummary) {
      el.radiosSummary.innerHTML =
        "<strong>" + formatNumber(coverage.poblacion) + "</strong> habitantes · " +
        formatNumber(coverage.hogares) + " hogares";
    }
  }

  function updateLegends() {
    const circuitVisible = state.circuitos && !circuitosUnavailable && mapReady;
    const radiosVisible = state.radios && !radiosUnavailable && mapReady;
    if (el.mapLegends) el.mapLegends.hidden = !(circuitVisible || radiosVisible);
    if (el.circuitLegend) el.circuitLegend.hidden = !circuitVisible;
    if (el.radiosLegend) el.radiosLegend.hidden = !radiosVisible;
    if (!circuitVisible && !radiosVisible && el.mapLegends) {
      el.mapLegends.classList.remove("is-obscured");
    }
    if (radiosVisible) updateRadiosPanel();
  }

  function syncRadios() {
    const visible = state.radios && !radiosUnavailable && mapReady;
    syncLayersPanel();
    updateLegends();
    if (!mapReady) return;

    if (!visible) {
      setRadiosAttribution(false);
      if (radiosLayer && map.hasLayer(radiosLayer)) map.removeLayer(radiosLayer);
      if (radiosLabelGroup && map.hasLayer(radiosLabelGroup)) map.removeLayer(radiosLabelGroup);
      return;
    }

    loadRadios().then(function (layer) {
      if (!layer || !state.radios) return;
      if (!map.hasLayer(layer)) layer.addTo(map);
      setRadiosAttribution(true);
      updateRadioLabelsVisibility();
      updateRadiosPanel();
      updateLegends();
      const count = radiosFeatures.length;
      showMapToast(count + " radios censales en el mapa.", 4000);
    });
  }

  /* Barrios populares (RENABAP) -------------------------------------------- */

  function renabapStyle(feature) {
    return {
      pane: "renabapPane",
      color: "#8f3410",
      weight: 1.6,
      opacity: 0.85,
      dashArray: "5 3",
      fillColor: "#b8430a",
      fillOpacity: state.renabapFillOpacity
    };
  }

  function applyRenabapVisuals(rebuildLabels) {
    if (renabapLayer) renabapLayer.setStyle(renabapStyle);
    if (rebuildLabels) {
      if (renabapLabelGroup && mapReady && map.hasLayer(renabapLabelGroup)) {
        map.removeLayer(renabapLabelGroup);
      }
      renabapLabelGroup = L.layerGroup(buildRenabapLabels());
    }
    updateRenabapLabelsVisibility();
  }

  function loadRenabap() {
    if (renabapLayer) return Promise.resolve(renabapLayer);
    if (renabapRequest) return renabapRequest;

    renabapRequest = fetch(RENABAP_URL, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo leer renabap.geojson (" + response.status + ")");
        return response.json();
      })
      .then(function (data) {
        const features = data && Array.isArray(data.features) ? data.features : [];
        if (!features.length) throw new Error("renabap.geojson no contiene barrios populares");
        renabapFeatures = features;
        renabapMeta = data.metadata || null;
        renabapLayer = L.geoJSON(data, {
          pane: "renabapPane",
          style: renabapStyle,
          onEachFeature: bindRenabapFeature
        });
        renabapLabelGroup = L.layerGroup(buildRenabapLabels());
        applyRenabapToCircuitos();
        syncLayerSettings();
        return renabapLayer;
      })
      .catch(function (error) {
        console.error("No se pudieron cargar los barrios populares", error);
        renabapRequest = null;
        markLayerUnavailable("renabap", "No se pudo cargar la capa de barrios populares");
        showMapToast("No pudimos cargar los barrios populares.", 6000);
        return null;
      });

    return renabapRequest;
  }

  function buildRenabapLabels() {
    return renabapFeatures
      .map(function (feature) {
        const props = feature.properties || {};
        if (!props.label || !props.nombre) return null;
        const text =
          props.nombre +
          (state.renabapLabelValues ? " · " + formatNumber(props.hogares) + " hog." : "");
        return L.marker(props.label, {
          pane: "renabapLabelPane",
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "renabap-label",
            html: '<span class="renabap-label__text">' + escapeHTML(text) + "</span>",
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          })
        });
      })
      .filter(Boolean);
  }

  function updateRenabapLabelsVisibility() {
    if (!mapReady || !renabapLabelGroup) return;
    const show = state.renabap && state.renabapLabels && map.getZoom() >= RENABAP_LABEL_ZOOM;
    if (show && !map.hasLayer(renabapLabelGroup)) renabapLabelGroup.addTo(map);
    else if (!show && map.hasLayer(renabapLabelGroup)) map.removeLayer(renabapLabelGroup);
  }

  function bindRenabapFeature(feature, layer) {
    const props = feature.properties || {};
    layer.bindTooltip(escapeHTML(props.nombre || "Barrio popular"), {
      sticky: true,
      direction: "top",
      opacity: 1,
      className: "renabap-tooltip"
    });

    layer.bindPopup(function () {
      return buildRenabapPopup(props);
    }, {
      maxWidth: 300,
      minWidth: 250,
      className: "renabap-popup"
    });

    layer.on("mouseover", function () {
      layer.setStyle({ weight: 2.4, opacity: 1, fillOpacity: Math.min(0.75, state.renabapFillOpacity + 0.18) });
      if (layer.bringToFront) layer.bringToFront();
    });
    layer.on("mouseout", function () {
      layer.setStyle(renabapStyle(feature));
    });
  }

  function buildRenabapPopup(props) {
    const circuitos = Array.isArray(props.circuitos) ? props.circuitos : [];
    const circuitText = circuitos.length
      ? circuitos
          .map(function (item) {
            const ratio = Math.round((Number(item.ratio) || 0) * 100);
            return (
              "<strong>" + escapeHTML(item.label || item.id) + "</strong> (" +
              ratio + " % · " + formatNumber(item.hogares) + " hog.)"
            );
          })
          .join(" · ")
      : "Sin intersección con circuitos";
    const viviendas = props.viviendas == null ? "Sin dato" : formatNumber(props.viviendas);

    return (
      '<div class="popup popup--renabap" style="--pin:#b8430a">' +
        '<div class="popup__top">' +
          '<div class="popup__icon" aria-hidden="true">🏘️</div>' +
          "<div>" +
            '<p class="popup__type">Barrio popular · RENABAP</p>' +
            '<h3 class="popup__name">' + escapeHTML(props.nombre || "Barrio popular") + "</h3>" +
          "</div>" +
        "</div>" +
        '<div class="popup__body">' +
          '<dl class="circuito-popup__stats">' +
            '<div class="circuito-popup__stat"><dt>Hogares</dt><dd>' + formatNumber(props.hogares) + "</dd></div>" +
            '<div class="circuito-popup__stat"><dt>Viviendas</dt><dd>' + escapeHTML(viviendas) + "</dd></div>" +
            '<div class="circuito-popup__stat"><dt>Superficie</dt><dd>' + escapeHTML(formatHectares(props.area_ha)) + "</dd></div>" +
          "</dl>" +
          '<p class="renabap-popup__circuitos">' + circuitText + "</p>" +
          '<p class="renabap-popup__note">Hogares: familias registradas en el RENABAP. El GeoJSON oficial no publica viviendas; se muestran como «Sin dato».</p>' +
          '<p class="renabap-popup__source">RENABAP · SISU · datos de diciembre de 2023</p>' +
        "</div>" +
      "</div>"
    );
  }

  function applyRenabapToCircuitos() {
    if (!circuitosLayer || !renabapFeatures.length) return;
    const totals = new Map();
    renabapFeatures.forEach(function (feature) {
      const props = feature.properties || {};
      (props.circuitos || []).forEach(function (item) {
        const key = String(item.id);
        const current = totals.get(key) || { barrios: 0, hogares: 0 };
        current.hogares += Number(item.hogares) || 0;
        if ((Number(item.ratio) || 0) >= 0.01) current.barrios += 1;
        totals.set(key, current);
      });
    });

    const features = [];
    circuitosLayer.eachLayer(function (layer) {
      const props = (layer.feature && layer.feature.properties) || {};
      const total = totals.get(String(props.id));
      props.renabap_barrios = total ? total.barrios : 0;
      props.renabap_hogares = total ? Math.round(total.hogares) : 0;
      features.push(layer.feature);
    });
    circuitoRanges = computeCircuitoRanges(features);
    applyCircuitoVisuals(true);
    syncLayerSettings();
  }

  function setRenabapAttribution(active) {
    if (!mapReady || !map || !map.attributionControl) return;
    if (active && !renabapAttributionAdded) {
      map.attributionControl.addAttribution(RENABAP_ATTRIBUTION);
      renabapAttributionAdded = true;
    } else if (!active && renabapAttributionAdded) {
      map.attributionControl.removeAttribution(RENABAP_ATTRIBUTION);
      renabapAttributionAdded = false;
    }
  }

  function syncRenabap() {
    const visible = state.renabap && !renabapUnavailable && mapReady;
    syncLayersPanel();
    if (!mapReady) return;

    if (!visible) {
      setRenabapAttribution(false);
      if (renabapLayer && map.hasLayer(renabapLayer)) map.removeLayer(renabapLayer);
      if (renabapLabelGroup && map.hasLayer(renabapLabelGroup)) map.removeLayer(renabapLabelGroup);
      return;
    }

    loadRenabap().then(function (layer) {
      if (!layer || !state.renabap) return;
      if (!map.hasLayer(layer)) layer.addTo(map);
      setRenabapAttribution(true);
      updateRenabapLabelsVisibility();
      const count = renabapFeatures.length;
      showMapToast(count + " barrios populares en el mapa.", 4000);
    });
  }

  /* Recorridos de colectivos ------------------------------------------------ */

  function rutaEntries(data) {
    if (!data || typeof data !== "object") return [];
    if (Array.isArray(data.features)) {
      return data.features
        .filter(function (feature) {
          return feature && feature.type === "Feature";
        })
        .map(function (feature) {
          return Object.assign({}, feature.properties || {}, {
            geometry: feature.geometry || null
          });
        });
    }
    return Array.isArray(data.rutas) ? data.rutas : [];
  }

  function rutaRecorrido(ruta) {
    if (!ruta) return [];
    if (Array.isArray(ruta.recorrido)) return ruta.recorrido;
    const geometry = ruta.geometry;
    if (!geometry) return [];
    if (geometry.type === "LineString") {
      return Array.isArray(geometry.coordinates) ? geometry.coordinates : [];
    }
    if (geometry.type === "MultiLineString" && Array.isArray(geometry.coordinates)) {
      return geometry.coordinates.reduce(function (all, line) {
        return all.concat(Array.isArray(line) ? line : []);
      }, []);
    }
    return [];
  }

  function rutaLinea(ruta, source) {
    const explicit = ruta && ruta.linea != null ? String(ruta.linea).trim().toUpperCase() : "";
    if (explicit) return explicit.slice(0, 2);

    const idMatch = /^linea-([a-z0-9])/i.exec(String((ruta && ruta.id) || ""));
    if (idMatch) return idMatch[1].toUpperCase();

    const nameMatch = /l[ií]nea\s+([a-z0-9])/i.exec(String((ruta && ruta.nombre) || ""));
    if (nameMatch) return nameMatch[1].toUpperCase();

    return source && source.linea ? String(source.linea).toUpperCase() : "";
  }

  function normalizeRutas(data, source) {
    return rutaEntries(data)
      .map(function (ruta, index) {
        // Los archivos de recorridos guardan [lng, lat]; Leaflet espera [lat, lng].
        const puntos = rutaRecorrido(ruta)
          .map(function (par) {
            if (!Array.isArray(par) || par.length < 2) return null;
            const lng = Number(par[0]);
            const lat = Number(par[1]);
            return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
          })
          .filter(Boolean);
        const linea = rutaLinea(ruta, source);
        const color =
          typeof ruta.color === "string" && /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(ruta.color)
            ? ruta.color
            : RUTA_LINE_COLORS[linea] || RUTA_COLOR_DEFAULT;
        return Object.assign({}, ruta, {
          id: String(ruta.id || "ruta-" + index),
          linea: linea,
          nombre: String(ruta.nombre || "Recorrido " + (index + 1)),
          tipo: ruta.tipo ? String(ruta.tipo) : "urbano",
          empresa: ruta.empresa ? String(ruta.empresa) : "",
          horario: ruta.horario ? String(ruta.horario) : "",
          frecuencia: ruta.frecuencia ? String(ruta.frecuencia) : "",
          color: color,
          puntos: puntos
        });
      })
      .filter(function (ruta) { return ruta.puntos.length > 1; });
  }

  function rutaStyle(ruta) {
    return {
      pane: "rutaPane",
      color: ruta.color,
      weight: 5,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round"
    };
  }

  function rutaLineaNombre(linea) {
    return RUTA_LINE_NAMES[linea] || "Línea " + linea;
  }

  function rutaAlgunaLineaVisible() {
    return RUTAS_SOURCES.some(function (source) {
      return state.rutaLineas[source.linea] !== false;
    });
  }

  function buildRutaLineRows() {
    if (!el.rutasLineas) return;
    el.rutasLineas.innerHTML = RUTAS_SOURCES.map(function (source) {
      const linea = source.linea;
      const id = "ruta-linea-" + linea.toLowerCase();
      const color = RUTA_LINE_COLORS[linea] || RUTA_COLOR_DEFAULT;
      const checked = state.rutaLineas[linea] === false ? "" : " checked";
      return (
        '<li class="layers-panel__item" data-ruta-row="' + escapeAttr(linea) + '">' +
          '<label class="layers-panel__switch">' +
            '<input type="checkbox" id="' + escapeAttr(id) + '" data-ruta-linea="' + escapeAttr(linea) + '"' + checked + ">" +
            '<span class="layers-panel__text">' +
              '<strong><span class="rutas-line__dot" style="--ruta-color:' + escapeAttr(color) + '" aria-hidden="true"></span>' +
                escapeHTML(rutaLineaNombre(linea)) +
              "</strong>" +
              '<small data-ruta-meta="' + escapeAttr(linea) + '">Visible en el mapa</small>' +
            "</span>" +
          "</label>" +
        "</li>"
      );
    }).join("");
  }

  function syncRutasControls() {
    const visible = state.rutas && !rutasUnavailable;
    if (el.rutaVisible) {
      el.rutaVisible.checked = visible;
      el.rutaVisible.disabled = rutasUnavailable;
    }
    if (el.rutasMeta) {
      el.rutasMeta.textContent = rutasUnavailable
        ? "No se pudieron cargar los recorridos"
        : visible
          ? "Visibles en el mapa"
          : "Líneas A, E y Este";
    }
    if (el.rutasLineas) {
      RUTAS_SOURCES.forEach(function (source) {
        const linea = source.linea;
        const row = el.rutasLineas.querySelector('[data-ruta-row="' + linea + '"]');
        if (!row) return;
        const input = row.querySelector("[data-ruta-linea]");
        const meta = row.querySelector("[data-ruta-meta]");
        const falla = rutasFaltantes.indexOf(linea) !== -1;
        const activa = state.rutaLineas[linea] !== false;
        if (input) {
          input.checked = activa;
          input.disabled = rutasUnavailable || falla;
        }
        if (meta) {
          meta.textContent = falla ? "No se pudo cargar" : activa ? "Visible en el mapa" : "Oculta";
        }
        row.classList.toggle("is-unavailable", falla);
      });
    }
    if (el.rutasToggle) {
      el.rutasToggle.classList.toggle("is-active", visible);
      const label = visible ? "Recorridos de colectivos, visibles" : "Recorridos de colectivos";
      el.rutasToggle.setAttribute("aria-label", label);
      el.rutasToggle.setAttribute("title", label);
    }
  }

  function applyRutaLineVisibility() {
    if (rutasLayer) {
      Object.keys(rutaGroups).forEach(function (linea) {
        const group = rutaGroups[linea];
        const activa = state.rutaLineas[linea] !== false;
        if (activa && !rutasLayer.hasLayer(group)) rutasLayer.addLayer(group);
        if (!activa && rutasLayer.hasLayer(group)) rutasLayer.removeLayer(group);
      });
    }
    syncRutasControls();
  }

  function loadRutaSource(source) {
    return fetch(source.url, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("No se pudo leer " + source.url.replace(/^\.\//, "") + " (" + response.status + ")");
        }
        return response.json();
      })
      .then(function (data) {
        return normalizeRutas(data, source);
      });
  }

  function loadRutas() {
    if (rutasLayer) return Promise.resolve(rutasLayer);
    if (rutasRequest) return rutasRequest;

    rutasRequest = Promise.all(
      RUTAS_SOURCES.map(function (source) {
        return loadRutaSource(source)
          .then(function (rutas) {
            return { source: source, rutas: rutas };
          })
          .catch(function (error) {
            console.error("No se pudo cargar el recorrido de la línea " + source.linea, error);
            return { source: source, rutas: null };
          });
      })
    )
      .then(function (results) {
        rutasFaltantes = results
          .filter(function (result) { return result.rutas === null; })
          .map(function (result) { return result.source.linea; });
        const rutas = results.reduce(function (all, result) {
          return result.rutas ? all.concat(result.rutas) : all;
        }, []);

        if (!rutas.length) throw new Error("No se pudo leer ningún recorrido de colectivos");

        const layer = L.layerGroup();
        const groups = {};

        rutas.forEach(function (ruta) {
          const lineaKey = ruta.linea || "";
          if (!groups[lineaKey]) groups[lineaKey] = L.layerGroup();
          const group = groups[lineaKey];

          // Contorno claro para que el recorrido se lea sobre barrios y teselas.
          L.polyline(ruta.puntos, {
            pane: "rutaPane",
            color: "#fffdf9",
            weight: 9,
            opacity: 0.8,
            lineCap: "round",
            lineJoin: "round",
            interactive: false
          }).addTo(group);

          const polilinea = L.polyline(ruta.puntos, rutaStyle(ruta)).addTo(group);
          polilinea.bindTooltip(escapeHTML(ruta.nombre), {
            sticky: true,
            direction: "top",
            opacity: 1,
            className: "ruta-tooltip"
          });
          polilinea.bindPopup(function () {
            return buildRutaPopup(ruta);
          }, {
            maxWidth: 290,
            minWidth: 230,
            className: "ruta-popup"
          });
          polilinea.on("mouseover", function () {
            polilinea.setStyle({ weight: 7, opacity: 1 });
            if (polilinea.bringToFront) polilinea.bringToFront();
          });
          polilinea.on("mouseout", function () {
            polilinea.setStyle(rutaStyle(ruta));
          });
        });

        rutaAnimations = buildRutaAnimations(rutas, groups);
        Object.keys(groups).forEach(function (lineaKey) {
          layer.addLayer(groups[lineaKey]);
        });
        rutaGroups = groups;
        rutasLayer = layer;
        rutasCount = rutas.length;
        applyRutaLineVisibility();
        return rutasLayer;
      })
      .catch(function (error) {
        console.error("No se pudieron cargar los recorridos de colectivos", error);
        rutasRequest = null;
        rutasUnavailable = true;
        closeRutasPanel(false);
        if (el.rutasToggle) {
          el.rutasToggle.hidden = true;
          el.rutasToggle.setAttribute("aria-expanded", "false");
        }
        syncRutasControls();
        showMapToast("No pudimos cargar los recorridos de colectivos.", 6000);
        return null;
      });

    return rutasRequest;
  }

  function buildRutaPopup(ruta) {
    const tipo = ruta.tipo.charAt(0).toUpperCase() + ruta.tipo.slice(1);
    return (
      '<div class="popup popup--ruta">' +
        '<div class="popup__top" style="--pin:' + escapeAttr(ruta.color) + '">' +
          '<span class="popup__icon popup__icon--ruta" aria-hidden="true">' + escapeHTML(ruta.linea || "•") + "</span>" +
          '<div>' +
            '<p class="popup__type">' + escapeHTML(tipo) + "</p>" +
            '<h3 class="popup__name">' + escapeHTML(ruta.nombre) + "</h3>" +
          "</div>" +
        "</div>" +
        '<div class="popup__body">' +
          '<dl class="ruta-popup__list">' +
            rutaPopupRow("Empresa", ruta.empresa) +
            rutaPopupRow("Horario", ruta.horario) +
            rutaPopupRow("Frecuencia", ruta.frecuencia) +
          "</dl>" +
        "</div>" +
      "</div>"
    );
  }

  function rutaPopupRow(label, value) {
    if (!value) return "";
    return (
      '<div class="ruta-popup__item"><dt>' + escapeHTML(label) + "</dt>" +
      "<dd>" + escapeHTML(value) + "</dd></div>"
    );
  }

  /* Un colectivo recorre cada línea en el orden de sus coordenadas, con la
     letra de la línea (A/E/ES) identificando el servicio. */

  function buildRutaAnimations(rutas, groups) {
    return rutas
      .map(function (ruta) {
        const points = ruta.puntos.map(function (punto) {
          return { lat: punto[0], lng: punto[1] };
        });
        const cumulative = [0];
        let total = 0;

        for (let index = 1; index < points.length; index += 1) {
          total += distanceBetween(points[index - 1], points[index]);
          cumulative.push(total);
        }
        if (total <= 0) return null;

        // Recorrer la línea completa en 18–45 s: visible sin perder el detalle.
        const duration = Math.min(45000, Math.max(18000, total * 4));
        const marker = L.marker(points[0], {
          pane: "rutaBusPane",
          interactive: false,
          keyboard: false,
          zIndexOffset: 500,
          icon: createRutaBusIcon(ruta)
        });
        const group = groups[ruta.linea] || groups[""];
        if (group) marker.addTo(group);

        return {
          ruta: ruta,
          points: points,
          cumulative: cumulative,
          total: total,
          duration: duration,
          marker: marker,
          elapsed: 0
        };
      })
      .filter(Boolean);
  }

  function createRutaBusIcon(ruta) {
    return L.divIcon({
      className: "ruta-bus-icon",
      html:
        '<span class="ruta-bus" style="--bus-color:' + escapeAttr(ruta.color) + '">' +
          '<span class="ruta-bus__pulse" aria-hidden="true"></span>' +
          '<span class="ruta-bus__letter">' + escapeHTML(ruta.linea || "•") + "</span>" +
        "</span>",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  }

  function distanceBetween(a, b) {
    const earthRadius = 6371000;
    const lat1 = (a.lat * Math.PI) / 180;
    const lat2 = (b.lat * Math.PI) / 180;
    const dLat = lat2 - lat1;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;
    const h =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * earthRadius * Math.asin(Math.min(1, Math.sqrt(h)));
  }

  function pointAtDistance(anim, distance) {
    const target = Math.max(0, Math.min(distance, anim.total));
    const points = anim.points;
    const cumulative = anim.cumulative;
    let low = 1;
    let high = points.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (cumulative[mid] < target) low = mid + 1;
      else high = mid;
    }

    const startDistance = cumulative[low - 1];
    const endDistance = cumulative[low];
    const ratio = endDistance > startDistance ? (target - startDistance) / (endDistance - startDistance) : 0;
    const start = points[low - 1];
    const end = points[low];
    return {
      lat: start.lat + (end.lat - start.lat) * ratio,
      lng: start.lng + (end.lng - start.lng) * ratio
    };
  }

  function applyRutaPose(anim, progress) {
    const distance = progress * anim.total;
    const pose = pointAtDistance(anim, distance);
    anim.marker.setLatLng([pose.lat, pose.lng]);
  }

  function stepRutaBuses(timestamp) {
    const delta = rutaLastTs ? Math.min(timestamp - rutaLastTs, 120) : 0;
    rutaLastTs = timestamp;
    rutaAnimations.forEach(function (anim) {
      if (state.rutaLineas[anim.ruta.linea] === false) return;
      anim.elapsed = (anim.elapsed + delta) % anim.duration;
      applyRutaPose(anim, anim.elapsed / anim.duration);
    });
    rutaFrame = window.requestAnimationFrame(stepRutaBuses);
  }

  function startRutaBuses() {
    if (!rutaAnimations.length) return;
    stopRutaBuses();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    rutaAnimations.forEach(function (anim) {
      anim.elapsed = 0;
      applyRutaPose(anim, 0);
    });
    if (reduced) return;

    rutaLastTs = 0;
    rutaFrame = window.requestAnimationFrame(stepRutaBuses);
  }

  function stopRutaBuses() {
    if (rutaFrame !== null) {
      window.cancelAnimationFrame(rutaFrame);
      rutaFrame = null;
    }
    rutaLastTs = 0;
  }

  function rutaLineas() {
    const lineas = [];
    rutaAnimations.forEach(function (anim) {
      const linea = anim.ruta.linea;
      if (!linea || state.rutaLineas[linea] === false) return;
      if (lineas.indexOf(linea) === -1) lineas.push(linea);
    });
    return lineas.sort();
  }

  function rutaLineasTexto(lineas) {
    if (lineas.length < 2) return lineas.join("");
    return lineas.slice(0, -1).join(", ") + " y " + lineas[lineas.length - 1];
  }

  function syncRutas() {
    const visible = state.rutas && !rutasUnavailable && mapReady;
    syncRutasControls();
    if (!mapReady) return;

    if (!visible) {
      stopRutaBuses();
      if (rutasLayer && map.hasLayer(rutasLayer)) map.removeLayer(rutasLayer);
      return;
    }

    loadRutas().then(function (layer) {
      if (!layer || !state.rutas) return;
      if (!map.hasLayer(layer)) layer.addTo(map);
      applyRutaLineVisibility();
      startRutaBuses();
      if (rutasCount === 0) {
        showMapToast("Todavía no hay recorridos de colectivos cargados.", 5000);
        return;
      }
      const lineas = rutaLineas().map(function (linea) {
        return RUTA_LINE_SHORT[linea] || linea;
      });
      const sufijo = lineas.length
        ? " (" + (lineas.length === 1 ? "línea " : "líneas ") + rutaLineasTexto(lineas) + ")"
        : "";
      const recorridos = rutasCount === 1 ? "1 recorrido de colectivo" : rutasCount + " recorridos de colectivos";
      const faltante = rutasFaltantes.length
        ? " No pudimos cargar la línea " + rutasFaltantes.join(" ni la ") + "."
        : "";
      showMapToast(recorridos + sufijo + " en el mapa." + faltante, faltante ? 6500 : 4000);
    });
  }

  /* Mi ubicación ------------------------------------------------------------ */

  function toggleUserLocation() {
    if (!mapReady || !map) return;

    if (locationActive) {
      clearUserLocation();
      showMapToast("Tu ubicación ya no se muestra en el mapa.", 4000);
      return;
    }

    if (locatePending) return;

    if (!navigator.geolocation) {
      showMapToast("Tu navegador no permite compartir la ubicación.", 6000);
      return;
    }

    if (window.isSecureContext === false) {
      showMapToast("Para usar tu ubicación, abrí el mapa con https:// o desde localhost.", 7000);
      return;
    }

    locatePending = true;
    setLocatePending(true);
    showMapToast("Buscando tu ubicación…", 0);

    navigator.geolocation.getCurrentPosition(handleLocationFound, handleLocationError, {
      enableHighAccuracy: true,
      timeout: LOCATION_TIMEOUT,
      maximumAge: 30000
    });
  }

  function handleLocationFound(position) {
    locatePending = false;
    setLocatePending(false);
    if (!mapReady || !map) return;

    const target = L.latLng(position.coords.latitude, position.coords.longitude);
    const accuracy = Number(position.coords.accuracy);

    clearUserLocation();
    locationActive = true;
    const token = locationToken;
    setLocationPressed(true);

    let revealed = false;
    const reveal = function () {
      if (revealed || token !== locationToken) return;
      revealed = true;
      dropLocationPin(target, accuracy, token);
    };

    const needsMove = map.getZoom() < LOCATION_ZOOM || map.getCenter().distanceTo(target) > 2;
    if (!needsMove) {
      reveal();
      return;
    }

    if (map.getZoom() < LOCATION_ZOOM) {
      map.flyTo(target, LOCATION_ZOOM, { animate: true, duration: 0.8 });
    } else {
      map.panTo(target, { animate: true, duration: 0.45 });
    }

    map.once("moveend", reveal);
    // Respaldo por si el mapa ya estaba en ese encuadre y no dispara moveend.
    setLocationTimeout(reveal, 1100);
  }

  /* Secuencia: el pin cae, aparece el punto azul y el pin se desvanece. */
  function dropLocationPin(target, accuracy, token) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scale = reduced ? 0.1 : 1;
    const dotAt = Math.round(PIN_DROP_MS * scale);
    const leaveAt = Math.round((PIN_DROP_MS + PIN_LINGER_MS) * scale);
    const removeAt = Math.round((PIN_DROP_MS + PIN_LINGER_MS + PIN_FADE_MS) * scale);

    dropPinMarker = L.marker(target, {
      pane: "userLocationPane",
      interactive: false,
      keyboard: false,
      zIndexOffset: 1400,
      icon: L.divIcon({
        className: "drop-pin-icon",
        html: '<span class="drop-pin" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 22s7.5-6.9 7.5-12A7.5 7.5 0 1 0 4.5 10c0 5.1 7.5 12 7.5 12Z" fill="currentColor"/><circle cx="12" cy="9.8" r="2.6" fill="#fff"/></svg></span>',
        iconSize: [30, 38],
        iconAnchor: [15, 38]
      })
    }).addTo(map);

    setLocationTimeout(function () {
      if (token !== locationToken) return;
      showUserDot(target, accuracy);
    }, dotAt);

    setLocationTimeout(function () {
      if (token !== locationToken) return;
      const node = dropPinMarker && dropPinMarker.getElement();
      if (node) node.classList.add("is-leaving");
    }, leaveAt);

    setLocationTimeout(function () {
      if (token !== locationToken) return;
      if (dropPinMarker) {
        map.removeLayer(dropPinMarker);
        dropPinMarker = null;
      }
    }, removeAt);
  }

  function showUserDot(target, accuracy) {
    if (accuracy > 0) {
      userCircle = L.circle(target, {
        pane: "userLocationPane",
        className: "user-location__accuracy",
        radius: accuracy,
        color: "#1d6fd1",
        weight: 1,
        opacity: 0.5,
        fillColor: "#1d6fd1",
        fillOpacity: 0.1,
        interactive: false
      }).addTo(map);
    }

    userMarker = L.marker(target, {
      pane: "userLocationPane",
      icon: L.divIcon({
        className: "user-location-icon",
        html: '<span class="user-location"><span class="user-location__pulse"></span><span class="user-location__dot"></span></span>',
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      }),
      zIndexOffset: 1200,
      keyboard: false,
      title: "Tu ubicación"
    }).addTo(map);

    showMapToast(
      "Ubicación marcada en el mapa." +
        (accuracy > 0 ? " Precisión aproximada: ±" + Math.round(accuracy) + " m." : ""),
      5000
    );
  }

  function handleLocationError(error) {
    locatePending = false;
    setLocatePending(false);
    const code = error ? error.code : 0;
    if (code === 1) {
      showMapToast("No diste permiso para usar tu ubicación. Habilitalo en tu navegador y volvé a intentarlo.", 7000);
    } else if (code === 2) {
      showMapToast("No pudimos obtener tu ubicación. Revisá el GPS o la conexión e intentá de nuevo.", 7000);
    } else if (code === 3) {
      showMapToast("La búsqueda de tu ubicación tardó demasiado. Volvé a intentarlo.", 7000);
    } else {
      showMapToast("No pudimos obtener tu ubicación. Volvé a intentarlo.", 7000);
    }
  }

  function clearUserLocation() {
    locationToken += 1;
    locationActive = false;
    clearLocationTimers();
    if (dropPinMarker) {
      if (map && map.hasLayer(dropPinMarker)) map.removeLayer(dropPinMarker);
      dropPinMarker = null;
    }
    if (userMarker) {
      if (map && map.hasLayer(userMarker)) map.removeLayer(userMarker);
      userMarker = null;
    }
    if (userCircle) {
      if (map && map.hasLayer(userCircle)) map.removeLayer(userCircle);
      userCircle = null;
    }
    setLocationPressed(false);
  }

  function setLocationTimeout(callback, delay) {
    const id = window.setTimeout(function () {
      locationTimers = locationTimers.filter(function (item) { return item !== id; });
      callback();
    }, delay);
    locationTimers.push(id);
  }

  function clearLocationTimers() {
    locationTimers.forEach(function (id) { window.clearTimeout(id); });
    locationTimers = [];
  }

  function setLocatePending(pending) {
    if (!el.locateMe) return;
    el.locateMe.classList.toggle("is-loading", pending);
    el.locateMe.setAttribute("aria-busy", String(pending));
    updateLocationButton(pending);
  }

  function setLocationPressed(active) {
    if (!el.locateMe) return;
    el.locateMe.setAttribute("aria-pressed", String(active));
    updateLocationButton(false);
  }

  function updateLocationButton(pending) {
    if (!el.locateMe) return;
    const active = el.locateMe.getAttribute("aria-pressed") === "true";
    const label = pending
      ? "Buscando tu ubicación…"
      : active ? "Ocultar mi ubicación" : "Mostrar mi ubicación";
    el.locateMe.setAttribute("aria-label", pending ? "Buscando tu ubicación" : label);
    el.locateMe.setAttribute("title", label);
  }

  function showMapToast(message, duration) {
    if (!el.mapToast) return;
    el.mapToast.textContent = message;
    el.mapToast.classList.add("is-visible");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = null;
    if (duration === 0) return;
    toastTimer = window.setTimeout(function () {
      el.mapToast.classList.remove("is-visible");
      toastTimer = null;
    }, duration || 5000);
  }

  async function loadData() {
    try {
      const schools = await loadSchools();
      state.schools = schools;
      state.filtered = schools;
      state.dataLoaded = true;
      barrioCounts.clear();
      refreshCircuitoInstituciones();

      if (el.resultsTotal) el.resultsTotal.textContent = schools.length + " en total";
      if (el.mobileCount) el.mobileCount.textContent = String(schools.length);

      renderList();
      updateMarkers();
      fitToResults(schools, true);
    } catch (error) {
      console.error("No se pudieron cargar los datos", error);
      renderLoadError();
    }
  }

  /* Filters and rendering --------------------------------------------------- */

  function getFilteredSchools() {
    const queryTokens = normalizeText(state.query).split(/\s+/).filter(Boolean);

    return state.schools.filter(function (school) {
      if (state.management !== "Todas" && school.management !== state.management) return false;
      if (state.type !== "Todos" && school.category !== state.type) return false;
      if (state.orientation !== "Todas" && school.orientations.indexOf(state.orientation) === -1) return false;
      if (state.level !== "Todos") {
        const matchesLevel = school.levels.indexOf(state.level) !== -1;
        if (!matchesLevel) return false;
      }
      if (queryTokens.length) {
        const haystack = school.searchText;
        if (!queryTokens.every(function (token) { return haystack.indexOf(token) !== -1; })) return false;
      }
      return true;
    });
  }

  function applyFilters(options) {
    if (!state.dataLoaded) return;
    const opts = options || {};
    state.filtered = getFilteredSchools();
    renderList();

    if (state.selectedId && !state.filtered.some(function (school) { return school.id === state.selectedId; })) {
      state.selectedId = null;
      if (map) map.closePopup();
    }

    if (mapReady) {
      updateMarkers();
      if (opts.fit !== false) fitToResults(state.filtered, false);
    }
  }

  function renderList() {
    const schools = state.filtered;
    updateCounts();

    if (!schools.length) {
      el.list.innerHTML =
        '<div class="empty-state">' +
          '<div class="empty-state__emoji" aria-hidden="true">🔎</div>' +
          "<h3>Sin resultados</h3>" +
          "<p>No encontramos instituciones con esos filtros. Probá con otra búsqueda o volvé a ver todas.</p>" +
          '<button type="button" data-action="clear-filters">Ver todas las escuelas</button>' +
        "</div>";
      return;
    }

    const fragment = document.createDocumentFragment();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = schools.map(renderCard).join("");
    while (wrapper.firstChild) fragment.appendChild(wrapper.firstChild);

    const note = document.createElement("p");
    note.className = "list-note";
    note.textContent = "Datos del registro oficial. Las ubicaciones pueden ser aproximadas en zonas rurales.";
    fragment.appendChild(note);

    el.list.innerHTML = "";
    el.list.appendChild(fragment);
    updateActiveCards();
    updateMarkerSelection();
  }

  function renderCard(school) {
    const meta = getMeta(school);
    const phone = school.phoneDisplay || school.phone || "";
    const managementClass = school.management === "Privada" ? " school-card__badge--private" : "";
    const address = school.address || "Dirección no informada";
    const typeLabel = school.typeLabel || meta.label;
    const localityTag = school.locality && school.locality !== "Villa Mercedes"
      ? '<span class="school-card__dot" aria-hidden="true"></span><span class="school-card__locality">' + escapeHTML(school.locality) + "</span>"
      : "";

    return (
      '<article class="school-card" data-id="' + escapeAttr(school.id) + '" tabindex="0" role="button" ' +
        'aria-label="' + escapeAttr(school.name + ", " + typeLabel + ". Ver en el mapa") + '" ' +
        'style="--pin:' + escapeAttr(meta.color) + (meta.ink ? ";--pin-ink:" + escapeAttr(meta.ink) : "") + '">' +
        '<div class="school-card__icon" aria-hidden="true">' + meta.emoji + "</div>" +
        '<div class="school-card__body">' +
          '<h3 class="school-card__name" title="' + escapeAttr(school.name) + '">' + escapeHTML(school.name) + "</h3>" +
          '<div class="school-card__meta">' +
            '<span class="school-card__type">' + escapeHTML(typeLabel) + "</span>" +
            '<span class="school-card__dot" aria-hidden="true"></span>' +
            "<span>" + escapeHTML(school.levels && school.levels.length ? school.levels.join(" · ") : school.management) + "</span>" +
            localityTag +
          "</div>" +
          '<p class="school-card__address">' + icons.pin + escapeHTML(address) + "</p>" +
          '<div class="school-card__footer">' +
            (phone
              ? '<a class="school-card__phone" href="' + escapeAttr(school.phoneHref || "tel:" + phone) + '" aria-label="Llamar a ' + escapeAttr(school.name) + '">' + icons.phone + escapeHTML(phone) + "</a>"
              : '<span class="school-card__badge">Sin teléfono</span>') +
            '<span class="school-card__badge' + managementClass + '">' + escapeHTML(school.management) + "</span>" +
          "</div>" +
        "</div>" +
        '<span class="school-card__arrow" aria-hidden="true">' + icons.arrow + "</span>" +
      "</article>"
    );
  }

  function updateCounts() {
    const count = state.filtered.length;
    const total = state.schools.length;

    if (!state.dataLoaded) {
      el.resultsCount.textContent = "Cargando escuelas…";
      return;
    }

    if (!count) {
      el.resultsCount.textContent = "Ninguna institución coincide";
    } else if (count === total) {
      el.resultsCount.textContent = total + " " + pluralize(total, "institución educativa", "instituciones educativas");
    } else {
      el.resultsCount.textContent = count + " de " + total + " " + pluralize(total, "institución", "instituciones");
    }

    if (el.mobileCount) el.mobileCount.textContent = String(count);
    if (el.resultsTotal) el.resultsTotal.textContent = total + " en total";
  }

  function renderLoadError() {
    el.resultsCount.textContent = "No se pudieron cargar los datos";
    el.resultsTotal.textContent = "";
    el.list.innerHTML =
      '<div class="empty-state">' +
        '<div class="empty-state__emoji" aria-hidden="true">🗂️</div>' +
        "<h3>Faltan los datos</h3>" +
        "<p>No pudimos leer <code>data.json</code>. Verificá que el archivo esté junto a <code>index.html</code> y recargá la página.</p>" +
        '<button type="button" data-action="reload">Volver a intentar</button>' +
      "</div>";
  }

  function clearAllFilters(options) {
    const opts = options || {};
    state.query = "";
    state.level = "Todos";
    state.management = "Todas";
    state.type = "Todos";
    state.orientation = "Todas";
    state.selectedId = null;

    if (el.search) el.search.value = "";
    if (el.searchClear) el.searchClear.hidden = true;
    if (el.typeFilter) el.typeFilter.value = "Todos";
    if (el.orientationFilter) el.orientationFilter.value = "Todas";

    document.querySelectorAll("[data-level]").forEach(function (button) {
      setPressed(button, button.dataset.level === "Todos");
    });
    document.querySelectorAll("[data-management]").forEach(function (button) {
      setPressed(button, button.dataset.management === "Todas");
    });

    if (mapReady) map.closePopup();
    applyFilters({ fit: opts.fit !== false });
  }

  function setPressed(button, active) {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  /* Map --------------------------------------------------------------------- */

  function updateMarkers() {
    if (!mapReady || !clusterLayer) return;

    clusterLayer.clearLayers();
    state.filtered.forEach(function (school) {
      if (school.lat == null || school.lng == null) return;
      let marker = markersById.get(school.id);
      if (!marker) {
        marker = createMarker(school);
        markersById.set(school.id, marker);
      }
      clusterLayer.addLayers(marker);
    });

    updateMarkerSelection();
  }

  function createMarker(school) {
    const meta = getMeta(school);
    const icon = L.divIcon({
      className: "school-marker",
      html:
        '<div class="school-pin" style="--pin:' + escapeAttr(meta.color) + (meta.ink ? ";--pin-ink:" + escapeAttr(meta.ink) : "") + '">' +
          '<div class="school-pin__body">' +
            '<span class="school-pin__emoji" aria-hidden="true">' + meta.emoji + "</span>" +
          "</div>" +
        "</div>",
      iconSize: [48, 58],
      iconAnchor: [24, 56],
      popupAnchor: [0, -53]
    });

    const marker = L.marker([school.lat, school.lng], {
      icon: icon,
      title: school.name,
      alt: school.name + ", " + school.typeLabel,
      riseOnHover: true,
      keyboard: true,
      bubblingMouseEvents: false
    });
    marker.options.schoolId = school.id;
    marker.options.schoolCategory = school.category;
    marker.bindPopup(buildPopup(school), {
      maxWidth: 302,
      minWidth: 284,
      className: "school-popup",
      closeButton: true,
      autoPanPadding: [28, 28]
    });

    marker.bindTooltip(escapeHTML(school.name), {
      direction: "top",
      offset: [0, -46],
      opacity: 1,
      className: "pin-tooltip",
      permanent: false
    });

    marker.on("click", function () {
      selectSchool(school.id, { fromMarker: true });
    });

    marker.on("popupopen", function () {
      if (state.selectedId !== school.id) {
        state.selectedId = school.id;
        updateActiveCards();
        scrollCardIntoView(school.id);
      }
      updateMarkerSelection();
    });

    marker.on("popupclose", function () {
      if (state.selectedId === school.id) {
        state.selectedId = null;
        updateActiveCards();
        updateMarkerSelection();
      }
    });

    return marker;
  }

  function buildPopup(school) {
    const meta = getMeta(school);
    const phone = school.phoneDisplay || school.phone || "";
    const address = school.address || "Dirección no informada";
    const levels = (school.levels || []).slice();
    const mapUrl = school.lat != null && school.lng != null
      ? GOOGLE_MAPS_DIR + encodeURIComponent(school.lat + "," + school.lng)
      : "";
    const recordUrl = school.sourceUrl || (school.cue ? OFFICIAL_RECORD + encodeURIComponent(school.cue) : "");
    const sourceLabel = school.sourceLabel || "Ficha oficial";

    const badges = levels.map(function (level) {
      return '<span class="popup__badge">' + escapeHTML(level) + "</span>";
    }).join("");

    const degrees = (school.degrees || []).slice();
    const showDegrees = levels.indexOf("Secundaria") !== -1;
    const degreesBlock = showDegrees
      ? '<div class="popup__degrees">' +
          '<p class="popup__degrees-label">Título egresado</p>' +
          (degrees.length
            ? '<ul class="popup__degrees-list">' +
                degrees.map(function (degree) {
                  return '<li class="popup__degree">' + escapeHTML(degree) + "</li>";
                }).join("") +
              "</ul>"
            : '<p class="popup__degrees-empty">No informado</p>') +
        "</div>"
      : "";

    return (
      '<div class="popup" style="--pin:' + escapeAttr(meta.color) + (meta.ink ? ";--pin-ink:" + escapeAttr(meta.ink) : "") + '">' +
        '<div class="popup__top">' +
          '<div class="popup__icon" aria-hidden="true">' + meta.emoji + "</div>" +
          "<div>" +
            '<p class="popup__type">' + escapeHTML(school.typeLabel || meta.label) + "</p>" +
            '<h3 class="popup__name">' + escapeHTML(school.name) + "</h3>" +
          "</div>" +
        "</div>" +
        '<div class="popup__body">' +
          '<p class="popup__row">' + icons.pin + "<span>" + escapeHTML(address) + "</span></p>" +
          (phone
            ? '<p class="popup__row">' + icons.phone + '<a href="' + escapeAttr(school.phoneHref || "tel:" + phone) + '">' + escapeHTML(phone) + "</a></p>"
            : "") +
          (school.email
            ? '<p class="popup__row">' + icons.mail + '<a href="mailto:' + escapeAttr(school.email) + '">' + escapeHTML(school.email) + "</a></p>"
            : "") +
          '<div class="popup__badges">' +
            badges +
            '<span class="popup__badge popup__badge--accent">' + escapeHTML(school.management) + "</span>" +
            (school.locality && school.locality !== "Villa Mercedes" ? '<span class="popup__badge">' + escapeHTML(school.locality) + "</span>" : "") +
          "</div>" +
          degreesBlock +
          '<div class="popup__actions">' +
            (mapUrl
              ? '<a class="popup__button" href="' + escapeAttr(mapUrl) + '" target="_blank" rel="noopener noreferrer">' + icons.pin + "Cómo llegar</a>"
              : "") +
            (recordUrl
              ? '<a class="popup__button popup__button--ghost" href="' + escapeAttr(recordUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeAttr(sourceLabel) + '" title="' + escapeAttr(sourceLabel) + '">' + icons.external + "</a>"
              : "") +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function selectSchool(id, options) {
    const opts = options || {};
    const school = state.schools.find(function (item) { return item.id === id; });
    if (!school) return;

    state.selectedId = id;
    updateActiveCards();
    updateMarkerSelection();
    scrollCardIntoView(id);

    if (!mapReady) return;
    const marker = markersById.get(id);

    if (mobileMedia.matches && el.sidebar.classList.contains("is-open")) {
      closeSidebar(false);
    }

    if (!marker) return;

    if (opts.fromMarker) {
      return;
    }

    const openIt = function () {
      if (!map) return;
      if (map.getZoom() < 15.5) {
        map.flyTo(marker.getLatLng(), 16, { animate: true, duration: 0.55 });
      } else {
        map.panTo(marker.getLatLng(), { animate: true, duration: 0.35 });
      }
      marker.openPopup();
      updateMarkerSelection();
    };

    if (usesCluster && typeof clusterLayer.zoomToShowLayer === "function") {
      clusterLayer.zoomToShowLayer(marker, openIt);
    } else {
      openIt();
    }
  }

  function updateActiveCards() {
    el.list.querySelectorAll(".school-card").forEach(function (card) {
      card.classList.toggle("is-active", card.dataset.id === state.selectedId);
    });
  }

  function scrollCardIntoView(id) {
    const card = el.list.querySelector('.school-card[data-id="' + cssEscape(id) + '"]');
    if (!card) return;
    card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
    return String(value).replace(/["\\]/g, "\\$&");
  }

  function updateMarkerSelection() {
    if (!mapReady) return;
    markersById.forEach(function (marker, id) {
      const pin = marker.getElement() && marker.getElement().querySelector(".school-pin");
      if (!pin) return;
      const selected = id === state.selectedId;
      pin.classList.toggle("is-selected", selected);
      marker.setZIndexOffset(selected ? 1000 : 0);
    });
  }

  function fitToResults(schools, initial) {
    if (!mapReady) return;
    const valid = schools.filter(function (school) { return school.lat != null && school.lng != null; });
    if (!valid.length) return;

    if (valid.length === 1) {
      map.setView([valid[0].lat, valid[0].lng], initial ? 15 : 16, { animate: !initial });
      return;
    }

    const bounds = L.latLngBounds(valid.map(function (school) { return [school.lat, school.lng]; }));
    if (!bounds.isValid()) return;

    const options = {
      paddingTopLeft: [48, 78],
      paddingBottomRight: [48, 48],
      maxZoom: 15,
      animate: !initial,
      duration: initial ? 0 : 0.6
    };

    if (initial) {
      map.fitBounds(bounds, options);
    } else {
      map.flyToBounds(bounds, options);
    }
  }

  function showMapError() {
    if (el.mapError) el.mapError.hidden = false;
    document.querySelectorAll(".map-actions, .legend, .circuit-legend").forEach(function (node) {
      node.hidden = true;
    });
  }

  /* Interactions ------------------------------------------------------------ */

  function bindEvents() {
    el.search.addEventListener("input", debounce(function () {
      state.query = el.search.value;
      el.searchClear.hidden = !state.query;
      applyFilters({ fit: true });
    }, 160));

    el.search.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        el.search.value = "";
        el.searchClear.hidden = true;
        state.query = "";
        applyFilters({ fit: true });
        el.search.blur();
      } else if (event.key === "Enter") {
        event.preventDefault();
        const first = state.filtered[0];
        if (first) selectSchool(first.id);
      }
    });

    el.searchClear.addEventListener("click", function () {
      el.search.value = "";
      el.searchClear.hidden = true;
      state.query = "";
      applyFilters({ fit: true });
      el.search.focus();
    });

    el.levelFilter.addEventListener("click", function (event) {
      const button = event.target.closest("[data-level]");
      if (!button) return;
      state.level = button.dataset.level;
      el.levelFilter.querySelectorAll("[data-level]").forEach(function (item) {
        setPressed(item, item === button);
      });
      applyFilters({ fit: true });
    });

    el.managementFilter.addEventListener("click", function (event) {
      const button = event.target.closest("[data-management]");
      if (!button) return;
      state.management = button.dataset.management;
      el.managementFilter.querySelectorAll("[data-management]").forEach(function (item) {
        setPressed(item, item === button);
      });
      applyFilters({ fit: true });
    });

    el.typeFilter.addEventListener("change", function () {
      state.type = el.typeFilter.value;
      applyFilters({ fit: true });
    });

    el.orientationFilter.addEventListener("change", function () {
      state.orientation = el.orientationFilter.value;
      applyFilters({ fit: true });
    });

    el.clearFilters.addEventListener("click", function () {
      clearAllFilters({ fit: true });
    });

    el.list.addEventListener("click", function (event) {
      const action = event.target.closest("[data-action]");
      if (action) {
        if (action.dataset.action === "clear-filters") clearAllFilters({ fit: true });
        if (action.dataset.action === "reload") window.location.reload();
        return;
      }

      if (event.target.closest("a")) return;
      const card = event.target.closest(".school-card");
      if (card) selectSchool(card.dataset.id);
    });

    el.list.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("a")) return;
      const card = event.target.closest(".school-card");
      if (!card) return;
      event.preventDefault();
      selectSchool(card.dataset.id);
    });

    el.openSidebar.addEventListener("click", openSidebar);
    el.closeSidebar.addEventListener("click", toggleSidebar);
    el.backdrop.addEventListener("click", function () { closeSidebar(true); });

    if (el.openCredits && el.creditsDialog) {
      el.openCredits.addEventListener("click", openCredits);
      el.closeCredits.addEventListener("click", closeCredits);
      el.creditsDialog.addEventListener("click", function (event) {
        if (event.target === el.creditsDialog) closeCredits();
      });
    }

    el.zoomIn.addEventListener("click", function () { if (map) map.zoomIn(); });
    el.zoomOut.addEventListener("click", function () { if (map) map.zoomOut(); });
    el.resetView.addEventListener("click", function () {
      clearAllFilters({ fit: false });
      fitToResults(state.schools, false);
      if (map) map.closePopup();
    });

    if (el.layersToggle) {
      el.layersToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleLayersPanel();
      });
    }

    if (el.layersClose) {
      el.layersClose.addEventListener("click", function () { closeLayersPanel(true); });
    }

    if (el.rutasToggle) {
      el.rutasToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleRutasPanel();
      });
    }

    if (el.rutasClose) {
      el.rutasClose.addEventListener("click", function () { closeRutasPanel(true); });
    }

    if (el.rutaVisible) {
      el.rutaVisible.addEventListener("change", function () {
        state.rutas = el.rutaVisible.checked;
        if (state.rutas && !rutaAlgunaLineaVisible()) {
          RUTAS_SOURCES.forEach(function (source) {
            state.rutaLineas[source.linea] = true;
          });
        }
        syncRutas();
      });
    }

    if (el.rutasLineas) {
      el.rutasLineas.addEventListener("change", function (event) {
        const input = event.target.closest("[data-ruta-linea]");
        if (!input) return;
        const linea = input.dataset.rutaLinea;
        state.rutaLineas[linea] = input.checked;
        const algunaVisible = rutaAlgunaLineaVisible();
        if (algunaVisible !== state.rutas) {
          state.rutas = algunaVisible;
          syncRutas();
        } else {
          applyRutaLineVisibility();
        }
      });
    }

    if (el.layerBarrios) {
      el.layerBarrios.addEventListener("change", function () {
        state.barrios = el.layerBarrios.checked;
        syncBarrios();
      });
    }

    if (el.layerCircuitos) {
      el.layerCircuitos.addEventListener("change", function () {
        state.circuitos = el.layerCircuitos.checked;
        syncCircuitos();
      });
    }

    if (el.layerRenabap) {
      el.layerRenabap.addEventListener("change", function () {
        state.renabap = el.layerRenabap.checked;
        syncRenabap();
      });
    }

    if (el.layerRadios) {
      el.layerRadios.addEventListener("change", function () {
        state.radios = el.layerRadios.checked;
        syncRadios();
      });
    }

    if (el.layerSettingsBarrios) {
      el.layerSettingsBarrios.addEventListener("click", function () { openLayerSettings("barrios"); });
    }

    if (el.layerSettingsCircuitos) {
      el.layerSettingsCircuitos.addEventListener("click", function () { openLayerSettings("circuitos"); });
    }

    if (el.layerSettingsRenabap) {
      el.layerSettingsRenabap.addEventListener("click", function () { openLayerSettings("renabap"); });
    }

    if (el.layerSettingsRadios) {
      el.layerSettingsRadios.addEventListener("click", function () { openLayerSettings("radios"); });
    }

    el.layerTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setLayerSettingsTab(tab.dataset.layerTab);
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const tabs = Array.prototype.filter.call(el.layerTabs, function (item) {
          return !item.disabled;
        });
        if (!tabs.length) return;
        const current = tabs.indexOf(tab);
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const next = tabs[(current + offset + tabs.length) % tabs.length];
        setLayerSettingsTab(next.dataset.layerTab);
        next.focus();
      });
    });

    if (el.closeLayerSettings) {
      el.closeLayerSettings.addEventListener("click", closeLayerSettings);
    }

    if (el.closeLayerSettingsDone) {
      el.closeLayerSettingsDone.addEventListener("click", closeLayerSettings);
    }

    if (el.resetLayerSettings) {
      el.resetLayerSettings.addEventListener("click", resetLayerSettings);
    }

    if (el.layerSettingsDialog) {
      el.layerSettingsDialog.addEventListener("click", function (event) {
        if (event.target === el.layerSettingsDialog) closeLayerSettings();
      });
      el.layerSettingsDialog.addEventListener("close", function () {
        if (el.layersToggle) el.layersToggle.focus({ preventScroll: true });
      });
    }

    if (el.barrioShowLabels) {
      el.barrioShowLabels.addEventListener("change", function () {
        state.barrioLabels = el.barrioShowLabels.checked;
        applyBarrioVisuals();
      });
    }

    if (el.barrioFillOpacity) {
      el.barrioFillOpacity.addEventListener("input", function () {
        state.barrioFillOpacity = Number(el.barrioFillOpacity.value) / 100;
        if (el.barrioFillOpacityOutput) {
          el.barrioFillOpacityOutput.textContent = el.barrioFillOpacity.value + "%";
        }
        applyBarrioVisuals();
      });
    }

    el.circuitMetricRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (!radio.checked) return;
        state.circuitoMetric = radio.value;
        applyCircuitoVisuals(true);
      });
    });

    if (el.circuitShowLabels) {
      el.circuitShowLabels.addEventListener("change", function () {
        state.circuitoLabels = el.circuitShowLabels.checked;
        if (el.circuitShowValues) el.circuitShowValues.disabled = !state.circuitoLabels;
        buildCircuitoLabels();
      });
    }

    if (el.circuitShowValues) {
      el.circuitShowValues.addEventListener("change", function () {
        state.circuitoLabelValues = el.circuitShowValues.checked;
        buildCircuitoLabels();
      });
    }

    if (el.circuitFillOpacity) {
      el.circuitFillOpacity.addEventListener("input", function () {
        state.circuitoFillOpacity = Number(el.circuitFillOpacity.value) / 100;
        if (el.circuitFillOpacityOutput) {
          el.circuitFillOpacityOutput.textContent = el.circuitFillOpacity.value + "%";
        }
        if (circuitosLayer) circuitosLayer.setStyle(circuitoStyle);
      });
    }

    if (el.renabapShowLabels) {
      el.renabapShowLabels.addEventListener("change", function () {
        state.renabapLabels = el.renabapShowLabels.checked;
        if (el.renabapShowValues) el.renabapShowValues.disabled = !state.renabapLabels;
        updateRenabapLabelsVisibility();
      });
    }

    if (el.renabapShowValues) {
      el.renabapShowValues.addEventListener("change", function () {
        state.renabapLabelValues = el.renabapShowValues.checked;
        applyRenabapVisuals(true);
      });
    }

    if (el.renabapFillOpacity) {
      el.renabapFillOpacity.addEventListener("input", function () {
        state.renabapFillOpacity = Number(el.renabapFillOpacity.value) / 100;
        if (el.renabapFillOpacityOutput) {
          el.renabapFillOpacityOutput.textContent = el.renabapFillOpacity.value + "%";
        }
        if (renabapLayer) renabapLayer.setStyle(renabapStyle);
      });
    }

    el.radioMetricRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (!radio.checked) return;
        state.radioMetric = radio.value;
        applyRadioVisuals(true);
      });
    });

    if (el.radioShowLabels) {
      el.radioShowLabels.addEventListener("change", function () {
        state.radioLabels = el.radioShowLabels.checked;
        if (el.radioShowValues) el.radioShowValues.disabled = !state.radioLabels;
        updateRadioLabelsVisibility();
      });
    }

    if (el.radioShowValues) {
      el.radioShowValues.addEventListener("change", function () {
        state.radioLabelValues = el.radioShowValues.checked;
        applyRadioVisuals(true);
      });
    }

    if (el.radioFillOpacity) {
      el.radioFillOpacity.addEventListener("input", function () {
        state.radioFillOpacity = Number(el.radioFillOpacity.value) / 100;
        if (el.radioFillOpacityOutput) {
          el.radioFillOpacityOutput.textContent = el.radioFillOpacity.value + "%";
        }
        if (radiosLayer) radiosLayer.setStyle(radioStyle);
      });
    }

    if (el.locateMe) {
      el.locateMe.addEventListener("click", toggleUserLocation);
    }

    el.legendToggle.addEventListener("click", function () {
      const expanded = el.legendToggle.getAttribute("aria-expanded") === "true";
      el.legendToggle.setAttribute("aria-expanded", String(!expanded));
      el.legendPanel.hidden = expanded;
    });

    document.addEventListener("click", function (event) {
      if (el.layersPanel && !el.layersPanel.hidden) {
        if (el.layersPanel.contains(event.target)) return;
        if (el.layersToggle && el.layersToggle.contains(event.target)) return;
        closeLayersPanel(false);
      }
      if (el.rutasPanel && !el.rutasPanel.hidden) {
        if (el.rutasPanel.contains(event.target)) return;
        if (el.rutasToggle && el.rutasToggle.contains(event.target)) return;
        closeRutasPanel(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (el.creditsDialog && el.creditsDialog.open) return;
      if (el.layerSettingsDialog && el.layerSettingsDialog.open) return;

      const tag = event.target && event.target.tagName;
      const isTyping = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (event.target && event.target.isContentEditable);

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        if (mobileMedia.matches) openSidebar();
        el.search.focus();
      }

      if (event.key === "Escape") {
        if (el.rutasPanel && !el.rutasPanel.hidden) {
          closeRutasPanel(true);
        } else if (el.layersPanel && !el.layersPanel.hidden) {
          closeLayersPanel(true);
        } else if (el.sidebar.classList.contains("is-open") && mobileMedia.matches) {
          closeSidebar(true);
        } else if (!el.legendPanel.hidden) {
          el.legendPanel.hidden = true;
          el.legendToggle.setAttribute("aria-expanded", "false");
        } else if (mapReady && map) {
          map.closePopup();
        }
      }
    });

    window.addEventListener("resize", debounce(function () {
      if (map) map.invalidateSize();
      if (!mobileMedia.matches) {
        el.sidebar.classList.remove("is-open");
        el.backdrop.hidden = true;
        updateSidebarToggle(false);
        document.body.classList.remove("sidebar-open");
      }
    }, 160));

    if (typeof mobileMedia.addEventListener === "function") {
      mobileMedia.addEventListener("change", function (event) {
        if (!event.matches) {
          el.sidebar.classList.remove("is-open");
          el.backdrop.hidden = true;
          updateSidebarToggle(false);
          document.body.classList.remove("sidebar-open");
        }
        if (map) map.invalidateSize();
      });
    }
  }

  function openCredits() {
    if (!el.creditsDialog || el.creditsDialog.open) return;
    if (typeof el.creditsDialog.showModal === "function") {
      el.creditsDialog.showModal();
    } else {
      el.creditsDialog.setAttribute("open", "");
    }
  }

  function closeCredits() {
    if (!el.creditsDialog) return;
    if (typeof el.creditsDialog.close === "function" && el.creditsDialog.open) {
      el.creditsDialog.close();
    } else {
      el.creditsDialog.removeAttribute("open");
    }
  }

  function openSidebar() {
    el.sidebar.classList.add("is-open");
    el.backdrop.hidden = false;
    updateSidebarToggle(true);
    document.body.classList.add("sidebar-open");
    window.setTimeout(function () {
      if (el.creditsDialog && el.creditsDialog.open) return;
      if (el.sidebar) el.sidebar.focus({ preventScroll: true });
    }, 320);
  }

  function closeSidebar(returnFocus) {
    el.sidebar.classList.remove("is-open");
    el.backdrop.hidden = true;
    updateSidebarToggle(false);
    document.body.classList.remove("sidebar-open");
    if (returnFocus) el.openSidebar.focus({ preventScroll: true });
  }

  function toggleSidebar() {
    if (el.sidebar.classList.contains("is-open")) {
      closeSidebar(false);
      el.closeSidebar.focus({ preventScroll: true });
    } else {
      openSidebar();
    }
  }

  function updateSidebarToggle(open) {
    if (el.openSidebar) el.openSidebar.setAttribute("aria-expanded", String(open));
    if (el.closeSidebar) {
      el.closeSidebar.setAttribute("aria-expanded", String(open));
      el.closeSidebar.setAttribute("aria-label", open ? "Cerrar directorio" : "Abrir directorio");
      el.closeSidebar.setAttribute("title", open ? "Cerrar directorio" : "Abrir directorio");
    }
  }

  function debounce(fn, wait) {
    let timeout = null;
    return function () {
      const args = arguments;
      const context = this;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
