import React from "react";
import autor6 from "../static/img/Shakespeare.jpg";
import autor7 from "../static/img/(Dante Alighieri).jpg";
import autor8 from "../static/img/Sophocles.jpg";
import autor9 from "../static/img/Miguel de Cervantes Saavedra.jpeg";
import autor10 from "../static/img/Luis de Góngora.jpg";

function SeccionAutoresM() {
  return (
    <div>
      <div>
        <h2 class="title-section-feedautores">Medieval y Renacimiento</h2>
      </div>
      <div className="container-autores">
        <div className="autor">
          <img className="img-autor" src={autor6} alt="autor6" />
          <h5 className="title-autor">William Shakespeare</h5>
        </div>
        <div className="autor">
          <img className="img-autor" src={autor7} alt="autor7" />
          <h5 className="title-autor">Dante Alighieri</h5>
        </div>
        <div className="autor">
          <img className="img-autor" src={autor8} alt="autor8" />
          <h5 className="title-autor">Socrates</h5>
        </div>
        <div className="autor">
          <img className="img-autor" src={autor9} alt="autor9" />
          <h5 className="title-autor">Miguel de Cervantes </h5>
        </div>
        <div className="autor">
          <img className="img-autor" src={autor10} alt="autor10" />
          <h5 className="title-autor">Luis de Góngora</h5>
        </div>
      </div>
    </div>
  );
}

export default SeccionAutoresM;
