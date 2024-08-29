import React from 'react';

function ModalCrearGenero({ isOpen, onClose, onCreate }) {
  const [nombre, setNombre] = React.useState('');

  const handleCreate = () => {
    onCreate(nombre);
    setNombre('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-crearG">
      <div className="modal-crearG-content">
        <h2>Crear Género</h2>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del género"
        />
        <div className="modal-crearG-buttons">
          <button onClick={handleCreate}>Crear</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearGenero;
