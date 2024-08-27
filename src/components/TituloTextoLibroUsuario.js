import React from "react";
import añadir_icon from '../static/icons/añadir.png';

function TituloTextoLibroUsuario(){
    return(
        <div>
             <div>
                <h3 className="title-usuario">Tus Comunidades</h3>
                <img 
                src={añadir_icon}
                alt="añadir_icon" 
                className="add-comunity" />
            </div>
            <div>
            <h3 className="section-usuario">Te recomendamos estos libros</h3>
            </div>
        </div>
    );
};

export default TituloTextoLibroUsuario;