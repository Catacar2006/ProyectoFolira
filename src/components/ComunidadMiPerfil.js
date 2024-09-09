import React from "react";
import foto_comunidad1_miperfil from "../static/img/c2.jpg";
import foto_comunidad2_miperfil from "../static/img/c3.jpg";
import foto_comunidad3_miperfil from "../static/img/c4.jpg";
import foto_comunidad4_miperfil from "../static/img/c5.jpg";
import foto_comunidad5_miperfil from "../static/img/c6.jpg";
import foto_comunidad6_miperfil from "../static/img/c7.jpg";
import { Link } from "react-router-dom";


function ComunidadMiPerfil (){
    return(
        <div>
            {/* Comunidades */}
          <div className="comunidades-miperfil">
            {/* boton de ver mas */}
            <h3 className="seccion-title-comunidades-miperfil">Comunidades</h3>
            <div className="seccion-comunidad-miperfil">
              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad1_miperfil}
                  alt="Alex_㋛"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">Alex_㋛</p>
              </div>
              </Link>

              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad2_miperfil}
                  alt="Emma_✩"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">Emma_✩</p>
              </div>
              </Link>
              
              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad3_miperfil}
                  alt="John_★"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">John_★</p>
              </div>
              </Link>

              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad4_miperfil}
                  alt="Alex_㋛"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">Alex_㋛</p>
              </div>
              </Link>
              
              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad5_miperfil}
                  alt="Emma_✩"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">Emma_✩</p>
              </div>
              </Link>
              
              <Link>
              <div className="foto-comunidad-miperfil">
                <img
                  src={foto_comunidad6_miperfil}
                  alt="John_★"
                  className="img-comunidad-miperfil"
                />
                <p className="name-comunidad-miperfil">John_★</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default ComunidadMiPerfil;