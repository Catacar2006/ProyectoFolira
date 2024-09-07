import React from "react";

import comunidad7 from '../static/img/cp7.jpg';
import comunidad2 from '../static/img/cp8.jpeg';
import comunidad12 from '../static/img/c8.jpg';
import comunidad3 from '../static/img/C1.jpg';
import comunidad4 from '../static/img/c2.jpg';

function SeccionComunidad1 () {
    return(
        <div>
            
        <div>
            <h2 className="title-section-comunidad">
            Comunidades que te interesen
            </h2>
        </div>
            <div className="container-comunidad">
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad7} alt="" />
            <h5 className="title-comunidad">Los inestables</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad2} alt="" />
            <h5 className="title-comunidad">Un escape del mundo real</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad12} alt="" />
            <h5 className="title-comunidad">Yo no supero, tu no superas</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad3} alt="" />
            <h5 className="title-comunidad">My life are the books</h5>
          </div>
          <div className="comunidades">
            <img className="img-comunidad" src={comunidad4} alt="" />
            <h5 className="title-comunidad">My Life is pretty</h5>
          </div>
        </div>

        </div>
    );
}

export default SeccionComunidad1;