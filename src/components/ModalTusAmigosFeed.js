// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import modal1_foto_amigo5 from '../static/img/dp10.jpeg';
// import modal1_foto_amigo4 from '../static/img/dp1.jpg';
// import modal1_foto_amigo3 from '../static/img/dp11.jpeg';
// import modal1_foto_amigo2 from '../static/img/dp12.jpeg';
// import modal1_foto_amigo from '../static/img/dp3.jpg';


// function AmigosModal() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <button type="button" className="ver-mas" onClick={openModal}>
//         Ver Amigos
//       </button>

//       {isModalOpen && (
//         <div className="modal show" style={{ display: 'block' }} tabIndex={-1}>
//           <div className="modal-dialog modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="amigosModalLabel">TUS AMIGOS</h5>
//                 <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
//               </div>
//               <div className="modal-body">
//                 <div className="modal-amigos-container">
//                   <div className="modal-amigos d-flex align-items-center mb-3">
//                     <img className="modal-img-amigo rounded-circle me-2" src={modal1_foto_amigo} alt="JackRoss^.^" width="50" height="50" />
//                     <Link to="/perfil-jackross" className="modal-title-amigo">JackRoss^.^</Link>
//                   </div>
//                   <div className="modal-amigos d-flex align-items-center mb-3">
//                     <img className="modal-img-amigo rounded-circle me-2" src={modal1_foto_amigo2} alt="ottoke_ottoke♡" width="50" height="50" />
//                     <Link to="/perfil-ottoke" className="modal-title-amigo">ottoke_ottoke♡</Link>
//                   </div>
//                   <div className="modal-amigos d-flex align-items-center mb-3">
//                     <img className="modal-img-amigo rounded-circle me-2" src={modal1_foto_amigo3} alt="Art15_☆" width="50" height="50" />
//                     <Link to="/perfil-art15" className="modal-title-amigo">Art15_☆</Link>
//                   </div>
//                   <div className="modal-amigos d-flex align-items-center mb-3">
//                     <img className="modal-img-amigo rounded-circle me-2" src={modal1_foto_amigo4} alt="Taylor2.0✶" width="50" height="50" />
//                     <Link to="/perfil-taylor" className="modal-title-amigo">Taylor2.0✶</Link>
//                   </div>
//                   <div className="modal-amigos d-flex align-items-center mb-3">
//                     <img className="modal-img-amigo rounded-circle me-2" src={modal1_foto_amigo5} alt="Wonwoo_♥" width="50" height="50" />
//                     <Link to="/perfil-wonwoo" className="modal-title-amigo">Wonwoo_♥</Link>
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AmigosModal;