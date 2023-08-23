import React, { useState } from "react";
import tips1 from "../assets/tips1.png";
import tips2 from "../assets/tips2.png";
import tips3 from "../assets/tips3.png";
import right from '../assets/Right.png';
import left from '../assets/Left.png';

function Tips() {
  const slides = [
    {
      blocks: [
        {
          imgSrc: tips1,
          title: "How to create a living room to love",
          date: "20 jan 2020",
        },
        {
          imgSrc: tips2,
          title: "Solution for clean look working space",
          date: "10 jan 2020",
        },
        {
          imgSrc: tips3,
          title: "Make your cooking activity more fun with good setup",
          date: "20 jan 2020",
        },
      ],
    },
    {
      blocks: [
        {
            imgSrc: tips2,
            title: "Solution for clean look working space",
            date: "10 jan 2020",
        },
        {
            imgSrc: tips3,
            title: "Make your cooking activity more fun with good setup",
            date: "20 jan 2020",
        },
        {
            imgSrc: tips1,
            title: "How to create a living room to love",
            date: "20 jan 2020",
        },
      ],
    },
    {
      blocks: [
        {
          imgSrc: tips1,
          title: "How to create a living room to love",
          date: "20 jan 2020",
        },
        {
          imgSrc: tips2,
          title: "Solution for clean look working space",
          date: "10 jan 2020",
        },
        {
          imgSrc: tips3,
          title: "Make your cooking activity more fun with good setup",
          date: "20 jan 2020",
        },
      ],
    },
    {
        blocks: [
          {
              imgSrc: tips2,
              title: "Solution for clean look working space",
              date: "10 jan 2020",
          },
          {
              imgSrc: tips3,
              title: "Make your cooking activity more fun with good setup",
              date: "20 jan 2020",
          },
          {
              imgSrc: tips1,
              title: "How to create a living room to love",
              date: "20 jan 2020",
          },
        ],
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="tips">
      <h2>Tips & Tricks</h2>
      <div className="carousel">
        <button className="prev-button" onClick={handlePrevButtonClick}>
        </button>
        <div className="slides">
          {slides[currentIndex].blocks.map((block, index) => (
            <div className={`slide ${index === 0 ? "active" : ""}`} key={index}>
              <div className="tips-cards">
                <div className="articles">
                  <img src={block.imgSrc} alt={`Tip ${index + 1}`} />
                  <h4>{block.title}</h4>
                  <h5>{block.date}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNextButtonClick}>
        </button>
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Tips;
