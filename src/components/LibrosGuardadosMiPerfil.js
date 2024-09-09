import React from "react";
import { Link } from "react-router-dom";

import libro1_mi_perfil from "../static/img/23 Otoños Antes De Ti.jpg";
import libro2_mi_perfil from "../static/img/Bajo la misma estrella.jpeg";
import libro3_mi_perfil from "../static/img/BRUJA BLANCA, LA ASESINO DE BRUJAS 1.jpg";
import libro4_mi_perfil from "../static/img/Ciudades De Fuego.jpeg";
import libro5_mi_perfil from "../static/img/Yo antes de ti.jpg";
import libro6_mi_perfil from "../static/img/Tres meses.jpeg";

function LibrosGuardadosMiPerfil() {
  return (
    <div>
      {/* SECCION DE LOS LIBRO GUARDADOS */}
      <div className="libros-aguardados-miperfil">
        {/* boton de ver mas */}
        <h3 className="seccion-title-libro-miperfil">Libros Guardados</h3>
        <div className="seccion-libro-miperfil">
          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro1_mi_perfil}
                alt="23 otoños antes de ti"
                className="img-libro-miperfil"
              />
            </div>
          </Link>

          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro2_mi_perfil}
                alt="bajo la misma estrella"
                className="img-libro-miperfil"
              />
            </div>
          </Link>

          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro3_mi_perfil}
                alt="El asesino de brujas"
                className="img-libro-miperfil"
              />
            </div>
          </Link>

          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro4_mi_perfil}
                alt="ciudades de fuego"
                className="img-libro-miperfil"
              />
            </div>
          </Link>

          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro5_mi_perfil}
                alt="yo anets de ti"
                className="img-libro-miperfil"
              />
            </div>
          </Link>

          <Link to="/FichaLibro">
            <div className="foto-libro-miperfil">
              <img
                src={libro6_mi_perfil}
                alt="Tres meses"
                className="img-libro-miperfil"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LibrosGuardadosMiPerfil;
