import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Amigos from './pages.usuarios/Amigos';
import FeedUsuaAutores from './pages.usuarios/FeedUsuaAutores';
import FeedUsuaLibro from './pages.usuarios/FeedUsuaLibro';
import FeedUsuario from './pages.usuarios/FeedUsuario';
import FichaAutor from './pages.usuarios/FichaAutor';
import FichaLibro from './pages.usuarios/FichaLibro';
import MiPerfil from './pages.usuarios/Mi_Perfil';
import PerfilUsuario from './pages.usuarios/PerfilUsuario';
import GeneralLibros from './pages.usuarios/GeneralLibros';
import GestionComunidad from './pages.administrador/GestionComunidad';
import GestionLibro from './pages.administrador/GestionLibro';
import GestionUsuario from './pages.administrador/GestionUsuario';


function App() {
  return (
    <div className="App">
     <>
     <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/amigos" element={<Amigos />} />
      <Route path="/FeedUsuaAutores" element={<FeedUsuaAutores />} />
      <Route path="/FeedUsuaLibro" element={<FeedUsuaLibro />} />
      <Route path="/FeedUsuario" element={<FeedUsuario />} />
      <Route path="/FichaAutor" element={<FichaAutor />} />
      <Route path="/FichaLibro" element={<FichaLibro />} />
      <Route path="/MiPerfil" element={<MiPerfil />} />
      <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
      <Route path="/GeneralLibros" element={<GeneralLibros />} />
      <Route path="/GestionComunidad" element={<GestionComunidad />} />
      <Route path="/GestionLibro" element={<GestionLibro />} />
      <Route path="/GestionUsuario" element={<GestionUsuario />} />
     </Routes>
     </>
    </div>
  );
}

export default App;
