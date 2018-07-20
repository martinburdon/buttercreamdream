import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import siteConfig from 'config/site-config.js';
import { formatCakeUrl, formatCakeTitle } from 'helpers.js';

const getLinks = ({ title }, i) => {
  const fullTitle = formatCakeTitle(title);
  const url = formatCakeUrl(title);
  return <li key={i}><NavLink to={url}>{fullTitle}</NavLink></li>;
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
