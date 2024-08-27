import React from "react";

function InformacionPerfilUsuario(){
    return(
        <div>
            {/* Sección de Información */}
          {/* informacion */}
          <div className="informacion-perfil-usuario">
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Correo |</span>
              <span className="value-perfil-usuario">moon25@gmail.com</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Fecha Nacimiento |</span>
              <span className="value-perfil-usuario">13 junio 2013</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Género |</span>
              <span className="value-perfil-usuario">Hombre</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">País |</span>
              <span className="value-perfil-usuario">Brasil</span>
            </div>
          </div>
        </div>
    );
};

export default InformacionPerfilUsuario;