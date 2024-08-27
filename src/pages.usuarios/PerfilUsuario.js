import React from "react";
import Nav from "../components/layout/Nav";
import MenuLateral from "../components/layout/MenuLateral";
import banner_perfilusuartio from '../static/img/banner_usua.jpeg';
import foto_perfilusua from '../static/img/dp4.jpeg';
import cuchillo_icon from '../static/icons/cuchillo.png';
import ciencia_ficcion_icon from '../static/icons/ciencia-ficcion.png';
import crecimiento_icon from '../static/icons/crecimiento.png';
import corazon_icon from '../static/icons/corazon (1).png';
import comedia_icon from '../static/icons/comedia.png';
import foto_usua1_miperfil from '../static/img/cp7.jpg';
import foto_usua2_miperfil from '../static/img/cp8.jpeg';
import foto_usua3_miperfil from '../static/img/cp9.jpeg';
import foto_comunidad1_miperfil from '../static/img/c2.jpg';
import foto_comunidad2_miperfil from '../static/img/c3.jpg';
import foto_comunidad3_miperfil from '../static/img/c4.jpg';
import foto_comunidad4_miperfil from '../static/img/c5.jpg';
import foto_comunidad5_miperfil from '../static/img/c6.jpg';
import foto_comunidad6_miperfil from '../static/img/c7.jpg';
import medala1_miperfil from '../static/icons/iniciar-sesion (1).png';
import medala2_miperfil from '../static/icons/social (1).png';

function PerfilUsuario() {
  return (
    <div className="body-perfil-usuario">
        <Nav />
        <MenuLateral />
        {/* Main Content */}
        <div className="col-md-9 col-lg-10">
            <main className="main-perfil-usuario">
                {/* Banner y foto usuario */}
                <div className="banner-container-perfil-usuario">
                    <div className="banner-perfil-usuario">
                        <img 
                           className="banner-image-perfil-usuario" 
                           src={banner_perfilusuartio}
                           alt="banner_perfilusuartio" 
                            />
                        <div className="foto-usuario-perfil-usuario">
                        <img 
                            className="profile-photo-perfil-usuario" 
                            src={foto_perfilusua}
                            alt="foto_perfilusua" 
                            />
                            <h4 className="name-usua-perfil-usuario">Moon🌝✨</h4>
                            <button className="editar-btn-perfil-usuario">Seguir</button> {/* Botón Editar */}
                        </div>
                    </div>
                </div>

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
                
                {/* Linea */}
                <div className="line-container-perfil-usuario">
                    <div className="line-perfil-usuario" />
                </div>

                {/* Biografia */}
                <div className="biografia-perfil-usuario">
                    <p className="text-biografia-perfil-usuario">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                        minima nostrum unde ex, magni ipsa asperiores soluta hic earum aut
                        quidem ipsum laudantium dolor nisi accusamus inventore numquam
                    </p>
                </div>

                {/* generos favoritos */}
                <div className="generos-perfil-usuario">
                    <h3 className="title-genero-perfil-usuario">Generos Favoritos</h3>
                    <div className="tipo-generos-perfil-usuario">
                        <span className="genero-perfil-usuario">
                            <img 
                                src={cuchillo_icon} 
                                alt="Terror" 
                                className="img-genero-perfil-usuario" 
                            />
                            Terror
                        </span>
                        <span className="genero-perfil-usuario">
                            <img 
                                src={ciencia_ficcion_icon}
                                alt="Ciencia Ficción" 
                                className="img-genero-perfil-usuario" 
                            />
                            Ciencia Ficción
                        </span>
                        <span className="genero-perfil-usuario">
                            <img 
                                src={crecimiento_icon} 
                                alt="Crecimiento Personal" 
                                className="img-genero-perfil-usuario" 
                            />
                            Crecimeinto Personal
                        </span>
                        <span className="genero-perfil-usuario">
                            <img 
                                src={corazon_icon}
                                alt="Romance"
                                className="img-genero-perfil-usuario" 
                            />
                            Romance
                        </span>
                        <span className="genero-perfil-usuario">
                            <img 
                                src={comedia_icon}
                                alt="Comedia" 
                                className="img-genero-perfil-usuario" 
                                />
                            Comedia
                        </span>
                    </div>
                </div>

                {/* Seccion de amigos */}
                <div className="amigos-perfil-usuario">
                {/* boton de ver mas */}
                <div className="div-ver-mas-perfil-usuario">
                    <button className="boton-ver-mas-perfil-usuario">Ver Más</button>
                </div>
                <h3 className="seccion-title-perfil-usuario">Amigos</h3>
                    <div className="seccion-amigos-perfil-usuario">
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua1_miperfil}
                                alt="Alex_㋛" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">Alex_㋛</p>
                        </div>
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua2_miperfil} 
                                alt="Emma_✩" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">Emma_✩</p>
                        </div>
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua3_miperfil}
                                alt="John_★" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">John_★</p> 
                        </div>
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua1_miperfil} 
                                alt="Alex_㋛" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">Alex_㋛</p>
                        </div>
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua2_miperfil} 
                                alt="Emma_✩" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">Emma_✩</p>
                        </div>
                        <div className="foto-amigo-perfil-usuario">
                            <img 
                                src={foto_usua3_miperfil} 
                                alt="John_★" 
                                className="img-amigo-perfil-usuario" 
                            />
                            <p className="name-usuar-perfil-usuario">John_★</p>
                        </div>
                    </div>
                </div>


                {/* Comunidades */}
                <div className="comunidades-perfil-usuario">
                    {/* boton de ver mas */}
                    <div className="div-ver-mas-perfil-usuario">
                        <button className="boton-ver-mas-perfil-usuario">Ver Más</button>
                    </div>
                    <h3 className="seccion-title-perfil-usuario">Comunidades</h3>
                    <div className="seccion-comunidad-perfil-usuario">
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad1_miperfil} 
                                alt="Alex_㋛" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">Alex_㋛</p>
                        </div>
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad2_miperfil}
                                alt="Emma_✩" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">Emma_✩</p>
                        </div>
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad3_miperfil}
                                alt="John_★" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">John_★</p>
                        </div>
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad4_miperfil} 
                                alt="Alex_㋛" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">Alex_㋛</p>
                        </div>
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad5_miperfil} 
                                alt="Emma_✩" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">Emma_✩</p>
                        </div>
                        <div className="foto-comunidad-perfil-usuario">
                            <img 
                                src={foto_comunidad6_miperfil} 
                                alt="John_★" 
                                className="img-comunidad-perfil-usuario" 
                            />
                            <p className="name-comuni-perfil-usuario">John_★</p>
                        </div>
                    </div>
                </div>

                {/* medallas */}
                <div className="medallas-section-perfil-usuario">
                    <h3 className="title-medalla-perfil-usuario">Medallas</h3>
                    <div className="tipo-medalla-perfil-usuario">
                        <span className="medalla-perfil-usuario">
                        <img 
                            src={medala1_miperfil}
                            alt="inicio-sesion" 
                            className="img-medalla-perfil-usuario" 
                        />
                        Inicio de sesion
                        </span>
                        <span className="medalla-perfil-usuario">
                        <img 
                            src={medala2_miperfil}
                            alt="reseña" 
                            className="img-medalla-perfil-usuario" 
                        />
                        Reseñas
                        </span>
                    </div>
                </div>
            </main>
        </div>
    </div>

  );
}

export default PerfilUsuario;
