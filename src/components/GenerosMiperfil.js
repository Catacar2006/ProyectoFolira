import React from "react";
import fantasia_icon from "../static/icons/fantasia.png";
import ciencia_ficcion_icon from "../static/icons/ciencia-ficcion.png";
import misterio_icon from "../static/icons/anonimo.png";
import comedia_icon from "../static/icons/comedia.png";
import corazon_icon from "../static/icons/corazon (1).png";

function GenerosMiPerfil (){
    return(
        <div>
            {/* generos favoritos */}
          <div className="generos-miperfil">
            <h3 className="title-generos-miperfil">Generos Favoritos</h3>
            <div className="tipo-generos-miperfil">
              <span className="genero-miperfil">
                <img
                  src={fantasia_icon}
                  alt="Fantasía"
                  className="img-genero-miperfil"
                />
                Fantasía
              </span>
              <span className="genero-miperfil">
                <img
                  src={ciencia_ficcion_icon}
                  alt="Ciencia Ficción"
                  className="img-genero-miperfil"
                />
                Ciencia Ficción
              </span>
              <span className="genero-miperfil">
                <img
                  src={misterio_icon}
                  alt="Misterio"
                  className="img-genero-miperfil"
                />
                Misterio
              </span>
              <span className="genero-miperfil">
                <img
                  src={corazon_icon}
                  alt="Romance"
                  className="img-genero-miperfil"
                />
                Romance
              </span>
              <span className="genero-miperfil">
                <img
                  src={comedia_icon}
                  alt="Comedia"
                  className="img-genero-miperfil"
                />
                Comedia
              </span>
            </div>
          </div>
        </div>
    );
};

export default GenerosMiPerfil;