import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        SING IN
      </button>

      {isModalOpen && (
        <div className="modal show" style={{ display: 'block' }} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="LoginModalLabel">SING IN</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
            </div>
            <div className="modal-body">
              <form id="registerForm">
                <div className="mb-4">
                  <label htmlFor="LoginEmail" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="LoginEmail" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="LoginPassword" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="LoginPassword" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              <button type="submit" className="btn btn-primary" form="LoginForm">SING IN</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}


export default LoginModal;