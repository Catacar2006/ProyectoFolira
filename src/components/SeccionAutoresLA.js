import React from "react";
import autor1 from '../static/img/Gabriel García Márquez.jpg';
import autor2 from '../static/img/burgos_julia.jpg';
import autor3 from '../static/img/Las frases de Mario Benedetti.jpg';
import autor4 from '../static/img/Mario Vargas Llosa.jpeg';
import autor5 from '../static/img/Laura-Restrepo.jpeg';

function SeccionAutoresLA (){
    return(
        <div>
            {/* otro contendio */}
        <div className="container-autores">
          <div className="autor">
            <img
              className="img-autor"
              src={autor1}
              alt="autor1"
            />
            <h5 className="title-autor">Gabriel García Márquez</h5>
          </div>
          <div className="autor">
            <img
              className="img-autor"
              src={autor2}
              alt="autor2"
            />
            <h5 className="title-autor">Burgos Julia</h5>
          </div>
          <div className="autor">
            <img
              className="img-autor"
              src={autor3}
              alt="autor3"
            />
            <h5 className="title-autor">Mario Benedetti</h5>
          </div>
          <div className="autor">
            <img
              className="img-autor"
              src={autor4}
              alt="autor4"
            />
            <h5 className="title-autor">Mario Vargas Llosa</h5>
          </div>
          <div className="autor">
            <img
              className="img-autor"
              src={autor5}
              alt="autor5"
            />
            <h5 className="title-autor">Luara Restrepo</h5>
          </div>
        </div>
        </div>
    );
};


export default SeccionAutoresLA;