// Datos personales, experiencia y formación.
// Todo el contenido del sitio vive en src/data/: actualizar el
// portafolio es editar un dato, no tocar el JSX.

export const perfil = {
  nombre: 'Josue',
  apellidos: 'Del Río Montoya',
  titular: 'Desarrollador fullstack',
  disponible: true,
  ubicacion: 'Lima, Perú',
  email: 'delriomontoyajosue6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/josue-del-rio-15b220444/',
  github: 'https://github.com/JFabian37',
  cv: '/CV-Josue-Del-Rio.pdf',

  // Lo que ve alguien en los primeros cinco segundos.
  posicionamiento:
    'Construyo software que reemplaza procesos en papel. Mi sistema de ' +
    'permisos de trabajo lo usa hoy el área de seguridad en las siete sedes ' +
    'de AGUNSA.',

  resumen:
    'Estudiante de Ingeniería de Software con Inteligencia Artificial en ' +
    'SENATI, en el programa de Aprendizaje Dual. Trabajo con React y ' +
    'TypeScript en el frontend, Node.js y Laravel en el backend, y bases de ' +
    'datos relacionales.\n\n' +
    'Entré a AGUNSA en el almacén. Ahí vi cómo los permisos de trabajo se ' +
    'llenaban a mano y se perdían, así que construí el sistema que los ' +
    'reemplazó. Hoy soy Asistente QHSE y programo las aplicaciones del área.\n\n' +
    'Me interesa el software que resuelve un proceso concreto, no el que ' +
    'solo compila.',
};

// Una sola empresa, dos cargos: el ascenso del almacén al área QHSE
// es parte del argumento, no un dato administrativo.
export const experiencia = [
  {
    id: 'agunsa',
    empresa: 'AGUNSA Perú',
    lugar: 'Lima, Perú',
    periodo: 'Julio 2025 — Actualidad',
    cargos: [
      {
        id: 'qhse',
        puesto: 'Asistente QHSE',
        periodo: 'Julio 2026 — Actualidad',
        actual: true,
        descripcion:
          'Automatizo procesos con Power Automate y programo aplicaciones web ' +
          'a medida para digitalizar los registros del área. El Portal QHSE que ' +
          'construí lo usa hoy el personal de seguridad en las siete sedes.',
        tecnologias: ['Power Pages', 'Dataverse', 'Power Automate', 'JavaScript', 'SQL'],
      },
      {
        id: 'almacen',
        puesto: 'Auxiliar de Almacén y Distribución',
        periodo: 'Julio 2025 — Junio 2026',
        actual: false,
        descripcion:
          'Recepción, validación y despacho de mercadería con trazabilidad ' +
          'completa. Aquí vi de cerca el problema que después resolvería con ' +
          'software: los permisos de trabajo se llenaban a mano y se perdían.',
        tecnologias: [],
      },
    ],
  },
];

export const educacion = [
  {
    id: 'senati-ingenieria',
    titulo: 'Ingeniería de Software con Inteligencia Artificial',
    institucion: 'SENATI',
    detalle: 'Aprendizaje Dual · 4° ciclo',
    periodo: 'En curso',
  },
  {
    id: 'colegio',
    titulo: 'Educación secundaria',
    institucion: 'G.U.E. José Granda',
    detalle: null,
    periodo: '2018 — 2022',
  },
];
