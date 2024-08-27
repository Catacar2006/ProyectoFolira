import React from "react";
import banner_perfilusuartio from "../static/img/banner_usua.jpeg";
import foto_perfilusua from "../static/img/dp4.jpeg";

function BannerFotoPerfilUsua (){
    return(
        <div>
             <div className="banner-container-perfil-usuario">
            <div className="banner-perfil-usuario">
              <img
                src={banner_perfilusuartio}
                alt="Banner_usua"
                className="banner-image-perfil-usuario"
              />
              <div className="foto-usuario-perfil-usuario">
                <img
                  src={foto_perfilusua}
                  alt="Foto_usua_perfil"
                  className="profile-photo-perfil-usuario"
                />
                <h4 className="name-usua-perfil-usuario">Moon🌝✨</h4>
                <button className="editar-btn-perfil-usuario">
                  Seguir
                </button>{" "}
                {/* Botón Editar */}
              </div>
            </div>
          </div>
        </div>
    );
};

export default BannerFotoPerfilUsua;