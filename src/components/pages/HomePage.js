import React from 'react';
import Photo from 'components/gallery/Photo.js';
import imagesHome from 'config/images-home.json';

export default () => (
  <div>
    <div className="intro-text">
      <p>Buttercream Dream is a cake company in Sunderland, baking up delicious cupcakes and celebration cakes for any occasion such as birthdays, christenings, weddings, anniversaries and baby showers – not to forget special days such as mothers day, fathers day and every event between.</p>
      <p>If you would like to see more pictures of cakes I've previously made, I upload them all to my <a href="https://www.facebook.com/pg/buttercreamdream.uk/photos/" target="_blank" rel="noopener noreferrer">Facebook gallery</a> and <a href="https://instagram.com/buttercream.rach" target="_blank" rel="noopener noreferrer">Instagram page</a></p>
    </div>
    <div className="home-gallery">
      {imagesHome.map((item, index) => <Photo {...item} key={index}  />)}
    </div>
  </div>
);
