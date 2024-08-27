import React from "react";

function AreaTextoBotonFichaLibro (){
    return(
        <div>
            {/* area de texto */}

            <div className="text-area-boton-enviar">
              <textarea
                className="area-text-ficha-libro"
                placeholder="Escribe tu reseña aquí.."
                defaultValue={""}
              />
              <button className="boton-enviar-ficha">Enviar</button>
            </div>
        </div>
    );
};

export default AreaTextoBotonFichaLibro;