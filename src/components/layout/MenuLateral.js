import React from "react";

function Nav(){
    return(
      <body>
        <div class="menu__side" id="menu_side">
        <div class="name__page">
          <img src="../Assetes/img/foto_admi.jpeg" class="foto" id="Foto_move">
          <h2 class="name" id="name_move">Catalina Cardenas</h2>
          <div class="options__menu">
            <div class="items-op selected"><a href=""><img src="../Assetes/img/INICIO_ICON.png" alt=""><h6>Inicio</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/book_icon.png" alt=""><h6>Libros</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/amigos_icon.png" alt=""><h6>Amigos</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/comiñña.png" alt=""><h6>Autores</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/pen.png" alt=""><h6>Reseñas</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/comunidad_icon.png" alt=""><h6>Comunidades</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/comunidad_icon.png" alt=""><h6>Denuncias</h6></a></div>
            <div class="items-op"><a href=""><img src="../Assetes/img/comunidad_icon.png" alt=""><h6>Mi Perfil</h6></a></div>
            <div class="items-opp" id="items-opp"><a href=""><img src="../Assetes/img/comunidad_icon.png" alt=""></a></div>
          </div>
        </div>
     </div>
      </body>
    );
};