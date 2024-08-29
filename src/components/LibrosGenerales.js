import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import book1 from "../static/img/Orgullo y prejuicio.jpg";
import book2 from "../static/img/Yo antes de ti.jpg";
import book3 from "../static/img/El Arte De Ser Nosotros.jpg";
import book4 from "../static/img/BAJO LA MISMA ESTRELLA - GREEN JOHN.jpeg";
import book5 from "../static/img/Como los gatos hacen anres de morir.jpeg";
import book6 from "../static/img/23 Otoños Antes De Ti.jpg";
import book7 from "../static/img/Libro_ El amor en tiempos de cólera.jpg";
import book8 from "../static/img/Romeo and Juliet.jpg";
import book9 from "../static/img/París despertaba tarde.jpeg";
import book10 from "../static/img/Cumbres borrascosas.jpg";
// import atras_flecha from "../static/icons/atras-flecha.png";


function LibrosGenerales() {
  return (
    <div>
      

      <main className="main-libros-general">
      <div className="volver">
        <Link to="/FeedUsuario" className="link-volver-usua">
          Volver
        </Link>
            
          </div>
        <div className="libro-general-container">
          

          <div className="libro-general-item">
            <Link to="/book/1" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book1}
                alt="Orgullo y prejuicio"
              />
              <h5 className="title-libro-general">Orgullo y prejuicio</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/2" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book2}
                alt="Yo antes de ti"
              />
              <h5 className="title-libro-general">Yo antes de ti</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/3" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book3}
                alt="El Arte De Ser Nosotros"
              />
              <h5 className="title-libro-general">El Arte De Ser Nosotros</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/4" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book4}
                alt="Bajo la misma estrella"
              />
              <h5 className="title-libro-general">Bajo la misma estrella</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/5" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book5}
                alt="Como los gatos hacen anres de morir"
              />
              <h5 className="title-libro-general">
                Como los gatos hacen anres de morir
              </h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/6" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book6}
                alt="23 Otoños antes de ti"
              />
              <h5 className="title-libro-general">23 Otoños antes de ti</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/7" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book7}
                alt="El amor en tiempos de cólera"
              />
              <h5 className="title-libro-general">
                El amor en tiempos de cólera
              </h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/8" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book8}
                alt="Romeo y Julieta"
              />
              <h5 className="title-libro-general">Romeo y Julieta</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/9" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book9}
                alt="Memorias de una Geisha"
              />
              <h5 className="title-libro-general">Memorias de una Geisha</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/10" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book10}
                alt="Cumbres Borrascosas"
              />
              <h5 className="title-libro-general">Cumbres Borrascosas</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/6" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book6}
                alt="23 Otoños antes de ti"
              />
              <h5 className="title-libro-general">23 Otoños antes de ti</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/7" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book7}
                alt="El amor en tiempos de cólera"
              />
              <h5 className="title-libro-general">
                El amor en tiempos de cólera
              </h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/8" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book8}
                alt="Romeo y Julieta"
              />
              <h5 className="title-libro-general">Romeo y Julieta</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/9" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book9}
                alt="Memorias de una Geisha"
              />
              <h5 className="title-libro-general">Memorias de una Geisha</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/10" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book10}
                alt="Cumbres Borrascosas"
              />
              <h5 className="title-libro-general">Cumbres Borrascosas</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/3" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book3}
                alt="El Arte De Ser Nosotros"
              />
              <h5 className="title-libro-general">El Arte De Ser Nosotros</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/4" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book4}
                alt="Bajo la misma estrella"
              />
              <h5 className="title-libro-general">Bajo la misma estrella</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/5" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book5}
                alt="Como los gatos hacen anres de morir"
              />
              <h5 className="title-libro-general">
                Como los gatos hacen anres de morir
              </h5>
            </Link>
          </div>

          <div className="libro-general-item" >
            <Link to="/book/6" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book6}
                alt="23 Otoños antes de ti"
              />
              <h5 className="title-libro-general">23 Otoños antes de ti</h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/7" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book7}
                alt="El amor en tiempos de cólera"
              />
              <h5 className="title-libro-general">
                El amor en tiempos de cólera
              </h5>
            </Link>
          </div>

          <div className="libro-general-item">
            <Link to="/book/8" className="link-general-libro">
              <img
                className="libro-general-comunity"
                src={book8}
                alt="Romeo y Julieta"
              />
              <h5 className="title-libro-general">Romeo y Julieta</h5>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LibrosGenerales;
