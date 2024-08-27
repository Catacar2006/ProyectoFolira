import React from "react";
import foto_ficha_autor from '../static/img/Joana Marcús.jpg';

function DatosFichaAutor (){
    return(
        <div>
            <div>
            <section className="Info-ficha-autor">
              <div>
                <img
                  className="img-ficha-autor"
                  src={foto_ficha_autor}
                  alt="foto_ficha_autor"
                />
              </div>
              <div className="detalles-ficha-autor">
                <p className="info-detalle-ficha-autor">
                  <strong style={{ color: "#503b31" }}>Nombre:</strong> Joana
                  Marcús
                </p>
                <br />
                <p className="info-detalle-ficha-autor">
                  <strong style={{ color: "#503b31" }}>País:</strong> Mallorca,
                  España
                </p>
                <br />
                <p className="info-detalle-ficha-autor">
                  <strong style={{ color: "#503b31" }}>Nacimiento:</strong> 30
                  de junio de 2000
                </p>
                <br />
                <p className="info-detalle-ficha-autor">
                  <strong style={{ color: "#503b31" }}>Años activa:</strong>{" "}
                  2011 - Presente
                </p>
                <br />
                <p className="info-detalle-ficha-autor">
                  <strong style={{ color: "#503b31" }}>Distinciones:</strong>{" "}
                  Premio Wattys 2016 y 2018
                </p>
              </div>
            </section>
          </div>
        </div>
    );
};

export default DatosFichaAutor;