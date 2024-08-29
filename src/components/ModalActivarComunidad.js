import React from 'react';

function ModalActivarComunidad({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-ActivarC" onClick={onClose}>
       <div className="modal-content-ActivarC" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-ActivarC" onClick={onClose}>X</button>
        <h2 className='Titulo-accion-ActivarC'>Activar Comunidad</h2>
        <p className='text-accion-ActivarC'>¿Estás seguro de que deseas activar esta comunidad?</p>
        <div className="modal-actions-ActivarC">
          <button className='boton-modal-ActivarC' onClick={onClose}>Cancelar</button>
          <button className='boton-modal-ActivarC'>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalActivarComunidad;