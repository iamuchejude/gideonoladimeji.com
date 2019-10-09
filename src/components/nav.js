import React, { useState } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { css } from 'styled-components';

const Nav = ({ menu }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMobileMenu = () => setMenuActive(!menuActive);

  return (
    <NavContainer>
      <MenuIcon onClick={toggleMobileMenu}>
        <MenuBar />
        <MenuBar />
        <MenuBar />
      </MenuIcon>

      <Menu menuActive={menuActive}>
        <Close onClick={toggleMobileMenu} />

        {menu.length > 0 && menu.map(item => (
          <Item
            key={Math.trunc(Math.random() * new Date())}
          >
            <AniLink
              paintDrip
              color="black"
              to={item.link}
              activeClassName="active"
              activeStyle={{ borderBottom: '2px solid #000' }}
            >
              {item.name}
            </AniLink>
          </Item>
        ))}
      </Menu>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 100%;
`;

const MenuIcon = styled.a`
  width: 27px;
  height: 30px;
  display: none;
  position: relative;
  cursor: pointer;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

const MenuBar = styled.div`
  width: 100%;
  height: 2px;
  border: 1px solid #000;
  background: #000;
  display: block;
  margin: 4px 0;
`;

const Close = styled.a`
  position: absolute;
  top: 45px;
  right: 45px;
  width: 30px;
  height: 30px;
  opacity: 0.6;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: #000;
    cursor: pointer;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 600px) {
    position: fixed;
    z-index: 3;
    top: 0;
    display: block;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    padding: 2em 0 0;
    transform: translateX(100%);
    transition: 700ms ease;

    ${props => props.menuActive && css`
      transform: translateX(0);
      display: block;
    `}
  }
`;

const Item = styled.li`
  margin: 0 25px;

  a {
    text-transform: lowercase;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    margin: 2em 3em;

    a {
      font-size: 1.6em;
      font-weight: 400;
    }
  }
`;

export default Nav;
