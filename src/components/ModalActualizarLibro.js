import React, { useState } from "react";

function ModalActualizarLibro({ isOpen, onClose }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [saga, setSaga] = useState("");
  const [genero, setGenero] = useState("");

  if (!isOpen) return null; // No renderizar nada si el modal no está abierto

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-ActualizarL" onClick={onClose}>
      <div
        className="modal-content-ActualizarL"
        onClick={(e) => e.stopPropagation()} // Evitar que el modal se cierre al hacer clic dentro del contenido
      >
        <button className="close-button-ActualizarL" onClick={onClose}>
          X
        </button>
        <div className="modal-title-container-ActualizarL">
          <h2 className="Titulo-accion-ActualizarL">ACTUALIZAR LIBRO</h2>
        </div>
        <div className="modal-body-ActualizarL">
          <label className="modal-label-ActualizarL">Portada</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="modal-input-ActualizarL"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="modal-image-preview-ActualizarL"
            />
          )}

          <label className="modal-label-ActualizarL">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del libro"
            className="modal-input-ActualizarL"
          />

          <label className="modal-label-ActualizarL">ISBN</label>
          <input
            type="number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="ISBN del libro"
            className="modal-input-ActualizarL"
          />

          <label className="modal-label-ActualizarL">Saga</label>
          <input
            type="text"
            value={saga}
            onChange={(e) => setSaga(e.target.value)}
            placeholder="Nombre de la saga"
            className="modal-input-ActualizarL"
          />

          <label className="modal-label-ActualizarL">Género</label> {/* Corregí el label */}
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Nombre de los géneros"
            className="modal-input-ActualizarL"
          />
        </div>
        <div className="modal-actions-ActualizarL">
          <button className="boton-modal-ActualizarL" onClick={onClose}>
            Cancelar
          </button>
          <button className="boton-modal-ActualizarL">Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalActualizarLibro;
