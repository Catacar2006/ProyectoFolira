import React from "react";
import libro_reconocido1 from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg';
import libro_reconocido2 from '../static/img/Tres meses.jpeg';
import libro_reconocido3 from '../static/img/Ciudades De Fuego.jpeg';
import libro_reconocido4 from '../static/img/Después De Diciembre.jpeg';
import { Link } from "react-router-dom";

function LibrosRecomendadosFichaAutor (){
    return(
        <div>
                <section className="recognized-recomendacion-ficha-autor">
            <h2 className="title-section-ficha-autor">Libros reconocidos</h2>
            <div className="recomendacion-libros-autor">
              <div className="libros-ficha-autores">
              <Link to="/FichaLibro">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido1}
                  alt="Ciudad de humo"
                />
                </Link>

                <Link to="" className="name-title-ficha-autor">
                Ciudad de humo
                </Link>
              </div>

              <div className="libros-ficha-autores">
                <Link>
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido2}
                  alt="Tres meses"
                />
                </Link>

                <Link to="" className="name-title-ficha-autor">
                Tres meses
                </Link>
              </div>
              <div className="libros-ficha-autores">
                <Link>
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido3}
                  alt="Ciudad de fuego"
                />
                </Link>

                <Link to="" className="name-title-ficha-autor">
                Ciudad de fuego
                </Link>
              </div>
              <div className="libros-ficha-autores">
                <Link>
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido4}
                  alt="Después de diciembre"
                />
                </Link>

                <Link to="" className="name-title-ficha-autor">
                Después de diciembre
                </Link>
                <p ></p>
              </div>
            </div>
          </section>
        </div>
    );
};

export default LibrosRecomendadosFichaAutor;