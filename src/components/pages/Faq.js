import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from 'config/site-config.js';

export default () => (
  <div>
    <Helmet>
      <title>FAQ | {siteConfig.meta.title}</title>
    </Helmet>
    <h1>FAQ</h1>
  </div>
);
