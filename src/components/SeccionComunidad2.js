import React from "react";
import comunidad6 from '../static/img/cp9.jpeg';
import comunidad8 from '../static/img/c4.jpg';
import comunidad9 from '../static/img/c5.jpg';
import comunidad11 from '../static/img/c7.jpg';

function SeccionComunidad2 (){
    return (
        <div>
            {/* otras comunidades */}
        <div>
          <h2 className="title-section-comunidad">Politico e historico</h2>
        </div>

        {/* contenido por fuera */}
        <div className="container-comunidad">
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad6} alt="" />
            <h5 className="title-comunidad">Un viaje al pasado</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad8} alt="" />
            <h5 className="title-comunidad">Lo bello de la antiguedad</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad9} alt="" />
            <h5 className="title-comunidad">¿Izquierda o Derecha?</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad6} alt="" />
            <h5 className="title-comunidad">El ayer, el hoy y el mañana</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad11} alt="" />
            <h5 className="title-comunidad">Épocas que cambiaron el hoy</h5>
          </div>
        </div>
        </div>
    );
}

export default SeccionComunidad2;