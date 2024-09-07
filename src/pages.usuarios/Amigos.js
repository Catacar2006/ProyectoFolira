import React from "react";
import TextoAmigos from "../components/TextoAmigos";
import TituloAmigos from "../components/TituloAmigos";
import ModalTusAmigosFeed from "../components/ModalTusAmigosFeed";
import SeccionTusAmigosFeedA from "../components/SeccionTusAmigosFeedA";
import TituloPersonasAmigos from "../components/TituloPersonasAmigos";
import ModalPersonasAmigos from "../components/ModalPersonasAmigos";
import PersonasGustarAmigos from "../components/PersonasGustarAmigos";
import Nav from "../components/layout/Nav";


function Amigos() {
  return (
    <div>
     
      <Nav />

      <main className="main-amigos">

        <TextoAmigos />
        {/* <TituloAmigos />
        <ModalTusAmigosFeed />
        <SeccionTusAmigosFeedA /> */}
        <TituloPersonasAmigos />
        <ModalPersonasAmigos />
        <PersonasGustarAmigos />

      </main>
    </div>
  );
}

export default Amigos;
