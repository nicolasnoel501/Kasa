import React, { useState, useEffect } from 'react';
import ArrowRight from '../assets/chevron_carousel_right.png';
import ArrowLeft from '../assets/chevron_carousel_left.png';

const SlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCount(document.body.clientWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div className='carousel_arrow'>
          <img className="carousel_arrow_left" src={ArrowLeft} alt="Previous" onClick={handlePrevSlide} />
          <img className="carousel_arrow_right" src={ArrowRight} alt="Next" onClick={handleNextSlide} />
        </div>
      )}

      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Slide ${index + 1}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        />
      ))}

      {showCount && <p className='slideCount'>{currentSlide + 1} / {pictures.length}</p>}
    </div>
  );
};

export default SlideShow;
