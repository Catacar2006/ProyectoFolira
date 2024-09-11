import React from "react";

function AreaTextoBotonFichaLibro() {
  return (
    <div>
      <div className="book-reviews-ficha-libro">
        <textarea
          className="area-text-ficha-libro"
          placeholder="Escribe tu reseña aquí.."
          defaultValue={""}
        />
        <button className="boton-enviar-ficha">Enviar</button>
        {/* ver mas reseñas */}
        
      </div>
    </div>
  );
}

export default AreaTextoBotonFichaLibro;
