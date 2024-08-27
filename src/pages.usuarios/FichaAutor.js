import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import foto_ficha_autor from '../static/img/Joana Marcús.jpg';
import corazon_icon_fa from '../static/icons/corazon (1).png';
import disgusto_icon_fa from '../static/icons/disgusto.png';
import libro_reconocido1 from '../static/img/Trilogía Fuego 1_ Ciudades De Humo.jpg';
import libro_reconocido2 from '../static/img/Tres meses.jpeg';
import libro_reconocido3 from '../static/img/Ciudades De Fuego.jpeg';
import libro_reconocido4 from '../static/img/Después De Diciembre.jpeg';

function FichaAutor() {
  return (
    <div>
        <Nav />
        <MenuLateral />
      <main className="main-ficha-autores">
        <div className="container-ficha-autores">
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
          <section className="descripcion-ficha-autor">
            <h2 className="descripcion-autor">Descripción</h2>
            <p className="text-descripcion-autor">
              {" "}
              Divide su tiempo entre sus estudios, sus libros y sus mascotas.
              Desde pequeña supo que le encantaba la escritura, aunque sus
              primeros textos solo fueron pequeños relatos. No fue hasta los
              trece años que se animó a publicar su primera historia completa en
              Wattpad, donde ha seguido escribiendo hasta la actualidad.{" "}
            </p>
          </section>
          <div className="gustos-container-ficha-autor">
            <div>
              <button className="gustos-boton-ficha-autor">
                <img
                  className="img-gusto-ficha-autor"
                  src={corazon_icon_fa}
                  alt="Corazón"
                />
              </button>
            </div>
            <div>
              <button className="gustos-boton-ficha-autor">
                <img
                  className="img-gusto-ficha-autor"
                  src={disgusto_icon_fa}
                  alt="Disgusto"
                />
              </button>
            </div>
          </div>
          <section className="recognized-recomendacion-ficha-autor">
            <h2 className="title-section-ficha-autor">Libros reconocidos</h2>
            <div className="recomendacion-libros-autor">
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido1}
                  alt="Ciudad de humo"
                />
                <p className="name-title-ficha-autor">Ciudad de humo</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido2}
                  alt="Tres meses"
                />
                <p className="name-title-ficha-autor">Tres meses</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido3}
                  alt="Ciudad de fuego"
                />
                <p className="name-title-ficha-autor">Ciudad de fuego</p>
              </div>
              <div className="libros-ficha-autores">
                <img
                  className="img-libro-ficha-autor"
                  src={libro_reconocido4}
                  alt="Después de diciembre"
                />
                <p className="name-title-ficha-autor">Después de diciembre</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FichaAutor;
