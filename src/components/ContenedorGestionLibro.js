import React from 'react';
import activar_icon from '../static/icons/boton-activo.png';
import inactivar_icon from '../static/icons/boton-inactivo.png';
import crear_icon from '../static/icons/crear.png';
import actualizar_icon from '../static/icons/actualizar.png';
import libro_gestion1 from '../static/img/BAJO LA MISMA ESTRELLA - GREEN JOHN.jpeg';

function ContenidoGestionLibro({ onInactivar, onActivar, onCrear, onActualizar }) {
  return (
    <div className="cards">
      <section className="card">
        <div className="card-content-gestiLibro">
          <img src={libro_gestion1} alt="Libro" className="card-image-gestiLibro" />
          <div className="card-text">
            <p><strong>Nombre:</strong> Dune</p>
            <p><strong>ISBN:</strong> 0441172717</p>
            <p><strong>Serie:</strong> La saga de Dune</p>
            <p><strong>Genero:</strong> Ciencia Ficción</p>
          </div>
        </div>
        <div className="actions">
          <button className="button-gestion-libro" onClick={onActivar}>
            <img className="img-gestion-libro" src={activar_icon} alt="Activar" />
          </button>
          <button className="button-gestion-libro" onClick={onInactivar}>
            <img className="img-gestion-libro" src={inactivar_icon} alt="Inactivar" />
          </button>
          <button className="button-gestion-libro" onClick={onCrear}>
            <img className="img-gestion-libro" src={crear_icon} alt="Crear" />
          </button>
          <button className="button-gestion-libro" onClick={onActualizar}>
            <img className="img-gestion-libro" src={actualizar_icon} alt="Actualizar" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContenidoGestionLibro;
