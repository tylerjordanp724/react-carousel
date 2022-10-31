import React, { useRef, useState } from 'react';
import data from './CarouselData.js';
import CarouselHeader from './CarouselHeader';
import './Carousel.scss';

const Carousel = () => {

    const [slidePos, setSlidePos] = useState(0); 
    const [currSlideIndex, setCurrSlideIndex] = useState(1);

    const slideItem = useRef();
    const slideNav = useRef();
     
    const updateSlidePosition = () => {

        // setCurrSlideIndex(currSlideIndex + 1);

        // if(currSlideIndex === data.slides.length) {
        //     setCurrSlideIndex(currSlideIndex);
        // }

        if(currSlideIndex >= 0){
            setCurrSlideIndex(currSlideIndex + 1);
            if(currSlideIndex === data.slides.length) {
                setCurrSlideIndex(currSlideIndex);
            }
        } 

        console.log(currSlideIndex);
        
    }


    return (
        <div className="carousel-container">
            <CarouselHeader title="This is a carousel"/>
            <div className="carousel-slides">
                { data.slides.map(((slide, index) => {
                    return (
                        <div ref={slideItem} key={`slide-${index + 1}`} className={`carousel-slide`} id={`carousel-slide-${index + 1}`}>{slide.title}</div>
                    );
                }))}
            </div>
            <div className="carousel-nav">
                { data.slides.map(((navItem, index) => {
                    return (<button ref={slideNav} key={`navItem-${index}`} className={`carousel-nav-item`} id={`carousel-nav-item-${index}`} onClick={updateSlidePosition}></button>);
                }))}
            </div>
        </div>
    );
};

export default Carousel;