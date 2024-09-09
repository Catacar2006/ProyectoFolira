import React, { useState } from "react";
import amigo1 from "../static/img/dp12.jpeg";
import { Link } from "react-router-dom";

function ModalPersonasAmigos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return ( 
    <div>
      <button className="ver-mas-gustarA" onClick={openModal}>
        Ver Perfiles
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
              <h2 className="titulo-modalAmigos">
                PERSONAS QUE TE PUEDEN GUSTAR
              </h2>
            </div>
            <div className="modal-gustarA-content">
              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 1" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                  Usuario 1
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 2" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 2
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 3" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 3
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 4" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                usuario 4
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 1" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                  Usuario 1
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 2" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 2
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 3" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 3
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 4" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                usuario 4
                </Link>
              </div>
              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 1" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                  Usuario 1
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 2" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 2
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 3" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                Usuario 3
                </Link>
              </div>

              <div className="profile">
                <img className="img-gustarA" src={amigo1} alt="Usuario 4" />
                <Link to="/MiPerfil" className="name-usuar-gustarA">
                usuario 4
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPersonasAmigos;
