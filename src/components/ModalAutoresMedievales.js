import React, { useState } from "react";
import { Link } from "react-router-dom";
import modal_autor6 from '../static/img/Shakespeare.jpg';
import modal_autor7 from '../static/img/(Dante Alighieri).jpg';
import modal_autor8 from '../static/img/Sophocles.jpg';
import modal_autor9 from '../static/img/Miguel de Cervantes Saavedra.jpeg';
import modal_autor10 from '../static/img/Luis de Góngora.jpg';

function ModalAutoresMedievales() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-AutoresM" onClick={openModal}>
        Ver Perfiles
      </button>

      {isModalOpen && (
        <div className="modal-overlay-Autores" onClick={closeModal}>
          <div className="modal-content-Autores" onClick={(e) => e.stopPropagation()}>
            <div className='Header-modal-Autores'>
              <button className="close-btn-Autores" onClick={closeModal}>&times;</button>
              <h2 className='titulo-modal-Autores'>ESCRITORES MEDIEVALES</h2>
            </div>

            <div className="modal-Autores-content">

              <div className="modal-autor-item">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor6}
                  alt="William Shakespeare"
                />

                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  William Shakespeare
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor7}
                  alt="Dante Alighieri"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Dante Alighieri
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor8}
                  alt="Socrates"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Socrates
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor9}
                  alt="Miguel de Cervantes"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Miguel de Cervantes
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor10}
                  alt="Luis de Góngora"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Luis de Góngora
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor6}
                  alt="William Shakespeare"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  William Shakespeare
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor7}
                  alt="Dante Alighieri"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Dante Alighieri
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor8}
                  alt="Socrates"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Socrates
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor9}
                  alt="Miguel de Cervantes"
                />
                </Link>

                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Miguel de Cervantes
                </Link>
              </div>
              <div className="modal-profile-Autores">
              <Link to="/FichaAutor">
                <img
                  className="modal-img-autores"
                  src={modal_autor10}
                  alt="Luis de Góngora"
                />
                </Link>
                <Link
                  to="/FichaAutor"
                  className="modal-title-autores"
                >
                  Luis de Góngora
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalAutoresMedievales;
