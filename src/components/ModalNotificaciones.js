import React, { useState, useEffect } from 'react';
import noti_nav from '../static/icons/noti-nav.svg';
import axios from 'axios'; // Para conectarte con el back-end

const ModalNotificaciones = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificaciones, setNotificaciones] = useState([]);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Obtener notificaciones del servidor
  useEffect(() => {
    const fetchNotificaciones = async () => {
      try {
        const response = await axios.get('/api/notificaciones'); // Ruta que deberás definir en tu back-end
        setNotificaciones(response.data);
      } catch (error) {
        console.error('Error al obtener notificaciones', error);
      }
    };

    fetchNotificaciones();
  }, []);

  return (
    <div>
      <button className="ver-mas-notificaciones" onClick={openModal}>
       <img className="option-two-nav" src={noti_nav} alt="notificacion_nav"/>
      </button>

      {isModalOpen && (
        <div className="modal-overlay-notificaciones" onClick={closeModal}>
          <div className="modal-content-notificaciones" onClick={(e) => e.stopPropagation()}>
            <div className="header-modal-notificaciones">
              <button className="close-btn-notificaciones" onClick={closeModal}>
                &times;
              </button>
              <h2 className="titulo-modal-notificaciones">Notificaciones</h2>
            </div>

            <div className="modal-notificaciones-content">
              {notificaciones.length > 0 ? (
                notificaciones.map((notificacion) => (
                  <div key={notificacion.idNotificacion} className="notificacion-item">
                    <p className="notificacion-mensaje">{notificacion.mensaje}</p>
                    <small className="notificacion-fecha">{new Date(notificacion.fechaCreacion).toLocaleString()}</small>
                  </div>
                ))
              ) : (
                <p>No tienes notificaciones.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalNotificaciones;
