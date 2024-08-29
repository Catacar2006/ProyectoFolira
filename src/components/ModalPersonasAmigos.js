import React, { useState } from 'react';
import amigo1 from '../static/img/dp12.jpeg'


function ModalPersonasAmigos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="ver-mas-gustarA" onClick={openModal}>
        Ver Perfiles
      </button>

      {isModalOpen && (
        <div className="modal-overlay-gustarA" onClick={closeModal}>
          <div className="modal-content-gustar" onClick={(e) => e.stopPropagation()}>
            <div className='Header-modalA'>
            <button className="close-btn" onClick={closeModal}>&times;</button>
              <h2 className='titulo-modalAmigos'>PERSONAS QUE TE PUEDEN GUSTAR</h2>
            </div>
            <div className='modal-gustarA-content'>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 1" />
                <p className='name-usuar-gustarA'>Usuario 1</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 2" />
                <p className='name-usuar-gustarA'>Usuario 2</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 3" />
                <p className='name-usuar-gustarA'>Usuario 3</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 4" />
                <p className='name-usuar-gustarA'>Usuario 4</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 2" />
                <p className='name-usuar-gustarA'>Usuario 2</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 3" />
                <p className='name-usuar-gustarA'>Usuario 3</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 4" />
                <p className='name-usuar-gustarA' >Usuario 4</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 4" />
                <p className='name-usuar-gustarA'>Usuario 4</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 2" />
                <p className='name-usuar-gustarA'>Usuario 2</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 3" />
                <p className='name-usuar-gustarA'>Usuario 3</p>
              </div>

              <div className="profile">
                <img className='img-gustarA' src={amigo1} alt="Usuario 4" />
                <p className='name-usuar-gustarA' >Usuario 4</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPersonasAmigos;