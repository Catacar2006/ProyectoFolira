// ModalCrearComunidad.jsx
import React, { useState } from 'react';

function ModalActualizarUsuario({ isOpen, onClose }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-ActualizarU" onClick={onClose}>
      <div className="modal-content-ActualizarU" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-ActualizarU" onClick={onClose}>X</button>
        <div className="modal-title-container-ActualizarU">
          <h2 className='Titulo-accion-ActualizarU'>Actualizar Usuario</h2>
        </div>
        <div className="modal-body-ActualizarU">
          <label className='modal-label-ActualizarU'>Imagen</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className='modal-input-ActualizarU' />
          {image && <img src={image} alt="Preview" className='modal-image-preview-ActualizarU' />}
          
          <label className='modal-label-ActualizarU'>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la comunidad"
            className='modal-input-ActualizarU'
          />

          <label className='modal-label-ActualizarU'>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la comunidad"
            className='modal-textarea-ActualizarU'
          />
        </div>
        <div className="modal-actions-ActualizarU">
          <button className='boton-modal-ActualizarU' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-ActualizarU'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalActualizarUsuario;
