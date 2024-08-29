import React, { useState } from "react";

function ModalCrearLibro({ isOpen, onClose }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [saga, setSaga] = useState("");
  const [genero, setGenero] = useState("");

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-CrearL" onClick={onClose}>
      <div
        className="modal-content-CrearL"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button-CrearL" onClick={onClose}>
          X
        </button>
        <div className="modal-title-container-CrearL">
          <h2 className="Titulo-accion-CrearL">CREAR LIBRO</h2>
        </div>
        <div className="modal-body-CrearL">
          <label className="modal-label-CrearL">Portada</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="modal-input-CrearL"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="modal-image-preview-CrearL"
            />
          )}

          <label className="modal-label-CrearL">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del libro"
            className="modal-input-CrearL"
          />

          <label className="modal-label-CrearL">ISBN</label>
          <input
            type="number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="ISBN del libro"
            className="modal-input-CrearL"
          />

          <label className="modal-label-CrearL">Saga</label>
          <input
            type="text"
            value={saga}
            onChange={(e) => setSaga(e.target.value)}
            placeholder="Nombre de la saga"
            className="modal-input-CrearL"
          />

          <label className="modal-label-CrearL">Saga</label>
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Nombre de los generos"
            className="modal-input-CrearL"
          />
        </div>
        <div className="modal-actions-CrearL">
          <button className="boton-modal-CrearL" onClick={onClose}>
            Cancelar
          </button>
          <button className="boton-modal-CrearL">Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearLibro;
