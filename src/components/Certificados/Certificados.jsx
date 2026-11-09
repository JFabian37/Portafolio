import './Certificados.css';
import { certificados } from '../../data/certificados';

const IconoSello = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <path d="M8.2 13.8 7 22l5-2.5L17 22l-1.2-8.2" />
  </svg>
);

const Certificados = () => (
  <section id="certificados" className="certificados-section">
    <div className="certificados-container">
      <h2 className="section-title text-center">Certificados</h2>

      <ul className="certificados-grid">
        {certificados.map((cert) => (
          <li key={cert.id} className="cert-card">
            {cert.miniatura ? (
              <a
                className="cert-vista"
                href={cert.archivo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.miniatura}
                  alt={`Certificado de ${cert.titulo} emitido por ${cert.entidad}`}
                  width="700"
                  height="536"
                  loading="lazy"
                  decoding="async"
                />
                <span className="cert-lupa">Ver certificado</span>
              </a>
            ) : (
              <div className="cert-vista cert-vista-vacia">
                <IconoSello />
                <span>{cert.entidad}</span>
              </div>
            )}

            <div className="cert-cuerpo">
              <div className="cert-meta">
                <span className="cert-entidad">{cert.entidad}</span>
                <span className="cert-anio">{cert.anio}</span>
              </div>

              <h3 className="cert-titulo">{cert.titulo}</h3>
              <p className="cert-desc">{cert.descripcion}</p>

              <p className="cert-fecha">
                {cert.nota ? cert.nota : `Emitido el ${cert.fecha}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certificados;
