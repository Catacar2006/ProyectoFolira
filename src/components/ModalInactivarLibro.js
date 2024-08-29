import React from 'react';

function ModalInactivarLibro({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-InactivarC" onClick={onClose}>
      <div className="modal-content-InactivarC" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-InactivarC" onClick={onClose}>X</button>
        <h2 className='Titulo-accion-InactivarC'>Inactivar Comunidad</h2>
        <p className='text-accion-InactivarC'>¿Estás seguro de que deseas inactivar esta comunidad?</p>
        <div className="modal-actions-InactivarC">
          <button className='boton-modal-InactivarC' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-InactivarC'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalInactivarLibro;
