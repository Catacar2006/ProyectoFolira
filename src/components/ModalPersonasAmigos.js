import React from "react";
import { Link } from "react-router-dom";
import modal2_foto_amigo6 from "../static/img/dp10.jpeg";
import modal2_foto_amigo7 from "../static/img/dp9.jpeg";
import modal2_foto_amigo8 from "../static/img/dp8.jpeg";
import modal2_foto_amigo9 from "../static/img/dp11.jpeg";
import modal2_foto_amigo10 from "../static/img/dp12.jpeg";

function ModalPersonasAmigos (){
    return(
        <div>
            {/* Comienzo Enlace para abrir el segundo modal */}
        <Link to="#modal2" className="ver-mas">
          ver más
        </Link>
        {/* Modal 2 */}
        <div id="modal2" className="modal-gustar">
          <div className="modal-gustar-content">
            <Link to="#" className="close-gustar">
              ×
            </Link>
            <h2 className="amigos-modal">PERSONAS CON UN GUSTO SIMILAR</h2>
            <div className="modal-gustar-amigos-container">
              {/* Lista de amigos */}
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo6}
                  alt="Alex_㋡"
                />
                <Link to="perfil-alex.html" className="modal2-title-amigo">
                  Alex_㋡
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo7}
                  alt="Butterfly_13🦋"
                />
                <Link to="perfil-butterfly.html" className="modal2-title-amigo">
                  Butterfly_13🦋
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo8}
                  alt="MyLifeIsaDrama❀"
                />
                <Link to="perfil-mylifeisadrama.html" className="modal2-title-amigo">
                  MyLifeIsaDrama❀
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo9}
                  alt="Dark_Night☾"
                />
                <Link to="perfil-darknight.html" className="modal2-title-amigo">
                  Dark_Night☾
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo10}
                  alt="Kimchi_29🍥"
                />
                <a href="perfil-kimchi.html" className="modal2-title-amigo">
                  Kimchi_29🍥
                </a>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo10}
                  alt="Alex_㋡"
                />
                <Link to="perfil-alex.html" className="modal2-title-amigo">
                  Alex_㋡
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo9}
                  alt="Butterfly_13🦋"
                />
                <Link to="perfil-butterfly.html" className="modal2-title-amigo">
                  Butterfly_13🦋
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo8}
                  alt="MyLifeIsaDrama❀"
                />
                <Link to="perfil-mylifeisadrama.html" className="modal2-title-amigo">
                  MyLifeIsaDrama❀
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo7}
                  alt="Dark_Night☾"
                />
                <Link to="perfil-darknight.html" className="modal2-title-amigo">
                  Dark_Night☾
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo6}
                  alt="Kimchi_29🍥"
                />
                <Link to="perfil-kimchi.html" className="modal2-title-amigo">
                  Kimchi_29🍥
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Final del modal */}
        </div>
    );
};

export default ModalPersonasAmigos;