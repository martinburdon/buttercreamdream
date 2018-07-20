import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import siteConfig from 'config/site-config.js';

const getLinks = ({ url, title }, i) => {
  return (
    <li key={i}>
      <NavLink to={`/cakes/${url}`}>
        {title}
      </NavLink>
    </li>
  )
};

export default () => {
  const links = siteConfig.cakePages.map((page, i) => getLinks(page, i));

  return (
    <div>
      <Helmet>
        <title>Cakes in Sunderland | {siteConfig.meta.title}</title>
      </Helmet>
      <h1>Cakes in Sunderland</h1>
      <ul>{links}</ul>
    </div>
  )
};
