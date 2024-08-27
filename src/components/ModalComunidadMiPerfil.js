import React from "react";
import { Link } from "react-router-dom";

import foto_comunidad1_miperfil from "../static/img/c2.jpg";
import foto_comunidad2_miperfil from "../static/img/c3.jpg";
import foto_comunidad3_miperfil from "../static/img/c4.jpg";
import foto_comunidad4_miperfil from "../static/img/c5.jpg";
import foto_comunidad5_miperfil from "../static/img/c6.jpg";
import foto_comunidad6_miperfil from "../static/img/c7.jpg";

function ModalComunidadMiPerfil() {
    return(
        <div>
            {/* Inicio modal comunidades */}
          <div
            id="modal-comunidades-miperfil"
            className="modal-comunidades-miperfil"
          >
            <div className="modal-content-comunidades-miperfil">
              <div className="modal-header-comunidades-miperfil">
                <h2 className="modal-title-comunidades-miperfil">
                  Comunidades
                </h2>
                <Link to="#" className="modal-close-comunidades-miperfil">
                  ×
                </Link>
              </div>
              <div className="modal-comunidades-container-comunidades-miperfil">
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad1_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad2_miperfil}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad3_miperfil}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    John_★
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad4_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad5_miperfil}
                    alt="Emma_✩"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-miperfil">
                  <img
                    className="modal-img-comunidad-comunidades-miperfil"
                    src={foto_comunidad6_miperfil}
                    alt="John_★"
                  />
                  <Link to="#" className="modal-name-comunidad-comunidades-miperfil">
                    John_★
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* final de modal de comunidades */}
        </div>
    );
};

export default ModalComunidadMiPerfil;