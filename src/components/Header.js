import React from 'react';
import NavBar from './NavBar.js';
import NavItem from './NavItem.js';

export default () => (
  <header>
    <h1>Logo</h1>
    <NavBar>
      <NavItem text="Prices" link="/" className="clicky" />
    </NavBar>
  </header>
);
