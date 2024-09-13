import React from "react";
import logo_nav from '../../static/img/folira-logo.png'
import gestionbook_nav from '../../static/icons/gestion_comunidades.png';
import gestionusuario from '../../static/icons/gestion_usuario.png';
import gestionlibro_nav from '../../static/icons/gestion_libro.png';
import lupa_nav from '../../static/icons/lupa-nav.svg';
import ModalNotificaciones from '../ModalNotificaciones';
import perfil_nav from '../../static/icons/perfil-nav.svg';
import cerrar_sesion from '../../static/icons/cerrar_sesion_admin.png'
import { Link } from "react-router-dom";
import axios from "axios";

const handleLogout = async () => {
    try {
        // Enviar solicitud de cierre de sesión al backend usando axios
        await axios.post('http://localhost:9906/api/auth/logout/', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Eliminar token del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // Eliminar cualquier otro dato del usuario que hayas guardado

        // Redirigir al login
        window.location.href = '/';
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img className="icon-logo" src={logo_nav} alt="logo_nav"/>
      </div>
      <div className="options">
        <Link to="/GestionComunidad"><img className="optio2-img" src={gestionbook_nav} alt="book-nav"/></Link>
        <Link to="/GestionUsuario"><img className="optio2-img" src={gestionusuario} alt="autor_nav" /></Link>
        <Link to="/GestionLibro"><img className="optio2-img" src={gestionlibro_nav} alt="reseña_nav"/></Link>       
        
      </div>
      <div className="search">
        <input type="search" placeholder="Buscar" />
        <img className="icon-lupa" src={lupa_nav} alt="lipa_nav" />
      </div>
      <div className="options-two">
        <ModalNotificaciones />
        <button className="button-medalla-espacio-miperfil" onClick={handleLogout}>
                <img
                  src={cerrar_sesion}
                  alt="cerrar-sesion"
                  className="img-medall-miperfil"
                />
                </button>
      </div>
    </nav>
  );
}

export default Nav;
