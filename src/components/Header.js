import React from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <div className="top-bar">
      <a href="https://www.facebook.com/buttercreamdream.uk">Facebook</a>
      <a href="https://www.instagram.com/buttercream.rach">Instagram</a>
    </div>
    <NavLink to="/" className="logo" exact={true}>
      <h1>Buttercream<br/>Dream</h1>
    </NavLink>
    <NavBar className="main-nav">
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink>
      <NavLink to="/price-list" activeClassName="is-active">Price List</NavLink>
      <NavLink to="/faq" activeClassName="is-active">FAQ</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      {/*<NavLink to="/blog" activeClassName="is-active">Blog</NavLink>*/}
    </NavBar>
  </header>
);
