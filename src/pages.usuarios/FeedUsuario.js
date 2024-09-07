import React from "react";
import TituloTextoLibroUsuario from "../components/TituloTextoLibroUsuario";
import ContenedorLibrosUsuario from "../components/ContenedorLibrosUsuario";
import EscritorRecoUsa from '../components/EscritoresRecoUsua';
import Nav from "../components/layout/Nav";






function FeedUsuario() {
  return (
    <div>
        <Nav />

      <main className="main-usuario">
        <TituloTextoLibroUsuario />
        <ContenedorLibrosUsuario />
        <EscritorRecoUsa />

      </main>
    </div>
  );
};

export default FeedUsuario;
