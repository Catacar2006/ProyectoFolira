import React from "react";
import { Link } from "react-router-dom";
import folira from "../static/img/FOLIRA.png";
import foto_amigo from "../static/img/foto-ami.jpeg";
import foto_amigo2 from "../static/img/Foto_amigo.jpeg";
import foto_amigo3 from "../static/img/dp6.jpeg";
import foto_amigo4 from "../static/img/dp3.jpg";
import foto_amigo5 from "../static/img/dp5.jpeg";
import foto_amigo6 from "../static/img/dp10.jpeg";
import foto_amigo7 from "../static/img/dp9.jpeg";
import foto_amigo8 from "../static/img/dp8.jpeg";
import foto_amigo9 from "../static/img/dp11.jpeg";
import foto_amigo10 from "../static/img/dp12.jpeg";
// fotos del primer modal
import modal1_foto_amigo from "../static/img/foto-ami.jpeg";
import modal1_foto_amigo2 from "../static/img/Foto_amigo.jpeg";
import modal1_foto_amigo3 from "../static/img/dp6.jpeg";
import modal1_foto_amigo4 from "../static/img/dp3.jpg";
import modal1_foto_amigo5 from "../static/img/dp5.jpeg";
// fotos del segundo modal
import modal2_foto_amigo6 from "../static/img/dp10.jpeg";
import modal2_foto_amigo7 from "../static/img/dp9.jpeg";
import modal2_foto_amigo8 from "../static/img/dp8.jpeg";
import modal2_foto_amigo9 from "../static/img/dp11.jpeg";
import modal2_foto_amigo10 from "../static/img/dp12.jpeg";
import Nav from "../components/layout/Nav";

function Amigos() {
  return (
    <div>
     
    <Nav />
      {/* amigos */}

      <main className="main-amigos">
        <div>
          <h1 className="title-encabezado-amigo">Descubre nuevos amigos </h1>
          <p className="text-section-amigo">
            ¡Descubre y conecta con nuevos amigos literarios! Encuentra a
            aquellos que comparten tu pasión por los personajes entrañables y
            las tramas inolvidables. ¡Amplía tu círculo y enriquece tu
            experiencia literaria!
          </p>
        </div>
        {/* titulo de la seccion */}
        {/* seccion de amigo */}
        <div> 
          <h2 className="title-amigo-section">Tus Amigos</h2>
        </div>

        {/* Comienzo modal 1 */}
        <Link to="#modal1" className="ver-mas">
          ver más
        </Link>
        {/* Modal 1 */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <Link to="#" className="close-amigo">
              ×
            </Link>
            <h2 className="title-modal">TUS AMIGOS</h2>
            <div className="modal-amigos-container">
              {/* Reemplaza "#" con la URL del perfil de cada amigo */}
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo}
                  alt="JackRoss^.^"
                />
                <Link href="perfil-jackross.html" className="modal-title-amigo">
                  JackRoss^.^
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo2}
                  alt="ottoke_ottoke♡"
                />
                <Link to="perfil-ottoke.html" className="modal-title-amigo">
                  ottoke_ottoke♡
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo3}
                  alt="Art15_☆"
                />
                <Link to="perfil-art15.html" className="modal-title-amigo">
                  Art15_☆
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo4}
                  alt="Taylor2.0✶"
                />
                <Link to="perfil-taylor.html" className="modal-title-amigo">
                  Taylor2.0✶
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo5}
                  alt="Wonwoo_♥"
                />
                <Link to="perfil-wonwoo.html" className="modal-title-amigo">
                  Wonwoo_♥
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo}
                  alt="JackRoss^.^"
                />
                <Link to="perfil-jackross.html" className="modal-title-amigo">
                  JackRoss^.^
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo2}
                  alt="ottoke_ottoke♡"
                />
                <Link to="perfil-ottoke.html" className="modal-title-amigo">
                  ottoke_ottoke♡
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo3}
                  alt="Art15_☆"
                />
                <Link to="perfil-art15.html" className="modal-title-amigo">
                  Art15_☆
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo4}
                  alt="Taylor2.0✶"
                />
                <Link to="perfil-taylor.html" className="modal-title-amigo">
                  Taylor2.0✶
                </Link>
              </div>
              <div className="modal-amigos">
                <img
                  className="modal-img-amigo"
                  src={modal1_foto_amigo5}
                  alt="Wonwoo_♥"
                />
                <Link to="perfil-wonwoo.html" className="modal-title-amigo">
                  Wonwoo_♥
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Fin modal 1 */}

        {/* amigos tuyos */}
        <div className="amigos-container">
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo}
                alt="foto_amigo" 
            />
            <h5 className="title-amigo">JackRoss^.^</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo2}
                alt="foto_amigo2" 
            />
            <h5 className="title-amigo">ottoke_ottoke♡</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo3}
                alt="foto_amigo3" 
            />
            <h5 className="title-amigo">Art15_☆</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo4}
                alt="fot_amigo4"
            />
            <h5 className="title-amigo">Taylor2.0✶</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo5}
                alt="foto_amigo5" 
            />
            <h5 className="title-amigo">Wonwoo_♥</h5>
          </div>
        </div>


        {/* contendor amigos */}
        <div>
          <h2 className="title-amigo-gustar">Personas con un gusto similar</h2>
        </div>
        
        {/* Comienzo Enlace para abrir el segundo modal */}
        <Link to="#modal2" className="ver-mas">
          ver más
        </Link>
        {/* Modal 2 */}
        <div id="modal2" className="modal-gustar">
          <div className="modal-gustar-content">
            <Link to="#" className="close-gustar">
              ×
            </Link>
            <h2 className="amigos-modal">PERSONAS CON UN GUSTO SIMILAR</h2>
            <div className="modal-gustar-amigos-container">
              {/* Lista de amigos */}
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo6}
                  alt="Alex_㋡"
                />
                <Link to="perfil-alex.html" className="modal2-title-amigo">
                  Alex_㋡
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo7}
                  alt="Butterfly_13🦋"
                />
                <Link to="perfil-butterfly.html" className="modal2-title-amigo">
                  Butterfly_13🦋
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo8}
                  alt="MyLifeIsaDrama❀"
                />
                <Link to="perfil-mylifeisadrama.html" className="modal2-title-amigo">
                  MyLifeIsaDrama❀
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo9}
                  alt="Dark_Night☾"
                />
                <Link to="perfil-darknight.html" className="modal2-title-amigo">
                  Dark_Night☾
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo10}
                  alt="Kimchi_29🍥"
                />
                <a href="perfil-kimchi.html" className="modal2-title-amigo">
                  Kimchi_29🍥
                </a>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo10}
                  alt="Alex_㋡"
                />
                <Link to="perfil-alex.html" className="modal2-title-amigo">
                  Alex_㋡
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo9}
                  alt="Butterfly_13🦋"
                />
                <Link to="perfil-butterfly.html" className="modal2-title-amigo">
                  Butterfly_13🦋
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo8}
                  alt="MyLifeIsaDrama❀"
                />
                <Link to="perfil-mylifeisadrama.html" className="modal2-title-amigo">
                  MyLifeIsaDrama❀
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo7}
                  alt="Dark_Night☾"
                />
                <Link to="perfil-darknight.html" className="modal2-title-amigo">
                  Dark_Night☾
                </Link>
              </div>
              <div className="modal2-amigos">
                <img
                  className="modal2-img-amigo"
                  src={modal2_foto_amigo6}
                  alt="Kimchi_29🍥"
                />
                <Link to="perfil-kimchi.html" className="modal2-title-amigo">
                  Kimchi_29🍥
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Final del modal */}

        {/* amigos gustar */}
        <div className="amigos-gustar-container">
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo6}
                alt="foto_amigo6"
            />
            <h5 className="title-amigo">Alex_㋡</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo7}
                alt="foto_amigo7" 
            />
            <h5 className="title-amigo">Butterfly_13🦋</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo8}
                alt="foto_amigo8" 
            />
            <h5 className="title-amigo">MyLifeIsaDrama❀</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo9}
                alt="foto_amigo9" 
            />
            <h5 className="title-amigo">Dark_Night☾</h5>
          </div>
          <div className="amigos">
            <img 
                className="img-amigo" 
                src={foto_amigo10}
                alt="foto_amigo10" 
            />
            <h5 className="title-amigo">Kimchi_29🍥</h5>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Amigos;
