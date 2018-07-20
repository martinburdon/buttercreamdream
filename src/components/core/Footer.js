import React from 'react';
import Logo from 'components/core/Logo.js';
import { NavLink } from 'react-router-dom';
import siteConfig from 'config/site-config.js';
import { formatCakeTitle, formatCakeUrl } from 'helpers.js';

const getLinks = ({ shortContent, title }, i) => {
  const fullTitle = formatCakeTitle(title);
  const url = formatCakeUrl(title);

  return (
    <section key={i}>
      <h2>{fullTitle}</h2>
      <p dangerouslySetInnerHTML={{__html: shortContent}} />
      <NavLink to={url} className="page-link">{fullTitle} →</NavLink>
    </section>
  )
};

export default () => {
  const links = siteConfig.cakePages.map((page, i) => getLinks(page, i));

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-cakes">
          {links}
        </div>
        <Logo />
      </div>
    </footer>
  )
};
