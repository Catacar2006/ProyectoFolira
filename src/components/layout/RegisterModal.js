import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ROLE_ID = 1;
const DEFAULT_STATE = true;

function RegisterModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [idUsuario, setidUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fotoPerfil, setfotoPefil] = useState(''); // Manejar archivos
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleFileChange = (e) => {
    setfotoPefil(e.target.files[0]); // Obtener el archivo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('idUsuario', idUsuario);
    formData.append('nombre', nombre);
    formData.append('numeroTelefono', numeroTelefono);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('fotoPerfil', fotoPerfil); // archivo
    formData.append('correo', correo);
    formData.append('contrasena', contrasena);
    formData.append('idRolFK', ROLE_ID);
    formData.append('estado', DEFAULT_STATE);

    try {
      const response = await axios.post('http://localhost:9906/api/usuario', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Tipo para subir archivos
        },
      });

      if (response.status === 201) {
        alert('Usuario registrado con éxito');
        closeModal();
        window.location.href = '/MiPerfil';
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <>
      <button type="button" className="btn-sing-up-index" onClick={openModal}>
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
                <form id="registerForm" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="registerUsername" className="form-label">Numero de Identificacion</label>
                    <input type="text" className="form-control" id="registerUsername" name="idUsuario" value={idUsuario} onChange={(e) => setidUsuario(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerName" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="registerName" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerPhone" className="form-label">Numero de Telefono</label>
                    <input type="text" className="form-control" id="registerPhone" name="numeroTelefono" value={numeroTelefono} onChange={(e) => setNumeroTelefono(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerBirthDate" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="registerBirthDate" name="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="profilePicture" className="form-label">Foto de Perfil</label>
                    <input type="file" className="form-control" id="profilePicture" accept="image/*" name="fotoPerfil" onChange={handleFileChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerEmail" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="registerEmail" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="registerPassword" name="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                    <button type="submit" className="btn btn-primary">SING UP</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterModal;
