import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledHeader = styled.header`
  position: fixed;
  height: 4rem;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: var(--bg-color-primary);
`;

const HeaderWrapper = styled.div`
  height: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
`;

export const HeaderLogoLink = styled(Link).attrs({
  to: '/',
})`
  display: inline-block;
  vertical-align: middle;
  height: 2rem;
  max-height: 3rem;

  color: #fff;
`;

const Header = ({ children }) => (
  <StyledHeader>
    <HeaderWrapper>{children}</HeaderWrapper>
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
