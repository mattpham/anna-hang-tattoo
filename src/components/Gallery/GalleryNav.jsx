import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { BLACK_75, BLACK_50, PRIMARY } from '../../utils/styles/colors';

const NavMenu = styled.ul`
  margin-bottom: 0.75rem;
  padding-left: 0;
  display: flex;
`;

const NavMenuItem = styled.li`
  list-style: none;
  margin-right: 0.75rem;
`;

const NavMenuLink = styled(Link).attrs({
  activeStyle: { color: 'var(--accent-color-primary)' }
})`
  text-decoration: none;
  color: ${BLACK_50};
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    color: ${BLACK_75};
  }
`;

const Nav = () => (
  <nav>
    <NavMenu>
      <NavMenuItem>
        <NavMenuLink to={'/gallery'}>Collections</NavMenuLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavMenuLink to={'/tag'}>Tags</NavMenuLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavMenuLink to={'/photo'}>Photos</NavMenuLink>
      </NavMenuItem>
    </NavMenu>
  </nav>
);

export default Nav;
