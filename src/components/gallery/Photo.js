import React from 'react';

export default ({ thumb, title }) => (
  <gallery-item>
    <img src={thumb} alt={title} />
  </gallery-item>
);
