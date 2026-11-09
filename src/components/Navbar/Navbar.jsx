import { useEffect, useState } from 'react';
import './Navbar.css';

const enlaces = [
  { href: '#sobre-mi', texto: 'Perfil' },
  { href: '#tech-stack', texto: 'Tech Stack' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#certificados', texto: 'Certificados' },
  { href: '#contacto', texto: 'Contacto' },
];

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('');

  // Cerrar el menú con Escape: quien navega con teclado necesita
  // una salida que no sea buscar el botón a ciegas.
  useEffect(() => {
    if (!abierto) return undefined;

    const alPresionar = (evento) => {
      if (evento.key === 'Escape') setAbierto(false);
    };

    document.addEventListener('keydown', alPresionar);
    return () => document.removeEventListener('keydown', alPresionar);
  }, [abierto]);

  // Marcar en el menú la sección que se está viendo.
  useEffect(() => {
    const secciones = enlaces
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (secciones.length === 0) return undefined;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setSeccionActiva(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    secciones.forEach((seccion) => observador.observe(seccion));
    return () => observador.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a href="#inicio" className="navbar-logo" onClick={() => setAbierto(false)}>
        <span className="text-cyan">Josue</span> Del Río
      </a>

      <ul
        id="menu-principal"
        className={`navbar-links ${abierto ? 'open' : ''}`}
      >
        {enlaces.map(({ href, texto }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setAbierto(false)}
              aria-current={seccionActiva === href ? 'true' : undefined}
            >
              {texto}
            </a>
          </li>
        ))}
      </ul>

      {/* Un button de verdad, no un div: así responde a Enter y Espacio,
          y los lectores de pantalla anuncian si el menú está abierto. */}
      <button
        type="button"
        className={`navbar-toggle ${abierto ? 'is-open' : ''}`}
        onClick={() => setAbierto((previo) => !previo)}
        aria-expanded={abierto}
        aria-controls="menu-principal"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className="bar" aria-hidden="true"></span>
        <span className="bar" aria-hidden="true"></span>
        <span className="bar" aria-hidden="true"></span>
      </button>
    </nav>
  );
};

export default Navbar;
