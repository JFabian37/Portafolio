import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';
import { perfil } from '../../data/perfil';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURADO = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const VACIO = { nombre: '', email: '', mensaje: '', empresa: '' };

const Contacto = () => {
  const [formulario, setFormulario] = useState(VACIO);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null);

  // Un bot completa el formulario en menos de dos segundos.
  const abierto = useRef(0);
  useEffect(() => { abierto.current = Date.now(); }, []);

  const cambiar = (e) => {
    const { name, value } = e.target;
    setFormulario((p) => ({ ...p, [name]: value }));
  };

  const enviar = async (e) => {
    e.preventDefault();

    // El honeypot está oculto: si trae texto, lo llenó un bot. Se
    // responde como si todo fuera bien para no darle pistas.
    if (formulario.empresa !== '' || Date.now() - abierto.current < 2000) {
      setFormulario(VACIO);
      setEstado({ tipo: 'ok', texto: 'Mensaje enviado. Gracias por escribir.' });
      return;
    }

    if (!CONFIGURADO) {
      setEstado({
        tipo: 'error',
        texto: `El formulario no está configurado. Escríbeme a ${perfil.email}.`,
      });
      return;
    }

    setEnviando(true);
    setEstado(null);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje,
      }, PUBLIC_KEY);

      setEstado({
        tipo: 'ok',
        texto: `Listo, ${formulario.nombre}. Te respondo en un par de días.`,
      });
      setFormulario(VACIO);
    } catch (error) {
      setEstado({
        tipo: 'error',
        texto: `No se pudo enviar. Inténtalo más tarde o escríbeme a ${perfil.email}.`,
      });
      console.error('Error al enviar el correo:', error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="seccion">
      <div className="envoltura">
        <div className="seccion-cabecera">
          <h2>Contacto</h2>
        </div>

        <div className="contacto-malla">
          {/* ---------- Invitación y datos ---------- */}
          <div>
            <p className="contacto-invita">
              Busco prácticas y proyectos donde pueda construir algo que
              alguien use todos los días. Si tienes un proceso que todavía
              corre en papel o en hojas de cálculo, cuéntamelo.
            </p>

            <ul className="contacto-datos">
              <li>
                <span className="dato-clave">Correo</span>
                <a href={`mailto:${perfil.email}`} className="dato-valor dato-enlace">
                  {perfil.email}
                </a>
              </li>
              <li>
                <span className="dato-clave">Ubicación</span>
                <span className="dato-valor">{perfil.ubicacion}</span>
              </li>
              <li>
                <span className="dato-clave">GitHub</span>
                <a href={perfil.github} target="_blank" rel="noopener noreferrer"
                  className="dato-valor dato-enlace">JFabian37</a>
              </li>
              <li>
                <span className="dato-clave">LinkedIn</span>
                <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer"
                  className="dato-valor dato-enlace">josue-del-rio</a>
              </li>
            </ul>
          </div>

          {/* ---------- Formulario ---------- */}
          <form onSubmit={enviar} className="formulario">
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={formulario.nombre}
                onChange={cambiar} required maxLength={80}
                autoComplete="name" disabled={enviando} />
            </div>

            <div className="campo">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" value={formulario.email}
                onChange={cambiar} required maxLength={120}
                autoComplete="email" disabled={enviando} />
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" value={formulario.mensaje}
                onChange={cambiar} rows="5" required minLength={10} maxLength={2000}
                disabled={enviando} />
            </div>

            {/* Trampa invisible y fuera del recorrido de tabulación */}
            <div className="trampa" aria-hidden="true">
              <label htmlFor="empresa">No llenar</label>
              <input type="text" id="empresa" name="empresa" value={formulario.empresa}
                onChange={cambiar} tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="boton boton-principal" disabled={enviando}>
              {enviando ? 'Enviando' : 'Enviar mensaje'}
            </button>

            {/* role="status" hace que el lector de pantalla anuncie el
                resultado sin que haya que ir a buscarlo */}
            <p className={`estado-envio ${estado ? `es-${estado.tipo}` : ''}`}
              role="status" aria-live="polite">
              {estado?.texto}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
