import React from 'react';
import Logo from 'components/core/Logo.js';
import { NavLink } from 'react-router-dom';
import siteConfig from 'config/site-config.js';
import { formatCakeTitle, formatCakeUrl } from 'helpers.js';
import styled from 'styled-components';

const Footer = styled.footer`
  background: linear-gradient(-180deg, #0a1a36 43%, #071225);
  margin: 10rem 0 0;
  padding: 8rem;

  .logo {
    display: block;
    margin: 0 auto;
    max-width: 16rem;
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 68rem;
`;

const FooterCakes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-gap: 2rem 4rem;
  margin-bottom: 8rem;

  h2 {
    color: #c0c9d8;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
  }

  p {
    color: #556a8b;
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }

  .page-link {
    font-size: 1.6rem;
    letter-spacing: 1px;
  }

  section {
    &:last-child {
      grid-column: -1/1;
    }
  }
`;

const getLinks = ({ shortContent, title }, i) => {
  const fullTitle = formatCakeTitle(title);
  const url = formatCakeUrl(title);

  return (
    <section key={i}>
      <h2>{fullTitle}</h2>
      <p dangerouslySetInnerHTML={{__html: shortContent}} />
      <NavLink to={url} className="page-link">{fullTitle} →</NavLink>
    </section>
  )
};

export default () => {
  const links = siteConfig.cakePages.map((page, i) => getLinks(page, i));

  return (
    <Footer>
      <FooterContainer>
        <FooterCakes>
          {links}
        </FooterCakes>
        <Logo />
      </FooterContainer>
    </Footer>
  )
};
