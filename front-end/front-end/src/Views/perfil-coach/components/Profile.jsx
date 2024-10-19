import React from "react";
import "./Profile.css";
import profileImage from "../assets/isidora_albornoz.png"; // Asegúrate de tener una imagen con este nombre

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="Isidora Abarzúa" className="profile-image" />
      <div className="profile-info">
        <h1>Isidora Abarzúa</h1>
        <p>Estudiante de Diseño Gráfico</p>
      </div>
    </div>
  );
};

export default Profile;
