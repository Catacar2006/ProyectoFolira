import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import DescripcionFichaLibro from "../components/DescripcionFichaLibro";
import LocacionFichaLibro from "../components/LocacionFichaLibro";
import CalificarAgregarFichaLibro from "../components/CalificacionAgregarFichaLibros";
import AreaTextoBotonFichaLibro from "../components/AreaTextoBotonFichaLiibro";
import ModalVerReseñas from "../components/ModalVerReseñas";
import SeccionReseñasFichaLibro from "../components/SeccionReseñasFichaLibro";





function FichaLibro() {
  return (
    <div>
      <Nav />
      <MenuLateral />
      <main className="main-ficha-libro">
        <div className="libro-container">
          
          <DescripcionFichaLibro />
          <LocacionFichaLibro />
          <CalificarAgregarFichaLibro />
          <AreaTextoBotonFichaLibro />
          <ModalVerReseñas />
          <SeccionReseñasFichaLibro />

          </div>
      </main>
    </div>
  );
}

export default FichaLibro;
