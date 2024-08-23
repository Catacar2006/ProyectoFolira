
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Amigos from './pages.usuarios/Amigos';

function App() {
  return (
    <div className="App">
     <>
     <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/amigos" element={<Amigos />} />
     </Routes>
     </>
    </div>
  );
}

export default App;
