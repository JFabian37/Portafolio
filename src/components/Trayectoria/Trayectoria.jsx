import './Trayectoria.css';
import { perfil, experiencia, educacion } from '../../data/perfil';

const Trayectoria = () => (
  <section id="trayectoria" className="seccion">
    <div className="envoltura">
      <div className="seccion-cabecera">
        <h2>Trayectoria</h2>
      </div>

      <div className="trayectoria-malla">
        {/* ---------- Perfil ---------- */}
        <div className="trayectoria-perfil">
          {perfil.resumen.split('\n\n').map((parrafo) => (
            <p key={parrafo.slice(0, 28)}>{parrafo}</p>
          ))}
        </div>

        {/* ---------- Experiencia y educación ---------- */}
        <div className="trayectoria-columna">
          <section className="bloque">
            <h3 className="bloque-titulo">Experiencia</h3>

            {experiencia.map((empresa) => (
              <article key={empresa.id} className="empresa">
                <header className="empresa-cabecera">
                  <h4>{empresa.empresa}</h4>
                  <span className="entrada-periodo">{empresa.periodo}</span>
                </header>
                <p className="empresa-lugar">{empresa.lugar}</p>

                {/* Los cargos sí son una secuencia, así que van en una
                    línea de tiempo: el ascenso se lee de un vistazo. */}
                <ol className="cargos">
                  {empresa.cargos.map((cargo) => (
                    <li key={cargo.id}
                      className={`cargo ${cargo.actual ? 'cargo-actual' : ''}`}>
                      <div className="entrada-cabecera">
                        <h5>{cargo.puesto}</h5>
                        <span className="cargo-periodo">{cargo.periodo}</span>
                      </div>
                      <p className="entrada-texto">{cargo.descripcion}</p>
                      {cargo.tecnologias.length > 0 && (
                        <ul className="tecnologias">
                          {cargo.tecnologias.map((t) => (
                            <li key={t} className="tecnologia">{t}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </section>

          <section className="bloque">
            <h3 className="bloque-titulo">Educación</h3>

            {educacion.map((item) => (
              <article key={item.id} className="entrada entrada-breve">
                <div className="entrada-cabecera">
                  <h4>{item.titulo}</h4>
                  <span className="entrada-periodo">{item.periodo}</span>
                </div>
                <p className="entrada-donde">
                  {item.institucion}
                  {item.detalle && <span className="entrada-contexto">{item.detalle}</span>}
                </p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default Trayectoria;
