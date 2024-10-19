// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import PersonalDataForm from "./components/PersonalDataForm";
import NextButton from "./components/NextButton";
import "./RegistroPyme.css";
import ImagenRegistro from "./ImagenRegistro.png"

function App() {
  return (
    <div className="container-fluid app-container">
      <div className="datos-row">
        <div className="col-md-3 rectangulo-container">
          <div className="rectangulo1">
            <img
              src={ImagenRegistro}
              alt="Descripción de la imagen"
            />
          </div>
        </div>
        <div className="col-md-9 main-content main-contenido">
          <Header />
          <PersonalDataForm />
        </div>
      </div>
    </div>
  );
}


export default App;
