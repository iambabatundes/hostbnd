import React from "react";
import "../common/Card.css";

function Slider({ currentSlide }) {
  const slides = [
    {
      id: "556fdte54321",
      img: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
      alt: "Slide 1",
    },

    {
      id: "556fdte54322",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Slide 2",
    },
    {
      id: "556fdte54323",
      img: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Slide 2",
    },
  ];

  return (
    <div className="slider-container">
      {slides.map((slide) => (
        <img
          key={slide.id}
          src={slide.img}
          alt={slide.alt}
          className={`slide ${slide.id === currentSlide ? "active" : ""}`}
        />
      ))}
      this is the boy
    </div>
  );
}

export default Slider;
