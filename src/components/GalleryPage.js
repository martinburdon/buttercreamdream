import React from 'react';
import Gallery from '../components/Gallery.js';
import imagesGallery from '../images-gallery.json';

export default () => (
  <div>
    <Gallery images={imagesGallery} />
  </div>
);
