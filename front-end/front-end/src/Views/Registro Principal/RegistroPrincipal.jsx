import { Link, useNavigate, useLocation } from "react-router-dom";

import "./RegistroPrincipal.css";
import img_pyme from "./components/img/pyme.png";
import img_coach from "./components/img/coach.png";
import Card from "./components/title/Card";
import Title from "./components/title/Title";
import Entry from "./components/title/Entry";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistroPymeClick = () => {
    navigate("/registroPyme");
  };

  const handleRegistroCoachClick = () => {
    navigate("/registroCoach");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDudaClick = () => {
    navigate("/sobreNosotros");
  };


  return (
    <div className="Registro-principal">
      <Title titlecontent={"¿Cuál es tu perfil?"} />
      <Card
        card_title={"Tengo una Pyme"}
        imagen={img_pyme}
        className="IMAGENPYMEREGISTROP"
        pregunta={
          "¿Estás buscando nuevas formas de llegar a tu público objetivo? Un experto en redes sociales puede ayudarte a alcanzar tus objetivos."
        }
        req={"Requisitos"}
        req1={"- Ser mayor de 18 años"}
        req2={"- Debes pertenecer a una micro, mini o mediana empresa"}
        text_button={"Registro Pyme"}
        dudas={"Si tienes dudas, click aquí"}
        onClick={handleRegistroPymeClick}
        onClickduda={handleDudaClick}
      />

      <Card
        card_title={"Quiero ser Coach"}
        imagen={img_coach}
        pregunta={
          "¿Eres publicista, especialista en marketing digital, creador de contenido o similar? ¡Aporta tu talento y ayuda a las pymes a alcanzar sus metas!"
        }
        req={"Requisitos"}
        req1={"- Ser mayor de 18 años"}
        req2={"- Puedes ser estudiante o egresado"}
        req3={"- Puedes tener nada o poca experiencia"}
        text_button={"Registro Coach"}
        dudas={"Si tienes dudas, click aquí"}
        onClick={handleRegistroCoachClick}
        onClickduda={handleDudaClick}
        
      />

      <Entry 
        text_ingreso={"Si ya tienes cuenta, INGRESA AQUÍ"} 
        onClick={handleLoginClick}
        />

    </div>
  );
}

export default App;
