import React from "react";
import TextoLibros from "../components/TextoLibro";
import SeccionLibros1  from "../components/SeccionLibro1";
import SeleccionLibro2 from "../components/SeccionLibros2.JS";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";



function FeedUsuaLibro() {
  return (
    <div>
        <Nav />
        <MenuLateral />
      <main className="main-libros">
        <TextoLibros />
        <SeccionLibros1 />
        <SeleccionLibro2 />
        
      </main>
    </div>
  );
};

export default FeedUsuaLibro;
