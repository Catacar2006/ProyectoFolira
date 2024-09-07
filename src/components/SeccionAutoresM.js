import React from "react";
import autor6 from "../static/img/Shakespeare.jpg";
import autor7 from "../static/img/(Dante Alighieri).jpg";
import autor8 from "../static/img/Sophocles.jpg";
import autor9 from "../static/img/Miguel de Cervantes Saavedra.jpeg";
import autor10 from "../static/img/Luis de Góngora.jpg";
import { Link } from "react-router-dom";

function SeccionAutoresM() {
  return (
    <div>
      <div>
        <h2 class="title-section-feedautores">Medieval y Renacimiento</h2>
      </div>
      <div className="container-autores">
        <div className="autor">
          <Link>
          <img className="img-autor" src={autor6} alt="autor6" />
          </Link>

          <Link to="" className="title-autor">
          William Shakespeare
          </Link>

        </div>
        <div className="autor">
          <Link>
          <img className="img-autor" src={autor7} alt="autor7" />
          </Link>
          
          <Link to="" className="title-autor">
          Dante Alighieri
          </Link>

        </div>
        <div className="autor">
          <Link>
          <img className="img-autor" src={autor8} alt="autor8" />
          </Link>
          
          <Link to="" className="title-autor">
          Socrates
          </Link>

        </div>
        <div className="autor">
          <Link>
          <img className="img-autor" src={autor9} alt="autor9" />
          </Link>
          
          <Link ti="" className="title-autor">
          Miguel de Cervantes
          </Link>

        </div>
        <div className="autor">
          <Link>
          <img className="img-autor" src={autor10} alt="autor10" />
          </Link>
          
          <Link to="" className="title-autor">
          Luis de Góngora
          </Link>

        </div>
      </div>
    </div>
  );
}

export default SeccionAutoresM;
