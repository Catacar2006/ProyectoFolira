import React from "react";
import modal_autor1 from '../static/img/Gabriel García Márquez.jpg';
import modal_autor2 from '../static/img/burgos_julia.jpg';
import modal_autor3 from '../static/img/Las frases de Mario Benedetti.jpg';
import modal_autor4 from '../static/img/Mario Vargas Llosa.jpeg';
import modal_autor5 from '../static/img/Laura-Restrepo.jpeg';
import { Link } from "react-router-dom";

function ModalAutoresLatinos (){
    return(
        <div>
            <Link to="#modal-autores" className="ver-mas">
          ver más
        </Link>
        {/* INCIO MODAL LATINOS */}
        {/* Modal */}
        <div id="modal-autores" className="modal-overlay-autores">
          <div className="modal-content-autores">
            <Link to="#" className="close-autores">
              ×
            </Link>
            <h2 className="title-modal-feedUsuariio">LATINO AMERICANOS</h2>
            <div className="modal-autores-container">
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
              <div className="modal-autor-item">
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
            </div>
          </div>
        </div>
        {/* FIN MODAL LATINOS */}
        </div>
    );
};

export default ModalAutoresLatinos;