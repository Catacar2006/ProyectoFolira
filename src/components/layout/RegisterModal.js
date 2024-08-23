import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        SING UP
      </button>

      {isModalOpen && (
        <div className="modal show" style={{ display: 'block' }} tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="registerModalLabel">SING UP</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
              </div>
              <div className="modal-body">
                <form id="registerForm">
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="registerUsername" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Numero de Telefono</label>
                    <input type="text" className="form-control" id="registerUsername" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Fecha de Nacimiento</label>
                    <input type="text" className="form-control" id="registerUsername" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Sexo</label>
                    <input type="text" className="form-control" id="registerUsername" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Biografia</label>
                    <input type="text" className="form-control" id="registerUsername" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="profilePicture" className="form-label">Foto de Perfil</label>
                    <input type="file" className="form-control" id="profilePicture" accept="image/*" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerEmail" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="registerEmail" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="registerPassword" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerConfirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="registerConfirmPassword" required />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                <button type="submit" className="btn btn-primary" form="registerForm">SING UP</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterModal;
