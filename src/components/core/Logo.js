import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.svg';

export default () => (
  <NavLink to="/" className="logo" exact={true}>
    <img src={logo} className="logo-svg" alt="Buttercream Dream" />
  </NavLink>
);
