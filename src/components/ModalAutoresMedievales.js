import React from "react";
import { Link } from "react-router-dom";
import modal_autor6 from '../static/img/Shakespeare.jpg';
import modal_autor7 from '../static/img/(Dante Alighieri).jpg';
import modal_autor8 from '../static/img/Sophocles.jpg';
import modal_autor9 from '../static/img/Miguel de Cervantes Saavedra.jpeg';
import modal_autor10 from '../static/img/Luis de Góngora.jpg';

function MdoalAutoresMedeivales (){
    return(
        <div>
            {/* autores medievales */}
        <div>
          <h2 className="title-section-feedautores">Medieval y Renacimiento</h2>
        </div>
        <Link to="#modal-autor" className="ver-mas">
          ver más
        </Link>

        {/* INICIO DEL MODAL DE MEDIEVAL */}
        {/* Modal */}
        <div id="modal-autor" className="modal-overlay-autor">
          <div className="modal-content-autor">
            <Link to="#" className="close-autor">
              ×
            </Link>
            <h2 className="title-modal-feedUsuariio">
              MEDIEVAL Y RENACIMIENTO
            </h2>
            <div className="modal-autor-container">
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor6}
                  alt="William Shakespeare"
                />
                <Link
                  to="perfil-william-shakespeare.html"
                  className="modal-title-autores"
                >
                  William Shakespeare
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor7}
                  alt="Dante Alighieri"
                />
                <Link
                  to="perfil-dante-alighieri.html"
                  className="modal-title-autores"
                >
                  Dante Alighieri
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor8}
                  alt="Socrates"
                />
                <Link to="perfil-socrates.html" className="modal-title-autores">
                  Socrates
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor9}
                  alt="Miguel de Cervantes"
                />
                <Link
                  to="perfil-miguel-de-cervantes.html"
                  className="modal-title-autores"
                >
                  Miguel de Cervantes
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor10}
                  alt="Luis de Góngora"
                />
                <Link
                  to="perfil-luis-de-gongora.html"
                  className="modal-title-autores"
                >
                  Luis de Góngora
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor6}
                  alt="William Shakespeare"
                />
                <Link
                  to="perfil-william-shakespeare.html"
                  className="modal-title-autores"
                >
                  William Shakespeare
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor7}
                  alt="Dante Alighieri"
                />
                <Link
                  to="perfil-dante-alighieri.html"
                  className="modal-title-autores"
                >
                  Dante Alighieri
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor8}
                  alt="Socrates"
                />
                <Link to="perfil-socrates.html" className="modal-title-autores">
                  Socrates
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor9}
                  alt="Miguel de Cervantes"
                />
                <Link
                  to="perfil-miguel-de-cervantes.html"
                  className="modal-title-autores"
                >
                  Miguel de Cervantes
                </Link>
              </div>
              <div className="modal-autor-item">
                <img
                  className="modal-img-autores"
                  src={modal_autor10}
                  alt="Luis de Góngora"
                />
                <Link
                  to="perfil-luis-de-gongora.html"
                  className="modal-title-autores"
                >
                  Luis de Góngora
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* FIN MODAL MEDIEVAL */}
        </div>
    );
};

export default MdoalAutoresMedeivales;