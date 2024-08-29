import React, { useState } from "react";
import ContenidoGestionUsuario from "../components/ContenidoGestionUsuario";
import ModalInactivarUsuario from "../components/ModalInactivarUsuario";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import banner_usua from "../static/img/admi_banners_usua.jpeg";
import ModalActivarUsuario from "../components/ModalActivarUsuario";
import ModalCrearUsuario from "../components/ModalCrearUsuario";
import ModalActualizarUsuario from "../components/ModalActualizarUsuario";

function GestionComunidad() {
  const [isInactivarModalOpen, setIsInactivarModalOpen] = useState(false);
  const [isActivarModalOpen, setIsActivarModalOpen] = useState(false);
  const [isCrearModalOpen, setIsCrearModalOpen] = useState(false);
  const [isActualizarModalOpen, setIsActualizarModalOpen] = useState(false);

  return (
    <div>
      <Nav />
      <div>
        <MenuLateral />
        <main className="main-gestion-usuario">
          <div>
            <img className="img-top" src={banner_usua} alt="banner" />
          </div>

          <ContenidoGestionUsuario
            onInactivar={() => setIsInactivarModalOpen(true)}
            onActivar={() => setIsActivarModalOpen(true)}
            onCrear={() => setIsCrearModalOpen(true)}
            onActualizar={() => setIsActualizarModalOpen(true)}
          />

          <ModalInactivarUsuario
            isOpen={isInactivarModalOpen}
            onClose={() => setIsInactivarModalOpen(false)}
          />

          <ModalActivarUsuario
            isOpen={isActivarModalOpen}
            onClose={() => setIsActivarModalOpen(false)}
          />

          <ModalCrearUsuario
            isOpen={isCrearModalOpen}
            onClose={() => setIsCrearModalOpen(false)}
          />

          <ModalActualizarUsuario
            isOpen={isActualizarModalOpen}
            onClose={() => setIsActualizarModalOpen(false)}
          />
        </main>
      </div>
    </div>
  );
}

export default GestionComunidad;
