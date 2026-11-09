import qhseImg from '../assets/qhse.svg';
import inventarioImg from '../assets/inventario.webp';
import terrunoImg from '../assets/terruno.svg';
import foriaImg from '../assets/foria.svg';
import powerBiImg from '../assets/powerbi.svg';

// Cada proyecto lleva solo los enlaces que existen de verdad.
// Antes todos tenían linkCodigo: '#', así que la página mostraba
// botones "Ver Código" que no llevaban a ninguna parte.

export const proyectos = [
  {
    id: 'qhse',
    titulo: 'Portal QHSE',
    subtitulo: 'AGUNSA · Sistema interno',
    imagen: qhseImg,
    alt: 'Portada del Portal QHSE: permisos de trabajo firmados en siete sedes',
    estado: 'En uso interno',
    rol: 'Diseño y desarrollo completo',
    descripcion:
      'Portal de permisos de trabajo para el área de seguridad, usado por el ' +
      'personal de siete sedes. Digitaliza el ciclo completo: el supervisor llena ' +
      'el formato ATS o PETAR, los trabajadores firman en pantalla, el sistema ' +
      'arma el expediente en PDF y lo archiva solo. Incluye control de acceso por ' +
      'rol, registro de terceros, inventario y entrega de EPP cruzada por ' +
      'trabajador. Reemplazó un proceso que antes se llevaba en papel.',
    tecnologias: ['Power Pages', 'Dataverse', 'Power Automate', 'JavaScript', 'jsPDF'],
    enlaces: [],
    notaEnlaces: 'Sistema interno de la empresa: el código y el acceso son privados.',
  },
  {
    id: 'inventario',
    titulo: 'Panel de Inventario',
    subtitulo: 'Aplicación fullstack',
    imagen: inventarioImg,
    // Es una captura: interesa la parte de arriba, no el centro.
    encuadre: 'top',
    alt: 'Panel de inicio del sistema de inventario con indicadores, movimientos recientes y stock por categoría',
    estado: 'Completado',
    rol: 'Frontend y API',
    descripcion:
      'Sistema de inventario con kardex: entradas, salidas, ajustes y anulación de ' +
      'movimientos dentro de transacciones, para que el stock nunca quede a medias. ' +
      'Autenticación con JWT y tres roles (Administrador, Almacenero y Supervisor) ' +
      'cuyos permisos se validan en la API, no solo escondiendo botones. ' +
      'El panel resume valorización, bajo stock y distribución por categoría.',
    tecnologias: [
      'React', 'Vite', 'React Router', 'Node.js', 'Express',
      'Sequelize', 'MySQL', 'JWT',
    ],
    enlaces: [
      { tipo: 'codigo', texto: 'Frontend', url: 'https://github.com/JFabian37/App-Inventario' },
      { tipo: 'codigo', texto: 'API REST', url: 'https://github.com/JFabian37/api-db' },
    ],
  },
  {
    id: 'terruno',
    titulo: 'Terruño & Co.',
    subtitulo: 'Vinoteca · Trabajo grupal',
    imagen: terrunoImg,
    alt: 'Portada de Terruño & Co.: botella en 3D sobre hileras de viñedo',
    estado: 'Proyecto académico',
    rol: 'Desarrollo en equipo',
    descripcion:
      'Frontend de una vinoteca con 13 vistas: catálogo con filtros por tipo, ' +
      'región, añada y precio sincronizados con la URL; ficha de producto con ' +
      'botella en 3D renderizada con Three.js; agenda de catas, planes de club y ' +
      'un recorrido de pedido en tres pasos con guardas de ruta. ' +
      'Todo en TypeScript estricto.',
    tecnologias: [
      'React', 'TypeScript', 'Tailwind CSS', 'Three.js',
      'React Three Fiber', 'Motion', 'Vite',
    ],
    enlaces: [
      { tipo: 'codigo', texto: 'Ver código', url: 'https://github.com/DrocuxDev/VinotecaTerru-o' },
    ],
  },
  {
    id: 'foria',
    titulo: 'FORIA SAC',
    subtitulo: 'Tienda en línea',
    imagen: foriaImg,
    alt: 'Logotipo de FORIA SAC',
    estado: 'En producción',
    rol: null,
    descripcion:
      'Aplicación web de venta de calzado con catálogo y carrito de compras.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Laravel', 'PostgreSQL'],
    enlaces: [{ tipo: 'demo', texto: 'Ver sitio', url: 'https://foria.com.pe' }],
  },
  {
    id: 'fravia',
    titulo: 'FRAVIA SAC',
    subtitulo: 'Tienda en línea',
    imagen: null,
    alt: 'FRAVIA SAC',
    estado: 'En producción',
    rol: null,
    descripcion:
      'Aplicación web de venta de ropa con catálogo y carrito de compras.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Laravel', 'PostgreSQL'],
    enlaces: [{ tipo: 'demo', texto: 'Ver sitio', url: 'https://fravia.com.pe' }],
  },
  {
    id: 'intikisa',
    titulo: 'Intikisa',
    subtitulo: 'Tienda en línea',
    imagen: null,
    alt: 'Intikisa',
    estado: 'En producción',
    rol: null,
    descripcion:
      'Aplicación web para la venta de productos naturales.',
    tecnologias: ['React', 'Laravel', 'PostgreSQL'],
    enlaces: [{ tipo: 'demo', texto: 'Ver sitio', url: 'https://intikisa.pe' }],
  },
  {
    id: 'powerbi',
    titulo: 'Dashboard en Power BI',
    subtitulo: 'Análisis de datos',
    imagen: powerBiImg,
    alt: 'Tablero interactivo construido en Power BI',
    estado: 'Completado',
    rol: null,
    descripcion:
      'Panel interactivo con modelo de datos, medidas en DAX y publicación ' +
      'en Power BI Service.',
    tecnologias: ['Power BI', 'DAX', 'Power Query', 'Modelado de datos', 'SharePoint'],
    enlaces: [],
  },
];
