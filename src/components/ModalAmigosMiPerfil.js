import React from "react";
import { Link } from "react-router-dom";
import foto_usua1_miperfil from "../static/img/cp7.jpg";
import foto_usua2_miperfil from "../static/img/cp8.jpeg";
import foto_usua3_miperfil from "../static/img/cp9.jpeg";

function ModalAmigosMiPerfil () {
    return(
        <div>
            {/* modal de amigos */}
          <div id="modal-amigos-miperfil" className="modal-amigos-miperfil">
            <div className="modal-content-amigos-miperfil">
              <div className="modal-header-amigos-miperfil">
                <h2 className="modal-title-amigos-miperfil">Amigos</h2>
                <Link to="#" className="modal-close-amigos-miperfil">
                  ×
                </Link>
              </div>
              <div className="modal-amigos-container-amigos-miperfil">
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua1_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">Alex_㋛</Link>
                </div>
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua2_miperfil}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">Emma_✩</Link>
                </div>
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua3_miperfil}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">John_★</Link>
                </div>
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua1_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">Alex_㋛</Link>
                </div>
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua2_miperfil}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">Emma_✩</Link>
                </div>
                <div className="modal-amigos-amigos-miperfil">
                  <img
                    className="modal-img-amigo-amigos-miperfil"
                    src={foto_usua3_miperfil}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-amigo-amigos-miperfil">John_★</Link>
                </div>
              </div>
            </div>
          </div>
          {/* final de modal de amigos */}
        </div>
    );
};

export default ModalAmigosMiPerfil;