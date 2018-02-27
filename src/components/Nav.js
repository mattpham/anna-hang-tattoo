import styled from 'styled-components';
import Link from 'gatsby-link';

const Nav = styled.nav`
  position: fixed;
  padding: 1em;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-gap: 2em;
  justify-content: stretch;
  justify-items: center;
  align-content: start;

  @media (min-width: 600px) {
    grid-auto-flow: column;
    justify-content: end;
    height: auto;
    position: absolute;
  }
`;

const NavList = styled.ul`
  display: grid;
  grid-auto-flow: ${props => props.flow || ''};
  grid-gap: 1em;
  list-style: none;
  margin: 0;
  align-content: center;

  @media (min-width: 600px) {
    grid-auto-flow: column;
  }
`;

const NavListItem = styled.li`
  margin: 0;
  align-self: center;
`;

const NavLink = styled(Link)`
  padding: 5px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }
`;

const NavButton = styled.button`
  justify-self: end;
  margin: 0;
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  z-index: 999;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export { Nav, NavList, NavListItem, NavLink, NavButton };
