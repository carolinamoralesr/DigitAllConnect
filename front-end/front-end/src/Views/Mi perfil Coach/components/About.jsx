import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

const About = ({ coachId }) => {
  const [coachData, setCoachData] = useState(null);

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/coach/${coachId}`);
        setCoachData(response.data.data); // Asegúrate de acceder a 'data'
      } catch (error) {
        console.error("Error fetching coach data:", error);
      }
    };

    if (coachId) {
      fetchCoachData();
    }
  }, [coachId]);

  return (
    <div className="about">
      <h2>Acerca de</h2>
      {coachData ? (
        <p>{coachData.descriptionCoach}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default About;
