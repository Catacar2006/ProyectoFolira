import React from "react";
import modal1_foto_amigo from "../static/img/foto-ami.jpeg";
import modal1_foto_amigo2 from "../static/img/Foto_amigo.jpeg";
import modal1_foto_amigo3 from "../static/img/dp6.jpeg";
import modal1_foto_amigo4 from "../static/img/dp3.jpg";
import modal1_foto_amigo5 from "../static/img/dp5.jpeg";
import { Link } from "react-router-dom";

function ModalTusAmigosFeed () {
    return(
        <div>
            {/* Comienzo modal 1 */}
        <Link to="#modal1" className="ver-mas">
          ver más
        </Link>
        {/* Modal 1 */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <Link to="#" className="close-amigo">
              ×
            </Link>
            <h2 className="title-modal">TUS AMIGOS</h2>
            <div className="modal-amigos-container">
              {/* Reemplaza "#" con la URL del perfil de cada amigo */}
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo}
                  alt="JackRoss^.^"
                />
                <Link href="perfil-jackross.html" className="modal-title-amigo">
                  JackRoss^.^
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo2}
                  alt="ottoke_ottoke♡"
                />
                <Link to="perfil-ottoke.html" className="modal-title-amigo">
                  ottoke_ottoke♡
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo3}
                  alt="Art15_☆"
                />
                <Link to="perfil-art15.html" className="modal-title-amigo">
                  Art15_☆
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo4}
                  alt="Taylor2.0✶"
                />
                <Link to="perfil-taylor.html" className="modal-title-amigo">
                  Taylor2.0✶
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo5}
                  alt="Wonwoo_♥"
                />
                <Link to="perfil-wonwoo.html" className="modal-title-amigo">
                  Wonwoo_♥
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo}
                  alt="JackRoss^.^"
                />
                <Link to="perfil-jackross.html" className="modal-title-amigo">
                  JackRoss^.^
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo2}
                  alt="ottoke_ottoke♡"
                />
                <Link to="perfil-ottoke.html" className="modal-title-amigo">
                  ottoke_ottoke♡
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo3}
                  alt="Art15_☆"
                />
                <Link to="perfil-art15.html" className="modal-title-amigo">
                  Art15_☆
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo4}
                  alt="Taylor2.0✶"
                />
                <Link to="perfil-taylor.html" className="modal-title-amigo">
                  Taylor2.0✶
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo5}
                  alt="Wonwoo_♥"
                />
                <Link to="perfil-wonwoo.html" className="modal-title-amigo">
                  Wonwoo_♥
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Fin modal 1 */}
        </div>
    );
};

export default ModalTusAmigosFeed;