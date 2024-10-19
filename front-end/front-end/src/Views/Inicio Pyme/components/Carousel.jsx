import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Carousel.css";
import ProfessionalCard from "./ProfessionalCard";

const Carousel = ({ cardsData, visibleCards = 3, cardType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(visibleCards);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(visibleCards);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleCards]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsToShow, cardsData.length - cardsToShow)
    );
  };

  return (
    <div className="carousel">
      <button
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
        className="arrow-button"
      >
        <IoIosArrowBack />
      </button>
      <div className="cards-container">
        {cardsData
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card, index) => (
            <div key={index} className="card-wrapper">
              <ProfessionalCard
                fullName={card.fullName}
                avatar={card.avatar}
                specialization={card.specialization}
                disponibility={card.disponibility}
                id={card._id}
              />
            </div>
          ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={currentIndex >= cardsData.length - cardsToShow}
        className="arrow-button"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
