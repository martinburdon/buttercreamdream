import React from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

export default () => (
  <header>
    <NavLink to="/" className="logo" exact={true}>
      <img src={logo} className="logo-svg" alt="Buttercream Dream" />
    </NavLink>
    <NavBar className="main-nav">
      <NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink>
      <NavLink to="/menu" activeClassName="is-active">Menu</NavLink>
      <NavLink to="/contact" activeClassName="is-active" className="order">Order</NavLink>
    </NavBar>
  </header>
);
