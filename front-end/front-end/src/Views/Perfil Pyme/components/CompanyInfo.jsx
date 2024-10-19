import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CompanyInfo.css";

import defaultCompanyImage from "../assets/photo2.jpg";
import { FaLocationDot } from "react-icons/fa6";

const CompanyInfo = ({ userData }) => {
  // Desestructurar userData con valores por defecto
  const {
    nameCompany = "Nombre de la Empresa",
    region = "Ubicación no especificada",
    descriptionPyme = "Descripción no proporcionada",
    avatar,
  } = userData ?? {};

  // Función para manejar la URL de la imagen
  const getImageUrl = (avatarPath) => {
    if (!avatarPath) return defaultCompanyImage;
    if (avatarPath.startsWith("http")) return avatarPath;
    return `http://localhost:3000${avatarPath}`; // Ajusta esta URL según tu configuración
  };


  return (
    <div className="CompanyInfo">
      <div className="company-image-container">

        <img
          src={getImageUrl(avatar)}
          alt={nameCompany}
          className="company-image"
        />
      </div>
      <div className="company-details">
        <h2>{nameCompany}</h2>
        <p>
          <FaLocationDot /> {region}

        </p>
        <p className="Description">{descriptionPyme}</p>
        <div className="actionsss-container">

          {/* Puedes agregar aquí otros componentes o botones si es necesario */}

        </div>
      </div>
    </div>
  );
};


export default CompanyInfo;
