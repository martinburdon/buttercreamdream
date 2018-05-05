import React from 'react';
import NavBar from './NavBar.js';
import NavItem from './NavItem.js';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>Logo</h1>
    <NavBar>
      <NavItem text="Gallery" link="/" />
      <NavItem text="Prices" link="/" />
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </NavBar>
  </header>
);
