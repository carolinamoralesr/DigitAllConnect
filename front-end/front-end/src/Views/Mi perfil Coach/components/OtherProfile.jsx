import React from "react";
import './OtherProfile.css';
import profile1 from "../assets/jaime_garrido.png"; // Asegúrate de tener estas imágenes
import profile2 from "../assets/francisco_silva.png";
import profile3 from "../assets/karen_rebolledo.png";

const OtherProfile = () => {
  return (
    <div className="other-profile">
      <h2>Perfiles Similares</h2>
      <div className="profile-item">
        <img src={profile1} alt="Jaime Garrido" className="profile-img" />
        <div className="profile-info">
          <h3>Jaime Garrido</h3>
          <p>Diseñador Gráfico</p>
        </div>
      </div>
      <div className="profile-item">
        <img src={profile2} alt="Francisco Silva" className="profile-img" />
        <div className="profile-info">
          <h3>Francisco Silva</h3>
          <p>Estudiante de Publicidad</p>
        </div>
      </div>
      <div className="profile-item">
        <img src={profile3} alt="Karen Rebolledo" className="profile-img" />
        <div className="profile-info">
          <h3>Karen Rebolledo</h3>
          <p>Estudiante de Marketing Digital</p>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
