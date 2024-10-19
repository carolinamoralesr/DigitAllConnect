// src/components/NextButton.jsx
import React from "react";
import "./NextButton.css";

const NextButton = () => {
  return (
    <div className="center-button">
      <form action="registro-pyme-2.html" method="get">
        <button className="cta-button" type="submit">
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default NextButton;
