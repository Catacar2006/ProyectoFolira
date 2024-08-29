import React from "react";
import banner_miperfil from "../static/img/banner_usua3.jpeg";
import foto_miperfil from "../static/img/F_Usu.jpg";



function Miperfilbanner({ onEditClick }) {
  return (
    <div>
      {/* Banner y foto usuario */}
      <div className="banner-container-miperfil">
        <div className="banner-miperfil">
          <img
            src={banner_miperfil}
            alt="Banner"
            className="banner-image-miperfil"
          />
          <div className="foto-usuario-miperfil">
            <img
              src={foto_miperfil}
              alt="fot_usua"
              className="profile-photo-miperfil"
            />
            <h4 className="name-miperfil">Jeonghan_4🫶🏼</h4>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miperfilbanner;