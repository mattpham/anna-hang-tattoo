import styled from 'styled-components';
import { rhythm } from '../../utils/typography';
import NavBar from './NavBar';
import { StyledMobileNav } from './MobileNav';

export const NavList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${NavBar} & {
    padding: 0 ${rhythm(1)};
  }

  ${StyledMobileNav} & {
    flex-direction: column;
    align-items: flex-end;
  }

  & a {
    margin: 0 ${rhythm(1 / 2)};
    transition: color 0.1s ease-in;
    text-decoration: none;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to right,
        #c02425,
        #f0cb35
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const NavListSocial = NavList.extend`
  ${StyledMobileNav} & {
    flex-direction: row;
  }
`;
