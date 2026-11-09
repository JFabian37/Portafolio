import { useEffect, useState } from 'react';
import './Navbar.css';

const enlaces = [
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#stack', texto: 'Stack' },
  { href: '#trayectoria', texto: 'Trayectoria' },
  { href: '#certificados', texto: 'Certificados' },
  { href: '#contacto', texto: 'Contacto' },
];

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [activa, setActiva] = useState('');

  // Escape cierra el menú: quien navega con teclado necesita una
  // salida que no sea buscar el botón a ciegas.
  useEffect(() => {
    if (!abierto) return undefined;
    const alPresionar = (e) => { if (e.key === 'Escape') setAbierto(false); };
    document.addEventListener('keydown', alPresionar);
    return () => document.removeEventListener('keydown', alPresionar);
  }, [abierto]);

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
        if (visible) setActiva(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, []);

  return (
    <nav className="barra" aria-label="Navegación principal">
      <div className="barra-interior envoltura">
        <a href="#inicio" className="marca" onClick={() => setAbierto(false)}>
          Josue Del Río
        </a>

        <ul id="menu" className={`menu ${abierto ? 'abierto' : ''}`}>
          {enlaces.map(({ href, texto }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setAbierto(false)}
                aria-current={activa === href ? 'true' : undefined}
              >
                {texto}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`palanca ${abierto ? 'activa' : ''}`}
          onClick={() => setAbierto((p) => !p)}
          aria-expanded={abierto}
          aria-controls="menu"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
