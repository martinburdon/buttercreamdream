import React, { Component } from 'react';
import Photo from './Photo.js';
import images from '../images.json';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.items = images;
  }

  render() {
    const items = this.items;
    return (
      <div>
        {items.map((item, index) => <Photo {...item} key={index}  />)}
      </div>
    );
  }
}

export default Gallery;
