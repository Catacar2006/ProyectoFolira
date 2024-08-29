import React from 'react';

function ModalInactivarLibro({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-InactivarL" onClick={onClose}>
      <div className="modal-content-InactivarL" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-InactivarL" onClick={onClose}>X</button>
        <h2 className='Titulo-accion-InactivarL'>Inactivar Libro</h2>
        <p className='text-accion-InactivarL'>¿Estás seguro de que deseas inactivar este libro?</p>
        <div className="modal-actions-InactivarL">
          <button className='boton-modal-InactivarL' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-InactivarL'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalInactivarLibro;
