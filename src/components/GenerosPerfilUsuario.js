import React from "react";
import cuchillo_icon from "../static/icons/cuchillo.png";
import ciencia_ficcion_icon from "../static/icons/ciencia-ficcion.png";
import crecimiento_icon from "../static/icons/conectar-personas.png";
import corazon_icon from "../static/icons/corazon (1).png";
import comedia_icon from "../static/icons/comedia.png";

function GenerosPerfilUsuario() {
  return (
    <div>
      {/* generos favoritos */}
      <div className="generos-perfil-usuario">
        <h3 className="title-genero-perfil-usuario">Generos Favoritos</h3>
        <div className="tipo-generos-perfil-usuario">
          <span className="genero-perfil-usuario">
            <img
              src={cuchillo_icon}
              alt="Terror"
              className="img-genero-perfil-usuario"
            />
            Terror
          </span>
          <span className="genero-perfil-usuario">
            <img
              src={ciencia_ficcion_icon}
              alt="Ciencia Ficción"
              className="img-genero-perfil-usuario"
            />
            Ciencia Ficción
          </span>
          <span className="genero-perfil-usuario">
            <img
              src={crecimiento_icon}
              alt="Crecimiento Personal"
              className="img-genero-perfil-usuario"
            />
            Crecimeinto Personal
          </span>
          <span className="genero-perfil-usuario">
            <img
              src={corazon_icon}
              alt="Romance"
              className="img-genero-perfil-usuario"
            />
            Romance
          </span>
          <span className="genero-perfil-usuario">
            <img
              src={comedia_icon}
              alt="Comedia"
              className="img-genero-perfil-usuario"
            />
            Comedia
          </span>
        </div>
      </div>
    </div>
  );
}

export default GenerosPerfilUsuario;
