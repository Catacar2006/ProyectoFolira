import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import DatosFichaAutor from "../components/DatosFichaAutor";
import DescripcionFichaAutor from "../components/DescripcionFichaAutor";
import CalificacionFichaAutor from "../components/CalificacionFichaAutor";
import LibrosRecomendadosFichaAutor from "../components/LibrosRecomendadosFichaAutor";



function FichaAutor() {
  return (
    <div>
        <Nav />
        <MenuLateral />
      <main className="main-ficha-autores">
        <div className="container-ficha-autores">
          <DatosFichaAutor />
          <DescripcionFichaAutor />
          <CalificacionFichaAutor />
          <LibrosRecomendadosFichaAutor />

        </div>
      </main>
    </div>
  );
}

export default FichaAutor;
