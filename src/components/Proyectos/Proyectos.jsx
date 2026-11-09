import './Proyectos.css';
import { proyectos } from '../../data/proyectos';

const IconoCodigo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.28-2.6 5.21-5.07 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53 4.4-1.47 7.56-5.62 7.56-10.52C23.1 5.33 18.27.5 12 .5z" />
  </svg>
);

const IconoCandado = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Enlaces = ({ proyecto }) => {
  if (proyecto.enlaces.length === 0) {
    return proyecto.notaEnlaces ? (
      <p className="nota-privada">
        <IconoCandado />
        {proyecto.notaEnlaces}
      </p>
    ) : null;
  }

  return (
    <div className="proyecto-enlaces">
      {proyecto.enlaces.map((e) => (
        <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer"
          className="boton boton-linea">
          <IconoCodigo />
          {e.texto}
          <span className="solo-lectores">
            {' '}de {proyecto.titulo}, se abre en una pestaña nueva
          </span>
        </a>
      ))}
    </div>
  );
};

/* El destacado ocupa el ancho completo y es el único que muestra
   cifras: es el proyecto que sostiene el portafolio. */
const Destacado = ({ proyecto }) => (
  <article className="destacado">
    <div className="destacado-imagen">
      <img src={proyecto.imagen} alt={proyecto.alt} width="1200" height="560"
        loading="lazy" decoding="async" />
    </div>

    <div className="destacado-cuerpo">
      <header className="proyecto-encabezado">
        <h3>{proyecto.titulo}</h3>
        <span className="estado estado-vivo">{proyecto.estado}</span>
      </header>

      <p className="proyecto-contexto">
        {proyecto.tipo}{proyecto.cliente ? ` para ${proyecto.cliente}` : ''}
      </p>

      <p className="proyecto-texto">{proyecto.descripcion}</p>

      {proyecto.impacto && (
        <dl className="cifras">
          {proyecto.impacto.map((i) => (
            <div key={i.etiqueta} className="cifra">
              <dt className="cifra-valor">{i.cifra}</dt>
              <dd className="cifra-etiqueta">{i.etiqueta}</dd>
            </div>
          ))}
        </dl>
      )}

      {proyecto.modulos && (
        <dl className="modulos">
          {proyecto.modulos.map((m) => (
            <div key={m.nombre} className="modulo">
              <dt>{m.nombre}</dt>
              <dd>{m.descripcion}</dd>
            </div>
          ))}
        </dl>
      )}

      {proyecto.detalles && (
        <ul className="detalles">
          {proyecto.detalles.map((d) => <li key={d}>{d}</li>)}
        </ul>
      )}

      <ul className="tecnologias">
        {proyecto.tecnologias.map((t) => <li key={t} className="tecnologia">{t}</li>)}
      </ul>

      <Enlaces proyecto={proyecto} />
    </div>
  </article>
);

const Tarjeta = ({ proyecto }) => (
  <article className="tarjeta">
    <div className="tarjeta-imagen">
      <img
        src={proyecto.imagen}
        alt={proyecto.alt}
        className={proyecto.encuadre === 'top' ? 'encuadre-arriba' : ''}
        width="1200" height="560" loading="lazy" decoding="async"
      />
    </div>

    <div className="tarjeta-cuerpo">
      <header className="proyecto-encabezado">
        <h3>{proyecto.titulo}</h3>
        <span className="estado">{proyecto.estado}</span>
      </header>

      <p className="proyecto-contexto">{proyecto.tipo}</p>
      <p className="proyecto-texto">{proyecto.descripcion}</p>

      <ul className="tecnologias">
        {proyecto.tecnologias.map((t) => <li key={t} className="tecnologia">{t}</li>)}
      </ul>

      <Enlaces proyecto={proyecto} />
    </div>
  </article>
);

const Proyectos = () => {
  const destacado = proyectos.find((p) => p.destacado);
  const resto = proyectos.filter((p) => !p.destacado);

  return (
    <section id="proyectos" className="seccion">
      <div className="envoltura">
        <div className="seccion-cabecera">
          <h2>Proyectos</h2>
          <span className="seccion-cuenta">{proyectos.length}</span>
        </div>

        {destacado && <Destacado proyecto={destacado} />}

        <div className="rejilla">
          {resto.map((p) => <Tarjeta key={p.id} proyecto={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
