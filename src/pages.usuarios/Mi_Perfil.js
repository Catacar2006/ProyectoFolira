import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import Miperfilbanner from "../components/Miperfilbanner";
import ModalEditarMiPerfil from "../components/ModalEditarMiPerfil";
import InformaciónMiperfil from "../components/InformacionMiperfil";
import LineaMiPerfil from "../components/LineaMiPerfil";
import BiografiaMiPerfil from "../components/BiografiaMiPerfil";
import GenerosMiPerfil from "../components/GenerosMiperfil";
import LibrosGuardadosMiPerfil from "../components/LibrosGuardadosMiPerfil";
import AmigosMiPerfil from "../components/AmigosMiPerfil";
import ModalAmigosMiPerfil from "../components/ModalAmigosMiPerfil";
import ComunidadMiPerfil from "../components/ComunidadMiPerfil";
import ModalComunidadMiPerfil from "../components/ModalComunidadMiPerfil";
import MedallasMiPerfil from "../components/MedallasMiPerfil";


function MiPerfil() {
  return (
    <div>
      <Nav />
      <MenuLateral/>
      {/* Main Content */}
      <div className="col-md-9 col-lg-10">
        <main className="main-miperfil">
          
          <Miperfilbanner />
          <ModalEditarMiPerfil />
          <InformaciónMiperfil />
          <LineaMiPerfil />
          <BiografiaMiPerfil />
          <GenerosMiPerfil />
          <LibrosGuardadosMiPerfil />
          <AmigosMiPerfil />
          <ModalAmigosMiPerfil />
          <ComunidadMiPerfil />
          <ModalComunidadMiPerfil />
          <MedallasMiPerfil />

        </main>
      </div>
    </div>
  );
}

export default MiPerfil;
