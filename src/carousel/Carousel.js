import React, { Component } from 'react';
import data from './CarouselData.js';
import './Carousel.scss';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselTitle: this.props.carouselTitle
        }
    }
    render() {
        let navItems;
        console.log(data.slides);

        if(data.slides.length) {
            navItems = data.slides.map(((index) => {
                return <button className="carousel-nav-item"></button>;
            }))
        }
       
        return (
            <div className="carousel-container">
                <div className="carousel-header">
                    <h2>{this.state.carouselTitle}</h2>
                </div>
                <div className="carousel-slides">
                    { data.slides.map(((slide, index) => {
                       return (
                            <div className="carousel-slide">{slide.title}</div>
                       );
                    }))}
                </div>
                <div className="carousel-nav">
                    {navItems}
                </div>
            </div>
        );
    } 
}