import React from "react";
import img_libro_ficha_libro from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg';
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';

function DescripcionFichaLibro (){
    return(
       <div>
        <div className="infor-ficha-libro">
            <div className="libro-ficha-cover">
              <img
                className="img-ficha-libro"
                src={img_libro_ficha_libro}
                alt="Ciudad de humo"
              />
            </div>
            <div className="ficha-libro-details">
              <p className="text-details-ficha-libro">
                <strong style={{ color: "#503B31" }}>Nombre:</strong> Ciudades
                de humo
              </p>
              <p className="text-details-ficha-libro">
                <strong style={{ color: "#503B31" }}>Autor:</strong> Joana
                Marcús
              </p>
              <p className="text-details-ficha-libro">
                <strong style={{ color: "#503B31" }}>Categoría:</strong>{" "}
                Fantasía, Romance, Aventura y Drama
              </p>
              <div className="container-sinopsis-ficha-libro">
                <section className="sinopsis-libro-ficha">
                  <p>
                    <strong style={{ color: "#503B31" }}>Sinopsis:</strong>
                  </p>
                  <p className="parrafo-ficha-libro">
                    Alice nunca ha salido al mundo. Su cena es a las nueve en
                    punto, su sueño dura exactamente ocho horas, jamás tiene una
                    sola arruga en la ropa, parpadea 86400 veces al día, respira
                    30000 veces al día, solo habla cuando le preguntan, jamás ha
                    levantado la voz y, lo más importante, jamás se ha
                    preguntado qué pasaría si todo cambiara.
                  </p>
                  <p className="parrafo-ficha-libro">
                    Pero, ¿y si eso ocurriera? En un mundo donde la libertad
                    está controlada, ¿Hasta dónde serías capaz de llegar para
                    recuperarla? ¿Hasta dónde serías capaz de llegar para
                    sobrevivir?
                  </p>
                </section>
              </div>
              <p className="text-details-ficha-libro">
                <strong style={{ color: "#503B31" }}>Serie:</strong> Trilogía
                Fuego
              </p>
              <p className="text-details-ficha-libro">
                <strong style={{ color: "#503B31" }}>ISBN:</strong>{" "}
                978-84-08-25185-9
              </p>
              <p>
                <strong style={{ color: "#503B31" }}>Calificación:</strong>
                <span className="rating-ficha-libro">
                  <img
                    className="puntaje-ficha-libro"
                    src={estrella_rellena_icon} 
                    alt="estrella_rellena_icon" 
                  />
                  <img
                    className="puntaje-ficha-libro"
                    src={estrella_rellena_icon} 
                    alt="estrella_rellena_icon" 
                  />
                  <img
                    className="puntaje-ficha-libro"
                    src={estrella_rellena_icon} 
                    alt="estrella_rellena_icon" 
                  />
                  <img
                    className="puntaje-ficha-libro"
                    src={estrella_rellena_icon} 
                    alt="estrella_rellena_icon" 
                  />
                  <img
                    className="puntaje-ficha-libro"
                    src={estrella_medio_icon}
                    alt="estrella_medio_icon"
                  />
                </span>
              </p>
            </div>
          </div>
       </div>
    );
};

export default DescripcionFichaLibro;