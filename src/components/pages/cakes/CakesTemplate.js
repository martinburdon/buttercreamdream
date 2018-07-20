import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from 'components/gallery/Gallery.js';
import siteConfig from 'config/site-config.js';

class CakesTemplate extends Component {
  render() {
    const { title, meta = {}, content, tags } = this.props;
    const metaTitle = meta.title ? meta.title : siteConfig.meta.title;

    return (
      <div>
        <Helmet>
          <title>{metaTitle}</title>
        </Helmet>
        <h1>{title}</h1>
        <p>{content}</p>
        <Gallery tags={tags} />
      </div>
    )
  }
};

export default CakesTemplate;
