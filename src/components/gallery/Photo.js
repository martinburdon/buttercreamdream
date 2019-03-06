import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.div`
  display: block;

  .lazy {
    opacity: 0.3;
  }
`;

export default ({ placeholder, thumb, title }) => (
  <GalleryItem>
    <img className="lazy" src={placeholder} data-src={thumb} alt={title} />
  </GalleryItem>
);
