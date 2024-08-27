import React from "react";
import libro_reconocido1 from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg';
import libro_reconocido2 from '../static/img/Tres meses.jpeg';
import libro_reconocido3 from '../static/img/Ciudades De Fuego.jpeg';
import libro_reconocido4 from '../static/img/Después De Diciembre.jpeg';

function LibrosRecomendadosFichaAutor (){
    return(
        <div>
                <section className="recognized-recomendacion-ficha-autor">
            <h2 className="title-section-ficha-autor">Libros reconocidos</h2>
            <div className="recomendacion-libros-autor">
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido1}
                  alt="Ciudad de humo"
                />
                <p className="name-title-ficha-autor">Ciudad de humo</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido2}
                  alt="Tres meses"
                />
                <p className="name-title-ficha-autor">Tres meses</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido3}
                  alt="Ciudad de fuego"
                />
                <p className="name-title-ficha-autor">Ciudad de fuego</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido4}
                  alt="Después de diciembre"
                />
                <p className="name-title-ficha-autor">Después de diciembre</p>
              </div>
            </div>
          </section>
        </div>
    );
};

export default LibrosRecomendadosFichaAutor;