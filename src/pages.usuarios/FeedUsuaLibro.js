import React from "react";
import TextoLibros from "../components/TextoLibro";
import SeccionLibros1  from "../components/SeccionLibro1";
import SeleccionLibro2 from "../components/SeccionLibros2.js";
import ModalFeedLibro from '../components/ModalFeedLibro.js';
import ModalFeedLibro2 from '../components/ModalFeedLibro.js';
import Nav from "../components/layout/Nav";




function FeedUsuaLibro() {
  return (
    <div>
        <Nav />

      <main className="main-libros">
        <TextoLibros />
        <SeccionLibros1 />
        <ModalFeedLibro />
        <SeleccionLibro2 />
        <ModalFeedLibro2 />
        
      </main>
    </div>
  );
};

export default FeedUsuaLibro;
