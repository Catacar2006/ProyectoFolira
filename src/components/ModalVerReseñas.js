import React, { useState } from 'react';
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';

function ModalVerReseñas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-reseña" onClick={openModal}>
        Ver Reseñas
      </button>

      {isModalOpen && (
        <div className="modal-overlay-reseña" onClick={closeModal}>
          <div className="modal-content-reseña" onClick={(e) => e.stopPropagation()}>
            <div className='Header-modal-reseña'>
              <button className="close-btn-reseña" onClick={closeModal}>&times;</button>
              <h2 className='titulo-modal-reseña'>RESEÑAS DE LIBROS</h2>
            </div>

            <div className='modal-reseña-content'>
              {[...Array(4)].map((_, index) => (
                <div className="modal-review-ficha-libro" key={index}>
                  <p className="modal-name-usuario-ficha">
                    <strong>Art15_:</strong>
                  </p>
                  <p className="modal-reseña-ficha-librousu">
                    "Ciudades de humo" de Joana Marcús me ha dejado sin palabras. 
                    Desde la primera página, quedé atrapado en este mundo fascinante 
                    y lleno de misterio. Los personajes están tan bien desarrollados que 
                    es fácil conectar con ellos. La trama está llena de giros inesperados 
                    y emoción constante, lo que hace que no puedas soltar el libro. Si te 
                    gustan las historias con mucha intriga y aventura, ¡te lo recomiendo 
                    totalmente!
                  </p>
                  <p className="modal-rating-container-ficha-libro">
                    <span className="modal-rating">
                      <img className="modal-puntaje-ficha-libro" src={estrella_rellena_icon} alt="estrella_rellena_icon" />
                      <img className="modal-puntaje-ficha-libro" src={estrella_rellena_icon} alt="estrella_rellena_icon" />
                      <img className="modal-puntaje-ficha-libro" src={estrella_rellena_icon} alt="estrella_rellena_icon" />
                      <img className="modal-puntaje-ficha-libro" src={estrella_rellena_icon} alt="estrella_rellena_icon" />
                      <img className="modal-puntaje-ficha-libro" src={estrella_medio_icon} alt="estrella_medio_icon" />
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalVerReseñas;
