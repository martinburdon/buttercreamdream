/**
 *  TODO: Accept prop to determine whether showing small thumbs (gallery page) or larger thumbs with label (home page)
 */

import React, { Component } from 'react';
import Photo from 'components/gallery/Photo.js';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.items = props.images;
  }

  render() {
    const items = this.items;
    return (
      <image-gallery>
        {items.map((item, index) => <Photo {...item} key={index}  />)}
      </image-gallery>
    );
  }
}

export default Gallery;
