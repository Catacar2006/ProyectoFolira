import React from "react";
import { Link } from "react-router-dom";
import foto_comunidad1_miperfil from "../static/img/c2.jpg";
import foto_comunidad2_miperfil from "../static/img/c3.jpg";
import foto_comunidad3_miperfil from "../static/img/c4.jpg";
import foto_comunidad4_miperfil from "../static/img/c5.jpg";
import foto_comunidad5_miperfil from "../static/img/c6.jpg";
import foto_comunidad6_miperfil from "../static/img/c7.jpg";


function SeccionComuniPerfilUsua () {



    return (
        
        <div>
            {/* Comunidades */}
          <div className="comunidades-perfil-usuario">
            {/* boton de ver mas */}
            <h3 className="seccion-title-perfil-usuario">Comunidades</h3>
            <div className="seccion-comunidad-perfil-usuario">
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad1_miperfil}
                  alt="Alex_㋛"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">Alex_㋛</p>
              </div>
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad2_miperfil}
                  alt="Emma_✩"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">Emma_✩</p>
              </div>
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad3_miperfil}
                  alt="John_★"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">John_★</p>
              </div>
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad4_miperfil}
                  alt="Alex_㋛"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">Alex_㋛</p>
              </div>
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad5_miperfil}
                  alt="Emma_✩"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">Emma_✩</p>
              </div>
              <div className="foto-comunidad-perfil-usuario">
                <img
                  src={foto_comunidad6_miperfil}
                  alt="John_★"
                  className="img-comunidad-perfil-usuario"
                />
                <p className="name-comuni-perfil-usuario">John_★</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SeccionComuniPerfilUsua;