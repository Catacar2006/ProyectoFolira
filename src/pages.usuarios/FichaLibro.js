import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import { Link } from "react-router-dom";
import img_libro_ficha_libro from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg'
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';
import flecha_baja from '../static/icons/flechita abajo.png';
import corazon_icon_fa from '../static/icons/corazon (1).png';
import disgusto_icon_fa from '../static/icons/disgusto.png';
import añadir_fl from '../static/icons/añadir.png'


function FichaLibro() {
  return (
    <div>
      <Nav />
      <MenuLateral />
      <main className="main-ficha-libro">
        <div className="libro-container">
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
                  alt="Añadir"
                />
              </button>
            </div>
          </div>

          <div className="book-reviews-ficha-libro">
            <textarea
              className="area-text-ficha-libro"
              placeholder="Escribe tu reseña aquí.."
              defaultValue={""}
            />
            <button className="boton-enviar-ficha">Enviar</button>
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


            <div className="review-ficha-libro">
              <p className="name-usuario-ficha">
                <strong>Art15_:</strong>
              </p>
              <p className="reseña-ficha-librousu">
                "Ciudades de humo" de Joana Marcús me ha dejado sin palabras.
                Desde la primera página, quedé atrapado en este mundo fascinante
                y lleno de misterio. Los personajes están tan bien desarrollados
                que es fácil conectar con ellos. La trama está llena de giros
                inesperados y emoción constante, lo que hace que no puedas
                soltar el libro. Si te gustan las historias con mucha intriga y
                aventura, ¡te lo recomiendo totalmente!
              </p>
              <p className="rating-container">
                <span className="rating">
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
            <div className="review-ficha-libro">
              <p className="name-usuario-ficha">
                <strong>ottoke_ottoke:</strong>
              </p>
              <p className="reseña-ficha-librousu">
                Desde la primera página hasta la última, la historia te envuelve
                en un torbellino de emociones y aventuras. Los personajes están
                magníficamente desarrollados y la trama está llena de giros
                inesperados que mantienen el suspenso en todo momento. El autor
                ha creado un mundo de fantasía increíblemente vívido y complejo
                que te absorberá por completo.
              </p>
              <p className="rating-container">
                <span className="rating">
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
      </main>
    </div>
  );
}

export default FichaLibro;
