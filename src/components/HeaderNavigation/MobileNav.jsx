import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { desktop } from '../../utils/styles/media';

const duration = 200;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'translateX(100%)',
};

const transitionStyles = {
  entering: { transform: 'translateX(100%)' },
  entered: { transform: 'translateX(0)' },
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #fff;

  ${desktop`
    display: none;
  `};
`;

export const StyledMobileNav = styled.nav`
  display: flex;
  color: #000;
  margin-top: 5rem;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
`;

const MobileNav = props => (
  // <ModalPortal>
  <Transition in={props.isToggled} timeout={duration} appear>
    {state => (
      <Wrapper
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <StyledMobileNav>{props.children}</StyledMobileNav>
      </Wrapper>
    )}
  </Transition>
  // </ModalPortal>
);

MobileNav.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default MobileNav;
