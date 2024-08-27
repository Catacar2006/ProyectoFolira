import React from "react";
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';

function SeccionReseñasFichaLibro (){
    return(
        <div>
            {/* reseñas */}
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
    );
};

export default SeccionReseñasFichaLibro;