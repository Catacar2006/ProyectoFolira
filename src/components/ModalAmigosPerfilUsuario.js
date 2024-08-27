import React from "react";
import { Link } from "react-router-dom";
import foto_usua1_perfilUsua from "../static/img/cp7.jpg";
import foto_usua2_perfilUsua from "../static/img/cp8.jpeg";
import foto_usua3_perfilUsua from "../static/img/cp9.jpeg";

function ModalAMigosPerfilUsua (){
    return(
        <div>
            
          {/* modal de los amigos */}
          <div id="modal-amigos-perfilUsua" className="modal-amigos-perfilUsua">
            <div className="modal-content-amigos-perfilUsua">
              <div className="modal-header-amigos-perfilUsua">
                <h2 className="modal-title-amigos-perfilUsua">Amigos</h2>
                <Link to="#" className="modal-close-amigos-perfilUsua">
                  ×
                </Link>
              </div>
              <div className="modal-amigos-container-amigos-perfilUsua">
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua1_perfilUsua}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua2_perfilUsua}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua3_perfilUsua}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    John_★
                  </Link>
                </div>
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua1_perfilUsua}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua2_perfilUsua}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-foto-amigo-perfilUsua">
                  <img
                    className="modal-img-amigo-perfilUsua"
                    src={foto_usua3_perfilUsua}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-usuar-perfilUsua">
                    John_★
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ModalAMigosPerfilUsua;