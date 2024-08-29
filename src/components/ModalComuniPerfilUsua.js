import React, { useState } from "react";
import libro1_mi_perfil from '../static/img/23 Otoños Antes De Ti.jpg';
import libro2_mi_perfil from '../static/img/Bajo la misma estrella.jpeg';
import libro3_mi_perfil from '../static/img/BRUJA BLANCA, LA ASESINO DE BRUJAS 1.jpg';
import libro4_mi_perfil from '../static/img/Ciudades De Fuego.jpeg';
import libro5_mi_perfil from '../static/img/Yo antes de ti.jpg';
import libro6_mi_perfil from '../static/img/Tres meses.jpeg';

import foto_usua1_miperfil from "../static/img/cp7.jpg";
import foto_usua2_miperfil from "../static/img/cp8.jpeg";
import foto_usua3_miperfil from "../static/img/cp9.jpeg";
import { Link } from "react-router-dom";

function ModalAmigosMiPerfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-PerfilUsuaC" onClick={openModal}>
        Comunidades
      </button>
      
      {isModalOpen && (
        <div className="modal-overlay-PerfilUsuaC" onClick={closeModal}>
          <div className="modal-content-PerfilUsuaC" onClick={(e) => e.stopPropagation()}>
            <div className="Header-modal-PerfilUsuaC">
              <button className="close-btn-PerfilUsuaC" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-PerfilUsuaC">COMUNIDADES</h2>
            </div>

            <div className="modal-PerfilUsuaC-content">

            <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
                >
                  John_★
                </Link>
              </div>

              <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
                >
                  Alex_㋛
                </Link>
              </div>

              <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
                >
                  Emma_✩
                </Link>
              </div>

              <div className="modal-PerfilUsuaC-comuni">
                <img
                  className="modal-img-PerfilUsuaC"
                  src={foto_usua3_miperfil}
                  alt="John_★"
                />
                <Link
                  to="#"
                  className="modal-title-PerfilUsuaC"
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