import React, { useState } from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import ContenidoGestionLibro from "../components/ContenedorGestionLibro"; 
import ModalInactivarLibro from "../components/ModalInactivarLibro"; 
import banner_libro from "../static/img/admi_banner.jpeg";
import ModalActivarLibro from "../components/ModalActivarLibro";
import ModalCrearLibro from "../components/ModalCrearLibro";
import ModalActualizarLibro from "../components/ModalActualizarLibro";

function GestionLibro() {
  const [isInactivarModalOpen, setIsInactivarModalOpen] = useState(false);
  const [isActivarModalOpen, setIsActivarModalOpen] = useState(false);
  const [isCrearModalOpen, setIsCrearModalOpen] = useState(false);
  const [isActualizarModalOpen, setIsActualizarModalOpen] = useState(false);

  return (
    <div>
      <Nav />
      <div>
        <MenuLateral />
        <main className="main-gestion-libro">
          <div>
            <img className="img-top" src={banner_libro} alt="banner" />
          </div>

          <ContenidoGestionLibro
            onInactivar={() => setIsInactivarModalOpen(true)}
            onActivar={() => setIsActivarModalOpen(true)}
            onCrear={() => setIsCrearModalOpen(true)}
            onActualizar={() => setIsActualizarModalOpen(true)}
          />

          {/* Modales */}
          <ModalInactivarLibro
            isOpen={isInactivarModalOpen}
            onClose={() => setIsInactivarModalOpen(false)}
          />

          <ModalActivarLibro
            isOpen={isActivarModalOpen}
            onClose={() => setIsActivarModalOpen(false)}
          />

          <ModalCrearLibro
            isOpen={isCrearModalOpen}
            onClose={() => setIsCrearModalOpen(false)}
          />

          <ModalActualizarLibro
            isOpen={isActualizarModalOpen}
            onClose={() => setIsActualizarModalOpen(false)}
          />
        </main>
      </div>
    </div>
  );
}

export default GestionLibro;
