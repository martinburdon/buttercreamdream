import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.svg';
import cakePages from 'config/cake-pages.json';

const getLinks = ({ url, shortContent, title }, i) => {
  return (
    <section key={i}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{__html: shortContent}} />
      <NavLink to={`/cakes/${url}`} className="page-link">{title} →</NavLink>
    </section>
  )
};

export default () => {
  const links = cakePages.map((page, i) => getLinks(page, i));

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-cakes">
          {links}
        </div>
        <NavLink to="/" className="logo" exact={true}>
          <img src={logo} className="logo-svg" alt="Buttercream Dream" />
        </NavLink>
      </div>
    </footer>
  )
};
