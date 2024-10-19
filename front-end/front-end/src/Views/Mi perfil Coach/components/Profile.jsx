import React, { useState, useEffect } from "react";
import "./Profile.css";
import profileImage from "../assets/juan_donoso.jpg"; // Asegúrate de tener una imagen con este nombre
import ChangePictureButton from "./ChangePictureButton";
import ProfileDrawer from "./ProfileDrawer";

const Profile = ({ coachId }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const url = `http://localhost:3000/api/users/coach/${coachId}`;
        const response = await fetch(url);
        const { data } = await response.json();
        setProfileData(data);
        // Actualiza el estado con los datos obtenidos
        setLoading(false); // Marca la carga como completada
      } catch (error) {
        console.error("Error fetching coach data:", error);
        setLoading(false); // Maneja el error aquí según tu lógica
      }
    };

    if (coachId) {
      fetchCoachData();
    }
  }, [coachId]);

  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  if (!profileData) {
    return <p>No se encontraron datos para este coach.</p>;
  }

  return (
    <div className="profile">
      <img src={profileImage} alt={profileData.fullName} className="profile-image" />

      <div className="profile-info">
        <h1>{profileData.fullName}</h1>
        <p>{profileData.specialization}</p> {/* Ajusta el campo según tus datos */}
        <div className="actions-container">
          <ChangePictureButton coachId={coachId} />
          <ProfileDrawer coachId={coachId} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
