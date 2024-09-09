import React from "react";
import comunidad7 from "../static/img/cp7.jpg";
import comunidad2 from "../static/img/cp8.jpeg";
import comunidad12 from "../static/img/c8.jpg";
import comunidad4 from "../static/img/c2.jpg";
import { Link } from "react-router-dom";

function SeccionComunidad2() {
  return (
    <div>
      {/* otras comunidades */}
      <div>
            <h3 class="title-tus-comunidad">Tus Comunidades</h3>
      </div>

      {/* contenido por fuera */}
      <div className="tusComunidadesFeed">
        
        <div className="tus-comunidades">
        <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad7} alt="" />
          </Link>
          
          <Link to="/FichaAutor" className="tus-title-comunidad">
          Un viaje al pasado
          </Link>
        </div>

        <div className="tus-comunidades">
        <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad2} alt="" />
          </Link>

          <Link to="/FichaAutor" className="tus-title-comunidad">
          Lo bello de la antiguedad
          </Link>
        </div>

        <div className="tus-comunidades">
        <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad12} alt="" />
          </Link>

          <Link to="/FichaAutor" className="tus-title-comunidad">
          ¿Izquierda o Derecha?
          </Link>
        </div>

        <div className="tus-comunidades">
        <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad4} alt="" />
          </Link>

          <Link to="/FichaAutor" className="tus-title-comunidad">
          El ayer, el hoy y el mañana
          </Link>
        </div>

        <div className="tus-comunidades">
        <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad2} alt="" />
          </Link>

          <Link to="/FichaAutor" className="tus-title-comunidad">
          Épocas que cambiaron el hoy
          </Link>
        </div>

        <div className="tus-comunidades">
          <Link to="/FichaAutor">
          <img className="tus-img-comunidad" src={comunidad2} alt="" />
          </Link>
          <Link to="/FichaAutor" className="tus-title-comunidad">
          Lo bello de la antiguedad
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SeccionComunidad2;
