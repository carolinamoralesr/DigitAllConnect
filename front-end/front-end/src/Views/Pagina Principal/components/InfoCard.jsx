import {useNavigate} from 'react-router-dom';
import React from 'react';
import "./InfoCard.css";
import "./Button"

const InfoCard = ({ heading, benefits, catchFrase, benefitTitle }) => {
  const navigate = useNavigate();
  const handleRegistroPrincipalClick = () => {
    navigate('/registroPrincipal');
  };
    
  return (
  <div className="info-card">
    <h3>{heading}</h3>
    <h4 className="benefitTitle">{benefitTitle}</h4>
    <ul>
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
    <p className="catchFrase">{catchFrase}</p>
    <button className="cta-button" type="button" onClick={handleRegistroPrincipalClick}>
      Regístrate
    </button>
  </div>
);}

export default InfoCard;
