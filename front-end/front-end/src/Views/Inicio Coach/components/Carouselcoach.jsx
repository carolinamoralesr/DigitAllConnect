import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Carouselcoach.css";
import TarjetaPymeuno from "./TarjetaPymeuno";

const Carouselcoach = ({ cardsData, visibleCards = 3 }) => {
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
    <div className="carouselcoach">
      <button
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
        className="arrow-button"
      >
        <IoIosArrowBack />
      </button>
      <div className="cards-container-coach">
        {cardsData
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card, index) => (
            <div key={index} className="card-envoltura">
              <TarjetaPymeuno
                nameCompany={card.nameCompany}
                descriptionPyme={card.descriptionPyme}
                avatar={card.avatar}
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

export default Carouselcoach;
