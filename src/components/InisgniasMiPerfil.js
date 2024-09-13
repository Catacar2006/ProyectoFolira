import React, { useState, useEffect } from "react";
import medala3_miperfil from "../static/icons/s4k6_pdjv_220810.jpg";

function ModalListaInsignias() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insignias, setInsignias] = useState([]);

  // Simulación de llamada al backend para obtener las insignias
  useEffect(() => {
    const fetchInsignias = async () => {
      const response = await fetch("/api/insignias"); // Reemplaza con tu endpoint real
      const data = await response.json();
      setInsignias(data);
    };

    fetchInsignias();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
     <button className="button-medalla-espacio-miperfil"  onClick={openModal}>
                <img
                  src={medala3_miperfil}
                  alt="reseña"
                  className="img-medall-miperfil"
                />
                Ver Medallas
                </button>

      {isModalOpen && (
        <div className="modal-overlay-Miperfil" onClick={closeModal}>
          <div
            className="modal-content-Miperfil"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="Header-modal-Miperfil">
              <button className="close-btn-Miperfil" onClick={closeModal}>
                &times;
              </button>
              <h2 className="titulo-modal-Miperfil">Listado de Insignias</h2>
            </div>

            <div className="modal-Miperfil-content">
              <ul className="insignia-list">
                {insignias.map((insignia) => (
                  <li key={insignia.idInsignia} className="insignia-item">
                    <img
                      src={insignia.iconoURL}
                      alt={insignia.nombre}
                      className="insignia-icon"
                    />
                    <div className="insignia-details">
                      <h3>{insignia.nombre}</h3>
                      <p>{insignia.descripcion}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalListaInsignias;