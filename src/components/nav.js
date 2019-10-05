import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = ({ menu }) => (
  <NavContainer>
    <Menu>
      {menu.length > 0 && menu.map(item => (
        <Item
          key={Math.trunc(Math.random() * new Date())}
        >
          <Link
            to={item.link}
            activeStyle={
              {
                borderBottom: '2px solid #000',
              }
            }
          >{item.name}</Link>
        </Item>
      ))}
    </Menu>
  </NavContainer >
);

const NavContainer = styled.nav`
  height: 100%;
`;

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Item = styled.li`
  margin: 0 25px;

  a {
    text-transform: lowercase;
    font-weight: 700;
  }
`;

export default Nav;
