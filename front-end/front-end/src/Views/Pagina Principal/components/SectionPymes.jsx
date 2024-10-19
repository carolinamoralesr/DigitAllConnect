import React from 'react';
import "./SectionPymes.css";
import Imagen1 from './Img1.png'

const SectionPymes = () => (
  <section className="main-content">
    <div className="column">
      <div className="headline">
        <h1>
          <span className="highlight">Transforma</span> y{" "}
          <span className="highlight">potencia</span> tu negocio
        </h1>
      </div>
      <div className="text-description">
        <p>
          Digitaliza tu pyme e integra soluciones innovadoras para expandir tus
          horizontes. Crea nuevas plataformas digitales y abre la puerta a
          oportunidades sin límites para un crecimiento sostenible y exitoso.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="divider">
        <img src={Imagen1} alt="Imagen de sección" />
      </div>
    </div>
  </section>
);
export default SectionPymes;
