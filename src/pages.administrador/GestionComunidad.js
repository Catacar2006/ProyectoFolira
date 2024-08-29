import React, { useState } from "react";
import ContenidoGestionComunidad from "../components/ContenidoGestionComunidad";
import ModalInactivarComunidad from "../components/ModalInactivarComunidad";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import banner_comuni from "../static/img/admi_banner_co.jpeg";
import ModalActivarComunidad from "../components/ModalActivarComunidad";
import ModalCrearComunidad from "../components/ModalCrearComunidad";
import ModalActualizarComunidad from "../components/ModalActualizarComunidad";

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
        <main className="main-gestion-comunidades">
          <div>
            <img className="img-top" src={banner_comuni} alt="banner" />
          </div>

          <ContenidoGestionComunidad
            onInactivar={() => setIsInactivarModalOpen(true)}
            onActivar={() => setIsActivarModalOpen(true)}
            onCrear={() => setIsCrearModalOpen(true)}
            onActualizar={() => setIsActualizarModalOpen(true)}
          />

          <ModalInactivarComunidad
            isOpen={isInactivarModalOpen}
            onClose={() => setIsInactivarModalOpen(false)}
          />

          <ModalActivarComunidad
            isOpen={isActivarModalOpen}
            onClose={() => setIsActivarModalOpen(false)}
          />

          <ModalCrearComunidad
            isOpen={isCrearModalOpen}
            onClose={() => setIsCrearModalOpen(false)}
          />

          <ModalActualizarComunidad
            isOpen={isActualizarModalOpen}
            onClose={() => setIsActualizarModalOpen(false)}
          />
        </main>
      </div>
    </div>
  );
}

export default GestionComunidad;
