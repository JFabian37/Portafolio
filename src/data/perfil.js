// Datos personales y de formación.
// Están aquí y no dentro de los componentes para que actualizar el
// portafolio sea editar un dato, no tocar el JSX.

export const perfil = {
  nombre: 'Josue',
  apellidos: 'Del Río Montoya',
  rol: 'Estudiante de Ingeniería de Software con IA · SENATI',
  disponible: true,
  ubicacion: 'Lima, Perú',
  email: 'delriomontoyajosue6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/josue-del-rio-15b220444/',
  github: 'https://github.com/JFabian37',
  cv: '/CV-Josue-Del-Rio.pdf',

  descripcion:
    'Construyo aplicaciones web de principio a fin: interfaces en React y ' +
    'APIs en Node.js y Laravel sobre bases de datos relacionales. ' +
    'Actualmente curso el 4° ciclo de Ingeniería de Software con ' +
    'Inteligencia Artificial en SENATI, bajo el programa de Aprendizaje Dual.',

  resumen:
    'Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI ' +
    '(Aprendizaje Dual, VI semestres). Trabajo con React, Node.js, Express, ' +
    'Laravel, MySQL y PostgreSQL, y uso Power BI para análisis de datos.\n\n' +
    'Mis proyectos van desde un panel de inventario con kardex y control de acceso ' +
    'por rol, hasta un portal interno de permisos de trabajo que hoy usa el área ' +
    'de QHSE en las sedes de la empresa donde trabajo. Me interesa que el software ' +
    'resuelva un proceso concreto, no solo que compile.',
};

export const educacion = [
  {
    id: 'senati-ingenieria',
    titulo: 'Ingeniería de Software con Inteligencia Artificial',
    institucion: 'SENATI · Escuela de Tecnologías de la Información',
    detalle: 'Aprendizaje Dual · VI semestres · 4° ciclo',
    estado: 'En curso',
  },
  {
    id: 'senati-seminario',
    titulo: 'Seminario de Complementación Práctica II',
    institucion: 'SENATI · Escuela de Tecnologías de la Información',
    detalle: null,
    estado: 'En curso',
  },
  {
    id: 'colegio',
    titulo: 'Educación secundaria',
    institucion: 'G.U.E. José Granda',
    detalle: '2018 – 2022',
    estado: 'Concluido',
  },
];

export const experiencia = [
  {
    id: 'agunsa',
    puesto: 'Auxiliar de Almacén y Distribución',
    empresa: 'AGUNSA / IMUDESA — Almacenes de LATAM',
    periodo: 'Julio 2025 – Actualidad',
    detalle:
      'Recepción, validación y despacho de mercadería. En paralelo desarrollo ' +
      'el Portal QHSE que usa el área de seguridad en las sedes.',
  },
  {
    id: 'nomicar',
    puesto: 'Operario de almacén – maquila',
    empresa: 'Nomi Car Service S.A.C.',
    periodo: 'Marzo – Junio 2025',
    detalle: null,
  },
  {
    id: 'pronabec',
    puesto: 'Operador Informático · Examen Beca 18',
    empresa: 'PRONABEC',
    periodo: 'Diciembre 2024',
    detalle: null,
  },
];
