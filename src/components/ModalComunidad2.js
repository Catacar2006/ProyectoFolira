import React from "react";
import comunidad8 from '../static/img/c4.jpg';
import comunidad9 from '../static/img/c5.jpg';
import comunidad10 from '../static/img/c6.jpg';
import comunidad11 from '../static/img/c7.jpg';
import comunidad6 from '../static/img/cp9.jpeg';
import { Link } from "react-router-dom";

function ModalComunidad2 () {
    return (
        <div>
            {/* Enlace para abrir el modal */}
        <a href="#modal-otra-comunidades" className="ver-mas">
          ver más
        </a>

        {/* Modal de Comunidades */}
        <div id="modal-otra-comunidades" className="modal-comunidades">
          <div className="modal-otra-comunidades-content">
            <Link href="#" className="close-comunidades-otra">
              ×
            </Link>
            <h2 className="modal-comunidad">COMUNIDADES QUE TE INTERESEN</h2>
            <div className="modal-otra-comunidades-container">
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad6}
                  alt=""
                />
                <h5 className="title-comunidad-otra">Un viaje al pasado</h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad8}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  Lo bello de la antiguedad
                </h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad9}
                  alt=""
                />
                <h5 className="title-comunidad-otra">¿Izquierda o Derecha?</h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad10}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  El ayer, el hoy y el mañana
                </h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad11}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  Épocas que cambiaron el hoy
                </h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad6}
                  alt=""
                />
                <h5 className="title-comunidad-otra">Un viaje al pasado</h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad8}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  Lo bello de la antiguedad
                </h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad9}
                  alt=""
                />
                <h5 className="title-comunidad-otra">¿Izquierda o Derecha?</h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad10}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  El ayer, el hoy y el mañana
                </h5>
              </div>
              <div className="comunidades-otra">
                <img
                  className="img-comunidad-otra"
                  src={comunidad11}
                  alt=""
                />
                <h5 className="title-comunidad-otra">
                  Épocas que cambiaron el hoy
                </h5>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default ModalComunidad2;