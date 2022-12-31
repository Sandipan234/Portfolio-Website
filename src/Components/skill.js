import React, { useState, useEffect } from "react";
import { skilldata } from "./skilldata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Bgimg from "../images/skillsbgi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  // const [dir, setsdir] = "left";
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // setsdir("right");
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // setsdir("left");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider" id="techskill">
        <img src={Bgimg} className="skillsbgi" alt="" />
        <h1 className="skillhead" data-aos="fade-left">
          Technical Skills
        </h1>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {skilldata.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              // id={dir}
              key={index}
            >
              {index === current && (
                <div className="container">
                  <img src={slide.image} alt="trave" className="image" />
                  <h2 className="Skillname" id={slide.name}>
                    {slide.name}
                  </h2>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;
