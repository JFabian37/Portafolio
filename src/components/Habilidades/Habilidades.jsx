import './Habilidades.css';
import { areas } from '../../data/habilidades';
import { certificados } from '../../data/certificados';

const porId = Object.fromEntries(certificados.map((c) => [c.id, c]));

/* El stack va como lista, no como tarjetas: son datos tabulares
   (área → herramientas), y una rejilla de cajas idénticas no
   aportaría nada que la lista no diga mejor. */
const Habilidades = () => (
  <section id="stack" className="seccion seccion-alterna">
    <div className="envoltura">
      <div className="seccion-cabecera">
        <h2>Stack</h2>
      </div>

      <dl className="stack">
        {areas.map((area) => (
          <div key={area.id} className="stack-fila">
            <dt className="stack-area">{area.nombre}</dt>
            <dd>
              <ul className="stack-items">
                {area.habilidades.map((skill) => {
                  const cert = skill.certificado ? porId[skill.certificado] : null;
                  return (
                    <li key={skill.nombre} className="stack-item">
                      <span className="stack-nombre">{skill.nombre}</span>
                      <span className="stack-detalle">{skill.detalle}</span>
                      {cert?.archivo && (
                        <a className="stack-cert" href={cert.archivo}
                          target="_blank" rel="noopener noreferrer">
                          Certificado de {cert.entidad}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Habilidades;
