import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.svg';
import cakePages from 'config/cake-pages.json';

const getLinks = ({ url, title }) => {
  return (
    <li>
      <NavLink to={`/cakes/${url}`} activeClassName="is-active">
        {title}
      </NavLink>
    </li>
  )
};

export default () => {
  const links = cakePages.map(page => getLinks(page));

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-cakes">
          <ul>{links}</ul>
        </div>
        <NavLink to="/" className="logo" exact={true}>
          <img src={logo} className="logo-svg" alt="Buttercream Dream" />
        </NavLink>
      </div>
    </footer>
  )
};
