import React, { useState } from "react";
import { Link } from "react-router-dom";
import terror_icon from "../static/icons/cuchillo.png";
import historia_icon from "../static/icons/historia.png";
import desarrollo_personal_icon from "../static/icons/desarrollo_personal.png";
import negocios_icon from "../static/icons/cooperacion.png";
import economia_icon from "../static/icons/economia.png";
import psicologia_icon from "../static/icons/Psicologia.png";
import suspenso_icon from "../static/icons/gritar.png";
import fantasia_icon from "../static/icons/fantasia.png";
import ciencia_ficcion_icon from "../static/icons/ciencia-ficcion.png";
import misterio_icon from "../static/icons/anonimo.png";
import comedia_icon from "../static/icons/comedia.png";
import corazon_icon from "../static/icons/corazon (1).png";
import drama_icon from '../static/icons/mascara-de-teatro.png'

function ModalPersonasAmigos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-Miperfil" onClick={openModal}>
        Editar Perfil
      </button>

      {isModalOpen && (
        <div className="modal-overlay-Miperfil" onClick={closeModal}>
          <div
            className="modal-content-Miperfil"
            onClick={(e) => e.stopPropagation()}
          >
            <div></div>
            <div className="Header-modal-Miperfil">
              <button className="close-btn-Miperfil" onClick={closeModal}>&times;</button>
              <h2 className="titulo-modal-Miperfil">Editar perfil</h2>
              <button type="submit"className="guardar-cambios-btn-miperfil-usuario">
                  Guardar
              </button>

            </div>

            <div className="modal-Miperfil-content">
              <form className="edit-form-Miperfil">
                <label
                  htmlFor="profilePhoto"
                  className="edit-form-label-Miperfil"
                >
                  Nueva Foto de Perfil
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  className="edit-form-input-Miperfil"
                />

                <label htmlFor="banner" className="edit-form-label-Miperfil">
                  Nuevo Banner
                </label>
                <input
                  type="file"
                  id="banner"
                  name="banner"
                  className="edit-form-input-Miperfil"
                />

                <label htmlFor="username" className="edit-form-label-Miperfil">
                  Nombre
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue="Thebest_Kpop✨"
                  className="edit-form-input-Miperfil"
                />

                <label htmlFor="biografia" className="edit-form-label-Miperfil">
                  Biografía
                </label>
                <textarea
                  id="biografia"
                  name="biografia"
                  className="edit-form-textarea-Miperfil"
                  defaultValue="books, kdramas, voley Army | Carat"
                />

                <label htmlFor="pais" className="edit-form-label-Miperfil">
                  País
                </label>
                <select
                  id="pais"
                  name="pais"
                  className="edit-form-select-Miperfil"
                >
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Mexico">México</option>
                  <option value="Peru">Perú</option>
                  <option value="Spain">España</option>
                  <option value="USA">Estados Unidos</option>
                </select>

                <label htmlFor="genero" className="edit-form-label-Miperfil">
                  Género
                </label>
                <select
                  id="genero"
                  name="genero"
                  className="edit-form-select-Miperfil"
                >
                  <option value="femenino">Femenino</option>
                  <option value="masculino">Masculino</option>
                  <option value="otro">Otro</option>
                  <option value="prefiero_no_decirlo">
                    Prefiero no decirlo
                  </option>
                </select>

                <div className="genre-preferences-container">
                  <label className="edit-form-label-Miperfil">
                    Preferencias de Género
                  </label>
                  <div className="checkbox-group-Miperfil">
                    <input
                      type="checkbox"
                      id="genre-fantasy"
                      name="genres"
                      defaultValue="Fantasy"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-fantasy"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={fantasia_icon}
                        alt="Fantasía"
                        className="genre-icon-Miperfil"
                      />
                      Fantasía
                    </label>

                    <input
                      type="checkbox"
                      id="genre-scifi"
                      name="genres"
                      defaultValue="Science Fiction"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-scifi"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={ciencia_ficcion_icon}
                        alt="Ciencia Ficción"
                        className="genre-icon-Miperfil"
                      />
                      Ciencia Ficción
                    </label>

                    <input
                      type="checkbox"
                      id="genre-mystery"
                      name="genres"
                      defaultValue="Mystery"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-mystery"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={misterio_icon}
                        alt="Misterio"
                        className="genre-icon-Miperfil"
                      />
                      Misterio
                    </label>

                    <input
                      type="checkbox"
                      id="genre-terror"
                      name="genres"
                      defaultValue="Terror"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-romance"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={terror_icon}
                        alt="Terror"
                        className="genre-icon-Miperfil"
                      />
                      Terror
                    </label>

                    <input
                      type="checkbox"
                      id="genre-comedy"
                      name="genres"
                      defaultValue="Comedy"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-comedy"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={comedia_icon}
                        alt="Comedia"
                        className="genre-icon-Miperfil"
                      />
                      Comedia
                    </label>

                    <input
                      type="checkbox"
                      id="genre-suspense"
                      name="genres"
                      defaultValue="Suspense"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-suspense"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={suspenso_icon}
                        alt="Suspenso"
                        className="genre-icon-Miperfil"
                      />
                      Suspenso
                    </label>

                    <input
                      type="checkbox"
                      id="genre-romance"
                      name="genres"
                      defaultValue="Romance"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-romance"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={corazon_icon}
                        alt="Romance"
                        className="genre-icon-Miperfil"
                      />
                      Romance
                    </label>

                    <input
                      type="checkbox"
                      id="genre-historia"
                      name="genres"
                      defaultValue="Historia"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-historia"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={historia_icon}
                        alt="Historia"
                        className="genre-icon-Miperfil"
                      />
                      Historia
                    </label>

                    <input
                      type="checkbox"
                      id="genre-desarrolloP"
                      name="genres"
                      defaultValue="DesarrolloP"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-desarrolloP"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={desarrollo_personal_icon}
                        alt="DesarrolloP"
                        className="genre-icon-Miperfil"
                      />
                      Desarrollo Personal
                    </label>

                    <input
                      type="checkbox"
                      id="genre-negocios"
                      name="genres"
                      defaultValue="Negocios"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-negocios"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={negocios_icon}
                        alt="Negocios"
                        className="genre-icon-Miperfil"
                      />
                      Negocios
                    </label>

                    <input
                      type="checkbox"
                      id="genre-economia"
                      name="genres"
                      defaultValue="Economia"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-negocios"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={economia_icon}
                        alt="Negocios"
                        className="genre-icon-Miperfil"
                      />
                      Economía
                    </label>

                    <input
                      type="checkbox"
                      id="genre-negocios"
                      name="genres"
                      defaultValue="Negocios"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-negocios"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={drama_icon}
                        alt="Negocios"
                        className="genre-icon-Miperfil"
                      />
                      Drama
                    </label>

                    <input
                      type="checkbox"
                      id="genre-psicología"
                      name="genres"
                      defaultValue="Psicología"
                      className="genre-checkbox-Miperfil"
                    />
                    <label
                      htmlFor="genre-psicología"
                      className="genre-label-Miperfil"
                    >
                      <img
                        src={psicologia_icon}
                        alt="Psicología"
                        className="genre-icon-Miperfil"
                      />
                      Psicología
                    </label>
                    {/* Otros géneros adicionales pueden ser añadidos de la misma manera */}
                  </div>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPersonasAmigos;
