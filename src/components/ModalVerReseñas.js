import React, { useState } from "react";
import { Link } from "react-router-dom";

function ModalVerReseñas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-gustarA" onClick={openModal}>
        Ver Reseñas
      </button>

      {isModalOpen && (
        <div className="modal-overlay-gustarA" onClick={closeModal}>
          <div
            className="modal-content-gustar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="Header-modalA">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <h2 className="titulo-modalAmigos">RESEÑAS DE USUARIOS</h2>
            </div>
            <div className="modal-gustarA-content">
              {/* Reseña 1 */}
              <div className="review-box">
                <div className="profile">
                  <img className="img-gustarA" src={"ruta/img-usuario1"} alt="Usuario 1" />
                  <div>
                    <Link to="/MiPerfil" className="name-usuar-gustarA">
                      Usuario 1
                    </Link>
                    <p className="review-rating">⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="review-content">
                  Esta es una reseña de ejemplo que el usuario 1 ha dejado sobre el libro. El contenido de la reseña se mostrará aquí.
                </p>
              </div>

              {/* Reseña 2 */}
              <div className="review-box">
                <div className="profile">
                  <img className="img-gustarA" src={"ruta/img-usuario2"} alt="Usuario 2" />
                  <div>
                    <Link to="/MiPerfil" className="name-usuar-gustarA">
                      Usuario 2
                    </Link>
                    <p className="review-rating">⭐⭐⭐</p>
                  </div>
                </div>
                <p className="review-content">
                  Esta es una reseña de ejemplo que el usuario 2 ha dejado sobre el libro. El contenido de la reseña se mostrará aquí.
                </p>
              </div>

              {/* Reseña 3 */}
              <div className="review-box">
                <div className="profile">
                  <img className="img-gustarA" src={"ruta/img-usuario3"} alt="Usuario 3" />
                  <div>
                    <Link to="/MiPerfil" className="name-usuar-gustarA">
                      Usuario 3
                    </Link>
                    <p className="review-rating">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="review-content">
                  Esta es una reseña de ejemplo que el usuario 3 ha dejado sobre el libro. El contenido de la reseña se mostrará aquí.
                </p>
              </div>

              {/* Agrega más reseñas si es necesario */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalVerReseñas;
