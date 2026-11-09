import './Footer.css';
import { perfil } from '../../data/perfil';

// Fuera del componente: el año no debe recalcularse en cada render.
const anio = new Date().getFullYear();

const Footer = () => (
  <footer className="pie">
    <div className="envoltura pie-interior">
      <p className="pie-nombre">{perfil.nombre} {perfil.apellidos}</p>

      <nav className="pie-enlaces" aria-label="Enlaces del pie de página">
        <a href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${perfil.email}`}>Correo</a>
        <a href={perfil.cv} download>CV</a>
      </nav>

      <p className="pie-legal">
        {anio} — Hecho con React y Vite en {perfil.ubicacion}
      </p>
    </div>
  </footer>
);

export default Footer;
