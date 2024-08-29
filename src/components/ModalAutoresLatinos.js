import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import modal_autor1 from '../static/img/Gabriel García Márquez.jpg';
import modal_autor2 from '../static/img/burgos_julia.jpg';
import modal_autor3 from '../static/img/Las frases de Mario Benedetti.jpg';
import modal_autor4 from '../static/img/Mario Vargas Llosa.jpeg';
import modal_autor5 from '../static/img/Laura-Restrepo.jpeg';

function ModalPersonasAmigos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-Autores" onClick={openModal}>
        Ver Perfiles
      </button>

      {isModalOpen && (
        <div className="modal-overlay-Autores" onClick={closeModal}>
          <div className="modal-content-Autores" onClick={(e) => e.stopPropagation()}>
            <div className='Header-modal-Autores'>
              <button className="close-btn-Autores" onClick={closeModal}>&times;</button>
              <h2 className='titulo-modal-Autores'>ESCRITORES LATINOS</h2>
            </div>

            <div className='modal-Autores-content'>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor1}
                  alt="Gabriel García Márquez"
                />
                <Link
                  to="perfil-gabriel-garcia-marquez.html"
                  className="modal-title-autores"
                >
                  Gabriel García Márquez
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor2}
                  alt="Burgos Julia"
                />
                <Link
                  to="perfil-burgos-julia.html"
                  className="modal-title-autores"
                >
                  Burgos Julia
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor3}
                  alt="Mario Benedetti"
                />
                <Link
                  to="perfil-mario-benedetti.html"
                  className="modal-title-autores"
                >
                  Mario Benedetti
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor4}
                  alt="Mario Vargas Llosa"
                />
                <Link
                  to="perfil-mario-vargas-llosa.html"
                  className="modal-title-autores"
                >
                  Mario Vargas Llosa
                </Link>
              </div>

              <div className="modal-profile-Autores">
                <img
                  className="modal-img-autores"
                  src={modal_autor5}
                  alt="Laura Restrepo"
                />
                <Link
                  to="perfil-laura-restrepo.html"
                  className="modal-title-autores"
                >
                  Laura Restrepo
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

export default ModalPersonasAmigos;