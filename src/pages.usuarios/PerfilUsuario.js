import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import BannerFotoPerfilUsua from "../components/BannerFotoPerfilUsua";
import InformacionPerfilUsuario from "../components/InofrmacionPerfilUsua";
import LineaPerfilUsuario from "../components/LineaPerfilUsuario";
import BiografiaPerfilUsuario from "../components/BiografiaPerfilUsuario";
import GenerosPerfilUsuario from "../components/GenerosPerfilUsuario";
import ModalAMigosPerfilUsua from "../components/ModalAmigosPerfilUsuario";
import SeccionComuniPerfilUsua from "../components/SeccionComuniPerfilUsuario";
import ModalComuniPerfilUsua from "../components/ModalComuniPerfilUsua";
import MedallasPerfilUsuario from "../components/MedallasPerfilUsuario";
import SeccionAmigosPerfilUsua from "../components/SeccionAmigosPerfilUsua";


function PerfilUsuario() {
  return (
    <div className="bodyy-perfil-usuario">
        <Nav/>
        <MenuLateral/>

      {/* Main Content */}
      <div className="col-md-9 col-lg-10">
        <main className="main-perfil-usuario">
          
            <BannerFotoPerfilUsua />
            <InformacionPerfilUsuario/>
            <LineaPerfilUsuario />
            <BiografiaPerfilUsuario />
            <GenerosPerfilUsuario />
            <SeccionAmigosPerfilUsua />  
            <ModalAMigosPerfilUsua />
            <SeccionComuniPerfilUsua />
            <ModalComuniPerfilUsua />
            <MedallasPerfilUsuario />
          
        </main>
      </div>
    </div>
  );
}

export default PerfilUsuario;
