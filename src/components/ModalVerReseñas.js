import React from "react";
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';
import { Link } from "react-router-dom";

function ModalVerReseñas (){
    return(
        <div>
            {/* ver mas y su modal */}

           <div className="ver-mas-y-modal">
               {/* ver mas reseñas */}
            {/* Botón para abrir el modal */}
            <Link to="#Modal-agregar-libro" className="ver-mas-ficha-libro">
              Ver más
            </Link>

            {/* Modal */}
            <div id="Modal-agregar-libro" className="modal-ficha-libro">
              <div className="modal-content-ficha-libro">
                <Link to="#" className="modal-close-ficha-libro">
                  ×
                </Link>
                <div className="modal-review-ficha-libro">
                  <p className="modal-name-usuario-ficha">
                    <strong>Art15_:</strong>
                  </p>
                  <p className="modal-reseña-ficha-librousu">
                    "Ciudades de humo" de Joana Marcús me ha dejado sin
                    palabras. Desde la primera página, quedé atrapado en este
                    mundo fascinante y lleno de misterio. Los personajes están
                    tan bien desarrollados que es fácil conectar con ellos. La
                    trama está llena de giros inesperados y emoción constante,
                    lo que hace que no puedas soltar el libro. Si te gustan las
                    historias con mucha intriga y aventura, ¡te lo recomiendo
                    totalmente!
                  </p>
                  <p className="modal-rating-container-ficha-libro">
                    <span className="modal-rating">
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                            alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_medio_icon}
                        alt="estrella_medio_icon"
                      />
                    </span>
                  </p>
                </div>
                <div className="modal-review-ficha-libro">
                  <p className="modal-name-usuario-ficha">
                    <strong>Art15_:</strong>
                  </p>
                  <p className="modal-reseña-ficha-librousu">
                    "Ciudades de humo" de Joana Marcús me ha dejado sin
                    palabras. Desde la primera página, quedé atrapado en este
                    mundo fascinante y lleno de misterio. Los personajes están
                    tan bien desarrollados que es fácil conectar con ellos. La
                    trama está llena de giros inesperados y emoción constante,
                    lo que hace que no puedas soltar el libro. Si te gustan las
                    historias con mucha intriga y aventura, ¡te lo recomiendo
                    totalmente!
                  </p>
                  <p className="modal-rating-container-ficha-libro">
                    <span className="modal-rating">
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_medio_icon}
                        alt="estrella_medio_icon"
                      />
                    </span>
                  </p>
                </div>
                <div className="modal-review-ficha-libro">
                  <p className="modal-name-usuario-ficha">
                    <strong>Art15_:</strong>
                  </p>
                  <p className="modal-reseña-ficha-librousu">
                    "Ciudades de humo" de Joana Marcús me ha dejado sin
                    palabras. Desde la primera página, quedé atrapado en este
                    mundo fascinante y lleno de misterio. Los personajes están
                    tan bien desarrollados que es fácil conectar con ellos. La
                    trama está llena de giros inesperados y emoción constante,
                    lo que hace que no puedas soltar el libro. Si te gustan las
                    historias con mucha intriga y aventura, ¡te lo recomiendo
                    totalmente!
                  </p>
                  <p className="modal-rating-container-ficha-libro">
                    <span className="modal-rating">
                    <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_medio_icon}
                        alt="estrella_medio_icon"
                      />
                    </span>
                  </p>
                </div>
                <div className="modal-review-ficha-libro">
                  <p className="modal-name-usuario-ficha">
                    <strong>Art15_:</strong>
                  </p>
                  <p className="modal-reseña-ficha-librousu">
                    "Ciudades de humo" de Joana Marcús me ha dejado sin
                    palabras. Desde la primera página, quedé atrapado en este
                    mundo fascinante y lleno de misterio. Los personajes están
                    tan bien desarrollados que es fácil conectar con ellos. La
                    trama está llena de giros inesperados y emoción constante,
                    lo que hace que no puedas soltar el libro. Si te gustan las
                    historias con mucha intriga y aventura, ¡te lo recomiendo
                    totalmente!
                  </p>
                  <p className="modal-rating-container-ficha-libro">
                    <span className="modal-rating">
                    <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_rellena_icon} 
                        alt="estrella_rellena_icon"
                      />
                      <img
                        className="modal-puntaje-ficha-libro"
                        src={estrella_medio_icon}
                        alt="estrella_medio_icon"
                      />
                    </span>
                  </p>
                </div>
                {/* Puedes agregar más reseñas aquí */}
              </div>
            </div>
           </div>
        </div>
    );
};

export default ModalVerReseñas;