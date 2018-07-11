import React from 'react';
import NavBar from 'components/NavBar.js';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.svg';

export default () => (
  <header>
    <div className="top-bar">
      <div>
        <a href="https://www.facebook.com/buttercreamdream.uk/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/buttercream.rach" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    <div className="nav-container">
      <NavLink to="/" className="logo" exact={true}>
        <img src={logo} className="logo-svg" alt="Buttercream Dream" />
      </NavLink>
      <NavBar className="main-nav">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/contact" activeClassName="is-active" className="order">Order</NavLink>
      </NavBar>
    </div>
  </header>
);
