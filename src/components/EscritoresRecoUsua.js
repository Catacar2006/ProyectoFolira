import React from "react";
import autor_feed_usua1 from "../static/img/Gabriel García Márquez.jpg";
import autor_feed_usua2 from "../static/img/Joana Marcús.jpg";
import autor_feed_usua3 from "../static/img/Stephen King.jpg";
import autor_feed_usua4 from "../static/img/j.K.jpg";
import autor_feed_usua5 from "../static/img/Laura-Restrepo.jpeg";
import { Link } from "react-router-dom";

function ContenedorRecoUsuau() {
  return (
    <div>
      <div>
        <h3 className="section-usuario">Escritores que te recomendamos</h3>
      </div>
      <div className="container-autores">
        <div className="autor">
          <img
            className="img-autor"
            src={autor_feed_usua1}
            alt="autor_feed_usua1"
          />
          <h5 className="title-autor">Gabriel García Márquez</h5>
        </div>
        <div className="autor">
          <img
            className="img-autor"
            src={autor_feed_usua2}
            alt="autor_feed_usua2"
          />
          <h5 className="title-autor">Joana Marcús</h5>
        </div>
        <div className="autor">
          <img
            className="img-autor"
            src={autor_feed_usua3}
            alt="autor_feed_usua3"
          />
          <h5 className="title-autor">Stephen King</h5>
        </div>
        <div className="autor">
          <img
            className="img-autor"
            src={autor_feed_usua4}
            alt="autor_feed_usua4"
          />
          <h5 className="title-autor">J.K Rowling</h5>
        </div>
        <div className="autor">
          <img
            className="img-autor"
            src={autor_feed_usua5}
            alt="autor_feed_usua5"
          />
          <h5 className="title-autor">Luara Restrepo</h5>
        </div>
        <div className="link-libro-mas">
          <Link to="/GeneralLibros" className="ver-mas-libros-link">
            Ver más libros
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContenedorRecoUsuau;
