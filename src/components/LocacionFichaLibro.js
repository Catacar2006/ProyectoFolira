import React from "react";
import flecha_baja from "../static/icons/flechita abajo.png";

function LocacionFichaLibro() {
  return (
    <div>
      <div class="ficha-libro-locations">
        <p class="text-location-libro">
          <strong>Lo puedes encontrar en:</strong>
        </p>
        <div class="locations-list-ficha-libro">
          <div class="location-item-ficha-libro">
            <p class="store-ficha-libro">Bibliotecas virtuales</p>
            <img
              class="img-flecha-libro"
              src={flecha_baja}
              alt="flechita abajo"
            />
          </div>

          <div class="location-item-ficha-libro">
            <p class="store-ficha-libro">Bibliotecas físicas</p>
            <img
              class="img-flecha-libro"
              src={flecha_baja}
              alt="flechita abajo"
            />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default LocacionFichaLibro;
