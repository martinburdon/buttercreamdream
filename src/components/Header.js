import React from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>Logo</h1>
    <NavBar>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink>
      <NavLink to="/price-list" activeClassName="is-active">Price List</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      <NavLink to="/faq" activeClassName="is-active">FAQ</NavLink>
      <NavLink to="/about" activeClassName="is-active">About</NavLink>
      {/*<NavLink to="/blog" activeClassName="is-active">Blog</NavLink>*/}
    </NavBar>
  </header>
);
