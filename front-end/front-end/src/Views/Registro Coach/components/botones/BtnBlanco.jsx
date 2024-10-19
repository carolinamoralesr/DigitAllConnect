import React, { useState } from "react";
import "./BtnBlanco.css";

const BtnBlanco = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleButtonClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  return (
    <div className="container">
      {days.map((day) => (
        <div
          key={day}
          className={`day-button ${selectedDays.includes(day) ? "selected" : ""}`}
          onClick={() => handleButtonClick(day)}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

export default BtnBlanco;



