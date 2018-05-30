import React from 'react';
import Gallery from '../components/Gallery.js';
import { NavLink } from 'react-router-dom';
import imagesHome from '../images-home.json';

export default () => (
  <div>
    <p>Some intro text about Buttercream Dream, introducing what we do and where you can get in touch</p>
    <NavLink
      to="/contact"
      activeClassName="is-active"
      className="btn btn-primary btn-cta">
      Get in touch
    </NavLink>
    <Gallery images={imagesHome} />
  </div>
);
