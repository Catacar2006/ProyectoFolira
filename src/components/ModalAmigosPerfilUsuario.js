import React, { useState } from "react";
import { Link } from "react-router-dom";
import foto_usua1_miperfil from "../static/img/cp7.jpg";
import foto_usua2_miperfil from "../static/img/cp8.jpeg";
import foto_usua3_miperfil from "../static/img/cp9.jpeg";

function ModalAmigosMiPerfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-PerfilUsuaA" onClick={openModal}>
        Amigos
      </button>

      {isModalOpen && (
        <div className="modal-overlay-PerfilUsuaA" onClick={closeModal}>
          <div className="modal-content-PerfilUsuaA" onClick={(e) => e.stopPropagation()}>
            <div className="Header-modal-PerfilUsuaA">
              <button className="close-btn-PerfilUsuaA" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-PerfilUsuaA">Amigos</h2>
            </div>

            <div className="modal-PerfilUsuaA-content">

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  John_★
                </Link>
              </div>

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-PerfilUsuaA-amigos">
                <img
                  className="modal-img-PerfilUsuaA"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaA"
                >
                  John_★
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalAmigosMiPerfil;
