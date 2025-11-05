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
    { id: "p8", nombre: "Maria Eugenia Martin", cargo: "Recepción, Área Familia, Consejos de Dirección", tipo: "Titular", horas: 34 },
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
            tipo: "Contratada",
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
            }
          ]
        },

        // === ÁREA DE GESTIÓN Y FAMILIA ===
        {
          id: "polo",
          etiqueta: "Área de Gestión y Familia",
          persona: {
            id: "polo",
            nombre: "Área de Gestión y Familia",
            cargo: "Dirección Operativa y Administrativa",
            tipo: "Titular",
            horas: 0,
          },
          children: [
            {
              id: "polo-adm",
              etiqueta: "Administración, Recepción y Comunicación",
              persona: {
                id: "polo-adm",
                nombre: "Administración y Recepción",
                cargo: "Personal Administrativo y de Apoyo",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "p1", nombre: "Agostina Garcia Castro", cargo: "Comunicación y Promoción POLO", tipo: "Titular", horas: 20 },
                { id: "p2", nombre: "Felicitas del Frari", cargo: "Postulaciones, Administración y Recepción POLO", tipo: "Titular", horas: 34 },
                { id: "p7", nombre: "Lucia Beverina", cargo: "Recepción Pucará tarde y taller de Inglés", tipo: "Titular", horas: 16 },
                { id: "p8", nombre: "Maria Eugenia Martin", cargo: "Recepción Pucará mañana, Área Familia, Consejos de Dirección", tipo: "Titular", horas: 34 },
                { id: "p14", nombre: "Nicolás Torres", cargo: "TIC - Plataforma Colegium", tipo: "Titular", horas: 34 },
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
              listaPersonas: [
                { id: "p3", nombre: "Maria Marta Rojas", cargo: "Área Familia POLO", tipo: "Titular", horas: 31 },
                { id: "p4", nombre: "Milagros Guerrero", cargo: "Psicopedagoga DOE Secundaria PUC", tipo: "Titular", horas: 12 },
                { id: "p5", nombre: "Maria Fioretti", cargo: "Psicopedagoga DOE Primaria PUC", tipo: "Titular", horas: 15 },
                { id: "p6", nombre: "Elisa Agüero", cargo: "Psicóloga DOE Primaria", tipo: "Tercerizada", horas: 11 },
              ],
            },
            {
              id: "polo-ordenanza",
              etiqueta: "Personal de Ordenanza",
              persona: {
                id: "polo-ordenanza",
                nombre: "Equipo de Servicio",
                cargo: "Mantenimiento y Servicio",
                tipo: "Titular",
                horas: 0,
              },
              listaPersonas: [
                { id: "p9", nombre: "Walter Lencina", cargo: "Ordenanza", tipo: "Titular", horas: 40 },
                { id: "p10", nombre: "Maximiliano Lencina", cargo: "Ordenanza", tipo: "Titular", horas: 40 },
                { id: "p11", nombre: "Sebastián Samaquiri", cargo: "Ordenanza", tipo: "Titular", horas: 40 },
                { id: "p12", nombre: "Edgardo Enrique Rodriguez", cargo: "Ordenanza", tipo: "Titular", horas: 40 },
                { id: "p13", nombre: "Diego Alejandro Rodriguez", cargo: "Ordenanza", tipo: "Titular", horas: 40 },
              ],
            },
          ],
        },
      ],
    },
  ],
};