import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = ({ menu }) => (
  <NavContainer>
    <MenuIcon>
      <MenuBar />
      <MenuBar />
      <MenuBar />
    </MenuIcon>

    <Menu>
      {menu.length > 0 && menu.map(item => (
        <Item
          key={Math.trunc(Math.random() * new Date())}
        >
          <Link
            to={item.link}
            activeStyle={{ borderBottom: '2px solid #000' }}
          >{item.name}</Link>
        </Item>
      ))}
    </Menu>
  </NavContainer>
);

const NavContainer = styled.nav`
  height: 100%;
  position: relative;
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

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Item = styled.li`
  margin: 0 25px;

  a {
    text-transform: lowercase;
    font-weight: 700;
  }
`;

export default Nav;
