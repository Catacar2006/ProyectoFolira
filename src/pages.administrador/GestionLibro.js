import React, { useState } from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import ContenidoGestionLibro from "../components/ContenedorGestionLibro"; // Corrige el nombre del archivo
import ModalInactivarLibro from "../components/ModalInactivarLibro"; // Corrige el nombre del archivo
import banner_libro from "../static/img/admi_banner.jpeg";

function GestionLibro() {
  const [isInactivarModalOpen, setIsInactivarModalOpen] = useState(false);

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
            // Puedes agregar más handlers aquí si es necesario
          />

          <ModalInactivarLibro
            isOpen={isInactivarModalOpen}
            onClose={() => setIsInactivarModalOpen(false)}
          />
        </main>
      </div>
    </div>
  );
}

export default GestionLibro;
