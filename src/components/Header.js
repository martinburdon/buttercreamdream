import React from 'react';
import NavBar from './NavBar.js';
import NavItem from './NavItem.js';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>Logo</h1>
    <NavBar>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavItem text="Gallery" link="/" />
      <NavItem text="Prices" link="/" />
      {/*<NavLink to="/blog" activeClassName="is-active">Blog</NavLink>*/}
    </NavBar>
  </header>
);
