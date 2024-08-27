import React from "react";
import TituloTextoLibroUsuario from "../components/TituloTextoLibroUsuario";
import ContenedorLibrosUsuario from "../components/ContenedorLibrosUsuario";
import ContenedorRecoUsuau from "../components/ContenedorLibrosUsuario";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";





function FeedUsuario() {
  return (
    <div>
        <Nav />
        <MenuLateral />
      <main className="main-usuario">
        <TituloTextoLibroUsuario />
        <ContenedorLibrosUsuario />
        <ContenedorRecoUsuau />

      </main>
    </div>
  );
};

export default FeedUsuario;
