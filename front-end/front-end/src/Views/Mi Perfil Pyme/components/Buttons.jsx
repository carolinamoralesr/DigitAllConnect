import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttons.css";

const Buttons = () => {
     const navigate = useNavigate();

     const handleButtonClick = () => {
       navigate("/inicioPyme/");
     };

  return (
    <div className="Mybuttons">
      <button className="Myybtn blue" onClick={handleButtonClick}>
        Volver al inicio
      </button>
    </div>
  );
};

export default Buttons;
