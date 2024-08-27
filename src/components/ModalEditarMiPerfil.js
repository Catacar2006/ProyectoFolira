import React from "react";
import { Link } from "react-router-dom";
import terror_icon from '../static/icons/cuchillo.png';
import historia_icon from '../static/icons/historia.png';
import desarrollo_personal_icon from '../static/icons/desarrollo_personal.png';
import negocios_icon from '../static/icons/cooperacion.png';
import economia_icon from '../static/icons/economia.png';
import psicologia_icon from '../static/icons/Psicologia.png';
import suspenso_icon from '../static/icons/gritar.png';
import fantasia_icon from '../static/icons/fantasia.png';
import ciencia_ficcion_icon from '../static/icons/ciencia-ficcion.png';
import misterio_icon from '../static/icons/anonimo.png';
import comedia_icon from '../static/icons/comedia.png';
import corazon_icon from '../static/icons/corazon (1).png';

function ModalEditarMiPerfil () {
    return(
        <div>
            {/* INICIO MODAL  */}
   
          <div id="editModal" className="modal-miperfil-usuario">
            <div className="modal-content-miperfil-usuario">
              <div className="header-miperfil-usuario ">
                <Link to="#" className="close-miperfil-usuario">
                  ×
                </Link>
                <h2 className="title-editar-miperfil-usuario">Editar perfil</h2>
                <button
                  type="submit"
                  className="guardar-cambios-btn-miperfil-usuario"
                >
                  Guardar
                </button>
              </div>
              <div className="modal-content-body-miperfil-usuario">
                <form className="edit-form">

                  {/* Nueva Foto de Perfil */}
                  <label htmlFor="profilePhoto" className="edit-form-label">
                    Nueva Foto de Perfil
                  </label>
                  <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
                    className="edit-form-input"
                  />

                  {/* Nuevo Banner */}
                  <label htmlFor="banner" className="edit-form-label">
                    Nuevo Banner
                  </label>
                  <input
                    type="file"
                    id="banner"
                    name="banner"
                    className="edit-form-input"
                  />

                  {/* Nombre de usuario */}
                  <label htmlFor="username" className="edit-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue="Thebest_Kpop✨"
                    className="edit-form-input"
                  />

                  {/* Biografia */}
                  <label htmlFor="biografia" className="edit-form-label">
                    Biografía
                  </label>
                  <textarea
                    id="biografia"
                    name="biografia"
                    className="edit-form-textarea"
                    defaultValue={"books, kdramas, voley Army | Carat"}
                  />

                  {/* País */}
                  <label htmlFor="pais" className="edit-form-label">
                    País
                  </label>
                  <select id="pais" name="pais" className="edit-form-select">
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Mexico">México</option>
                    <option value="Peru">Perú</option>
                    <option value="Spain">España</option>
                    <option value="USA">Estados Unidos</option>
                    {/* Agrega más países según sea necesario */}
                  </select>

                  {/* Género */}
                  <label htmlFor="genero" className="edit-form-label">
                    Género
                  </label>
                  <select
                    id="genero"
                    name="genero"
                    className="edit-form-select"
                  >
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                    <option value="otro">Otro</option>
                    <option value="prefiero_no_decirlo">
                      Prefiero no decirlo
                    </option>
                  </select>

                  {/* Preferencias de Género */}
                  <div className="genre-preferences-container">
                    <label className="edit-form-label">
                      Preferencias de Género
                    </label>
                    <div className="checkbox-group">
                      {/* Género Fantasía */}
                      <input
                        type="checkbox"
                        id="genre-fantasy"
                        name="genres"
                        defaultValue="Fantasy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-fantasy" className="genre-label">
                        <img
                          src={fantasia_icon}
                          alt="Fantasía"
                          className="genre-icon"
                        />
                        Fantasía
                      </label>
                      {/* Género Ciencia Ficción */}
                      <input
                        type="checkbox"
                        id="genre-scifi"
                        name="genres"
                        defaultValue="Science Fiction"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-scifi" className="genre-label">
                        <img
                          src={ciencia_ficcion_icon}
                          alt="Ciencia Ficción"
                          className="genre-icon"
                        />
                        Ciencia Ficción
                      </label>
                      {/* Género Misterio */}
                      <input
                        type="checkbox"
                        id="genre-mystery"
                        name="genres"
                        defaultValue="Mystery"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-mystery" className="genre-label">
                        <img
                          src={misterio_icon}
                          alt="Misterio"
                          className="genre-icon"
                        />
                        Misterio
                      </label>
                      {/* Género Terror */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={terror_icon}
                          alt="Terror"
                          className="genre-icon"
                        />
                        Terror
                      </label>
                      {/* Género Suspenso */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={suspenso_icon}
                          alt="Ssupenso"
                          className="genre-icon"
                        />
                        Suspenso
                      </label>
                      {/* Género Romance */}
                      <input
                        type="checkbox"
                        id="genre-romance"
                        name="genres"
                        defaultValue="Romance"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-romance" className="genre-label">
                        <img
                          src={corazon_icon}
                          alt="Romance"
                          className="genre-icon"
                        />
                        Romance
                      </label>
                      {/* Género Comedia */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={comedia_icon}
                          alt="Comedia"
                          className="genre-icon"
                        />
                        Comedia
                      </label>
                      {/* Género Historia */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={historia_icon}
                          alt="Historia"
                          className="genre-icon"
                        />
                        Historia
                      </label>
                      {/* Género Desarrollo Personal */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={desarrollo_personal_icon}
                          alt="Desarrollo Personal"
                          className="genre-icon"
                        />
                        Desarrollo Personal
                      </label>
                      {/* Género Negocios */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={negocios_icon}
                          alt="Negocias"
                          className="genre-icon"
                        />
                        Negocios
                      </label>
                      {/* Género Economia */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={economia_icon}
                          alt="Economia"
                          className="genre-icon"
                        />
                        Economía
                      </label>
                      {/* Género Psicología */}
                      <input
                        type="checkbox"
                        id="genre-comedy"
                        name="genres"
                        defaultValue="Comedy"
                        className="genre-checkbox"
                      />
                      <label htmlFor="genre-comedy" className="genre-label">
                        <img
                          src={psicologia_icon}
                          alt="Psicologia"
                          className="genre-icon"
                        />
                        Psicología
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* FIN MODAL DE EDITAR */}
          
        </div>
    );
};

export default ModalEditarMiPerfil;