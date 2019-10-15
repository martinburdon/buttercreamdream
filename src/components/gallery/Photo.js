import React from 'react';

export default ({ placeholder, thumb, title }) => (
  <gallery-item>
    <img src={thumb} alt={title} />
  </gallery-item>
);
