import React from 'react';
import Gallery from 'components/gallery/Gallery.js';
import imagesGallery from 'config/images-gallery.json';

export default () => (
  <div>
    <Gallery images={imagesGallery} />
  </div>
);
