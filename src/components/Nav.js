import styled from 'styled-components';
import Link from 'gatsby-link';
import media from '../utils/styles/media';

const Nav = styled.nav`
  position: fixed;
  top: 2em;
  left: 2em;
  right: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  }
  ${media.phone`
    flex-direction: row;
    justify-content: center;

    & ul~ul {
      margin-left: 2em;
    }
  `}
  ${media.desktop`
    justify-content: flex-end;
  `}
`;

const NavList = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: flex-end;

  ${media.phone`
    flex-direction: row;
    & li~li {
      margin-left: 1rem;
    }
  `};
`;

const NavListItem = styled.li`
  margin: 0;
  font-size: 2rem;
  ${media.phone`
    font-size: 1rem;
  `};
`;

const NavLink = styled(Link)`
  padding: 0.25rem;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }
`;

const NavButton = styled.button`
  ${'' /* justify-self: end; */} align-self: flex-start;
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
