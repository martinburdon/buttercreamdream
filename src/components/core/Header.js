import React from 'react';
import NavBar from 'components/NavBar.js';
import { NavLink } from 'react-router-dom';
import Logo from 'components/core/Logo.js';

export default () => (
  <header>
    <div className="top-bar">
      <div>
        <a href="https://www.facebook.com/buttercreamdream.uk/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/buttercream.rach" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    <div className="nav-container">
      <Logo />
      <NavBar className="main-nav">
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/cakes" activeClassName="is-active">Cakes</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
      </NavBar>
    </div>
  </header>
);
