import React from "react";
import { Link } from "react-router-dom";
import comunidad7 from "../static/img/cp7.jpg";
import comunidad2 from "../static/img/cp8.jpeg";
import comunidad12 from "../static/img/c8.jpg";
import comunidad3 from "../static/img/C1.jpg";
import comunidad4 from "../static/img/c2.jpg";

function  SeccionComunidad1() {
  return (
    <div>
      <div>
        <h2 className="title-section-comunidad">
          Comunidades que te interesen
        </h2>
      </div>
      <div className="container-comunidad">
        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad7} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          Los inestables
          </Link>
        </div>

        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad2} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          Un escape del mundo real
          </Link>
        </div>

        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad12} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          Yo no supero, tu no superas
          </Link>
        </div>

        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad3} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          My life are the books
          </Link>
        </div>

        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad4} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          My Life is pretty
          </Link>
        </div>

        <div className="comunidades">
          <Link>
          <img className="img-comunidad" src={comunidad2} alt="" />
          </Link>

          <Link to="" className="title-comunidad">
          Un escape del mundo real
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default SeccionComunidad1;
