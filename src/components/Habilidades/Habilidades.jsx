import './Habilidades.css';
import { areas } from '../../data/habilidades';
import { certificados } from '../../data/certificados';

const iconos = {
  codigo: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  servidor: (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <line x1="6" y1="7" x2="6.01" y2="7" />
      <line x1="6" y1="17" x2="6.01" y2="17" />
    </>
  ),
  base: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </>
  ),
  grafico: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  herramienta: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
};

// Para enlazar una habilidad con su certificado sin recorrer el array
// completo en cada tarjeta.
const porId = Object.fromEntries(certificados.map((c) => [c.id, c]));

const Habilidades = () => (
  <section id="tech-stack" className="habilidades-section">
    <div className="habilidades-container">
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-subtitle">
        Las tecnologías con las que trabajo, agrupadas por área. Donde hay un
        certificado que lo respalda, el enlace lleva al documento.
      </p>

      <div className="habilidades-grid">
        {areas.map((area) => (
          <article key={area.id} className="area-card">
            <header className="area-header">
              <span className="area-icono">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  {iconos[area.icono]}
                </svg>
              </span>
              <h3 className="area-titulo">{area.nombre}</h3>
            </header>

            <ul className="skill-list">
              {area.habilidades.map((skill) => {
                const cert = skill.certificado ? porId[skill.certificado] : null;

                return (
                  <li key={skill.nombre} className="skill-item">
                    <div className="skill-fila">
                      <span className="skill-nombre">{skill.nombre}</span>
                      <span className={`skill-nivel nivel-${skill.nivel.toLowerCase()}`}>
                        {skill.nivel}
                      </span>
                    </div>

                    <p className="skill-desc">{skill.detalle}</p>

                    {cert?.archivo && (
                      <a
                        className="skill-cert"
                        href={cert.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                          strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        Certificado {cert.entidad}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Habilidades;
