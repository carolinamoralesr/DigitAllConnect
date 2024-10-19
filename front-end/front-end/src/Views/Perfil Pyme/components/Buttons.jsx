import React from "react";
import "./Buttons.css";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
     const navigate = useNavigate();

     const handleButtonClick = () => {
       navigate("/");
     };

  return (
    <div className="buttons">
      <button className="Mybtn blue" onClick={handleButtonClick}>
        Volver al inicio
      </button>
      <button className="Mybtn purple">Contactar</button>
    </div>
  );
};

export default Buttons;

/*Cambio clase btn a Mybtn*/