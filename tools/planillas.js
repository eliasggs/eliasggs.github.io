const forms = {
    form1: {
        title: "[IT] Error de agenda",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "N° de cuenta:", type: "text", name: "N° de cuenta", required: true },
            { label: "N° de caso:", type: "text", name: "N° de caso", required: true },
            { label: "OT:", type: "text", name: "OT", required: true },
            { label: "Dirección:", type: "text", name: "Dirección", required: true },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "Provincia:", type: "text", name: "Provincia", required: true },
            { label: "Partido:", type: "text", name: "Partido", required: true },
            { label: "Mail de contacto:", type: "text", name: "Mail de contacto", required: true },
            { label: "Teléfono de contacto:", type: "text", name: "Teléfono de contacto", required: true },
            { label: "Detalle y Chequeos realizados:", type: "textarea", name: "Detalle y Chequeos realizados", required: true, rows: 3 },
            // Add other fields as needed
        ]
    },
    form2: {
        title: "[IT] Adelanto de Agenda.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "Usuario afectado", required: true },
            {
                label: "Tipo de CL:", type: "select", name: "Tipo de Cliente", required: true, options: [
                    { value: "Residencial", label: "Residencial" },
                    { value: "VIP", label: "VIP" },
                    { value: "Corredor Norte", label: "Corredor Norte" },
                    { value: "Corp", label: "Corp" }
                ]
            },
            {
                label: "CRM:", type: "select", name: "CRM", required: true, options: [
                    { value: "FAN", label: "FAN" },
                    { value: "OPEN", label: "OPEN" },
                    { value: "SIEBEL", label: "SIEBEL" }
                ]
            },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "OT:", type: "text", name: "OT", required: true },
            { label: "N° de cuenta:", type: "text", name: "N° de cuenta", required: true },
            { label: "N° de Ticket ICD:", type: "text", name: "N° de Ticket ICD", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "NODO:", type: "text", name: "NODO", required: true },
            { label: "Teléfono de contacto:", type: "text", name: "Teléfono de contacto", required: true },
            {
                label: "Tecnología:", type: "select", name: "Tecnología", required: true, options: [
                    { value: "FTTH", label: "FTTH" },
                    { value: "HFC", label: "HFC" },
                    { value: "Cobre", label: "Cobre" }
                ]
            },
            { label: "Fecha de cita original:", type: "date", name: "Fecha de cita original", required: true },
            {
                label: "Hypercare:", type: "select", name: "Hypercare", required: true, options: [
                    { value: "NO", label: "NO" },
                    { value: "SI", label: "SI" }
                ]
            },
            {
                label: "Reiterado:", type: "select", name: "Reiterado", required: true, options: [
                    { value: "NO", label: "NO" },
                    { value: "SI", label: "SI" }
                ]
            },
            {
                label: "Disponibilidad horaria:", type: "select", name: "Disponibilidad horaria", required: true, options: [
                    { value: "MAÑANA", label: "MAÑANA" },
                    { value: "TARDE", label: "TARDE" }
                ]
            },
            // Add other fields as needed
        ]
    },
    form3: {
        title: "[IT] Aseguramiento de Cita",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            {
                label: "Tipo de CL:", type: "select", name: "Tipo de Cliente", required: true, options: [
                    { value: "Residencial", label: "Residencial" },
                    { value: "VIP", label: "VIP" },
                    { value: "Corredor Norte", label: "Corredor Norte" },
                    { value: "Corp", label: "Corp" }
                ]
            },
            {
                label: "CRM:", type: "select", name: "CRM", required: true, options: [
                    { value: "FAN", label: "FAN" },
                    { value: "OPEN", label: "OPEN" },
                    { value: "SIEBEL", label: "SIEBEL" }
                ]
            },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "OT:", type: "text", name: "OT", required: true },
            { label: "N° de cuenta:", type: "text", name: "N° de cuenta", required: true },
            { label: "N° de Ticket ICD:", type: "text", name: "N° de Ticket ICD", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "NODO:", type: "text", name: "NODO", required: true },
            { label: "Teléfono de contacto:", type: "text", name: "Teléfono de contacto", required: true },
            {
                label: "Tecnología:", type: "select", name: "Tecnología", required: true, options: [
                    { value: "FTTH", label: "FTTH" },
                    { value: "HFC", label: "HFC" },
                    { value: "Cobre", label: "Cobre" }
                ]
            },
            { label: "Fecha de cita original:", type: "date", name: "Fecha de cita original", required: true },
            {
                label: "Hypercare:", type: "select", name: "Hypercare", required: true, options: [
                    { value: "NO", label: "NO" },
                    { value: "SI", label: "SI" }
                ]
            },
            {
                label: "Reiterado:", type: "select", name: "Reiterado", required: true, options: [
                    { value: "NO", label: "NO" },
                    { value: "SI", label: "SI" }
                ]
            },
            {
                label: "Disponibilidad horaria:", type: "select", name: "Disponibilidad horaria", required: true, options: [
                    { value: "MAÑANA", label: "MAÑANA" },
                    { value: "TARDE", label: "TARDE" }
                ]
            },
            // Add other fields as needed
        ]
    },
    form4: {
        title: "Suspensión por Mora sin Deuda / Suspensión voluntaria",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "N° de cuenta:", type: "text", name: "N° de cuenta", required: true },
            { label: "N° de caso:", type: "text", name: "N° de caso", required: true },
            {
                label: "Detalle y chequeos realizados",
                type: "textarea",
                name: "Detalle y chequeos realizados",
                required: true,
                rows: 3 // Adjust the number of visible rows as needed
            },
            { label: "Teléfono de contacto:", type: "text", name: "Teléfono de contacto", required: true },
            { label: "Mail de contacto:", type: "text", name: "Mail de contacto", required: true },
            {
                label: "Hypercare:", type: "select", name: "Hypercare", required: true, options: [
                    { value: "NO", label: "NO" },
                    { value: "SI", label: "SI" }
                ]
            },

            // Add other fields as needed
        ]
    },
    form5: {
        title: "Inconvenientes con Flow App.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "Nombre y Apellido:", type: "text", name: "Nombre y Apellido", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "N° de Cuenta:", type: "text", name: "N° de Cuenta", required: true },
            { label: "Mail:", type: "text", name: "Mail", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
            { label: "Detalle y Chequeos realizados:", type: "textarea", name: "Detalle y Chequeos realizados", required: true, rows: 3 },
            {
                label: "Accede a Mi Personal con las mismas credenciales:", type: "select", name: "Accede a Mi Personal con las mismas credenciales",
                required: true, options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]
            },

            // Add other fields as needed
        ]
    },
    form6: {
        title: "Inconvenientes con TOIP.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "N° de Cuenta:", type: "text", name: "N° de Cuenta", required: true },
            { label: "Línea Afectada:", type: "text", name: "Línea Afectada", required: true },
            { label: "N° de Caso:", type: "text", name: "N° de Caso", required: true },
            { label: "Detalle y Chequeos realizados:", type: "textarea", name: "Detalle y Chequeos realizados", required: true, rows: 5 },
            { label: "Mail:", type: "text", name: "Mail", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
        ]
    },
    form7: {
        title: "Error en V360.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "N° de Cuenta:", type: "text", name: "N° de Cuenta", required: true },

            { label: "Detalle y Chequeos realizados:", type: "textarea", name: "Detalle y Chequeos realizados", required: true, rows: 5 },
            { label: "Mail:", type: "text", name: "Mail", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
        ]
    },
    form8: {
        title: "Flow App - Falla de Señal en Vivo.",
        fields: [
            { label: "ID Dispositivo:", type: "text", name: "ID Dispositivo", required: true },
            { label: "Usuario Mail:", type: "text", name: "Usuario Mail", required: true },
            { label: "Marca del Dispositivo:", type: "text", name: "Marca del Dispositivo", required: true },
            { label: "Modelo del Dispositivo:", type: "text", name: "Modelo del Dispositivo", required: true },
            { label: "Sistema Operativo:", type: "text", name: "Sistema Operativo", required: true },
            { label: "Versión de la App:", type: "text", name: "Versión de la App", required: true },
            {
                label: "¿Reinstaló la App?:", type: "select", name: "Reinstaló la App", required: true, options: [
                    { value: "yes", label: "Sí" },
                    { value: "no", label: "No" }
                ]
            },
            { label: "Error y Descripción:", type: "textarea", name: "Error y Descripción", required: true, rows: 5 },
            {
                label: "¿Tiene otro Dispositivo?:", type: "select", name: "Tiene otro Dispositivo", required: true, options: [
                    { value: "yes", label: "Sí" },
                    { value: "no", label: "No" }
                ]
            },
            { label: "Canal:", type: "text", name: "Canal", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form9: {
        title: "Flow App - Falla de Señal VOD.",
        fields: [
            { label: "ID Dispositivo:", type: "text", name: "ID Dispositivo", required: true },
            { label: "Usuario Mail:", type: "text", name: "Usuario Mail", required: true },
            { label: "Marca del Dispositivo:", type: "text", name: "Marca del Dispositivo", required: true },
            { label: "Modelo del Dispositivo:", type: "text", name: "Modelo del Dispositivo", required: true },
            { label: "Sistema Operativo:", type: "text", name: "Sistema Operativo", required: true },
            { label: "Versión de la App:", type: "text", name: "Versión de la App", required: true },
            {
                label: "¿Reinstaló la App?:", type: "select", name: "Reinstaló la App", required: true, options: [
                    { value: "yes", label: "Sí" },
                    { value: "no", label: "No" }
                ]
            },
            { label: "Error y Descripción:", type: "textarea", name: "Error y Descripción", required: true, rows: 5 },
            {
                label: "¿Tiene otro Dispositivo?:", type: "select", name: "Tiene otro Dispositivo", required: true, options: [
                    { value: "yes", label: "Sí" },
                    { value: "no", label: "No" }
                ]
            },
            { label: "Contenido VOD con falla:", type: "text", name: "Contenido VOD con falla", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form10: {
        title: "Flow App - Flow App Inactiva en Minerva.",
        fields: [
            {
                label: "¿Se envió Recálculo?:", type: "select", name: "Se envió Recálculo", required: true, options: [
                    { value: "yes", label: "Sí" },
                    { value: "no", label: "No" }
                ]
            },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form11: {
        title: "Flow App - No funciona RestartTV/ReverseEPG.",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "ID dispositivo:", type: "text", name: "ID dispositivo", required: true },
            { label: "Usuario Mail:", type: "text", name: "Usuario Mail", required: true },
            { label: "Marca/Modelo del dispositivo:", type: "text", name: "Marca/Modelo del dispositivo", required: true },
            { label: "SO:", type: "text", name: "SO", required: true },
            { label: "APP Versión:", type: "text", name: "APP Versión", required: true },
            { label: "Reinstaló la APP:", type: "text", name: "Reinstaló la APP", required: true },
            { label: "Contenido/Lugar/Canal donde arroja error:", type: "text", name: "Contenido/Lugar/Canal", required: true },
            {
                label: "Se envió Recálculo? (SI/ERROR):", type: "select", name: "Se envió Recálculo", required: true, options: [
                    { value: "Si", label: "Si" },
                    { value: "Error", label: "Error" }
                ]
            },
            {
                label: "Se eliminó dispositivo desde CODI? (SI/ERROR):", type: "select", name: "Se eliminó dispositivo desde CODI", required: true, options: [
                    { value: "Si", label: "Si" },
                    { value: "Error", label: "Error" }
                ]
            },
            {
                label: "Tiene otro dispositivo? (STB/OTT):", type: "select", name: "Tiene otro dispositivo", required: true, options: [
                    { value: "Si", label: "Si" },
                    { value: "No", label: "No" }
                ]
            },
            {
                label: "Otro dispositivo con el mismo error?:", type: "select", name: "Otro dispositivo con el mismo error", required: true, options: [
                    { value: "Si", label: "Si" },
                    { value: "No", label: "No" }
                ]
            },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form12: {
        title: "Flow App - Error A15/A16 Al ingresar.",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nr° de Cuenta:", type: "text", name: "Nr° de Cuenta", required: true },
            { label: "Usuario Flow:", type: "text", name: "Usuario Flow", required: true },
            { label: "Clave Flow:", type: "text", name: "Clave Flow", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form13: {
        title: "Flow App - Error A308 al ingresar.",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "ID de Dispositivo:", type: "text", name: "ID de Dispositivo", required: true },
            { label: "Marca:", type: "text", name: "Marca", required: true },
            { label: "Modelo:", type: "text", name: "Modelo", required: true },
            { label: "S.O.:", type: "text", name: "S.O.", required: true },
            { label: "Usuario Flow:", type: "text", name: "Usuario Flow", required: true },
            { label: "Clave Flow:", type: "text", name: "Clave Flow", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 5 }
        ]
    },
    form14: {
        title: "Flow App - Error de Acceso Flow APP en Dispositivo Particular.",
        fields: [
            { label: "Descripción del error:", type: "textarea", name: "Descripción del error", required: true, rows: 3 },
            { label: "ID dispositivo:", type: "text", name: "ID dispositivo", required: true },
            { label: "Marca/Modelo del dispositivo:", type: "text", name: "Marca/Modelo del dispositivo", required: true },
            { label: "SO:", type: "text", name: "SO", required: true },
            { label: "APP Versión:", type: "text", name: "APP Versión", required: true },
            { label: "Reinstaló la APP:", type: "select", name: "Reinstaló la APP", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Usuario Mail:", type: "text", name: "Usuario Mail", required: true },
            { label: "Inicia Sesión en Mi Personal-Flow?", type: "select", name: "Inicia Sesión en Mi Personal-Flow?", required: true, options: [{ value: "Si", label: "Si" }, { value: "Error", label: "Error" }] },
            { label: "Figura dispositivo enlistado?", type: "select", name: "Figura dispositivo enlistado?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Se eliminó dispositivo enlistado?", type: "select", name: "Se eliminó dispositivo enlistado?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Tiene otro dispositivo? (STB/OTT):", type: "select", name: "Tiene otro dispositivo? (STB/OTT)", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Otro dispositivo con el mismo error?", type: "select", name: "Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form15: {
        title: "Flow App - Flow con Grilla asignada incorrecta. (No ve canales locales.)",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "Region ID Actual:", type: "text", name: "Region ID Actual", required: true },
            { label: "Region ID Correspondiente:", type: "text", name: "Region ID Correspondiente", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form16: {
        title: "Flow App - Problema: Pack faltante en Minerva Flow APP.",
        fields: [
            { label: "Pack Faltante:", type: "text", name: "Pack Faltante", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form17: {
        title: "Flow Box - Placa de Validación.",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Valida Conexion", type: "select", name: "Valida Conexion", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Valida Internet", type: "select", name: "Valida Internet", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Valida Fecha y hora", type: "select", name: "Valida Fecha y hora", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "¿Tiene otro deco?", type: "select", name: "¿Tiene otro deco?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "¿Otro deco con el mismo error?", type: "select", name: "¿Otro deco con el mismo error?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form18: {
        title: "Flow Box - Box Saltea Canales",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Canales afectados:", type: "text", name: "Canales afectados", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc) SI/NO", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Error y descripción:", type: "textarea", name: "Error y descripción", required: true, rows: 3 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form19: {
        title: "Flow Box - Placa de Activación",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "¿El Deco está enlistado?", type: "select", name: "¿El Deco está enlistado?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Estado Flow App CODI:", type: "select", name: "Estado Flow App CODI", required: true, options: [{ value: "ACTIVO", label: "ACTIVO" }, { value: "INACTIVO", label: "INACTIVO" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form20: {
        title: "Flow Box - Placa activación S1039 / Deco NO enlistado",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "Estado Flow App en CODI:", type: "select", name: "Estado Flow App en CODI", required: true, options: [{ value: "ACTIVO", label: "ACTIVO" }, { value: "INACTIVO", label: "INACTIVO" }] },
            { label: "SN Deco:", type: "text", name: "SN Deco", required: true },
            { label: "¿Se encuentra enlistado?", type: "select", name: "¿Se encuentra enlistado?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form21: {
        title: "Flow Box - Pantalla en negro en Vivo",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Canal afectado:", type: "text", name: "Canal afectado", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form22: {
        title: "Flow Box - Pantalla en negro en VOD",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Contenido que arroja error:", type: "text", name: "Contenido que arroja error", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form23: {
        title: "Flow Box - Falla en Audio en contenido en Vivo",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Error y descripción:", type: "textarea", name: "Error y descripción", required: true, rows: 3 },
            { label: "Canal Afectado:", type: "text", name: "Canal Afectado", required: true },
            { label: "Formato de Audio:", type: "select", name: "Formato de Audio", required: true, options: [{ value: "Auto", label: "Auto" }, { value: "Stereo", label: "Stereo" }] },
            { label: "Estado Audio Passthrough:", type: "select", name: "Estado Audio Passthrough", required: true, options: [{ value: "activado", label: "activado" }, { value: "desactivado", label: "desactivado" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form24: {
        title: "Flow Box - Falla en Audio en contenido VOD",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Error y descripción:", type: "textarea", name: "Error y descripción", required: true, rows: 3 },
            { label: "Contenido que arroja error:", type: "text", name: "Contenido que arroja error", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 2 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form25: {
        title: "Flow Box - Falla Subtitulos en contenido en Vivo",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Canal:", type: "text", name: "Canal", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 3 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form26: {
        title: "Flow Box - Falla Subtitulos en contenido VOD",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Contenido que arroja error:", type: "text", name: "Contenido que arroja error", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 3 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form27: {
        title: "Flow Box - Imagen Pixela en contenido en vivo",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Canal Afectado:", type: "text", name: "Canal Afectado", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form28: {
        title: "Flow Box - Imagen Pixela en contenido VOD",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Falla en algún dispositivo (Smartphone, tablet, web, etc):", type: "select", name: "Falla en algún dispositivo", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Contenido que arroja error:", type: "text", name: "Contenido que arroja error", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 3 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form29: {
        title: "Flow Box - Placa carga datos fija X/18",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Al momento de cargar, señalar en qué paso se detuvo el proceso (x/20):", type: "text", name: "Paso detenido", required: true },
            { label: "¿Tiene otro deco?", type: "select", name: "¿Tiene otro deco?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro deco con el mismo error?", type: "select", name: "¿Otro deco con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form30: {
        title: "Flow Box - Error en RestartTV/ReverseEPG/Grabaciones",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Error y descripción:", type: "text", name: "Error y descripción", required: true },
            { label: "Canal y programa:", type: "text", name: "Canal y programa", required: true },
            { label: "Día y horario:", type: "text", name: "Día y horario", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 3 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form31: {
        title: "Flow Box - Problemas con la Guía",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Error y descripción:", type: "textarea", name: "Error y descripción", required: true, rows: 2 },
            { label: "Canal y programa:", type: "text", name: "Canal y programa", required: true },
            { label: "Día y horario:", type: "text", name: "Día y horario", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 2 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form32: {
        title: "Flow Box - Deco DCX-4220 se reinicia (CMTS CBR8)",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Error y descripción:", type: "textarea", name: "Error y descripción", required: true, rows: 2 },
            { label: "Canal y programa:", type: "text", name: "Canal y programa", required: true },
            { label: "Día y horario:", type: "text", name: "Día y horario", required: true },
            { label: "Detalle de falla percibida:", type: "textarea", name: "Detalle de falla percibida", required: true, rows: 2 },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form33: {
        title: "Flow Box - Placa 'Oh oh...tenemos un problema (S917)'",
        fields: [
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Estado Flow App:", type: "select", name: "Estado Flow App", required: true, options: [{ value: "ACTIVO", label: "ACTIVO" }, { value: "INACTIVO", label: "INACTIVO" }] },
            { label: "¿Tiene otro dispositivo?", type: "select", name: "¿Tiene otro dispositivo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro dispositivo con el mismo error?", type: "select", name: "¿Otro dispositivo con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form34: {
        title: "Flow Box - Problemas con APP",
        fields: [
            { label: "App del deco con falla:", type: "text", name: "App del deco con falla", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Deco SN:", type: "text", name: "Deco SN", required: true },
            { label: "Modelo decodificador:", type: "select", name: "Modelo decodificador", required: true, options: [{ value: "DCX-4220", label: "DCX-4220" }, { value: "DCX4400", label: "DCX4400" }] },
            { label: "FW (Think Version):", type: "text", name: "FW (Think Version)", required: true },
            { label: "¿Tiene otro decodificador?", type: "select", name: "¿Tiene otro decodificador?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "¿Otro decodificador con el mismo error?", type: "select", name: "¿Otro decodificador con el mismo error?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form35: {
        title: "Flow Box - Flow con Grilla asignada incorrecta. No ve canales locales",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "Region ID Actual:", type: "text", name: "Region ID Actual", required: true },
            { label: "Region ID Correspondiente:", type: "text", name: "Region ID Correspondiente", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form36: {
        title: "Flow Full IP - Flow con Grilla asignada incorrecta. No ve canales locales",
        fields: [
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "¿Se envió Recálculo?", type: "select", name: "¿Se envió Recálculo?", required: true, options: [{ value: "SI", label: "SI" }, { value: "NO", label: "NO" }] },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "Region ID Actual:", type: "text", name: "Region ID Actual", required: true },
            { label: "Region ID Correspondiente:", type: "text", name: "Region ID Correspondiente", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form78: {
        title: "Regularizar Serializable.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "Nro Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "N° de Caso:", type: "text", name: "N° de Caso", required: true },
            {
                label: "Detalle y chequeos realizados",
                type: "textarea",
                name: "Detalle y chequeos realizados",
                required: true,
                rows: 3 // Adjust the number of visible rows as needed
            },
            { label: "Mail de contacto:", type: "text", name: "Mail de contacto", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
            { label: "SN/MAC a REMOVER:", type: "text", name: "SN/MAC a REMOVER", required: true },
            { label: "SN/MAC a INSTALAR:", type: "text", name: "SN/MAC a INSTALAR", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form69: {
        title: "Cierre/Legalización de OT.",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "N° de Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "NODO:", type: "text", name: "NODO", required: true },
            { label: "N° de Caso:", type: "text", name: "N° de Caso", required: true },
            { label: "N° de OT:", type: "text", name: "N° de OT", required: true },
            {
                label: "Detalle y chequeos realizados",
                type: "textarea",
                name: "Detalle y chequeos realizados",
                required: true,
                rows: 3 // Adjust the number of visible rows as needed
            },
            { label: "Mail de contacto:", type: "text", name: "Mail de contacto", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
            { label: "SN/MAC a INSTALAR:", type: "text", name: "SN/MAC a INSTALAR", required: true },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            { label: "Observaciones:", type: "textarea", name: "Observaciones", required: true, rows: 3 }
        ]
    },
    form70: {
        title: "Error Asistencia Técnica TÉCNICO (FAN)",
        fields: [
            { label: "Usuario afectado U:", type: "text", name: "U", required: true },
            { label: "Estado de Caso:", type: "select", name: "Estado de caso", required: true, options: [{ value: "Anulado", label: "Anulado" }, { value: "Pendiente", label: "Pendiente" }, { value: "Derivado", label: "Derivado" }] },
            { label: "Afecta Servicio?:", type: "select", name: "Afecta Servicio?:", required: true, options: [{ value: "Si", label: "Si" }, { value: "No", label: "No" }] },
            { label: "N° de Cuenta:", type: "text", name: "Nro Cuenta", required: true },
            { label: "DNI:", type: "text", name: "DNI", required: true },
            { label: "NODO:", type: "text", name: "NODO", required: true },
            { label: "N° de Caso:", type: "text", name: "N° de Caso", required: true },
            { label: "Mail de contacto:", type: "text", name: "Mail de contacto", required: true },
            { label: "N° de Contacto:", type: "text", name: "N° de Contacto", required: true },
            { label: "Localidad:", type: "text", name: "Localidad", required: true },
            {
                label: "Detalle:",
                type: "textarea",
                name: "Detalle",
                required: true,
                rows: 3 // Adjust the number of visible rows as needed
            },        ]
    },


};