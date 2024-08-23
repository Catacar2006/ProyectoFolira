import React from "react";

function Nav(){
    return(
        <div>
  <header className="navbar navbar-expand-lg fixed-top " id="nav_moved">
    <div className="container-fluid">
      <div className="icon__menu">
        <button className="burger" id="btn_open"><img src="../Assetes/img/greater_than_icon_194991.png" alt /></button>
      </div>
      <a href="#searchModal" id="openModalBtn" className="btn-search">Search</a>
      <div id="searchModal" className="modal">
        <div className="modal-content">
          <a href="#" className="close">×</a>
          <h2>Buscar</h2>
          <input type="text" placeholder="Escribe tu búsqueda..." className="search-input" />
          <button className="search-btn">Buscar</button>
        </div>
      </div>
      <img src="../Assetes/img/FOLIRA.png" alt className="app-logo" />
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
              <a className="nav-link" href="#"><img src="../Assetes/img/notificaciones_icon.png" alt className="nav-icon" /></a>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div className="menu__side" id="menu_side">
    <div className="name__page">
      <img src="../Assetes/img/foto_admi.jpeg" className="foto" id="Foto_move" />
      <h2 className="name" id="name_move">Catalina Cardenas</h2>
      <div className="options__menu">
        <div className="items-op selected"><a href><img src="../Assetes/img/INICIO_ICON.png" alt /><h6>Inicio</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/book_icon.png" alt /><h6>Libros</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/amigos_icon.png" alt /><h6>Amigos</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/comiñña.png" alt /><h6>Autores</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/pen.png" alt /><h6>Reseñas</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/comunidad_icon.png" alt /><h6>Comunidades</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/comunidad_icon.png" alt /><h6>Denuncias</h6></a></div>
        <div className="items-op"><a href><img src="../Assetes/img/comunidad_icon.png" alt /><h6>Mi Perfil</h6></a></div>
        <div className="items-opp" id="items-opp"><a href><img src="../Assetes/img/comunidad_icon.png" alt /></a></div>
      </div>
    </div>
  </div>
</div>

    )
}