// ModalCrearComunidad.jsx
import React, { useState } from 'react';

function ModalCrearComunidad({ isOpen, onClose }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-CrearC" onClick={onClose}>
      <div className="modal-content-CrearC" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-CrearC" onClick={onClose}>X</button>
        <div className="modal-title-container-CrearC">
          <h2 className='Titulo-accion-CrearC'>Crear Comunidad</h2>
        </div>
        <div className="modal-body-CrearC">
          <label className='modal-label-CrearC'>Imagen</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className='modal-input-CrearC' />
          {image && <img src={image} alt="Preview" className='modal-image-preview-CrearC' />}
          
          <label className='modal-label-CrearC'>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la comunidad"
            className='modal-input-CrearC'
          />

          <label className='modal-label-CrearC'>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la comunidad"
            className='modal-textarea-CrearC'
          />
        </div>
        <div className="modal-actions-CrearC">
          <button className='boton-modal-CrearC' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-CrearC'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearComunidad;
