import React from "react";
import medala1_miperfil from "../static/icons/iniciar-sesion (1).png";
import medala2_miperfil from "../static/icons/social (1).png";
import medala3_miperfil from "../static/icons/s4k6_pdjv_220810.jpg";

function MedallasPerfilUsuario() {
  return (
    <div>
      {/* medallas */}
      <div className="medallas-section-perfil-usuario">
        <h3 className="title-medalla-perfil-usuario">Medallas</h3>
        <div className="tipo-medalla-perfil-usuario">
          <span className="medalla-perfil-usuario">
          <button className="button-medalla-espacio-miperfil">
            <img
              src={medala1_miperfil}
              alt="Cerrar-sesion"
              className="img-medalla-perfil-usuario"
            />
            Cerrar sesion
            </button>
          </span>

          <span className="medalla-perfil-usuario">
          <button className="button-medalla-espacio-miperfil">
            <img
              src={medala2_miperfil}
              alt="reseña"
              className="img-medalla-perfil-usuario"
            />
            Reseñas
            </button>
          </span>

          <span className="medalla-perfil-usuario">
          <button className="button-medalla-espacio-miperfil">
            <img
              src={medala3_miperfil}
              alt="Mis-Medallas"
              className="img-medalla-perfil-usuario"
            />
            Mis Medallas
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MedallasPerfilUsuario;
