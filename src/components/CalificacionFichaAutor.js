import React from "react";
import corazon_icon_fa from '../static/icons/corazon (1).png';
import disgusto_icon_fa from '../static/icons/disgusto.png';


function CalificacionFichaAutor (){
    return(
        <div>
             <div className="gustos-container-ficha-autor">
            <div>
              <button className="gustos-boton-ficha-autor">
                <img
                  className="img-gusto-ficha-autor"
                  src={corazon_icon_fa}
                  alt="Corazón"
                />
              </button>
            </div>
            <div>
              <button className="gustos-boton-ficha-autor">
                <img
                  className="img-gusto-ficha-autor"
                  src={disgusto_icon_fa}
                  alt="Disgusto"
                />
              </button>
            </div>
          </div>
        </div>
    );
};

export default CalificacionFichaAutor;