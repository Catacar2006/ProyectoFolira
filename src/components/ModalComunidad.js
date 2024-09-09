import React, { useState } from "react";
import { Link } from "react-router-dom";
import modal_autor1 from "../static/img/Gabriel García Márquez.jpg";


function ModalFeedComunidad() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-comunidades" onClick={openModal}>
        Ver Comunidades
      </button>

      {isModalOpen && (
        <div className="modal-overlay-comunidades" onClick={closeModal}>
          <div
            className="modal-comunidades-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="Header-modal-comunidad">
              <button className="close-btn-comunidad" onClick={closeModal}>
                &times;
              </button>
              <h2 className="titulo-modal-comuni">ESCRITORES LATINOS</h2>
            </div>
            {" "}
            <div className="modal-gustar-comuni-content">

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
                <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-name-comuni-feed"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              {/* Más perfiles pueden ser añadidos de manera similar */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalFeedComunidad;
