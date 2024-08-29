import React from "react";

function ModalActivarLibro ({ isOpen, onClose }){
    if (!isOpen) return null;
    return(
    <div className="modal-overlay-ActivarL" onClick={onClose}>
        <div className="modal-content-ActivarL" onClick={(e) => e.stopPropagation()}>
            <button className="close-button-ActivarL" onClick={onClose}>X</button>
            <h2 className='Titulo-accion-ActivarL'>Activar Libro</h2>
            <p className='text-accion-ActivarL'>¿Estás seguro de que deseas activar este libro?</p>
            <div className="modal-actions-ActivarL">
            <button className='boton-modal-ActivarL' onClick={onClose}>Cancelar</button>
            <button className='boton-modal-ActivarL'>Confirmar</button>
            </div>
        </div>
    </div>
    );
};
 
export default ModalActivarLibro;