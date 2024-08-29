import React from 'react';
import activar_icon from '../static/icons/boton-activo.png';
import inactivar_icon from '../static/icons/boton-inactivo.png';
import crear_icon from '../static/icons/crear.png';
import actualizar_icon from '../static/icons/actualizar.png';
import foto_usua1 from '../static/img/dp4.jpeg';
// import foto_comuni2 from '../static/img/c3.jpg';
// import foto_comuni3 from '../static/img/c4.jpg';
// import foto_comuni4 from '../static/img/c5.jpg';
// import foto_comuni5 from '../static/img/c6.jpg';
// import foto_comuni6 from '../static/img/c7.jpg';
// import foto_comuni7 from '../static/img/dp4.jpeg';
// import foto_comuni8 from '../static/img/dp8.jpeg';

 

function ContenidoGestionUsuario({ onInactivar, onActivar, onCrear, onActualizar }) {
  return (
    <div className="cards">

      <section className="card">
        <div className="card-content">
          <img src={foto_usua1} alt="Image1" className="card-image" />
          <div className="card-text">
            <p><strong>Nombre:</strong> Alex Rodriguez</p>
            <p><strong>Nombre Usuario:</strong> Alex_🫶🏼</p>
          </div>
        </div>
        <div className="actions">

        <button className="button-gestion-Usuario" onClick={onActivar}>
            <img className="img-gestion-Usuario" src={activar_icon} alt="Activar" />
          </button>

          <button className="button-gestion-Usuario" onClick={onInactivar}>
            <img className="img-gestion-Usuario" src={inactivar_icon} alt="inactivar" />
          </button>

          <button className="button-gestion-Usuario" onClick={onCrear}>
            <img className="img-gestion-Usuario" src={crear_icon} alt="crear" />
          </button>
          <button className="button-gestion-Usuario" onClick={onActualizar}>
            <img className="img-gestion-Usuario" src={actualizar_icon} alt="actualizar" />
          </button>
        </div>
      </section>

      

   

      
      
    </div>
  );
}

export default ContenidoGestionUsuario;
