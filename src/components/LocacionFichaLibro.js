import React, { useState } from "react";
import flecha_baja from "../static/icons/flechita abajo.png";

function LocacionFichaLibro() {
  const [showVirtualModal, setShowVirtualModal] = useState(false);
  const [showPhysicalModal, setShowPhysicalModal] = useState(false);

  const openVirtualModal = () => setShowVirtualModal(true);
  const closeVirtualModal = () => setShowVirtualModal(false);

  const openPhysicalModal = () => setShowPhysicalModal(true);
  const closePhysicalModal = () => setShowPhysicalModal(false);

  return (
    <div>
      <div className="ficha-libro-locations">
        <p className="text-location-libro">
          <strong>Lo puedes encontrar en</strong>
        </p>
        <div className="locations-list-ficha-libro">
          <div className="location-item-ficha-libro">
            <p className="store-ficha-libro">Bibliotecas virtuales</p>
            <button className="btn-flecha-libro" onClick={openVirtualModal}>
              <img
                className="img-flecha-libro"
                src={flecha_baja}
                alt="Flecha para bibliotecas virtuales"
              />
            </button>
          </div>

          <div className="location-item-ficha-libro">
            <p className="store-ficha-libro">Bibliotecas físicas</p>
            <button className="btn-flecha-libro" onClick={openPhysicalModal}>
              <img
                className="img-flecha-libro"
                src={flecha_baja}
                alt="Flecha para bibliotecas físicas"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Bibliotecas Virtuales */}
      {showVirtualModal && (
        <div className="modal-overlay-location">
          <div className="modal-content-location">
            <div className="modal-header-location">
              <h2 className="modal-title-location">Bibliotecas Virtuales</h2>
              <button className="close-btn-location" onClick={closeVirtualModal}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Virtual ABC</p>
                <p><strong>Ubicación:</strong> En línea</p>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Modal de Bibliotecas Físicas */}
      {showPhysicalModal && (
        <div className="modal-overlay-location">
          <div className="modal-content-location">
            <div className="modal-header-location">
              <h2 className="modal-title-location">Bibliotecas Físicas</h2>
              <button className="close-btn-location" onClick={closePhysicalModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>

              <div className="card-calificacion-location">
                <p><strong>Nombre:</strong> Biblioteca Central</p>
                <p><strong>Ubicación:</strong> Calle 123, Ciudad ABC</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocacionFichaLibro;
