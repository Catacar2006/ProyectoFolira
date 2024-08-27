import React from "react";

function InformaciónMiperfil () {
    return(
        <div>
            {/* Sección de Información */}
            {/* informacion */}
            <div className="informacion-miperfil">
                <div className="item-miperfil">
                <span className="label-miperfil">Correo |</span>
                <span className="value-miperfil">emmaw23@gmail.com</span>
                </div>
                <div className="item-miperfil">
                <span className="label-miperfil">Fecha Nacimiento |</span>
                <span className="value-miperfil">15 agosto 2000</span>
                </div>
                <div className="item-miperfil">
                <span className="label-miperfil">Género |</span>
                <span className="value-miperfil">Mujer</span>
                </div>
                <div className="item-miperfil">
                <span className="label-miperfil">País |</span>
                <span className="value-miperfil">Colombia</span>
                </div>
            </div>
        </div>
    );
};

export default InformaciónMiperfil;