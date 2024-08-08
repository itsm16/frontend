import React, { useState } from "react";
import "./Carousel.css";

const images = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/14653043/pexels-photo-14653043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentIndex);
  };

  return (
    <div className="carousel">
      <div className="image-container">
        <img src={images[currentIndex].img} alt={`img ${currentIndex + 1}`} />
      </div>
      <div className="btn">
        <button onClick={handlePrevious}>‹</button>
        <button onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Carousel;
