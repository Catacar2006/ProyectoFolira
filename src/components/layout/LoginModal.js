import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function LoginModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reinicia el mensaje de error

    try {
      const response = await axios.post('http://localhost:9906/api/auth/login/', { correo, contrasena });

      if (response.data.token) {
        // Guardar el token, el id del usuario y el id del rol en el localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.usuario.id); // Asegúrate de que el backend devuelva el id correcto
        localStorage.setItem('userRoleId', response.data.usuario.idRol); // Guardar el id del rol

        // Validar el rol del usuario
        const userRoleId = response.data.usuario.idRol;
        if (userRoleId === 1) {
          // Usuario regular: redirigir a su perfil
          window.location.href = '/MiPerfil';
        } else if (userRoleId === 2) {
          // Administrador: redirigir al dashboard de administración
          window.location.href = '/GestionUsuario'; // Cambia esta ruta a la que uses para administradores
        } else {
          console.error('Rol no reconocido');
        }
      } else {
        console.error('Error: No se recibió un token');
      }
    } catch (error) {
      // Si hay un error en la autenticación, muestra una alerta y restablece la contraseña
      setErrorMessage('Correo o contraseña incorrectos. Inténtalo de nuevo.');
      setContrasena(''); // Limpia el campo de contraseña para que el usuario ingrese nuevamente
      console.error('Error durante el login:', error);
    }
  };

  return (
    <>
      <button type="button" className="btn-sing-in-index" onClick={openModal}>
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
              <form id="LoginForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="LoginEmail" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="LoginEmail" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                </div>
                <div className="mb-4">
                  <label htmlFor="LoginPassword" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="LoginPassword" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
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