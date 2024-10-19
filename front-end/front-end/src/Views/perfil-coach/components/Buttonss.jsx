import React, { useState } from "react";
import "./Buttonss.css";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="buttons">
      <button className="btn blue" onClick={() => navigate("/inicioPyme")}>
        Volver
      </button>
      <button className="btn purple" onClick={openModal}>
        Contactar
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Información de Contacto</h2>
            <p>Correo: isidorabarzua@gmail.com</p>
            <p>Número: +56 9 1234 5678</p>
            <p>
              Página web:{" "}
              <a
                href="http://www.isidorabarzua.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.isidorabarzua.cl
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttons;
