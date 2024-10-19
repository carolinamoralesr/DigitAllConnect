import "./CoachHeader.css";
import ImgPrincipal from "../assets/logo1.png"; // Importa tu imagen principal aquí

function CoachHeader() {
  return (
    <div className="coach-header-container">
      <div className="columnc">
        <header className="App-headerc">
          <img
            src={ImgPrincipal}
            alt="DigitAll Connect Imagen"
            className="ImgPrincipal"
          />
        </header>
      </div>
      <div className="columnc">
        <header className="App-headerc">
          <h1 className="tituloprincipal">
            <span className="highlight">DigitAll Connect</span> te ofrece un
            mundo de oportunidades.
          </h1>
        </header>
      </div>
    </div>
  );
}

export default CoachHeader;
