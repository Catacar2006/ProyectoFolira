import React from "react";
import img_libro1 from '../static/img/Orgullo y prejuicio.jpg'
import img_libro2 from '../static/img/Yo antes de ti.jpg';
import img_libro3 from '../static/img/El Arte De Ser Nosotros.jpg';
import img_libro4 from '../static/img/Bajo la misma estrella.jpeg';
import img_libro5 from '../static/img/Como los gatos hacen anres de morir.jpeg';
import img_libro6 from '../static/img/23 Otoños Antes De Ti.jpg';
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_vacia_icon from '../static/icons/estrella-basia.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';


function SeccionLibros1(){
    return(
        <div>
            <div>
          <h2 className="title-section-libro">Romance</h2>
        </div>
        <div className="libro-container">
          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro1}
              alt="img_libro1"/>
            <h5 className="title-libro-section">Orgullo y prejuicio</h5>
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
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
            </div>
          </div>
          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro2}
              alt="img_libro2"
            />
            <h5 className="title-libro-section">Yo antes de ti</h5>
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
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>

          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro3}
              alt="img_libro3"
            />
            <h5 className="title-libro-section">El Arte De Ser Nosotros</h5>
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
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
            </div>
          </div>

          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro4}
              alt="img_libro4"
            />
            <h5 className="title-libro-section">Bajo la misma estrella</h5>
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
                src={estrella_medio_icon}
                alt="estrella_medio_icon" />
            </div>
          </div>
          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro5}
              alt="img_libro5"
            />
            <h5 className="title-libro-section">
              Como los gatos hacen anres de morir
            </h5>
            <div className="rating-libro">
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
              <img 
                src={estrella_vacia_icon} 
                alt="estrella_vacia_icon" />
            </div>
          </div>
          <div className="libro-item">
            <img
              className="libro-comunity-perso"
              src={img_libro6}
              alt="img_libro6"
            />
            <h5 className="title-libro-section">23 Otoños antes de ti</h5>
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
        </div>
        </div>
    );
};

export default SeccionLibros1;