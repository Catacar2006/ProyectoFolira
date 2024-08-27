import React from "react";
import medala1_miperfil from "../static/icons/iniciar-sesion (1).png";
import medala2_miperfil from "../static/icons/social (1).png";

function MedallasPerfilUsuario() {
  return (
    <div>
      {/* medallas */}
      <div className="medallas-section-perfil-usuario">
        <h3 className="title-medalla-perfil-usuario">Medallas</h3>
        <div className="tipo-medalla-perfil-usuario">
          <span className="medalla-perfil-usuario">
            <img
              src={medala1_miperfil}
              alt="inicio-sesion"
              className="img-medalla-perfil-usuario"
            />
            Inicio de sesion
          </span>
          <span className="medalla-perfil-usuario">
            <img
              src={medala2_miperfil}
              alt="reseña"
              className="img-medalla-perfil-usuario"
            />
            Reseñas
          </span>
        </div>
      </div>
    </div>
  );
}

export default MedallasPerfilUsuario;
