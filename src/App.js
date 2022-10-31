import React from 'react';
import Carousel from './carousel/Carousel.js';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Carousel carouselTitle="Carousel Title"/>
      </div>
    );
  }
}
