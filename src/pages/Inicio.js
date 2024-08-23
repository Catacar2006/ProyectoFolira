import React from  'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../components/layout/RegisterModal';
import conectar_personas from "../static/icons/conectar-personas.png";
import calificar_estrella from "../static/icons/calificar-estrella.png"
import explorar_titulos from  "../static/icons/explorar-titulos.png";
import no_venta2 from "../static/icons/no-venta2.png";
import contenido_inapropiado2 from  "../static/icons/contenido-inapropiado2.png";
import denuncia2 from  "../static/icons/denuncia2.png";
import Logo_white from "../static/img/Logo-White.jpeg";
import LoginModal from '../components/layout/LoginModal';



function Inicio() {
    return(
<div>
  <header className="header">
    <div className="menu-container">
      <img src={Logo_white} alt="Logo" className="logo-img" />
      <nav className="nav">
        <RegisterModal />
        <LoginModal />
      </nav>
    </div>
    <div className="header-content container">
      <h1>Explora un Mundo de Libros y Conexiones</h1>
      <p>
        Imagina un lugar donde cada página de tu libro favorito puede llevarte a nuevas amistades. 
        En nuestra comunidad, encontrarás personas que comparten tu amor por la lectura y podrán 
        discutir contigo sobre los últimos lanzamientos, clásicos inolvidables y todo lo que está 
        entre medio. Únete a nosotros para descubrir una red vibrante de lectores apasionados, 
        crear conexiones significativas y sumergirte en debates fascinantes sobre tus libros favoritos.
      </p>
    </div>
  </header>
  <section className="book"> 
    <div className=" book-content container">
      <div className="book-group">
        <div className="book-1">
          <img src={conectar_personas} alt=""/>
          <h3>Conecta con Lectores</h3>
          <p>Encuentra y únete a comunidades de lectura, 
            donde podrás compartir opiniones y descubrir nuevos amigos con 
            intereses similares.
          </p>
        </div>
        <div className="book-1">
          <img src={calificar_estrella} alt=""/>
          <h3>Califica y Revisa</h3>
          <p>
            Califica tus libros favoritos y deja reseñas detalladas
            para ayudar a otros a encontrar su próxima lectura 
            perfecta.
          </p>
        </div>
        <div className="book-1">
          <img src={explorar_titulos} alt=""/>
          <h3>Explora Nuevos Título</h3>
          <p>
            Descubre una amplia variedad de libros a través 
            de nuestras recomendaciones personalizadas y listas 
            de lectura.
          </p>
        </div>
      </div>
    </div>
  </section>
  <main className="services">
    <div className="services-group">
      <div className="services-1">
        <img src={no_venta2} alt="" />
        <h3>No Promovemos la Venta de Libros</h3>
      </div>
      <div className="services-1">
        <img src={contenido_inapropiado2} alt =""/>
        <h3>No Se Permite el Contenido Inapropiado</h3>
      </div>
      <div className="services-1">
        <img src={denuncia2} alt="" />
        <h3>Sistema de Denuncias Activo</h3>
      </div>
    </div>
    <p>
      En nuestra plataforma, nos dedicamos a promover la 
      interacción y el intercambio de ideas entre amantes 
      de los libros, sin involucrarnos en la venta de libros 
      o productos. Mantenemos un entorno seguro y respetuoso, 
      por lo que no permitimos contenido inapropiado o que 
      infrinja nuestras normas. Si encuentras algo que no cumpla 
      con nuestras políticas, te ofrecemos un sistema de denuncias 
      activo para que podamos tomar las medidas necesarias y 
      mantener la calidad de nuestra comunidad.
    </p>
  </main>
  <section className="general">
    <div className="general-1">
      <h2>Encuentra a Tu Nuevo Escritor Favorito</h2>
      <p>
        Explora una amplia gama de escritores y descubre aquellos que se ajustan a tus gustos literarios. 
        Ya sea que prefieras autores contemporáneos, clásicos o de géneros específicos, nuestra plataforma 
        te permite encontrar y seguir a los escritores que más te interesan. Lee sus biografías, consulta sus 
        obras y mantente al tanto de sus últimas publicaciones.
      </p>
    </div>
    <div className="general-2" />
  </section>
  <section className="general">
    <div className="general-3" /> {/* Imagen al lado izquierdo */}
    <div className="general-1"> {/* Contenido al lado derecho */}
      <h2>Explora Géneros Literarios</h2>
      <p>
        Sumérgete en una variedad de géneros literarios y encuentra tus nuevas lecturas favoritas. Desde 
        ficción hasta no ficción, ciencia ficción, fantasía, y más, nuestra plataforma te ayuda a explorar 
        diferentes categorías y descubrir libros que se ajusten a tus intereses. Navega por nuestras colecciones 
        y encuentra el género que resuena contigo.
      </p>
    </div>
  </section>
  <footer className="footer">
    <div className="footer-content container">
      <div className="footer-section">
        <h3>Sobre Nosotros</h3>
        <p>En nuestra plataforma, nos dedicamos a conectar a los amantes de los libros y promover la interacción en un entorno seguro y respetuoso.</p>
      </div>
      <div className="footer-section">
        <h3>Enlaces Útiles</h3>
        <a href>Terminos y condiciones</a>
      </div>
      <div className="footer-section">
        <h3>Síguenos</h3>
        <ul>
          <li><Link to="#">Facebook</Link></li>
          <li><Link to="#">Twitter</Link></li>
          <li><Link to="#">Instagram</Link></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    );
};

export default Inicio;