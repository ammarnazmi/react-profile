import { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";
import Slider from "react-slick";

export default function WorkExperience() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function slideRight() {
    sliderRef.current.slickNext();
  }

  function slideLeft() {
    sliderRef.current.slickPrev();
  }

  return (
    <section id="experiences" className="experience-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right">
          <span class="material-icons" onClick={slideRight}>
            chevron_right
          </span>
        </div>
        <div className="arrow-left">
          <span class="material-icons" onClick={slideLeft}>
            chevron_left
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
