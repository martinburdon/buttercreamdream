import React, { Component } from 'react';
import Photo from 'components/gallery/Photo.js';
import imagesLib from 'config/images.json';

class Gallery extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    const qualifyingTags = this.props.tags;
    const images = imagesLib;
    const found = images.filter(image => qualifyingTags.some(tag => image.tags.includes(tag)));
    this.setState({ images: found });
  }

  render() {
    return (
      <image-gallery>
        {this.state.images.map((item, index) => <Photo {...item} key={index}  />)}
      </image-gallery>
    );
  }
}

export default Gallery;


// const qualifyingTags = ['birthday', 'cake'];
// const images = [
//   { tags: ['birthday', 'mermaid'] },
//   { tags: ['cake', 'poo'] },
//   { tags: ['something', 'else'] }
// ];
//
// const found = images.filter(image => qualifyingTags.some(a => image.tags.includes(a)));
