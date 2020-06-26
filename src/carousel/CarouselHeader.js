import React, { Component } from 'react';

export default class CarouselHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.carouselTitle
        }
    }
    render() {
        return (
            <div className="carousel-header">
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}