import React from 'react';
import "./SectionCoaches.css";
import "./Button"
import Imagen2 from './Img2.png'
import Imagen3 from './Img3.png'
import Imagen4 from './Img4.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SectionCoaches = () => {
  const navigate = useNavigate();
  const handleRegistroPrincipalClick = () => {
    navigate('/registroPrincipal');
  };
    
  return (
  <section className="main-content">
    <div className="column">
      <div className="container container-coaches">
        
        <img src={Imagen2} alt="Imagen 1" className="image image1" />
        <img src={Imagen3} alt="Imagen 2" className="image image2" />
        <img src={Imagen4} alt="Imagen 3" className="image image3" />
      </div>
    </div>
    <div className="column">
      <div className="headline">
        <h2>
          Haz crecer tu <span className="highlight">carrera</span>
        </h2>
        <p>
          Potencia tu futuro profesional al ayudar a microempresas a desarrollar
          sus plataformas digitales. Sé el motor del cambio y la innovación,
          abriendo caminos hacia nuevas oportunidades y contribuyendo al éxito
          en el dinámico mundo digital.
        </p>
        <button className="cta-button" type="button" onClick={handleRegistroPrincipalClick}>
          Regístrate
        </button>
      </div>
    </div>
  </section> 
);}

export default SectionCoaches;
