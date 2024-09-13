import React from "react";

function InformacionPerfilUsuario({ userData }){
    return(
        <div>
            {/* Sección de Información */}
          {/* informacion */}
          <div className="informacion-perfil-usuario">
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Correo |</span>
              <span className="value-perfil-usuario">{userData?.correo}</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Fecha Nacimiento |</span>
              <span className="value-perfil-usuario">{userData?.fechaNacimiento}</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">Género |</span>
              <span className="value-perfil-usuario">{userData?.genero}</span>
            </div>
            <div className="item-perfil-usuario">
              <span className="label-perfil-usuario">País |</span>
              <span className="value-perfil-usuario">{userData?.pais}</span>
            </div>
          </div>
        </div>
    );
};

export default InformacionPerfilUsuario;