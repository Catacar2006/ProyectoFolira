// ModalCrearComunidad.jsx
import React, { useState } from 'react';

function ModalCrearUsuario({ isOpen, onClose }) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal-overlay-CrearU" onClick={onClose}>
      <div className="modal-content-CrearU" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-CrearU" onClick={onClose}>X</button>
        <div className="modal-title-container-CrearU">
          <h2 className='Titulo-accion-CrearU'>Crear Usuario</h2>
        </div>
        <div className="modal-body-CrearU">
          <label className='modal-label-CrearU'>Imagen</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className='modal-input-CrearU' />
          {image && <img src={image} alt="Preview" className='modal-image-preview-CrearU' />}
          
          <label className='modal-label-CrearU'>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la comunidad"
            className='modal-input-CrearU'
          />

          <label className='modal-label-CrearU'>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la comunidad"
            className='modal-textarea-CrearU'
          />
        </div>
        <div className="modal-actions-CrearU">
          <button className='boton-modal-CrearU' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-CrearU'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearUsuario;
