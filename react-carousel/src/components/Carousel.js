import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

import './Carousel.css';

const Carousel = ( { data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
    console.log("data: ", data);
    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
          { data.items.map((item, idx) => (
              <img className={slide === idx ? "slide" : "slide slide-hidden"} key={idx} src={item.src} alt={item.alt} />
            ))
          }
          <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
          <span className="indicators">
              {data.items.map((_, idx) => {
                    return (
                        <button 
                            key={idx}
                            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                            onClick={() => setSlide(idx)} ></button>
                    ); 
              })}
          </span>
        </div> 
    );
};

export default Carousel;