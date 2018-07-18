import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { desktop } from '../../utils/styles/media';

const HamburgerContainer = styled.button`
  height: 3rem;
  width: 3rem;
  border-style: none;
  cursor: pointer;
  text-align: center;
  z-index: 10000;
  background: none;

  ${desktop`
    display: none;
  `};
`;

const HamburgerBar = styled.span`
  display: block;
  height: 3px;
  background-color: #fff;
  width: 24px;
  margin: 6px auto;
  position: relative;
  opacity: 100%;
  transition: background 0.2s ease-in-out;

  &:before {
    content: '';
    transform: translateY(-9px);
    background-color: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  &:after {
    content: '';
    transform: translateY(9px);
    background-color: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  ${({ isToggled }) =>
    isToggled &&
    `
  
    background: none;
    &:before {
      transform: translateY(0) rotate(-45deg);
      background-color: var(--bg-color-primary);
    }
    &:after {
      transform: translateY(0) rotate(45deg);
      background-color: var(--bg-color-primary);
    }
    `};
`;

const NavHamburgerButton = ({ isToggled, handleClick }) => (
  <HamburgerContainer onClick={handleClick}>
    <HamburgerBar isToggled={isToggled} />
  </HamburgerContainer>
);

NavHamburgerButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavHamburgerButton;
