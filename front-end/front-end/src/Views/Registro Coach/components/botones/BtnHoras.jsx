import React, { useRef } from 'react';
import './BtnHoras.css';

const BtnHoras = () => {
    const timeInputRef = useRef(null);

    const handleClick = () => {
        timeInputRef.current.click();
    };

    return (
        <div className="form-group file-upload-button">
            <input 
                type="time" 
                id="Horainput" 
                className="time-input" 
                ref={timeInputRef}
                style={{ display: 'none' }} 
            />
            <button 
                type="button" 
                className="form-control custom-file-upload" 
                onClick={handleClick}
            >
                Indicar Horas Disponibles
            </button>
        </div>
    );
};

export default BtnHoras;
