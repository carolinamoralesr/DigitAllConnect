import "./PymeHeader.css";
import tutorialIcon from "../assets/tutorial_icon.png"; // Importa tu imagen principal aquí

function PymeHeader() {
  return (
    <div className="pyme-header-container">
      <div className="column">
        <header className="App-header">
          <img
            src={tutorialIcon}
            alt="DigitAll Connect Tutorial"
            className="tutorial-icon"
          />
        </header>
      </div>
      <div className="column">
        <header className="App-header">
          <h1 className="tituloprincipal">
            Aprende a utilizar
            <span className="highlight"> DigitAll Connect</span> con este video
            tutorial
          </h1>
        </header>
      </div>
    </div>
  );
}

export default PymeHeader;
