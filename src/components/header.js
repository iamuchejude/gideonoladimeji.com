import React, { useState } from "react"
import styled, { css } from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import Nav from '../components/nav';

const Header = ({ pathname }) => {
  const pathName = pathname === '/';
  const [menu] = useState([
    { name: 'About', link: '/about' },
    { name: 'Writing', link: '/writing' },
    { name: 'Contact', link: '/contact' },
  ]);

  return (
    <Container>
      <LogoContainer>
        <AniLink paintDrip color="#000" to="/">
          <LogoImage src={logoWhite} active={!(pathName)} alt="GIDEON OLADIMEJI" />
          <LogoImage src={logo} active={pathName} alt="GIDEON OLADIMEJI" />
        </AniLink>
      </LogoContainer>

      <NavContainer>
        <Nav menu={menu} pathname={pathname} />
      </NavContainer>
    </Container >
  )
}

const Container = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: space-between;
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
