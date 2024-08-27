import React from "react";
import libro1_mi_perfil from '../static/img/23 Otoños Antes De Ti.jpg';
import libro2_mi_perfil from '../static/img/Bajo la misma estrella.jpeg';
import libro3_mi_perfil from '../static/img/BRUJA BLANCA, LA ASESINO DE BRUJAS 1.jpg';
import libro4_mi_perfil from '../static/img/Ciudades De Fuego.jpeg';
import libro5_mi_perfil from '../static/img/Yo antes de ti.jpg';
import libro6_mi_perfil from '../static/img/Tres meses.jpeg';
import { Link } from "react-router-dom";

function ModalLibroosMiPerfil (){
    return(
        <div>
            {/* INICIO MODAL DE LOS LIBRIOS */}
          <div
            id="modal-libro-miperfil"
            className="modal-overlay-libro-miperfil"
          >
            <div className="modal-content-libro-miperfil">
              <div className="modal-header-libro-miperfil">
                <Link to="#" className="modal-close-libro-miperfil">
                  ×
                </Link>
                <h3 className="modal-title-libro-miperfil">Libros Guardados</h3>
              </div>
              <div className="modal-books-container-libro-miperfil">
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro1_mi_perfil}
                    alt="23 otoños antes de ti"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title-libro-miperfil">
                    23 otoños antes de ti
                  </Link>
                </div>
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro2_mi_perfil}
                    alt="bajo la misma estrella"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title">Bajo la misma estrella</Link>
                </div>
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro3_mi_perfil}
                    alt="El asesino de brujas"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title-libro-miperfil">
                    Bruja blanca, el asesino de brujas
                  </Link>
                </div>
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro4_mi_perfil}
                    alt="ciudades de fuego"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title-libro-miperfil">
                    Ciudades de fuego
                  </Link>
                </div>
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro5_mi_perfil}
                    alt="yo antes de ti"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title-libro-miperfil">
                    Yo antes de ti
                  </Link>
                </div>
                <div className="modal-book-item-libro-miperfil">
                  <img
                    src={libro6_mi_perfil}
                    alt="Tres meses"
                    className="modal-book-img-libro-miperfil"
                  />
                  <Link to="#" className="modal-book-title-libro-miperfil">Tres meses</Link>
                </div>
              </div>
            </div>
          </div>
          {/* FINAL DEL MODLA DE LOS LIBROS */}

        </div>
    );
};

export default ModalLibroosMiPerfil;