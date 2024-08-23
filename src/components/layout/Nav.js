import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav () {
    return (
<header className="navbar navbar-expand-lg fixed-top " id="nav_moved">
  <div className="container-fluid">
    <div className="icon__menu">
      <button className="burger" id="btn_open"><img src="../Assetes/img/greater_than_icon_194991.png" alt /></button>
    </div>
    <a href="#searchModal" id="openModalBtn" className="btn-search">Search</a>
    <div id="searchModal" className="modal">
      <div className="modal-content">
        <Link to="#" className="close">×</Link>
        <h2>Buscar</h2>
        <input type="text" placeholder="Escribe tu búsqueda..." className="search-input" />
        <button className="search-btn">Buscar</button>
      </div>
    </div>
    <img 
        src="../Assetes/img/FOLIRA.png" 
        alt=""
        className="app-logo" 
        />
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 later-item">
          <li className="nav-item">
            <a className="nav-link" href="#searchModal" id="openModalBtn"><img src="../Assetes/img/lupa.png" alt className="nav-icon" /></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#"><img src="../Assetes/img/notificaciones_icon.png" alt className="nav-icon" /></Link>
          </li>
          <li className="nav-item">
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

    );
};

export default Nav;