import "./InicioCoach.css";
import CoachHeader from "./components/CoachHeader";
import CardSection from "./components/CardsSection";
import ExternalLink from "./components/ExternalLink";
import Sence from "./assets/imgbne.png";
import BNE from "./assets/imgjunior.png";
import Junior from "./assets/imgsence.png";


function InicioCoach() {
  return (
    <div className="coach-section-container">
      <CoachHeader />
      <CardSection />
      <h1 className="portafolio">
        Conoce <span className="highlight">más formas</span> de hacer crecer tu
        portafolio. En <span className="highlight">DigitAll Connect </span>
        estamos contigo.
      </h1>
      <div className="links-externos">
        <ExternalLink
          url="https://www.bne.cl/"
          imageSrc={Sence}
          altText="SENCE"
        />
        <ExternalLink
          url="https://www.jachile.org/"
          imageSrc={BNE}
          altText="BOLSA NACIONAL DE EMPLEO"
        />
        <ExternalLink
          url="https://sence.gob.cl/"
          imageSrc={Junior}
          altText="JUNIOR ACHIEVEMENT"
        />
      </div>
    </div>
  );
}

export default InicioCoach;
