import React from "react";
import Nav from "../components/layout/Nav";
import Miperfilbanner from "../components/Miperfilbanner";
import ModalEditarMiPerfil from "../components/ModalEditarMiPerfil";
import InformaciónMiperfil from "../components/InformacionMiperfil";
import LineaMiPerfil from "../components/LineaMiPerfil";
import BiografiaMiPerfil from "../components/BiografiaMiPerfil";
import GenerosMiPerfil from "../components/GenerosMiperfil";
import LibrosGuardadosMiPerfil from "../components/LibrosGuardadosMiPerfil";
import ModalLibrosMiPerfil from '../components/ModalLibrosMiPerfil'
import AmigosMiPerfil from "../components/AmigosMiPerfil";
import ModalAmigosMiPerfil from "../components/ModalAmigosMiPerfil";
import ComunidadMiPerfil from "../components/ComunidadMiPerfil";
import ModalComunidadMiPerfil from "../components/ModalComunidadMiPerfil";
import MedallasMiPerfil from "../components/MedallasMiPerfil";
import { useState } from "react";


function MiPerfil() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Nav />
      {/* Main Content */}
      <div className="col-md-9 col-lg-10">
        <main className="main-miperfil">
          <Miperfilbanner onEditClick={openModal} />
          <ModalEditarMiPerfil isOpen={isModalOpen} onClose={closeModal} />
          <InformaciónMiperfil />
          <LineaMiPerfil />
          <BiografiaMiPerfil />
          <GenerosMiPerfil />
          <LibrosGuardadosMiPerfil />
          <ModalLibrosMiPerfil />
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
