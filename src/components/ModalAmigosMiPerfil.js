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
      <button className="ver-mas-MiperfilA" onClick={openModal}>
        Amigos
      </button>

      {isModalOpen && (
        <div className="modal-overlay-MiperfilA" onClick={closeModal}>
          <div className="modal-content-MiperfilA" onClick={(e) => e.stopPropagation()}>
            <div className="Header-modal-MiperfilA">
              <button className="close-btn-MiperfilA" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-MiperfilA">Amigos</h2>
            </div>

            <div className="modal-MiperfilA-content">

              <div className="modal-MiperfilA-Autores">
                <Link to="">
                <img
                  className="modal-img-MiperfilA"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                /></Link>
                
                <Link
                  to="#"
                  className="modal-title-MiperfilA"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <Link>
                <img
                  className="modal-img-autores"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                </Link>

                <Link
                  to="#"
                  className="modal-title-autores"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <Link>
                <img
                  className="modal-img-autores"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                </Link>
                <Link
                  to="#"
                  className="modal-title-autores"
                >
                  John_★
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <Link>
                <img
                  className="modal-img-autores"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                />
                </Link>

                <Link
                  to="#"
                  className="modal-title-autores"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <Link>
                <img
                  className="modal-img-autores"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                </Link>

                <Link
                  to="#"
                  className="modal-title-autores"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <Link>
                <img
                  className="modal-img-autores"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                </Link>

                <Link
                  to="#"
                  className="modal-title-autores"
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
