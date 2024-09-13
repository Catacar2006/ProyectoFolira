import React from "react";
import medala1_miperfil from "../static/icons/iniciar-sesion (1).png";
import ModalListaInsignias from '../components/InisgniasMiPerfil';
import axios from 'axios';

const handleLogout = async () => {
    try {
        // Enviar solicitud de cierre de sesión al backend usando axios
        await axios.post('http://localhost:9906/api/auth/logout/', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Eliminar token del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // Eliminar cualquier otro dato del usuario que hayas guardado

        // Redirigir al login
        window.location.href = '/';
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

function MedallasMiPerfil (){
    return(
        <div>
              {/* medallas */}
          <div className="medallas-miperfil">
            <h3 className="name-medalla-miperfil">Más Opciones</h3>
            <div className="tipo-medalla-miperfil">
              <span className="medalla-espacio-miperfil">
              <button className="button-medalla-espacio-miperfil" onClick={handleLogout}>
                <img
                  src={medala1_miperfil}
                  alt="inicio-sesion"
                  className="img-medall-miperfil"
                />
                Cerrar sesion
                </button>
              </span>
            
              <span className="medalla-espacio-miperfil">
                <ModalListaInsignias />
              </span>
            </div>
          </div>
        </div>
    );
};

export default MedallasMiPerfil;