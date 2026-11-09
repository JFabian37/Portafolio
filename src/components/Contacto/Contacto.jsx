import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';
import { perfil } from '../../data/perfil';

// SweetAlert2 pesa más que todo el resto del sitio junto y solo hace
// falta al pulsar Enviar, así que se carga en ese momento y no antes.
const alerta = async (opciones) => {
  const { default: Swal } = await import('sweetalert2');
  return Swal.fire({
    confirmButtonText: 'Aceptar',
    background: '#1e293b',
    color: '#ffffff',
    confirmButtonColor: '#6366f1',
    ...opciones,
  });
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURADO = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const VACIO = { nombre: '', email: '', mensaje: '', empresa: '' };

const Contacto = () => {
  const [formulario, setFormulario] = useState(VACIO);
  const [cargando, setCargando] = useState(false);
  const [estado, setEstado] = useState(null);

  // Momento en que se monta el formulario. Un bot lo completa en
  // menos de dos segundos; una persona no.
  const abierto = useRef(0);

  useEffect(() => {
    abierto.current = Date.now();
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((previo) => ({ ...previo, [name]: value }));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    // El honeypot está oculto: si trae texto, lo llenó un bot.
    // Se responde como si todo hubiera salido bien para no darle pistas.
    const esBot = formulario.empresa !== '' || Date.now() - abierto.current < 2000;
    if (esBot) {
      setFormulario(VACIO);
      setEstado({ tipo: 'exito', texto: 'Mensaje enviado. Gracias por escribir.' });
      return;
    }

    if (!CONFIGURADO) {
      setEstado({
        tipo: 'error',
        texto: 'El formulario no está configurado. Escríbeme directamente por correo.',
      });
      return;
    }

    setCargando(true);
    setEstado(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: formulario.nombre,
          email: formulario.email,
          mensaje: formulario.mensaje,
        },
        PUBLIC_KEY,
      );

      setFormulario(VACIO);
      setEstado({
        tipo: 'exito',
        texto: `Gracias por tu mensaje, ${formulario.nombre}. Te contactaré pronto.`,
      });

      alerta({
        title: '¡Mensaje enviado!',
        text: `Gracias por tu mensaje, ${formulario.nombre}. Te contactaré pronto.`,
        icon: 'success',
      });
    } catch (error) {
      setEstado({
        tipo: 'error',
        texto: 'No se pudo enviar el mensaje. Inténtalo más tarde o escríbeme por correo.',
      });

      alerta({
        title: 'Error al enviar',
        text: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.',
        icon: 'error',
      });

      console.error('Error al enviar el correo:', error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title">Trabajemos juntos</h2>

        <div className="contacto-grid">
          {/* ---------- Información ---------- */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus
              flujos de trabajo? Me encantaría escucharte.
            </p>

            <ul className="info-items">
              <li>
                <a href={`mailto:${perfil.email}`} className="info-item info-link">
                  <span className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span>
                    <span className="item-label">Email</span>
                    <span className="item-text">{perfil.email}</span>
                  </span>
                </a>
              </li>

              <li className="info-item">
                <span className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="item-label">Ubicación</span>
                  <span className="item-text">{perfil.ubicacion}</span>
                </span>
              </li>

              <li>
                <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer"
                  className="info-item info-link">
                  <span className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </span>
                  <span>
                    <span className="item-label">LinkedIn</span>
                    <span className="item-text">josue-del-rio</span>
                  </span>
                </a>
              </li>

              <li>
                <a href={perfil.github} target="_blank" rel="noopener noreferrer"
                  className="info-item info-link">
                  <span className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.28-2.6 5.21-5.07 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53 4.4-1.47 7.56-5.62 7.56-10.52C23.1 5.33 18.27.5 12 .5z" />
                    </svg>
                  </span>
                  <span>
                    <span className="item-label">GitHub</span>
                    <span className="item-text">JFabian37</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* ---------- Formulario ---------- */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form" noValidate={false}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text" id="nombre" name="nombre"
                  value={formulario.nombre} onChange={manejarCambio}
                  placeholder="Tu nombre" required maxLength={80}
                  autoComplete="name" disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email" id="email" name="email"
                  value={formulario.email} onChange={manejarCambio}
                  placeholder="tu@email.com" required maxLength={120}
                  autoComplete="email" disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje" name="mensaje"
                  value={formulario.mensaje} onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5" required minLength={10} maxLength={2000}
                  disabled={cargando}
                />
              </div>

              {/* Honeypot: invisible y fuera del recorrido de tabulación */}
              <div className="campo-trampa" aria-hidden="true">
                <label htmlFor="empresa">No llenar este campo</label>
                <input
                  type="text" id="empresa" name="empresa"
                  value={formulario.empresa} onChange={manejarCambio}
                  tabIndex={-1} autoComplete="off"
                />
              </div>

              <button type="submit" className="btn-submit" disabled={cargando}>
                {cargando ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {/* role="status" hace que el lector de pantalla anuncie el
                  resultado sin que el usuario tenga que ir a buscarlo. */}
              <p
                className={`form-estado ${estado ? `es-${estado.tipo}` : ''}`}
                role="status"
                aria-live="polite"
              >
                {estado?.texto}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
