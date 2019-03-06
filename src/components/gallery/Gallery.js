import React, { Component } from 'react';
import Photo from 'components/gallery/Photo.js';
import imagesLib from 'config/images.json';
import styled from 'styled-components';

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-flow: dense;
  grid-gap: 3rem;
  margin: 2rem 0;

  .title {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

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
      <ImageGallery>
        {this.state.images.map((item, index) => <Photo {...item} key={index}  />)}
      </ImageGallery>
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
