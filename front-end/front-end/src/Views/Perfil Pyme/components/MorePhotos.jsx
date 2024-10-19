import React, { useState } from "react";
import Modal from "./Modal";
import "./MorePhotos.css";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";

const MorePhotos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [photo1, photo2, photo3, photo4, photo5];

  const openModal = (index) => {
    setCurrentImage(photos[index]);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(photos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(photos[prevIndex]);
  };

  return (
    <div className="MorePhotosPyme">
      <h3>Ver Más Fotos</h3>
      <div className="galleryPyme">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="gallery-photoPyme"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={currentImage}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default MorePhotos;
