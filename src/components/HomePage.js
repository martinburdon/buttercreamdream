import React from 'react';
import Gallery from '../components/Gallery.js';
import { NavLink } from 'react-router-dom';
import imagesHome from '../images-home.json';

export default () => (
  <div>
    <div className="about-text">
      <p>Buttercream Dream is a custom cake company in Sunderland. Creating delicious cupcakes and celebration cakes for any occasion such as birthdays, christenings, weddings and anniversaries, not to forget special days such as mothers day, fathers day and every event between.</p>
      <NavLink
        to="/contact"
        activeClassName="is-active"
        className="btn btn-secondary btn-cta">
        Get in touch
      </NavLink>
    </div>
    <Gallery images={imagesHome} />
  </div>
);
