import React, { useEffect } from 'react';
import "./ArrowUp.css";

const ArrowUp = () => {
  useEffect(() => {
    const arrow = document.querySelector(".arrow-up");

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        arrow.classList.add("show");
      } else {
        arrow.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="arrow-up" onClick={handleClick}>
      &#8673;
    </div>
  );
};

export default ArrowUp;
