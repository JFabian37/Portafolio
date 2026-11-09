// Habilidades agrupadas por área.
//
// `certificado` apunta al id de un certificado real en certificados.js.
// Antes las doce tarjetas mostraban "VER CERTIFICADO" aunque el badge no
// enlazara a ningún documento; ahora solo lo lleva lo que está acreditado.

export const areas = [
  {
    id: 'frontend',
    nombre: 'Frontend',
    icono: 'codigo',
    habilidades: [
      { nombre: 'React', detalle: 'Componentes, hooks, React Router', nivel: 'Intermedio' },
      { nombre: 'JavaScript', detalle: 'ES6+, DOM, consumo de APIs', nivel: 'Intermedio' },
      { nombre: 'TypeScript', detalle: 'Tipado estricto en proyectos React', nivel: 'Básico' },
      { nombre: 'HTML5 y CSS3', detalle: 'Grid, Flexbox, diseño responsivo', nivel: 'Intermedio' },
      { nombre: 'Tailwind CSS', detalle: 'Utilidades y sistema de diseño', nivel: 'Básico' },
      { nombre: 'Angular', detalle: 'Aplicaciones de una sola página', nivel: 'Básico' },
    ],
  },
  {
    id: 'backend',
    nombre: 'Backend',
    icono: 'servidor',
    habilidades: [
      { nombre: 'Node.js y Express', detalle: 'API REST, middlewares, JWT', nivel: 'Intermedio' },
      { nombre: 'Laravel', detalle: 'MVC, Eloquent, rutas y controladores', nivel: 'Intermedio' },
      { nombre: 'Java', detalle: 'Programación orientada a objetos', nivel: 'Básico', certificado: 'oracle-java' },
      { nombre: 'Python', detalle: 'Pandas, NumPy, Matplotlib, automatización', nivel: 'Intermedio' },
    ],
  },
  {
    id: 'datos',
    nombre: 'Bases de datos',
    icono: 'base',
    habilidades: [
      { nombre: 'MySQL', detalle: 'Modelado relacional, Sequelize', nivel: 'Intermedio' },
      { nombre: 'PostgreSQL', detalle: 'Consultas y modelado', nivel: 'Intermedio' },
      { nombre: 'SQL Server', detalle: 'T-SQL, procedimientos almacenados', nivel: 'Intermedio' },
      { nombre: 'Oracle', detalle: 'Fundamentos de bases de datos', nivel: 'Básico', certificado: 'oracle-db' },
    ],
  },
  {
    id: 'bi',
    nombre: 'Análisis y BI',
    icono: 'grafico',
    habilidades: [
      { nombre: 'Power BI', detalle: 'DAX, Power Query, modelado, Power BI Service', nivel: 'Avanzado' },
      { nombre: 'Excel y VBA', detalle: 'Macros, Power Pivot, tablas dinámicas', nivel: 'Avanzado' },
      { nombre: 'Power Platform', detalle: 'Power Pages, Dataverse, Power Automate', nivel: 'Intermedio' },
    ],
  },
  {
    id: 'herramientas',
    nombre: 'Herramientas',
    icono: 'herramienta',
    habilidades: [
      { nombre: 'Git y GitHub', detalle: 'Ramas, pull requests, trabajo en equipo', nivel: 'Intermedio' },
      { nombre: 'Linux', detalle: 'Administración de sistemas Red Hat', nivel: 'Básico', certificado: 'redhat-rh124' },
      { nombre: 'Vite', detalle: 'Build, variables de entorno, despliegue', nivel: 'Intermedio' },
    ],
  },
];
