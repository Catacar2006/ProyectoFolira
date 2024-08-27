import React from "react";
import foto_amigo from "../static/img/foto-ami.jpeg";
import foto_amigo2 from "../static/img/Foto_amigo.jpeg";
import foto_amigo3 from "../static/img/dp6.jpeg";
import foto_amigo4 from "../static/img/dp3.jpg";
import foto_amigo5 from "../static/img/dp5.jpeg";

function SeccionTusAmigosFeedA() {
  return (
    <div>
      {/* amigos tuyos */}
      <div className="amigos-container">
        <div className="amigos">
          <img className="img-amigo" src={foto_amigo} alt="foto_amigo" />
          <h5 className="title-amigo">JackRoss^.^</h5>
        </div>
        <div className="amigos">
          <img className="img-amigo" src={foto_amigo2} alt="foto_amigo2" />
          <h5 className="title-amigo">ottoke_ottoke♡</h5>
        </div>
        <div className="amigos">
          <img className="img-amigo" src={foto_amigo3} alt="foto_amigo3" />
          <h5 className="title-amigo">Art15_☆</h5>
        </div>
        <div className="amigos">
          <img className="img-amigo" src={foto_amigo4} alt="fot_amigo4" />
          <h5 className="title-amigo">Taylor2.0✶</h5>
        </div>
        <div className="amigos">
          <img className="img-amigo" src={foto_amigo5} alt="foto_amigo5" />
          <h5 className="title-amigo">Wonwoo_♥</h5>
        </div>
      </div>
    </div>
  );
}

export default SeccionTusAmigosFeedA;
