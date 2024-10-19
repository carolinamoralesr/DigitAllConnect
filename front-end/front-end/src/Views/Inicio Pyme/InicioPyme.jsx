import React from "react";
import "./InicioPyme.css";
import ExternalLink from "./components/ExternalLink";
import CardsSection from "./components/CardsSection"
import PymeHeader from "./components/PymeHeader"
import fondosGobImage from "./assets/fondos_gob.png";
import sercotecImage from "./assets/sercotec.png";
import corfoImage from "./assets/corfo.png";

//correcto
function InicioPyme() {
  return (
      <div className="card-section-container">
        <PymeHeader />
        <CardsSection />
        <h1 className="portafolio">
          ¿Quieres conocer <span className="highlight">otras formas</span> de
          hacer crecer tu pyme?
        </h1>
        <div className="external-links">
          <ExternalLink
            url="https://fondos.gob.cl"
            imageSrc={fondosGobImage}
            altText="fondos.gob.cl"
          />
          <ExternalLink
            url="https://www.sercotec.cl/"
            imageSrc={sercotecImage}
            altText="SERCOTEC"
          />
          <ExternalLink
            url="https://corfo.cl"
            imageSrc={corfoImage}
            altText="CORFO"
          />
        </div>
      </div>
  );
}

export default InicioPyme;
