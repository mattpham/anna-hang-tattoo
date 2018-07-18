import React from 'react';
import styled from 'styled-components';

import { phone } from '../../utils/styles/media';
import NavLinks from './NavLinks';
import SocialNavLinks from './SocialNavLinks';

// This is the default navbar (non-mobile)
const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  ${phone`
    display: none;
  `};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
`;

const NavBar = () => (
  <StyledNavBar>
    <ContentWrapper>
      <NavLinks />
    </ContentWrapper>
    <ContentWrapper>
      <SocialNavLinks />
    </ContentWrapper>
  </StyledNavBar>
);

export default NavBar;
