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
        // --- RAMA PRIMARIA (YA EXISTENTE) ---
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
              id: "3",
              etiqueta: "Coordinadora de Inglés (Primaria)",
              persona: {
                id: "3",
                nombre: "Florentina Gonzales",
                cargo: "Coordinadora de Inglés",
                tipo: "Contratada",
                horas: 34,
              },
              children: [
                {
                  id: "3-1",
                  etiqueta: "Profesores de Inglés (Primaria)",
                  persona: {
                    id: "3-1",
                    nombre: "Equipo de Inglés",
                    cargo: "Profesores de Inglés",
                    tipo: "Titular",
                    horas: 0,
                  },
                  children: [
                    {
                      id: "3-1-1",
                      persona: {
                        id: "3-1-1",
                        nombre: "Martín Córdoba",
                        cargo: "Profesor de Inglés",
                        tipo: "Titular",
                        horas: 16,
                      },
                    },
                    // ... (resto de profesores de primaria) ...
                    {
                      id: "3-1-7",
                      persona: {
                        id: "3-1-7",
                        nombre: "Karina Correa",
                        cargo: "Profesor de Inglés",
                        tipo: "Titular",
                        horas: 5.3,
                      },
                    },
                  ],
                },
              ],
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
              children: [
                {
                  id: "4-1",
                  persona: {
                    id: "4-1",
                    nombre: "Cristian Maurell",
                    cargo: "Docente de grado",
                    tipo: "Titular",
                    horas: 12.7,
                  },
                },
                // ... (resto de docentes de primaria) ...
                {
                  id: "4-12",
                  persona: {
                    id: "4-12",
                    nombre: "Carolina Colombres Garmendia",
                    cargo: "Docente de grado",
                    tipo: "Titular",
                    horas: 12.7,
                  },
                },
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
              children: [
                {
                  id: "5-1",
                  persona: {
                    id: "5-1",
                    nombre: "Rodolfo Camandona",
                    cargo: "Profesor de Educación Física",
                    tipo: "Titular",
                    horas: 13.3,
                  },
                },
                // ... (resto de profesores especiales de primaria) ...
                {
                  id: "5-7",
                  persona: {
                    id: "5-7",
                    nombre: "Fabián Brizuela",
                    cargo: "Profesor de Informática y Robótica",
                    tipo: "Titular",
                    horas: 12,
                  },
                },
              ],
            },
          ],
        },

        // --- 👇 NUEVA RAMA SECUNDARIA (DATOS INVENTADOS) 👇 ---
        {
          id: "6",
          etiqueta: "Director Nivel Secundario",
          persona: {
            id: "6",
            nombre: "Esteban Di Palma",
            cargo: "Director Nivel Secundario",
            tipo: "Titular",
            horas: 30,
          },
          children: [
            {
              id: "7",
              etiqueta: "Coordinador de Tutores (Secundaria)",
              persona: {
                id: "7",
                nombre: "Marcela Ríos",
                cargo: "Coordinadora de Tutores",
                tipo: "Titular",
                horas: 20,
              },
              children: [
                {
                  id: "7-1",
                  etiqueta: "Tutores",
                  persona: {
                    id: "7-1",
                    nombre: "Equipo de Tutores",
                    cargo: "Tutores",
                    tipo: "Titular",
                    horas: 0,
                  },
                  children: [
                    {
                      id: "7-1-1",
                      persona: {
                        id: "7-1-1",
                        nombre: "Lucas Fernandez",
                        cargo: "Tutor",
                        tipo: "Titular",
                        horas: 10,
                      },
                    },
                    {
                      id: "7-1-2",
                      persona: {
                        id: "7-1-2",
                        nombre: "Valeria Gimenez",
                        cargo: "Tutor",
                        tipo: "Contratada",
                        horas: 10,
                      },
                    },
                  ],
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
              children: [
                {
                  id: "8-1",
                  persona: {
                    id: "8-1",
                    nombre: "Roberto Sánchez",
                    cargo: "Profesor de Matemática",
                    tipo: "Titular",
                    horas: 15,
                  },
                },
                {
                  id: "8-2",
                  persona: {
                    id: "8-2",
                    nombre: "Lucía Méndez",
                    cargo: "Profesora de Lengua y Literatura",
                    tipo: "Titular",
                    horas: 18,
                  },
                },
                {
                  id: "8-3",
                  persona: {
                    id: "8-3",
                    nombre: "Diego Alonso",
                    cargo: "Profesor de Historia",
                    tipo: "Contratado",
                    horas: 12,
                  },
                },
                {
                  id: "8-4",
                  persona: {
                    id: "8-4",
                    nombre: "Julieta Paz",
                    cargo: "Profesora de Biología",
                    tipo: "Titular",
                    horas: 16,
                  },
                },
              ],
            },
            {
              id: "9",
              etiqueta: "Preceptores (Secundaria)",
              persona: {
                id: "9",
                nombre: "Equipo de Preceptores",
                cargo: "Preceptores",
                tipo: "Titular",
                horas: 0,
              },
              children: [
                {
                  id: "9-1",
                  persona: {
                    id: "9-1",
                    nombre: "Alberto Pérez",
                    cargo: "Preceptor",
                    tipo: "Titular",
                    horas: 25,
                  },
                },
                {
                  id: "9-2",
                  persona: {
                    id: "9-2",
                    nombre: "Silvia Castro",
                    cargo: "Preceptor",
                    tipo: "Titular",
                    horas: 25,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};