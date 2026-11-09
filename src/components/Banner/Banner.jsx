import './Banner.css';
import { perfil } from '../../data/perfil';
import { proyectos } from '../../data/proyectos';

const IconoDescarga = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Banner = () => {
  const destacado = proyectos.find((p) => p.destacado);

  return (
    <section id="inicio" className="portada">
      <div className="envoltura portada-malla">
        {/* ---------- Columna de texto ---------- */}
        <div className="portada-texto">
          {perfil.disponible && (
            <p className="disponible">
              <span className="punto" aria-hidden="true"></span>
              Disponible para prácticas y proyectos
            </p>
          )}

          <h1 className="portada-nombre">
            {perfil.nombre}<br />{perfil.apellidos}
          </h1>

          <p className="portada-oficio">{perfil.titular}</p>

          <p className="portada-pitch">{perfil.posicionamiento}</p>

          <div className="portada-acciones">
            <a href="#proyectos" className="boton boton-principal">Ver proyectos</a>
            <a href="#contacto" className="boton boton-linea">Escríbeme</a>
            <a href={perfil.cv} className="boton boton-plano" download>
              <IconoDescarga />
              Descargar CV
            </a>
          </div>

          <ul className="portada-redes">
            <li>
              <a href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${perfil.email}`}>Correo</a>
            </li>
          </ul>
        </div>

        {/* ---------- El trabajo, no una descripción del trabajo ---------- */}
        {destacado && (
          <figure className="portada-muestra">
            <img
              src={destacado.imagen}
              alt={destacado.alt}
              width="1200"
              height="560"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              {destacado.titulo} — en uso en las siete sedes de {destacado.cliente}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
};

export default Banner;
