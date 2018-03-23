import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border-style: none;
  color: rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuButton = ({ children, handleClick }) => (
  <ButtonWrapper>
    <MenuButton onClick={handleClick}>{children}</MenuButton>
  </ButtonWrapper>
);
NavMenuButton.propTypes = {
  children: PropTypes.element,
  handleClick: PropTypes.func.isRequired,
};

export default NavMenuButton;
