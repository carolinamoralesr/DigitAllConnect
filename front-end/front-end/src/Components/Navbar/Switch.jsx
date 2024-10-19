import React from 'react';
import './Switch.css';

const Switch = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="modoClaroOscuro"
        onChange={handleToggle}
        checked={darkMode}
      />
      <label className="slider" htmlFor="modoClaroOscuro"></label>
    </div>
  );
};

export default Switch;
