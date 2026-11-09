import './Footer.css';
import { perfil } from '../../data/perfil';

// Fuera del componente: el año no debe recalcularse en cada render.
const anio = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="footer-contenido">
      <p className="footer-nombre">
        <span className="text-cyan">{perfil.nombre}</span> {perfil.apellidos}
      </p>

      <nav className="footer-enlaces" aria-label="Enlaces del pie de página">
        <a href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${perfil.email}`}>Email</a>
      </nav>

      <p className="footer-legal">
        © {anio} · Hecho con React y Vite en {perfil.ubicacion}
      </p>
    </div>
  </footer>
);

export default Footer;
