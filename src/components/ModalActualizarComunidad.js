// ModalCrearComunidad.jsx
import React, { useState } from 'react';

function ModalActualizarComunidad({ isOpen, onClose }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-ActualizarC" onClick={onClose}>
      <div className="modal-content-ActualizarC" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-ActualizarC" onClick={onClose}>X</button>
        <div className="modal-title-container-ActualizarC">
          <h2 className='Titulo-accion-ActualizarC'>Actualizar Comunidad</h2>
        </div>
        <div className="modal-body-ActualizarC">
          <label className='modal-label-ActualizarC'>Imagen</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className='modal-input-ActualizarC' />
          {image && <img src={image} alt="Preview" className='modal-image-preview-ActualizarC' />}
          
          <label className='modal-label-ActualizarC'>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la comunidad"
            className='modal-input-ActualizarC'
          />

          <label className='modal-label-ActualizarC'>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la comunidad"
            className='modal-textarea-ActualizarC'
          />
        </div>
        <div className="modal-actions-ActualizarC">
          <button className='boton-modal-ActualizarC' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-ActualizarC'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalActualizarComunidad;
