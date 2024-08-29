import React from 'react';

function ModalInactivarUsuario({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-InactivarU" onClick={onClose}>
      <div className="modal-content-InactivarU" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-InactivarU" onClick={onClose}>X</button>
        <h2 className='Titulo-accion-InactivarU'>Inactivar Usuario</h2>
        <p className='text-accion-InactivarU'>¿Estás seguro de que deseas inactivar este usuario?</p>
        <div className="modal-actions-InactivarU">
          <button className='boton-modal-InactivarU' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-InactivarU'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalInactivarUsuario;
