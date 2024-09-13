import React from "react";
import logo_nav from '../../static/img/folira-logo.png'
import book_nav from '../../static/icons/book-nav.svg';
import autor_nav from '../../static/icons/autor_nav.svg';
import reseña_nav from '../../static/icons/reseñas_nav.svg';
import comunidad_nav from '../../static/icons/comunidad-nav.svg';
import denuncia_nav from '../../static/icons/denuncia-nav.svg';
import lupa_nav from '../../static/icons/lupa-nav.svg';
import perfil_nav from '../../static/icons/perfil-nav.svg';
import ModalNotificaciones from '../ModalNotificaciones';
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <div className="logo">
        <img className="icon-logo" src={logo_nav} alt="logo_nav"/>
      </div>
      <div className="options">
        <Link to="/FeedUsuaLibro"><img className="option-img" src={book_nav} alt="book-nav"/></Link>
        <Link to="/FeedUsuaAutores"><img className="option-img" src={autor_nav} alt="autor_nav" /></Link>
        <Link to="/Reseña"><img className="option-img" src={reseña_nav} alt="reseña_nav"/></Link>
        <Link to="/Comunidad"><img className="option-img" src={comunidad_nav} alt="comunidad_nav"/></Link>
        <Link to="/Amigos"><img className="option-img" src={denuncia_nav} alt="denuncia_nav"/></Link>
        
      </div>
      <div className="search">
        <input type="search" placeholder="Buscar" />
        <img className="icon-lupa" src={lupa_nav} alt="lipa_nav" />
      </div>
      <div className="options-two">
        <ModalNotificaciones />
        <Link to="/MiPerfil"><img className="option-two-nav" src={perfil_nav} alt="perfil_nav" /></Link>
      </div>
    </nav>
  );
}

export default Nav;
