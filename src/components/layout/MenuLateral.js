import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import inicio_icon from '../../static/icons/inicio.png';
import book_icon from '../../static/icons/book_icon.png';
import amigos_icon from '../../static/icons/amigos_icon.png';
import autor_icon from '../../static/icons/comiñña.png';
import reseñas_icon from '../../static/icons/pen.png';
import comunidad_icon from '../../static/icons/comunidad.png';
import foto_usuario from '../../static/img/F_Usu.jpg';

function MenuLateral() {
  return (
    <div className="menu__side" id="menu_side">
      <div className="name__page">
        <img
          src={foto_usuario}
          className="foto"
          id="Foto_move"
          alt="foto_usuario"
        />
        <h2 className="name" id="name_move">
          Catalina Cardenas
        </h2>
        <div className="options__menu">
          <div className="items-op selected">
            <Link to="#">
              <img 
                src={inicio_icon} 
                alt="inicio_icon" 
                
                />
              <h6>Inicio</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={book_icon}
                alt="book_icon" 
                
                />
              <h6>Libros</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={amigos_icon}
                alt="amigos_icon" 
                
                />
              <h6>Amigos</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={autor_icon}
                alt="autor_icon" 
                
                />
              <h6>Autores</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={reseñas_icon}
                alt="reseñas_icon" 
                
                />
              <h6>Reseñas</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={comunidad_icon}
                alt="comunidad_icon" 
                
                />
              <h6>Comunidades</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={comunidad_icon}
                alt="comunidad_icon"  
                
                />
              <h6>Denuncias</h6>
            </Link>
          </div>
          <div className="items-op">
            <Link to="#">
              <img 
                src={comunidad_icon}
                alt="comunidad_icon" 
                
                />
              <h6>Mi Perfil</h6>
            </Link>
          </div>
          <div className="items-opp" id="items-opp">
            <Link to="#">
              <img 
                src={comunidad_icon}
                alt="comunidad_icon" 
                
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLateral;
