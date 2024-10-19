import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Education.css";

const Education = ({ coachId }) => {
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
    <div className="education">
      <h2>Educación</h2>
      {coachData ? (
        <div>
          <p>Certificación: {coachData.certification}</p>
          <p>Formación: {coachData.formation}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Education;
