import React from 'react';
import NavBar from 'components/NavBar.js';
import { NavLink } from 'react-router-dom';
import Logo from 'components/core/Logo.js';
import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 2rem;

  .logo {
    color: #F43554;
    display: block;
    margin: 2rem 0;
    max-width: 18rem;

    @media (min-width: 680px) {
      max-width: 24rem;
    }
  }
`;

const TopBar = styled.div`
  background: #F43554;
  margin-bottom: 2rem;

  div {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 68rem;
    padding: 1rem 4rem;

    @media (min-width: 600px) {
      justify-content: flex-end;
    }
  }

  a {
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-left: 1.5rem;
    padding: 0 0 0 1.5rem;
    text-transform: uppercase;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 599px) {
      &:first-child {
        margin-left: 0;
        padding-left: 0;
      }
    }

    &:last-child {
      border-left: 1px solid #fff;
    }
  }
`;

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 3rem auto 2rem;
  padding: 0 4rem;
  max-width: 68rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export default () => (
  <Header>
    <TopBar>
      <div>
        <a href="https://www.facebook.com/buttercreamdream.uk/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/buttercream.rach" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </TopBar>
    <NavContainer>
      <Logo />
      <NavBar className="main-nav">
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/cakes" activeClassName="is-active">Cakes</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
      </NavBar>
    </NavContainer>
  </Header>
);
