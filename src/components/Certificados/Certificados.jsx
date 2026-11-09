import './Certificados.css';
import { certificados } from '../../data/certificados';

const Certificados = () => {
  const conArchivo = certificados.filter((c) => c.archivo);

  return (
    <section id="certificados" className="seccion seccion-alterna">
      <div className="envoltura">
        <div className="seccion-cabecera">
          <h2>Certificados</h2>
          <span className="seccion-cuenta">{conArchivo.length}</span>
        </div>

        <ul className="certificados">
          {conArchivo.map((cert) => (
            <li key={cert.id}>
              <a className="certificado" href={cert.archivo}
                target="_blank" rel="noopener noreferrer">
                <span className="certificado-lamina">
                  <img
                    src={cert.miniatura}
                    alt={`Certificado de ${cert.titulo} emitido por ${cert.entidad}`}
                    width="700" height="536" loading="lazy" decoding="async"
                  />
                </span>

                <span className="certificado-cuerpo">
                  <span className="certificado-titulo">{cert.titulo}</span>
                  <span className="certificado-entidad">{cert.entidad}</span>
                  <span className="certificado-fecha">{cert.fecha}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificados;
