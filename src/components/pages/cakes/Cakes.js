import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import siteConfig from 'config/site-config.js';
import { formatCakeUrl, formatCakeTitle } from 'helpers.js';
import Photo from 'components/gallery/Photo.js';
import styled from 'styled-components';

const CakesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-flow: dense;
  grid-gap: 3rem;
  margin: 2rem 0;

  .title {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

class Cakes extends Component {
  componentDidMount() {
    const lazyImages = document.querySelectorAll('.lazy');

    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  }

  getLinks({ placeholder, thumb, title }, i) {
    const fullTitle = formatCakeTitle(title);
    const url = formatCakeUrl(title);
    return (
      <li key={i}>
        <NavLink to={url}>
          <Photo placeholder={placeholder} thumb={thumb} title={title} />
          <span className="title">{fullTitle}</span>
        </NavLink>
      </li>
    );
  };

  render() {
    const links = siteConfig.cakePages.map((page, i) => this.getLinks(page, i));

    return (
      <div>
        <Helmet>
          <title>Cakes in Sunderland | {siteConfig.meta.title}</title>
        </Helmet>
        <h1>Cakes in Sunderland</h1>
        <CakesGrid>{links}</CakesGrid>
      </div>
    )
  }
}

export default Cakes;
