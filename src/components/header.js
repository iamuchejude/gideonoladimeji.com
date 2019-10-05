import React from "react"
import styled, { css } from 'styled-components';
import { Link } from "gatsby"

import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';

import Nav from '../components/nav';

const Header = ({ pathname }) => {
  const pathName = pathname === '/';

  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <LogoImage src={logoWhite} active={!(pathName)} alt="GIDEON OLADIMEJI" />
          <LogoImage src={logo} active={pathName} alt="GIDEON OLADIMEJI" />
        </Link>
      </LogoContainer>

      <NavContainer>
        <Nav menu={[
          {
            name: 'About',
            link: '/about',
          },
          {
            name: 'Contact',
            link: '/contact',
          },
          {
            name: 'Blog',
            link: '/blog',
          },
        ]} pathname={pathname} />
      </NavContainer>
    </Container >
  )
}

const Container = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::after {
    content: '';
    display: 'block';
    clear: both;
  }
`;

const LogoImage = styled.img`
  width: 80px;
  display: none;

  ${props => props.active && css`
    display: block;
  `}
`;

const LogoContainer = styled.div`
  margin-right: 15px;
  height: 100%;

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const NavContainer = styled.div`
`;

export default Header;
