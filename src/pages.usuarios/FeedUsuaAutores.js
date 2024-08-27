import React from "react"; 
import TextoTituloAutores from "../components/TextoTituloAutores";
import ModalAutoresLatinos from "../components/ModalAutoresLatinos";
import SeccionAutoresLA from "../components/SeccionAutoresLA";
import MdoalAutoresMedeivales from "../components/ModalAutoresLatinos";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";





function FeedUsuaAutores() {
  return (
    <div>
        <Nav />
        <MenuLateral />

      <main className="main-feedautores">

        <TextoTituloAutores />
        <ModalAutoresLatinos />
        <SeccionAutoresLA />
        <ModalAutoresLatinos />
        <MdoalAutoresMedeivales />
        
      </main>
    </div>
  );
}

export default FeedUsuaAutores;
