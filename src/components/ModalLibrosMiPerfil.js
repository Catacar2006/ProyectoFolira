import React, { useState } from "react";
import libro1_mi_perfil from '../static/img/23 Otoños Antes De Ti.jpg';
import libro2_mi_perfil from '../static/img/Bajo la misma estrella.jpeg';
import libro3_mi_perfil from '../static/img/BRUJA BLANCA, LA ASESINO DE BRUJAS 1.jpg';
import libro4_mi_perfil from '../static/img/Ciudades De Fuego.jpeg';
import libro5_mi_perfil from '../static/img/Yo antes de ti.jpg';
import libro6_mi_perfil from '../static/img/Tres meses.jpeg';
import { Link } from "react-router-dom";

function ModalAmigosMiPerfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-MiperfilLi" onClick={openModal}>
        Libros Guardados
      </button>
      
      {isModalOpen && (
        <div className="modal-overlay-MiperfilLi" onClick={closeModal}>
          <div className="modal-content-MiperfilLi" onClick={(e) => e.stopPropagation()}>
            <div className="Header-modal-MiperfilLi">
              <button className="close-btn-MiperfilLi" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-MiperfilLi">Libros Guardados</h2>
            </div>

            <div className="modal-MiperfilLi-content">

                <div className="modal-MiperfilLi-libros">
                  <Link to="/FichaLibro">
                  <img src={libro1_mi_perfil} alt="23 otoños antes de ti" className="modal-img-MiperfilLi" />
                  </Link>
                  
                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  23 Otoños Antes De Ti
                  </Link>
                </div>

                <div className="modal-MiperfilLi-libros">
                <Link to="/FichaLibro">
                  <img src={libro2_mi_perfil} alt="bajo la misma estrella" className="modal-img-MiperfilLi" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  Bajo la Misma Estrella
                  </Link>
                </div>

                <div className="modal-MiperfilLi-libros">
                <Link to="/FichaLibro">
                  <img src={libro3_mi_perfil} alt="El asesino de brujas" className="modal-img-MiperfilLi" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  Bruja Blanca
                  </Link>
                </div>

                <div className="modal-MiperfilLi-libros">
                <Link to="/FichaLibro">
                  <img src={libro4_mi_perfil} alt="ciudades de fuego" className="modal-img-MiperfilLi" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  Ciudades de Fuego
                  </Link>
                </div>

                <div className="modal-MiperfilLi-libros">
                <Link to="/FichaLibro">
                  <img src={libro5_mi_perfil} alt="yo antes de ti" className="modal-img-MiperfilLi" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  Yo Antes de Ti
                  </Link>
                </div>

                <div className="modal-MiperfilLi-libros">
                <Link to="/FichaLibro">
                  <img src={libro6_mi_perfil} alt="Tres meses" className="modal-img-MiperfilLi" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-MiperfilLi">
                  Tres Meses
                  </Link>
                </div>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalAmigosMiPerfil;