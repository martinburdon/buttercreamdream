import React from 'react';

export default ({ placeholder, thumb, title }) => (
  <gallery-item>
    <img className="lazy" src={placeholder} data-src={thumb} alt={title} />
  </gallery-item>
);
