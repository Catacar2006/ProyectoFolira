import React from "react";
import foto_usua1_perfilUsua from "../static/img/cp7.jpg";
import foto_usua2_perfilUsua from "../static/img/cp8.jpeg";
import foto_usua3_perfilUsua from "../static/img/cp9.jpeg";

function SeccionAmigosPerfilUsua (){
    return(
        <div>
            {/* Seccion de amigos */}
          <div className="amigos-perfil-usuario">
          
            <h3 className="seccion-title-perfil-usuario">Amigos</h3>
            <div className="seccion-amigos-perfil-usuario">
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua1_perfilUsua}
                  alt="Alex_㋛"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">Alex_㋛</p>
              </div>
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua2_perfilUsua}
                  alt="Emma_✩"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">Emma_✩</p>
              </div>
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua3_perfilUsua}
                  alt="John_★"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">John_★</p>
              </div>
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua1_perfilUsua}
                  alt="Alex_㋛"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">Alex_㋛</p>
              </div>
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua2_perfilUsua}
                  alt="Emma_✩"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">Emma_✩</p>
              </div>
              <div className="foto-amigo-perfil-usuario">
                <img
                  src={foto_usua3_perfilUsua}
                  alt="John_★"
                  className="img-amigo-perfil-usuario"
                />
                <p className="name-usuar-perfil-usuario">John_★</p>
              </div>
            </div>
          </div>
        </div>
    );  
};

export default SeccionAmigosPerfilUsua;