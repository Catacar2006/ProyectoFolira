import React from "react";
import estrella_rellena_icon from '../static/icons/estrella-rellena.png';
import estrella_vacia_icon from '../static/icons/estrella-basia.png';
import estrella_medio_icon from '../static/icons/estrella-medio-vacia.png';
import libro_feed_usua1 from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg';
import libro_feed_usua2 from '../static/img/harry Potter.jpg';
import libro_feed_usua3 from '../static/img/DE SANGRE Y CENIZAS.jpeg';
import libro_feed_usua4 from '../static/img/Cumbres borrascosas.jpg';
import libro_feed_usua5 from '../static/img/23 Otoños Antes De Ti.jpg';

function ContenedorLibrosUsuario() {
  return (
    <div>
      <div className="usuario-container">
        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua1}
            alt="libro_feed_usua1"
          />
          <h5 className="title-book-usuario">Ciudades de Humo</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_medio_icon} alt="estrella_medio_icon" />
          </div>
        </div>
        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua2}
            alt="libro_feed_usua2"
          />
          <h5 className="title-book-usuario">Harry Potter y las reliquias</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
          </div>
        </div>
        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua3}
            alt="libro_feed_usua3"
          />
          <h5 className="title-book-usuario">De Sangre y Ceniza</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_medio_icon} alt="estrella_medio_icon" />
          </div>
        </div>
        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua4}
            alt="libro_feed_usua4"
          />
          <h5 className="title-book-usuario">Cumbres Borrascosas</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_medio_icon} alt="estrella_medio_icon" />
          </div>
        </div>
        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua4}
            alt="libro_feed_usua4"
          />
          <h5 className="title-book-usuario">Cumbres Borrascosas</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_medio_icon} alt="estrella_medio_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
          </div>
        </div>

        <div className="usuario-item">
          <img
            className="usuario-book"
            src={libro_feed_usua5}
            alt="libro_feed_usua5"
          />
          <h5 className="title-book-usuario">23 Otoños antes de ti</h5>
          <div className="rating-usuario">
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_rellena_icon} alt="estrella_rellena_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
            <img src={estrella_vacia_icon} alt="estrella_vacia_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContenedorLibrosUsuario;
