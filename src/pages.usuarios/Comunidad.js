import React from "react";
import Nav from "../components/layout/Nav";
import ComunidadTexto from '../components/ComunidadTexto';
import SeccionComunidad1 from "../components/SeccionComunidad1";
import ModalComunidad2 from "../components/ModalComunidad2";
import SeccionComunidad2 from "../components/SeccionComunidad2";
import ModalFeedComunidad from "../components/ModalComunidad";
import ModalPersonasAmigos from "../components/ModalPersonasAmigos";



function Comunidad() {
  return (
    <div>
        <Nav/>
      <main className="main-comunidad">
        <ComunidadTexto />
        <SeccionComunidad1 />
        <ModalFeedComunidad />
        <SeccionComunidad2 />
        {/* <ModalComunidad2 /> */}
        <ModalPersonasAmigos />
      </main>
    </div>
  );
}

export default Comunidad;
