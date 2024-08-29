import React, { useState, useEffect } from 'react';

function ModalActualizarGenero({ isOpen, onClose, onUpdate, genero }) {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    if (genero) {
      setNombre(genero.nombre || '');
    }
  }, [genero]);

  const handleUpdate = () => {
    onUpdate({ ...genero, nombre });
    setNombre('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-actualizarG">
      <div className="modal-actualizarG-content">
        <div className="modal-header-actualizarG">
          <h2 className='titulos-actualizarG'>Actualizar Género</h2>
          <button className="close-button-actualizarG" onClick={onClose}>×</button>
        </div>
        <div className="modal-body-actualizarG">
          <input
            className='input-actualizarG'
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del género"
          />
          <div className="modal-footer-actualizarG">
            <button className='boton-actualizarG' onClick={handleUpdate}>Actualizar</button>
            <button className='boton-actualizarG' onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalActualizarGenero;
