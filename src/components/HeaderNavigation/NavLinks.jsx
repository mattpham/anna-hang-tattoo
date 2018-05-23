import React from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';

import { StyledMobileNav } from './MobileNav';
import { Link, List, ListItem } from '../elements';
import { stepUpThree } from '../../utils/styles/typography';

const NavList = List.extend`
  margin-bottom: 0;
  margin-right: 3rem;

  ${StyledMobileNav} & {
    flex-direction: column;
  }
`;

const NavListItem = ListItem.extend`
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
  ${StyledMobileNav} & {
    margin-right: 0;
    justify-content: flex-end;
  }
`;

const NavLink = Link.extend.attrs({
  activeStyle: { color: 'var(--color-gold-1)' },
})`
  text-transform: uppercase;
  color: #FFF;
  ${StyledMobileNav} & {
    font-weight: 600;
    font-size: ${stepUpThree.fontSize};
    line-height: ${stepUpThree.lineHeight};
    color: var(--text-color-tertiary);

    &:hover {
      color: var(--text-color-primary);
    }
  }
`;

const isGalleryLink = (match, location) => !!match || !!matchPath(location.pathname, '/(tag|photo)');

const NavLinks = ({ handleClick }) => (
  <NavList>
    <NavListItem>
      <NavLink exact to="/" onClick={handleClick}>
        Home
      </NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/about" onClick={handleClick}>
        About
      </NavLink>
    </NavListItem>
    {/* <NavLink to="#specialties">Services</NavLink> */}
    <NavListItem>
      <NavLink to="/gallery" onClick={handleClick} isActive={isGalleryLink}>
        Gallery
      </NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/contact" onClick={handleClick}>
        Contact
      </NavLink>
    </NavListItem>
  </NavList>
);

NavLinks.defaultProps = {
  handleClick: null,
};

NavLinks.propTypes = {
  handleClick: PropTypes.func,
};


export default NavLinks;
