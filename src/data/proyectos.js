import qhseImg from '../assets/qhse.svg';
import inventarioImg from '../assets/inventario.webp';
import terrunoImg from '../assets/terruno.svg';
import powerBiImg from '../assets/powerbi.svg';

// Solo proyectos verificables: cada uno tiene captura propia y, cuando
// el código es público, su enlace. Un enlace que no abre resta más de
// lo que suma, así que los botones se generan desde `enlaces`.

export const proyectos = [
  {
    id: 'qhse',
    destacado: true,
    titulo: 'Portal QHSE',
    cliente: 'AGUNSA',
    tipo: 'Sistema interno',
    imagen: qhseImg,
    alt: 'Interfaz del Portal QHSE: formato de permiso de trabajo ATS con firmas y expediente en PDF',
    estado: 'En uso',
    // El dato que convierte el proyecto en evidencia.
    impacto: [
      { cifra: '7', etiqueta: 'sedes en operación' },
      { cifra: '36', etiqueta: 'tablas en Dataverse' },
      { cifra: '5', etiqueta: 'roles con permisos propios' },
    ],
    descripcion:
      'El permiso de trabajo se llenaba a mano, se firmaba en papel y el ' +
      'expediente se archivaba en un folder. Ahora el supervisor llena el ' +
      'formato ATS o PETAR desde el navegador, los trabajadores firman en ' +
      'pantalla y el sistema arma el expediente en PDF y lo archiva solo.',
    detalles: [
      'Control de acceso por rol validado en la base de datos, no en la interfaz',
      'Registro de terceros y control de inventario con entrega de EPP por trabajador',
      'Generación del expediente en PDF y archivado automático',
    ],
    tecnologias: ['Power Pages', 'Dataverse', 'Power Automate', 'JavaScript', 'jsPDF'],
    enlaces: [],
    notaEnlaces: 'Sistema interno de la empresa: el código y el acceso son privados.',
  },
  {
    id: 'inventario',
    titulo: 'Panel de Inventario',
    cliente: null,
    tipo: 'Aplicación fullstack',
    imagen: inventarioImg,
    encuadre: 'top',
    alt: 'Panel de inicio del sistema de inventario con indicadores, movimientos recientes y stock por categoría',
    estado: 'Completado',
    descripcion:
      'Kardex con entradas, salidas, ajustes y anulaciones. Cada movimiento ' +
      'corre dentro de una transacción, para que el stock nunca quede a ' +
      'medias si algo falla. Tres roles cuyos permisos se validan en la API, ' +
      'no escondiendo botones en el frontend.',
    tecnologias: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT'],
    enlaces: [
      { tipo: 'codigo', texto: 'Frontend', url: 'https://github.com/JFabian37/App-Inventario' },
      { tipo: 'codigo', texto: 'API REST', url: 'https://github.com/JFabian37/api-db' },
    ],
  },
  {
    id: 'terruno',
    titulo: 'Terruño & Co.',
    cliente: null,
    tipo: 'Vinoteca, trabajo en equipo',
    imagen: terrunoImg,
    alt: 'Portada de Terruño & Co.: botella en 3D sobre hileras de viñedo',
    estado: 'Académico',
    descripcion:
      'Frontend de 13 vistas en TypeScript estricto: catálogo con filtros ' +
      'sincronizados con la URL, ficha de producto con la botella en 3D ' +
      'renderizada con Three.js y un recorrido de pedido en tres pasos con ' +
      'guardas de ruta.',
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vite'],
    enlaces: [
      { tipo: 'codigo', texto: 'Ver código', url: 'https://github.com/DrocuxDev/VinotecaTerru-o' },
    ],
  },
  {
    id: 'powerbi',
    titulo: 'Tableros en Power BI',
    cliente: null,
    tipo: 'Análisis de datos',
    imagen: powerBiImg,
    alt: 'Tablero de Power BI con indicadores, barras, línea de tendencia y gráfico de dona',
    estado: 'Completado',
    descripcion:
      'Modelo de datos, medidas en DAX y transformaciones en Power Query, ' +
      'publicados en Power BI Service para que el equipo consulte los ' +
      'indicadores sin pedir un reporte.',
    tecnologias: ['Power BI', 'DAX', 'Power Query', 'Modelado de datos'],
    enlaces: [],
  },
];
