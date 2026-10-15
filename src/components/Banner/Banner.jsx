import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Perfil"
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Josue <br />
          <span className="text-cyan">Del Río Montoya</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Fullstack Developer Software | SENATI
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Desarrollo aplicaciones web con React, Laravel y bases de datos relacionales.
          Actualmente me formo en el Seminario de Complementación Práctica II y trabajo
          en proyectos de software para empresas.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;
