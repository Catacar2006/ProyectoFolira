import React, { useState } from "react";
import Nav from "../components/layout/Nav";
import ContenidoGestionLibro from "../components/ContenedorGestionLibro"; 
import ModalInactivarLibro from "../components/ModalInactivarLibro"; 
import banner_libro from "../static/img/admi_banner.jpeg";
import ModalActivarLibro from "../components/ModalActivarLibro";
import ModalCrearLibro from "../components/ModalCrearLibro";
import ModalActualizarLibro from "../components/ModalActualizarLibro";
import ModalGeneros from "../components/ModalGeneros"; // Importa el nuevo modal

function GestionLibro() {
  const [isInactivarModalOpen, setIsInactivarModalOpen] = useState(false);
  const [isActivarModalOpen, setIsActivarModalOpen] = useState(false);
  const [isCrearModalOpen, setIsCrearModalOpen] = useState(false);
  const [isActualizarModalOpen, setIsActualizarModalOpen] = useState(false);
  const [isGenerosModalOpen, setIsGenerosModalOpen] = useState(false); // Estado para el nuevo modal

  const generos = [
    { id: 1, nombre: "Ficción" },
    { id: 2, nombre: "Ciencia" },
    { id: 3, nombre: "Historia" },
    { id: 4, nombre: "Fantasía" },
    { id: 5, nombre: "Romance" },
    { id: 6, nombre: "Misterio" },
    { id: 7, nombre: "Historia" },
    { id: 8, nombre: "Fantasía" },
    { id: 9, nombre: "Romance" },
    { id: 10, nombre: "Misterio" }
  ];

  return (
    <div>
      <Nav />
      <div>

        <main className="main-gestion-libro">
          <div>
            <img className="img-top" src={banner_libro} alt="banner" />
          </div>

          <div>
            <button className="boton-Gestiona-Generos" onClick={() => setIsGenerosModalOpen(true)}>
              Gestionar Géneros
            </button>
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

          {/* Modal de Géneros */}
          <ModalGeneros
            isOpen={isGenerosModalOpen}
            onClose={() => setIsGenerosModalOpen(false)}
            generos={generos}  // Pasas los géneros al modal
          />
        </main>
      </div>
    </div>
  );
}

export default GestionLibro;
