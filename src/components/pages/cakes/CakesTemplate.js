import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from 'components/gallery/Gallery.js';
import { formatCakeTitle } from 'helpers.js';

class CakesTemplate extends Component {
  render() {
    const { title, content, tags } = this.props;
    const fullTitle = formatCakeTitle(title);

    return (
      <div>
        <Helmet>
          <title>{fullTitle}</title>
        </Helmet>
        <h1>{fullTitle}</h1>
        {/*<p dangerouslySetInnerHTML={{__html: content}} />*/}
        <Gallery tags={tags} />
      </div>
    )
  }
};

export default CakesTemplate;
