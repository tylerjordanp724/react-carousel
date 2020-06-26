import React, { Component, createRef } from 'react';
import data from './CarouselData.js';
import CarouselHeader from './CarouselHeader';
import './Carousel.scss';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselTitle: data.carousel_title,
            slidePosition: 0,
            currSlideIndex: 0
        }

        this.updateSlidePosition = this.updateSlidePosition.bind(this);

        this.slide = React.createRef();
        this.carouselBtn = React.createRef();
    }

    updateSlidePosition() {
        let slides = document.getElementsByClassName('carousel-slide');
        let currBtn = document.getElementsByClassName('carousel-nav-item');

        if(this.index === this.state.currSlideIndex) {
            console.log('this works');
        }
        //let slideTrigger = this.carouselBtn.current;
        
        
        
    }

    componentDidMount() {
        //console.log(data.slides);
    }
    render() {
        return (
            <div className="carousel-container">
                <CarouselHeader carouselTitle={this.state.carouselTitle}/>
                <div className="carousel-slides">
                    {data.slides.map(((slide, index) => {
                        return (
                            <div ref={this.slide} key={`slide-${index + 1}`} className={`carousel-slide`} id={`carousel-slide-${index + 1}`}>{slide.title}</div>
                        );
                    }))}
                </div>
                <div className="carousel-nav">
                    {data.slides.map(((navItem, index) => {
                        return <button ref={this.carouselBtn} key={`navItem-${index}`} className={`carousel-nav-item`} id={`carousel-nav-item-${index}`} onClick={this.updateSlidePosition}></button>;
                    }))}
                </div>
            </div>
        );
    } 
}