import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </>
  );
}

export default App;
