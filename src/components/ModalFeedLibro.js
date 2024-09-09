import React, { useState } from "react";
import { Link } from "react-router-dom";
import libro1_mi_perfil from '../static/img/23 Otoños Antes De Ti.jpg';
import libro2_mi_perfil from '../static/img/Bajo la misma estrella.jpeg';
import libro3_mi_perfil from '../static/img/BRUJA BLANCA, LA ASESINO DE BRUJAS 1.jpg';
import libro4_mi_perfil from '../static/img/Ciudades De Fuego.jpeg';
import libro5_mi_perfil from '../static/img/Yo antes de ti.jpg';
import libro6_mi_perfil from '../static/img/Tres meses.jpeg';

function ModalAmigosMiPerfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-FeedLibro" onClick={openModal}>
        Ver mas
      </button>
      
      {isModalOpen && (
        <div className="modal-overlay-FeedLibro" onClick={closeModal}>
          <div className="modal-content-FeedLibro" onClick={(e) => e.stopPropagation()}>
            <div className="Header-modal-FeedLibro">
              <button className="close-btn-FeedLibro" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-FeedLibro">Romace</h2>
            </div>

            <div className="modal-FeedLibro-content">

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro1_mi_perfil} alt="23 otoños antes de ti" className="modal-img-FeedLibro" />
                  </Link>
                  
                  <Link to="/FichaLibro" className="modal-title-FeedLibro" >
                  23 Otoños Antes De Ti
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro2_mi_perfil} alt="bajo la misma estrella" className="modal-img-FeedLibro" />
                  </Link>
                  
                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Bajo la Misma Estrella
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro3_mi_perfil} alt="El asesino de brujas" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Bruja Blanca
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro4_mi_perfil} alt="ciudades de fuego" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Ciudades de Fuego
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro5_mi_perfil} alt="yo antes de ti" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Yo Antes de Ti
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro6_mi_perfil} alt="Tres meses" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Tres Meses
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro4_mi_perfil} alt="ciudades de fuego" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Ciudades de Fuego
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro5_mi_perfil} alt="yo antes de ti" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Yo Antes de Ti
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro6_mi_perfil} alt="Tres meses" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Tres Meses
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro4_mi_perfil} alt="ciudades de fuego" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Ciudades de Fuego
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro5_mi_perfil} alt="yo antes de ti" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
                  Yo Antes de Ti
                  </Link>
                </div>

                <div className="modal-FeedLibro-libros">
                <Link to="/FichaLibro">
                  <img src={libro6_mi_perfil} alt="Tres meses" className="modal-img-FeedLibro" />
                  </Link>

                  <Link to="/FichaLibro" className="modal-title-FeedLibro">
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