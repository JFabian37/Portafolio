import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  // Función para simular el envío
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`¡Gracias por tu mensaje, ${formulario.nombre}! Te contactaré pronto.`);
    // Limpiamos el formulario después de enviar
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title">Trabajemos Juntos</h2>
        <div className="contacto-grid">

          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus flujos de trabajo?
              Me encantaría escucharte.
            </p>

            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <p className="item-text">tareasypracticas27@gmail.com</p>
                </div>
              </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>

              {/* Ítem LinkedIn */}
              <a
                href="https://www.linkedin.com/in/josue-del-rio-15b220444/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item info-link"
              >
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">LinkedIn</span>
                  <p className="item-text">josue-del-rio</p>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;
