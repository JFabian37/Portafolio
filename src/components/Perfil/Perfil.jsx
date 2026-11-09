import './Perfil.css';
import { perfil, educacion, experiencia } from '../../data/perfil';

const IconoUsuario = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconoEducacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconoTrabajo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Perfil = () => (
  <section id="sobre-mi" className="sobre-mi-section">
    <div className="sobre-mi-container">
      <h2 className="section-title">Sobre mí</h2>

      <div className="sobre-mi-grid">
        <article className="card">
          <header className="card-header">
            <span className="icon-box"><IconoUsuario /></span>
            <h3>Perfil profesional</h3>
          </header>

          {perfil.resumen.split('\n\n').map((parrafo) => (
            <p key={parrafo.slice(0, 32)} className="card-text">{parrafo}</p>
          ))}
        </article>

        <article className="card">
          <header className="card-header">
            <span className="icon-box"><IconoEducacion /></span>
            <h3>Educación</h3>
          </header>

          <ol className="timeline">
            {educacion.map((item) => (
              <li key={item.id} className="timeline-item">
                <div className="timeline-header">
                  <h4>{item.titulo}</h4>
                  <span className="badge badge-outline">{item.estado}</span>
                </div>
                <span className="timeline-date">{item.institucion}</span>
                {item.detalle && <span className="timeline-meta">{item.detalle}</span>}
              </li>
            ))}
          </ol>
        </article>

        <article className="card card-ancha">
          <header className="card-header">
            <span className="icon-box"><IconoTrabajo /></span>
            <h3>Experiencia</h3>
          </header>

          <ol className="timeline timeline-horizontal">
            {experiencia.map((item) => (
              <li key={item.id} className="timeline-item">
                <div className="timeline-header">
                  <h4>{item.puesto}</h4>
                  <span className="badge badge-outline">{item.periodo}</span>
                </div>
                <span className="timeline-date">{item.empresa}</span>
                {item.detalle && <p className="timeline-detalle">{item.detalle}</p>}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </div>
  </section>
);

export default Perfil;
