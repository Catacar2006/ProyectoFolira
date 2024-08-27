import React from "react";
import medala1_miperfil from "../static/icons/iniciar-sesion (1).png";
import medala2_miperfil from "../static/icons/social (1).png";

function MedallasMiPerfil (){
    return(
        <div>
              {/* medallas */}
          <div className="medallas-miperfil">
            <h3 className="name-medalla-miperfil">Medallas</h3>
            <div className="tipo-medalla-miperfil">
              <span className="medalla-espacio-miperfil">
                <img
                  src={medala1_miperfil}
                  alt="inicio-sesion"
                  className="img-medall-miperfil"
                />
                Inicio de sesion
              </span>
              <span className="medalla-espacio-miperfil">
                <img
                  src={medala2_miperfil}
                  alt="reseña"
                  className="img-medall-miperfil"
                />
                Reseñas
              </span>
            </div>
          </div>
        </div>
    );
};

export default MedallasMiPerfil;