import React from "react";
import flecha_baja from '../static/icons/flechita abajo.png';

function LocacionFichaLibro (){
    return(
        <div>
            <div className="ficha-libro-locations">
            <p className="text-location-libro">
              <strong>Lo puedes encontrar en:</strong>
            </p>
            <div className="locations-list-ficha-libro">
              <div className="location-item-ficha-libro">
                <p className="store-ficha-libro">Bibliotecas virtuales</p>
                <img
                  className="img-flecha-libro"
                  src={flecha_baja}
                  alt="flechita abajo"
                />
              </div>
              <div className="location-item-ficha-libro">
                <p className="store-ficha-libro">Bibliotecas físicas</p>
                <img
                  className="img-flecha-libro"
                  src={flecha_baja}
                  alt="flechita abajo"
                />
              </div>
            </div>
          </div>
        </div>
    );
};

export default LocacionFichaLibro;