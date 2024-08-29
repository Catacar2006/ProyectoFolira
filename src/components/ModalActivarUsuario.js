import React from 'react';

function ModalActivarUsuario({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-ActivarU" onClick={onClose}>
       <div className="modal-content-ActivarU" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-ActivarU" onClick={onClose}>X</button>
        <h2 className='Titulo-accion-ActivarU'>Activar Usuario</h2>
        <p className='text-accion-ActivarU'>¿Estás seguro de que deseas activar este usuario?</p>
        <div className="modal-actions-ActivarU">
          <button className='boton-modal-ActivarU' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-ActivarU'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalActivarUsuario;