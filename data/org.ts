// /data/org.ts
export const orgData = {
  id: "root",
  etiqueta: "Consejo de Dirección",
  persona: {
    id: "root",
    nombre: "Consejo de Dirección",
    cargo: "Consejo Directivo",
    tipo: "Titular",
    horas: 0,
  },
  // --- LISTA DE PERSONAS AÑADIDA AL CONSEJO ---
  listaPersonas: [
    { id: "1", nombre: "Juan Manuel Romano", cargo: "Director General", tipo: "Titular", horas: 34 },
    
    { id: "sec_6_37", nombre: "Hernan Ponce Veron", cargo: "Rector Nivel Secundario", tipo: "Titular", horas: 34.0 },
    
    { id: "sec_18_7", nombre: "Fernando Casiva", cargo: "Vice Rector-Profesor Lengua", tipo: "Titular", horas: 34.0 },
    { id: "p8", nombre: "Maria Eugenia Martin", cargo: "Recepción, Área Familia, Consejos de Dirección", tipo: "Titular", horas: 2 },
  ],
  children: [
    {
      id: "1",
      etiqueta: "Director General",
      persona: {
        id: "1",
        nombre: "Juan Manuel Romano",
        cargo: "Director General",
        tipo: "Titular",
        horas: 34,
      },
      children: [
        // === NIVEL PRIMARIO ===
        {
          id: "2",
          etiqueta: "Directora Nivel Primario",
          persona: {
            id: "2",
            nombre: "Adriana Lozano",
            cargo: "Directora Nivel Primario",
            tipo: "Titular",
            horas: 31,
          },
          children: [
            {
  id: "secretaria-primaria",
  etiqueta: "Secretaría de Nivel Primario",
  persona: {
    id: "secretaria-primaria",
    nombre: "César Juárez",
    cargo: "Secretario de Nivel Primario",
    tipo: "Titular",
    horas: 34,
  },
},

            {
              id: "4",
              etiqueta: "Equipo Docente (Primaria)",
              persona: {
                id: "4",
                nombre: "Equipo de Docentes de Grado",
                cargo: "Docentes",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "4-1", nombre: "Cristian Maurell", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-2", nombre: "Fernando Chavez", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-3", nombre: "Franco Orquera", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-4", nombre: "Marcelo Sanchez", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-5", nombre: "José María Torres", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-6", nombre: "Marcelo Gutiérrez", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-7", nombre: "David Gonzalez", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-8", nombre: "Carlos Diaz", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-9", nombre: "Matías Sosa", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-10", nombre: "Sebastián Carrió", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-11", nombre: "María Lourdes Clúa", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
                { id: "4-12", nombre: "Carolina Colombres Garmendia", cargo: "Docente de grado", tipo: "Titular", horas: 12.7 },
              ],
            },
            {
              id: "5",
              etiqueta: "Profesores Especiales (Primaria)",
              persona: {
                id: "5",
                nombre: "Profesores Especiales",
                cargo: "Educación Física / Música / Artística / Tecnología",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "5-1", nombre: "Rodolfo Camandona", cargo: "Profesor de Educación Física", tipo: "Titular", horas: 13.3 },
                { id: "5-2", nombre: "Guillermo Sorucco", cargo: "Profesor de Educación Física", tipo: "Titular", horas: 8 },
                { id: "5-3", nombre: "Carlos Camandona", cargo: "Profesor de Educación Física", tipo: "Titular", horas: 5.3 },
                { id: "5-4", nombre: "Elisa Aguero", cargo: "Profesora de Música", tipo: "Titular", horas: 2.6 },
                { id: "5-5", nombre: "Lourdes Fuentes Ortiz", cargo: "Profesora de Música", tipo: "Titular", horas: 4 },
                { id: "5-6", nombre: "Ariel Medina", cargo: "Profesor de Educación Artística", tipo: "Titular", horas: 4 },
                { id: "5-7", nombre: "Fabián Brizuela", cargo: "Profesor de Informática y Robótica", tipo: "Titular", horas: 12 },
              ],
            },
          ],
        },

        // === NIVEL SECUNDARIO ===
        {
          id: "6",
          etiqueta: "Rector Nivel Secundario",
          persona: {
            id: "sec_6_37",
            nombre: "Veron Ponce Hernan",
            cargo: "Rector - Profesor Salud y Adol.",
            tipo: "Titular",
            horas: 34.0,
          },
          children: [
           {
  id: "secretaria-secundaria",
  etiqueta: "Secretaría de Nivel Secundario",
  persona: {
    id: "secretaria-secundaria",
    nombre: "Enrique Torino",
    cargo: "Secretario de Nivel Secundario",
    tipo: "Titular",
    horas: 34,
  },
  listaPersonas: [
    {
      id: "sec-apoyo-ana",
      nombre: "Ana María",
      cargo: "Apoyo Secretaría Secundaria",
      tipo: "Titular",
      horas: 20,
    },
  ],
},



            {
              id: "8",
              etiqueta: "Equipo Docente (Secundaria)",
              persona: {
                id: "8",
                nombre: "Docentes por Asignatura",
                cargo: "Profesores",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "sec_24_0", nombre: "Arnedo Daniel", cargo: "Profesor de Arte y Ed. Plastica", tipo: "Titular", horas: 16.0 },
                { id: "sec_24_1", nombre: "Barrios Lucas", cargo: "Profesor de Fisica y Fe y Vida", tipo: "Titular", horas: 16.0 },
                { id: "sec_6_3", nombre: "Brizuela Fabian", cargo: "Profesor TIC", tipo: "Titular", horas: 4.0 },
                { id: "sec_12_4", nombre: "Camandona Carlos", cargo: "Profesor Educ Fis", tipo: "Titular", horas: 8.0 },
                { id: "sec_8_5", nombre: "Camandona Rodolfo", cargo: "Prof Educ Fis", tipo: "Titular", horas: 5.33 },
                { id: "sec_8_6", nombre: "Joaquin Dulcinea", cargo: "Profesora Química", tipo: "Titular", horas: 5.33 },
                { id: "sec_18_7", nombre: "Casiva Fernando", cargo: "Vice Rector-Profesor Lengua", tipo: "Titular", horas: 34.0 },
                { id: "sec_20_8", nombre: "Cisneros Matías", cargo: "Profesor Matemática", tipo: "Titular", horas: 13.33 },
                { id: "sec_15_10", nombre: "Costas Carlos", cargo: "Profesor Geografía", tipo: "Titular", horas: 10.0 },
                { id: "sec_13_11", nombre: "Di Risio Gabriel", cargo: "Profesor Administración", tipo: "Titular", horas: 8.67 },
                { id: "sec_10_14", nombre: "Gallardo Juan Carlos", cargo: "Profesor Matemática", tipo: "Titular", horas: 6.67 },
                { id: "sec_7_15", nombre: "Galván Javier", cargo: "Profesor Biología-Química", tipo: "Titular", horas: 4.67 },
                { id: "sec_12_16", nombre: "Torres Matias", cargo: "Profesor Geografía", tipo: "Titular", horas: 8.0 },
                { id: "sec_6_19", nombre: "Lix Kett Alvaro", cargo: "Profesor Derecho", tipo: "Titular", horas: 4.0 },
                { id: "sec_18_20", nombre: "Lord Marcos", cargo: "Profesor Filosofía", tipo: "Titular", horas: 12.0 },
                { id: "sec_14_21", nombre: "Mena Máximo", cargo: "Profesor Lengua", tipo: "Titular", horas: 9.33 },
                { id: "sec_6_22", nombre: "Miglio Raúl", cargo: "Profesor Historia", tipo: "Titular", horas: 4.0 },
                { id: "sec_22_24", nombre: "Pacheco Nicolás", cargo: "Profesor Ciudanía y Economía", tipo: "Titular", horas: 14.67 },
                { id: "sec_15_25", nombre: "Parrado Emanuel", cargo: "Profesor Historia", tipo: "Titular", horas: 10.0 },
                { id: "sec_6_26", nombre: "Pietro Ariel", cargo: "Profesor Historia", tipo: "Titular", horas: 4.0 },
                { id: "sec_20_28", nombre: "Salcedo Ignacio", cargo: "Profesor Matemática", tipo: "Titular", horas: 13.33 },
                { id: "sec_9_30", nombre: "Sierra Rodolfo", cargo: "Profesor Derecho", tipo: "Titular", horas: 6.0 },
                { id: "sec_19_31", nombre: "Silva Santiago", cargo: "Profesor Biología - Química", tipo: "Titular", horas: 12.67 },
                { id: "sec_8_32", nombre: "Soruco Guillermo", cargo: "Profesor Educ Fis", tipo: "Titular", horas: 5.33 },
                { id: "sec_7_33", nombre: "Sosa Reto Rodolfo", cargo: "Profesor Administración", tipo: "Titular", horas: 4.67 },
                { id: "sec_14_34", nombre: "Terán Emma", cargo: "Profesor Química", tipo: "Titular", horas: 9.33 },
                { id: "sec_4_35", nombre: "Torino Enrique", cargo: "Secretario - Profesor Física", tipo: "Titular", horas: 2.67 },
                { id: "sec_6_38", nombre: "Pinto Marcos", cargo: "Profesor Tecnología", tipo: "Titular", horas: 4.0 },
              ],
            },
            {
              id: "9",
              etiqueta: "Equipo de Preceptores",
              persona: {
                id: "9",
                nombre: "Equipo de Preceptores (Pec)",
                cargo: "Preceptores",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "sec_4_2", nombre: "Bonfiglioli Tomás", cargo: "Pec- Profesor Educ Fis", tipo: "Titular", horas: 34.0 },
                { id: "sec_14_9", nombre: "Cordoba Martín", cargo: "Pec- Profesor Tecnología", tipo: "Titular", horas: 34.0 },
                { id: "sec_15_17", nombre: "Jiménez German", cargo: "Pec - Profesor Lengua", tipo: "Titular", horas: 34.0 },
                { id: "sec_12_29", nombre: "Salica Martín", cargo: "Pec -Profesor Educ Fis", tipo: "Titular", horas: 34.0 },
                { id: "sec_8_36", nombre: "Corvalán Claudio", cargo: "Pec - Profesor Fe y Vida", tipo: "Titular", horas: 34.0 },
              ],
            },
            {
  id: "tutores",
  etiqueta: "Equipo de Tutores (Secundaria)",
  persona: {
    id: "tutores",
    nombre: "Gerardo Tumini",
    cargo: "Jefe de Tutores",
    tipo: "Titular",
    horas: 14,
  },
  listaPersonas: [
    { id: "tutor1", nombre: "Emmanuel Parrado", cargo: "Tutor", tipo: "Titular", horas: 3 },
    { id: "tutor2", nombre: "Jesús Guillermo Soruco", cargo: "Tutor", tipo: "Titular", horas: 1 },
    { id: "tutor3", nombre: "Christian Kasem", cargo: "Tutor", tipo: "Titular", horas: 8 },
    { id: "tutor4", nombre: "Carlos Marcelo Suárez Villafañe", cargo: "Tutor", tipo: "Titular", horas: 3 },
    { id: "tutor5", nombre: "Luis Enrique Moscol Seminario", cargo: "Tutor", tipo: "Titular", horas: 5 },
    { id: "tutor6", nombre: "Lucas Matías Barrios", cargo: "Tutor", tipo: "Titular", horas: 3 },
    { id: "tutor7", nombre: "Marcos Lord Figueroa", cargo: "Tutor", tipo: "Titular", horas: 10 },
    { id: "tutor8", nombre: "Matías Ortiz de Rozas", cargo: "Tutor", tipo: "Titular", horas: 5 },
  ],
},


          ],
        },
        
        // === DEPARTAMENTO DE INGLÉS ===
        {
          id: "3",
          etiqueta: "Coordinadora Gral. de Inglés",
          persona: {
            id: "3",
            nombre: "Florentina Gonzales",
            cargo: "Coordinadora General de Inglés",
            tipo: "Titular",
            horas: 34,
          },
          children: [
            {
              id: "3-1",
              etiqueta: "Equipo de Inglés (Primaria)",
              persona: {
                id: "3-1",
                nombre: "Profesores de Inglés Primaria",
                cargo: "Profesores de Inglés",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "3-1-1", nombre: "Martín Córdoba", cargo: "Profesor de Inglés", tipo: "Titular", horas: 16 },
                { id: "3-1-2", nombre: "Priscila Mittelman", cargo: "Profesor de Inglés", tipo: "Titular", horas: 10.6 },
                { id: "3-1-3", nombre: "Laura Lazarte", cargo: "Profesor de Inglés", tipo: "Titular", horas: 10.6 },
                { id: "3-1-4", nombre: "Cristian López", cargo: "Profesor de Inglés", tipo: "Titular", horas: 16 },
                { id: "3-1-5", nombre: "Sofía Filippini", cargo: "Profesor de Inglés", tipo: "Titular", horas: 5.3 },
                { id: "3-1-6", nombre: "Salas María Florencia", cargo: "Profesor de Inglés", tipo: "Titular", horas: 5.3 },
                { id: "3-1-7", nombre: "Karina Correa", cargo: "Profesor de Inglés", tipo: "Titular", horas: 5.3 },
              ],
            },
            {
              id: "10",
              etiqueta: "Equipo de Inglés (Secundaria)",
              persona: {
                id: "10",
                nombre: "Profesores de Inglés Secundaria",
                cargo: "Profesores de Inglés",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "sec_16_12", nombre: "Diaz Sorbello Pablo", cargo: "Profesor Inglés", tipo: "Titular", horas: 10.67 },
                { id: "sec_12_13", nombre: "Fernandez Mercedes", cargo: "Profesor Inglés", tipo: "Titular", horas: 8.0 },
                { id: "sec_8_18", nombre: "Lazarte Laura", cargo: "Profesor Inglés", tipo: "Titular", horas: 5.33 },
                { id: "sec_14_23", nombre: "Nuñez Tadeo", cargo: "Profesor Inglés", tipo: "Titular", horas: 9.33 },
                { id: "sec_16_27", nombre: "Ruiz Demetrio", cargo: "Profesor Inglés", tipo: "Titular", horas: 10.67 },
              ],
            },
            {
  id: "taller-ingles",
  etiqueta: "Taller de Inglés",
  persona: {
    id: "taller-ingles",
    nombre: "Equipo de Taller de Inglés",
    cargo: "Talleres complementarios de inglés",
    tipo: "Titular",
    horas: 0,
  },
  listaPersonas: [
    { id: "tall-1", nombre: "Carlos Martín Córdoba", cargo: "Profesor Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-2", nombre: "Cristian Gerardo López", cargo: "Profesor Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-3", nombre: "Pablo Alejandro Díaz Sorbello", cargo: "Profesor Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-4", nombre: "Priscilla Mittelmann", cargo: "Profesora Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-5", nombre: "Gustavo Maximiliano Roda", cargo: "Profesor Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-6", nombre: "María Marta Ale", cargo: "Profesora Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-7", nombre: "Karina Alejandra Correa", cargo: "Profesora Taller de Inglés", tipo: "Titular", horas: 4 },
    { id: "tall-8", nombre: "Julieta Dulac", cargo: "Profesora Taller de Inglés", tipo: "Titular", horas: 4 },
  ],
},

            
          ]
          
        },

        // === ÁREA DE GESTIÓN Y FAMILIA ===
       {
  id: "grupo-areas",
  etiqueta: "Áreas Transversales",
  persona: {
    id: "grupo-areas",
    nombre: "Áreas Transversales",
    cargo: "Agrupador de áreas",
    tipo: "Titular",
    horas: 0,
  },
  children: [
    // --- ÁREA LEGAL ---
    {
      id: "legal",
      etiqueta: "Área Legal (Polo)",
      persona: {
        id: "legal",
        nombre: "Dra. Clara García Castellanos",
        cargo: "Asesoría Legal (Tercerizada)",
        tipo: "Tercerizada",
        horas: 15,
      },
    },

    // --- ÁREA FAMILIA, COMUNICACIÓN Y POSTULACIONES ---
    {
      id: "area-familia-polo",
      etiqueta: "Área Familia, Comunicación y Postulaciones (Polo)",
      persona: {
        id: "area-familia-polo",
        nombre: "Equipo Área Familia (Polo)",
        cargo: "Equipo unificado del Polo",
        tipo: "Titular",
        horas: 0,
      },
      listaPersonas: [
        { id: "maria-marta-rojas", nombre: "María Marta Rojas", cargo: "Directora Área Familia (Polo)", tipo: "Titular", horas: 31 },
        { id: "maria-eugenia-martin", nombre: "María Eugenia Martín", cargo: "Colaboradora Área Familia (Polo)", tipo: "Titular", horas: 5 },
        { id: "felicitas-del-frari", nombre: "Felicitas Del Frari", cargo: "Responsable de Postulaciones (Polo)", tipo: "Titular", horas: 29 },
        { id: "agostina-garcia", nombre: "Agostina García Castro", cargo: "Comunicación y Promoción (Polo)", tipo: "Titular", horas: 20 },
      ],
    },

    // --- CAPELLANÍA ---
    {
      id: "capellanes",
      etiqueta: "Capellanía",
      persona: {
        id: "capellanes",
        nombre: "Equipo de Capellanes",
        cargo: "Formación espiritual y acompañamiento",
        tipo: "Titular",
        horas: 0,
      },
      listaPersonas: [
        { id: "galindo-jesus", nombre: "Jesús Galindo Bustos", cargo: "Capellán del Polo", tipo: "Titular", horas: 10 },
        { id: "rant-andrej", nombre: "Andrej Rant", cargo: "Capellán del Polo", tipo: "Titular", horas: 31 },
        
      ],
    },

    // --- RECEPCIÓN ---
    {
  id: "polo-adm-recepcion",
  etiqueta: "Recepción",
  persona: {
    id: "polo-adm-recepcion",
    nombre: "Equipo de Recepción",
    cargo: "Atención y soporte institucional",
    tipo: "Titular",
    horas: 0,
  },
  listaPersonas: [
    { id: "p8", nombre: "María Eugenia Martín", cargo: "Recepción Pucará", tipo: "Titular", horas: 25 },
    { id: "p7", nombre: "Luciana Beverina", cargo: "Recepción Pucará (Tarde)", tipo: "Titular", horas: 14 },
  ],
},
{
  id: "tic",
  etiqueta: "TIC - Plataforma Colegium",
  persona: {
    id: "p14",
    nombre: "Nicolás Torres",
    cargo: "TIC - Plataforma Colegium",
    tipo: "Titular",
    horas: 34,
  },
  listaPersonas: [],
},


    // --- CONTABILIDAD Y TESORERÍA ---
   

    // --- ADMINISTRACIÓN (CON SUBNIVELES) ---
    {
      id: "area-admin",
      etiqueta: "Administración (Polo)",
      persona: {
        id: "cristina-navarro",
        nombre: "Cristina Navarro Zaldarriaga",
        cargo: "Administración (Polo)",
        tipo: "Titular",
        horas: 34,
      },
      children: [
        {
          id: "facturacion",
          etiqueta: "Facturación y Cobranzas",
          persona: {
            id: "facturacion",
            nombre: "Equipo de Facturación y Cobranzas",
            cargo: "Gestión de cobranzas y administración contable",
            tipo: "Titular",
            horas: 0,
          },
          listaPersonas: [
            { id: "virginia-m", nombre: "Virginia Melhen", cargo: "Facturación y Tesorería", tipo: "Titular", horas: 34 },
            { id: "mercedes-gp", nombre: "Mercedes García Posse", cargo: "Facturación y Cobranzas", tipo: "Titular", horas: 34 },
            { id: "victoria-m", nombre: "Victoria Morano", cargo: "Facturación (Tercerizada)", tipo: "Tercerizada", horas: 8 },
          ],
        },
        {
      id: "contabilidad",
      etiqueta: "Contabilidad y Tesorería",
      persona: {
        id: "contabilidad",
        nombre: "Equipo de Contabilidad y Tesorería",
        cargo: "Gestión contable y financiera",
        tipo: "Titular",
        horas: 0,
      },
      listaPersonas: [
        { id: "cristina-zottoli", nombre: "Cristina Zottoli Z.", cargo: "Contabilidad y Tesorería", tipo: "Titular", horas: 25 },
        { id: "virginia-melhen", nombre: "Virginia Melhen", cargo: "Facturación y Tesorería", tipo: "Titular", horas: 34 },
      ],
    },
        {
          id: "rrhh",
          etiqueta: "Recursos Humanos",
          persona: {
            id: "rrhh",
            nombre: "Equipo de RRHH",
            cargo: "Gestión del personal y asesoría",
            tipo: "Titular",
            horas: 0,
          },
          listaPersonas: [
            { id: "dolores-k", nombre: "Dolores Kaese", cargo: "RRHH", tipo: "Titular", horas: 34 },
            { id: "guillermina-c", nombre: "Guillermina Conti", cargo: "RRHH", tipo: "Titular", horas: 34 },
          ],
        },
       {
  id: "mantenimiento",
  etiqueta: "Mantenimiento, Op. y Ss.",
  persona: {
    id: "mantenimiento",
    nombre: "Equipo de Mantenimiento, Op. y Ss.",
    cargo: "Mantenimiento, Operaciones y Servicios Generales",
    tipo: "Titular",
    horas: 0,
  },
  listaPersonas: [
    {
      id: "varela-juan-pablo",
      nombre: "Juan Pablo Varela",
      cargo: "Mantenimiento, Operaciones y Servicios Generales",
      tipo: "Titular",
      horas: 34,
    },
    {
      id: "lencina-maximiliano",
      nombre: "César Maximiliano Lencina",
      cargo: "Mantenimiento, Operaciones y Servicios Generales",
      tipo: "Titular",
      horas: null, // actualizar cuando tengas el dato
    },
  ],
},

       {
  id: "limpieza",
  etiqueta: "Personal de Limpieza y Conserjes",
  persona: {
    id: "limpieza",
    nombre: "Equipo de Conserjería y Limpieza",
    cargo: "Soporte institucional y mantenimiento general",
    tipo: "Titular",
    horas: 0,
  },
  listaPersonas: [
    { id: "cons1", nombre: "Carlos Walter Lencina", cargo: "Conserje", tipo: "Titular", horas: 46.5 },
    { id: "cons2", nombre: "César Maximiliano Lencina", cargo: "Conserje", tipo: "Titular", horas: 46.5 },
    { id: "cons3", nombre: "Álvaro Sebastián Samaquiri", cargo: "Conserje", tipo: "Titular", horas: 46.5 },
    { id: "cons4", nombre: "Edgardo Enrique Rodríguez", cargo: "Conserje", tipo: "Titular", horas: 32 },
    { id: "cons5", nombre: "Diego Alejandro Rodríguez", cargo: "Conserje", tipo: "Titular", horas: 40 },
  ],
},


      ],
    },
  ],
},

{
  id: "polo-doe",
  etiqueta: "Departamento de Orientación Escolar (DOE)",
  persona: {
    id: "polo-doe",
    nombre: "Equipo DOE",
    cargo: "Psicólogos y Psicopedagogos",
    tipo: "Titular",
    horas: 0,
  },
  children: [
    {
      id: "doe-primaria",
      etiqueta: "DOE Nivel Primario",
      persona: {
        id: "doe-primaria",
        nombre: "María Fioretti",
        cargo: "Psicopedagoga DOE Primaria",
        tipo: "Titular",
        horas: 12,
      },
    },
    {
      id: "doe-secundaria",
      etiqueta: "DOE Nivel Secundario",
      persona: {
        id: "doe-secundaria",
        nombre: "María del Milagro Guerrero",
        cargo: "Psicopedagoga DOE Secundaria",
        tipo: "Titular",
        horas: 8,
      },
    },
  ],
},



      ],
    },
  ],
};