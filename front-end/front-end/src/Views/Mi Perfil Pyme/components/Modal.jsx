import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, image, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <button className="modal-prev" onClick={onPrev}>
          &#10094;
        </button>
        <img src={image} alt="Full size" className="modal-image" />
        <button className="modal-next" onClick={onNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Modal;
