import React from "react";
import autor1 from '../static/img/Gabriel García Márquez.jpg';
import autor2 from '../static/img/burgos_julia.jpg';
import autor3 from '../static/img/Las frases de Mario Benedetti.jpg';
import autor4 from '../static/img/Mario Vargas Llosa.jpeg';
import autor5 from '../static/img/Laura-Restrepo.jpeg';
import { Link } from "react-router-dom";

function SeccionAutoresLA (){
    return(
        <div>
            {/* otro contendio */}
        <div className="container-autores">
          <div className="autor">
            <Link to="/FichaAutor">
            <img
              className="img-autor"
              src={autor1}
              alt="autor1"
            />
            </Link>
            
            <Link to="/FichaAutor" className="title-autor">
            Gabriel García Márquez
            </Link>
            
          </div>
          <div className="autor">
          <Link to="/FichaAutor">
            <img
              className="img-autor"
              src={autor2}
              alt="autor2"
            />
            </Link>
            
            <Link to="/FichaAutor" className="title-autor">
            Burgos Julia
            </Link>
            
          </div>
          <div className="autor">
          <Link to="/FichaAutor">
            <img
              className="img-autor"
              src={autor3}
              alt="autor3"
            />
            </Link>
            

            <Link to="/FichaAutor" className="title-autor">
            Mario Benedetti
            </Link>

          </div>
          <div className="autor">
          <Link to="/FichaAutor">
            <img
              className="img-autor"
              src={autor4}
              alt="autor4"
            />
            </Link>
            
            <Link to="/FichaAutor" className="title-autor">
            Mario Vargas Llosa
            </Link>

          </div>
          <div className="autor">
          <Link to="/FichaAutor">
            <img
              className="img-autor"
              src={autor5}
              alt="autor5"
            />
            </Link>

            <Link to="/FichaAutor" className="title-autor">
            Luara Restrepo
            </Link>
            
          </div>
        </div>
        </div>
    );
};


export default SeccionAutoresLA;