import './Proyectos.css';
import { proyectos } from '../../data/proyectos';

const IconoDemo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconoCodigo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconoCandado = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Proyectos = () => (
  <section id="proyectos" className="proyectos-section">
    <div className="proyectos-container">
      <h2 className="section-title text-center">Proyectos</h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto, indice) => (
          <article key={proyecto.id} className="proyecto-card">
            <div className="proyecto-imagen">
              {proyecto.imagen ? (
                <img
                  src={proyecto.imagen}
                  alt={proyecto.alt}
                  className={proyecto.encuadre === 'top' ? 'encuadre-arriba' : ''}
                  width="1200"
                  height="560"
                  /* Las dos primeras tarjetas suelen verse al entrar;
                     el resto se carga cuando el usuario llega. */
                  loading={indice < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ) : (
                <div className="proyecto-placeholder" aria-hidden="true">
                  <span>{proyecto.titulo}</span>
                </div>
              )}

              {proyecto.estado && (
                <span className="proyecto-estado">{proyecto.estado}</span>
              )}
            </div>

            <div className="proyecto-contenido">
              <header>
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                {proyecto.subtitulo && (
                  <p className="proyecto-subtitulo">{proyecto.subtitulo}</p>
                )}
              </header>

              {proyecto.rol && (
                <p className="proyecto-rol">
                  <span className="sr-only">Mi rol: </span>
                  {proyecto.rol}
                </p>
              )}

              <p className="proyecto-desc">{proyecto.descripcion}</p>

              <ul className="proyecto-tags">
                {proyecto.tecnologias.map((tech) => (
                  <li key={tech} className="tech-tag">{tech}</li>
                ))}
              </ul>

              {proyecto.enlaces.length > 0 ? (
                <div className="proyecto-links">
                  {proyecto.enlaces.map((enlace) => (
                    <a
                      key={enlace.url}
                      href={enlace.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-proyecto ${enlace.tipo === 'demo' ? 'btn-demo' : 'btn-codigo'}`}
                    >
                      {enlace.tipo === 'demo' ? <IconoDemo /> : <IconoCodigo />}
                      {enlace.texto}
                      <span className="sr-only"> de {proyecto.titulo} (se abre en una pestaña nueva)</span>
                    </a>
                  ))}
                </div>
              ) : (
                proyecto.notaEnlaces && (
                  <p className="proyecto-nota">
                    <IconoCandado />
                    {proyecto.notaEnlaces}
                  </p>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
