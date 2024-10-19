import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttonss.css";

const Buttonss = ({ coachId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/inicioCoach");
  };

  return (
    <div className="buttonss">
      <button className="btn blue" onClick={handleButtonClick}>
        Volver al inicio
      </button>
    </div>
  );
};

export default Buttonss;
