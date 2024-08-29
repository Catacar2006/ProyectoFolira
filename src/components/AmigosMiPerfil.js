import React from "react";
import { Link } from "react-router-dom";
import foto_usua1_miperfil from "../static/img/cp7.jpg";
import foto_usua2_miperfil from "../static/img/cp8.jpeg";
import foto_usua3_miperfil from "../static/img/cp9.jpeg";

function AmigosMiPerfil () {
    return(
        <div>
             {/* Seccion de amigos */}
          <div className="amigos-miperfil">
            {/* boton de ver mas */}
            <h3 className="seccion-title-amigos-miperfil">Amigos</h3>
            <div className="seccion-amigos-miperfil">
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">Alex_㋛</p>
              </div>
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">Emma_✩</p>
              </div>
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua3_miperfil}
                  alt="John_★"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">John_★</p>
              </div>
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua1_miperfil}
                  alt="Alex_㋛"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">Alex_㋛</p>
              </div>
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua2_miperfil}
                  alt="Emma_✩"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">Emma_✩</p>
              </div>
              <div className="foto-amigo-miperfil">
                <img
                  src={foto_usua3_miperfil}
                  alt="John_★"
                  className="img-amigos-miperfil"
                />
                <p className="name-amigo-miperfil">John_★</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AmigosMiPerfil;