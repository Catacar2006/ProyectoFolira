import React, { useState } from "react";
import { Link } from "react-router-dom";
import modal_autor1 from "../static/img/Gabriel García Márquez.jpg";


function ModalFeedComunidad2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-tus-comunidades" onClick={openModal}>
        Tus Comunidades
      </button>

      {isModalOpen && (
        <div className="modal-overlay-tus-comunidades" onClick={closeModal}>
          <div
            className="modal-tus-comunidades-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="Header-tus-modal-comunidad">
              <button className="close-btn-tus-comunidad" onClick={closeModal}>
                &times;
              </button>
              <h2 className="titulo-modal-tus-comuni">TUS COMUNIDADES</h2>
            </div>
            {" "}
            <div className="modal-gustar-tus-comuni-content">

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                /> 
                </Link>
                
                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-tus-comuni">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-gustar-tus-comuni"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-name-tus-comuni"
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

export default ModalFeedComunidad2;
