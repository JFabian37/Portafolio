import qhseImg from '../assets/qhse.webp';
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
    encuadre: 'top',
    alt: 'Pantalla de inicio del Portal QHSE con sus cuatro módulos: QHSE, SSTV, Resguardo y Habla AGUNSA',
    estado: 'En uso',
    // Cifras del propio sistema: lo que lo convierte en evidencia.
    impacto: [
      { cifra: '7', etiqueta: 'sedes en operación' },
      { cifra: '814', etiqueta: 'trabajadores registrados' },
      { cifra: '4', etiqueta: 'módulos en producción' },
    ],
    descripcion:
      'El permiso de trabajo se llenaba a mano, se firmaba en papel y el ' +
      'expediente se archivaba en un folder. Hoy el supervisor llena el ' +
      'formato ATS o PETAR desde el navegador, los trabajadores firman en ' +
      'pantalla y el sistema arma el expediente en PDF y lo archiva solo. ' +
      'Creció de ahí a cuatro módulos que cubren el día a día del área.',
    // Los módulos describen el alcance mejor que una lista de funciones.
    modulos: [
      {
        nombre: 'QHSE',
        descripcion: 'Entregas de EPP, asistencias e inspecciones, y ATS y PETAR de empresas terceras',
      },
      {
        nombre: 'SSTV',
        descripcion: 'Inventario de cámaras por sede, tiempo de uso y reporte de fallas con foto',
      },
      {
        nombre: 'Resguardo',
        descripcion: 'Cuaderno de ocurrencias por turno, agentes con carné SUCAMEC y equipos asignados',
      },
      {
        nombre: 'Habla AGUNSA',
        descripcion: 'Agenda de reuniones con invitados internos y externos, con recordatorios por correo',
      },
    ],
    detalles: [
      'Control de acceso por rol validado en la base de datos, no en la interfaz',
      'Expediente en PDF generado y archivado sin intervención',
      'Asistente en el navegador que resuelve dudas sobre el portal',
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
