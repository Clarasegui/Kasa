import '../styles/slideshow.css';
import ArrowLeft from '../assets/arrow_left.png';
import ArrowRight from '../assets/arrow_right.png';
import { useState } from 'react';

function Slideshow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === props.imageSlider.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.imageSlider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${props.imageSlider[currentIndex]})`,
      }}
      className="slideshow"
    >
      {props.imageSlider.length > 1 && (
        <>
          <img
            className="slideshow-arrow-right"
            src={ArrowRight}
            alt="Suivante"
            onClick={nextSlide}
          />
          <img
            className="slideshow-arrow-left"
            src={ArrowLeft}
            alt="Précédente"
            onClick={previousSlide}
          />
          <p className="images-counter">
            {currentIndex + 1} / {props.imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
}

export default Slideshow;
