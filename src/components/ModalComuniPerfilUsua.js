import React from "react";
import foto_comunidad1_miperfil from "../static/img/c2.jpg";
import foto_comunidad2_miperfil from "../static/img/c3.jpg";
import foto_comunidad3_miperfil from "../static/img/c4.jpg";
import foto_comunidad4_miperfil from "../static/img/c5.jpg";
import foto_comunidad5_miperfil from "../static/img/c6.jpg";
import foto_comunidad6_miperfil from "../static/img/c7.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function ModalComuniPerfilUsua() {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <div>
          {/* Inicio modal comunidades */}
          <div
            id="modal-comunidades-perfilUsua"
            className="modal-comunidades-perfilUsua"
          >
            <div className="modal-content-comunidades-perfilUsua">
              <div className="modal-header-comunidades-perfilUsua">
                <h2 className="modal-title-comunidades-perfilUsua">
                  Comunidades
                </h2>
                <Link
                  to="#"
                  onClick={closeModal}
                  className="modal-close-comunidades-perfilUsua"
                >
                  ×
                </Link>
              </div>
              <div className="modal-comunidades-container-comunidades-perfilUsua">
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad1_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad2_miperfil}
                    alt="Emma_✩"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad3_miperfil}
                    alt="John_★"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    John_★
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad4_miperfil}
                    alt="Alex_㋛"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    Alex_㋛
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad5_miperfil}
                    alt="Emma_✩"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    Emma_✩
                  </Link>
                </div>
                <div className="modal-comunidad-comunidades-perfilUsua">
                  <img
                    className="modal-img-comunidad-comunidades-perfilUsua"
                    src={foto_comunidad6_miperfil}
                    alt="John_★"
                  />
                  <Link
                    to="#"
                    className="modal-name-comunidad-comunidades-perfilUsua"
                  >
                    John_★
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* final de modal de comunidades */}
        </div>
      )}
    </>
  );
}

export default ModalComuniPerfilUsua;
