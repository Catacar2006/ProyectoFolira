import React, { useState } from 'react';
import ModalActualizarGenero from '../components/ModalActualizarGenero'; // Asegúrate de tener este archivo
import ModalCrearGenero from '../components/ModalCrearGeneroLi'; // Asegúrate de tener este archivo

function ModalGeneros({ isOpen, onClose, generos }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedGenero, setSelectedGenero] = useState(null);

  const handleCreate = () => {
    setIsCreateModalOpen(true);
  };

  const handleUpdate = (genero) => {
    setSelectedGenero(genero);
    setIsUpdateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedGenero(null);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay-generos">
        <div className="modal-content-generos-libro">
          <div className="modal-gl-header">
            <h2 className="title-generos">Géneros</h2>
            <button className="close-button-generos" onClick={onClose}>×</button>
          </div>
          <div className="modal-body-generos">
            <ul className="generos-list">
              {generos.map((genero) => (
                <li key={genero.id}>
                  {genero.nombre}
                  <div className="generos-buttons">
                    <button onClick={() => alert(`Activar ${genero.nombre}`)}>Activar</button>
                    <button onClick={() => alert(`Inactivar ${genero.nombre}`)}>Inactivar</button>
                    <button onClick={() => handleUpdate(genero)}>Actualizar</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Botones Crear fuera del contenido desplazable */}
          <div className="generos-footer-buttons">
            <button className="crear-button" onClick={handleCreate}>Crear</button>
          </div>
        </div>
      </div>
      {/* Modales para Crear y Actualizar Género */}
      <ModalCrearGenero
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onCreate={(nuevoGenero) => {
          // Aquí podrías manejar la creación del género
          console.log('Género creado:', nuevoGenero);
          handleCloseCreateModal();
        }}
      />
      {selectedGenero && (
        <ModalActualizarGenero
          isOpen={isUpdateModalOpen}
          onClose={handleCloseUpdateModal}
          onUpdate={(updatedGenero) => {
            // Aquí podrías manejar la actualización del género
            console.log('Género actualizado:', updatedGenero);
            handleCloseUpdateModal();
          }}
          genero={selectedGenero}
        />
      )}
    </>
  );
}

export default ModalGeneros;
