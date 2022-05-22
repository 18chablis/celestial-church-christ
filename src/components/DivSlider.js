import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "../styles/divSlider.css";
const DivSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <input
                type="text"
                placeholder={slide.placeholder}
                className="input"
                // value={slide.value}
                // onChange={slide.setValue}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default DivSlider;
