import React from "react";
import img_libro7 from '../static/img/Libro_ El amor en tiempos de cólera.jpg';
import img_libro8 from '../static/img/Romeo and Juliet.jpg';
import img_libro9 from '../static/img/París despertaba tarde.jpeg';
import img_libro10 from '../static/img/Cumbres borrascosas.jpg';
import img_libro11 from '../static/img/La dependienta_ vivir para trabajar.jpeg';
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_vacia_icon from '../static/icons/estrella-basia.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';
import { Link } from "react-router-dom";



function SeleccionLibro2(){
    return(
        <div>
            {/* otra seccion */}
        <div>
          <h2 className="title-section-libro">Drama</h2>
        </div>
        <div className="libro-container">
          <div className="libro-item">
          <Link to="/FichaLibro">
            <img
              className="libro-comunity-perso"
              src={img_libro7}
              alt="img_libro7"
            />
            </Link>

            <Link to="/FichaLibro" className="title-libro-section">
            El amor en tiempos de cólera
            </Link>
            <div className="rating-libro">
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
               src={estrella_rellena_icon} 
               alt="estrella_rellena_icon" />
              <img 
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>

          <div className="libro-item">
          <Link to="/FichaLibro">
            <img
              className="libro-comunity-perso"
              src={img_libro8}
              alt="img_libro8"
            />
            </Link>

            <Link to="/FichaLibro" className="title-libro-section">
            Romeo y Julieta
            </Link>
            <div className="rating-libro">
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>

          <div className="libro-item">
          <Link to="/FichaLibro">
            <img
              className="libro-comunity-perso"
              src={img_libro9}
              alt="img_libro9"
            />
            </Link>

            <Link to="/FichaLibro" className="title-libro-section">
            Memorias de una Geisha
            </Link>
            <div className="rating-libro">
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>

          <div className="libro-item">
          <Link to="/FichaLibro">
            <img
              className="libro-comunity-perso"
              src={img_libro10}
              alt="img_libro10"
            />
            </Link>

            <Link to="/FichaLibro" className="title-libro-section">
            Cumbres Borrascosas
            </Link>
            <div className="rating-libro">
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>

          <div className="libro-item">
          <Link to="/FichaLibro">
            <img
              className="libro-comunity-perso"
              src={img_libro11}
              alt="img_libro11"
            />
            </Link>

            <Link to="/FichaLibro" className="title-libro-section">
            La dependienta
            </Link>
            <div className="rating-libro">
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
              <img 
                src={estrella_rellena_icon} 
                alt="estrella_rellena_icon" />
            </div>
          </div>

          
        </div>
        </div>
    );
};

export default SeleccionLibro2;