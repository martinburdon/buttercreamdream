import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class CakesTemplate extends Component {
  render() {
    const { title, meta, content } = this.props;

    return (
      <div>
        <Helmet>
          <title>Buttercream Dream - Cupcakes, Cakes and Sweet Treats in Sunderland | Engagement Cakes in Sunderland</title>
        </Helmet>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }
};

export default CakesTemplate;
