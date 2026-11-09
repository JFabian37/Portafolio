import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Proyectos from './components/Proyectos/Proyectos';
import Habilidades from './components/Habilidades/Habilidades';
import Trayectoria from './components/Trayectoria/Trayectoria';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Primer elemento enfocable: permite saltar el menú con el teclado */}
      <a href="#contenido" className="salto">Saltar al contenido</a>

      <Navbar />

      {/* El trabajo va antes que la biografía: es lo que convence */}
      <main id="contenido">
        <Banner />
        <Proyectos />
        <Habilidades />
        <Trayectoria />
        <Certificados />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}

export default App;
