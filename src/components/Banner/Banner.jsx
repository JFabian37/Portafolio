import './Banner.css';
import miFoto from '../../assets/miFoto.webp';
import { perfil } from '../../data/perfil';

const Banner = () => (
  <section id="inicio" className="hero-section">
    <div className="hero-content">
      {perfil.disponible && (
        <p className="status-badge">
          <span className="status-dot" aria-hidden="true"></span>
          Disponible para nuevos proyectos
        </p>
      )}

      <div className="profile-photo-container">
        <img
          src={miFoto}
          alt={`Retrato de ${perfil.nombre} ${perfil.apellidos}`}
          className="profile-photo"
          width="480"
          height="480"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <h1 className="hero-title">
        {perfil.nombre} <br />
        <span className="text-cyan">{perfil.apellidos}</span>
      </h1>

      <p className="hero-subtitle">{perfil.rol}</p>

      <p className="hero-description">{perfil.descripcion}</p>

      <div className="hero-buttons">
        <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
        <a href="#contacto" className="btn btn-secondary">Contáctame</a>
      </div>

      <ul className="hero-social">
        <li>
          <a href={perfil.github} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.28-2.6 5.21-5.07 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53 4.4-1.47 7.56-5.62 7.56-10.52C23.1 5.33 18.27.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>

    <a href="#sobre-mi" className="scroll-indicator" aria-label="Ir a la sección Sobre mí">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </a>
  </section>
);

export default Banner;
