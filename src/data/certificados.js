// Certificados y constancias.
//
// `archivo` solo se completa cuando el documento se puede publicar.
// La constancia de SENATI muestra el DNI y el código de alumno, así que
// aparece listada pero sin archivo descargable: los datos de identidad
// no deben quedar expuestos en una página pública.

export const certificados = [
  {
    id: 'oracle-java',
    titulo: 'Java Fundamentals',
    entidad: 'Oracle Academy',
    fecha: '28 de marzo de 2024',
    anio: '2024',
    descripcion: 'Fundamentos de programación orientada a objetos con Java.',
    archivo: '/certificados/oracle-java-fundamentals.webp',
    miniatura: '/certificados/oracle-java-fundamentals-mini.webp',
  },
  {
    id: 'oracle-db',
    titulo: 'Database Foundations',
    entidad: 'Oracle Academy',
    fecha: '9 de mayo de 2024',
    anio: '2024',
    descripcion: 'Modelado relacional, normalización y fundamentos de SQL.',
    archivo: '/certificados/oracle-database-foundations.webp',
    miniatura: '/certificados/oracle-database-foundations-mini.webp',
  },
  {
    id: 'redhat-rh124',
    titulo: 'Red Hat System Administration I (RH124)',
    entidad: 'Red Hat Academy',
    fecha: '29 de mayo de 2024',
    anio: '2024',
    descripcion: 'Administración de sistemas Linux: usuarios, permisos y servicios.',
    archivo: '/certificados/redhat-rh124.webp',
    miniatura: '/certificados/redhat-rh124-mini.webp',
  },
  {
    id: 'senati-constancia',
    titulo: 'Constancia de estudios · Ingeniería de Software con IA',
    entidad: 'SENATI',
    fecha: '6 de diciembre de 2024',
    anio: '2024',
    descripcion:
      'Formación parcial hasta el II semestre: Algoritmia, Fundamentos de ' +
      'Programación Web, Java, Database Foundations, Red Hat e Inglés II.',
    archivo: null,
    miniatura: null,
    nota: 'Documento disponible a solicitud',
  },
];
