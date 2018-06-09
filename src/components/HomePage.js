import React from 'react';
import Photo from 'components/gallery/Photo.js';
import { NavLink } from 'react-router-dom';
import imagesHome from 'images-home.json';

export default () => (
  <div>
    <div className="intro-text">
      <p>Buttercream Dream is a custom cake company in Sunderland. Creating delicious cupcakes and celebration cakes for any occasion such as birthdays, christenings, weddings and anniversaries, not to forget special days such as mothers day, fathers day and every event between.</p>
      {/*<NavLink
        to="/contact"
        activeClassName="is-active"
        className="btn btn-secondary btn-cta">
        Order
        </NavLink>*/}
    </div>
    <div className="home-gallery">
      {imagesHome.map((item, index) => <Photo {...item} key={index}  />)}
    </div>
  </div>
);
