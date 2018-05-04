import React from 'react';
import NavBar from './NavBar.js';
import NavItem from './NavItem.js';

export default () => (
  <header>
    <h1>Logo</h1>
    <NavBar>
      <NavItem text="Gallery" link="/" />
      <NavItem text="Prices" link="/" />
      <NavItem text="Blog" link="/" className="blog" />
    </NavBar>
  </header>
);
