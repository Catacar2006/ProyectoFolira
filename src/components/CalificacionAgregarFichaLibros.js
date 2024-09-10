import React from "react";
import corazon_icon_fa from "../static/icons/corazon (1).png";
import disgusto_icon_fa from "../static/icons/disgusto.png";
import añadir_fl from "../static/icons/añadir.png";

function CalificarAgregarFichaLibro() {
  return (
    <div>
      <div className="gustos-container-ficha-libro">
        <div className="div-gustos">
          <button className="gustos-boton">
            <img
              className="img-boton-gusto"
              src={corazon_icon_fa}
              alt="Corazón"
            />
          </button>
        </div>
        <div className="div-gustos">
          <button className="gustos-boton">
            <img
              className="img-boton-gusto"
              src={disgusto_icon_fa}
              alt="Disgusto"
            />
          </button>
        </div>
        <div className="div-agregar-libro">
          <button className="agregar-boton">
            <img
              className="img-boton-agregar"
              src={añadir_fl}
              alt="Disgusto"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalificarAgregarFichaLibro;
