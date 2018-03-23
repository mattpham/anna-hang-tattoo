import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

import NavList from './NavList';
import NavMenuButton from './NavMenuButton';
import ModalPortal from '../ModalPortal';
import { rhythm } from '../../utils/typography';

const duration = 200;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'translateX(100%)'
};

const transitionStyles = {
  entering: { transform: 'translateX(100%)' },
  entered: { transform: 'translateX(0)' }
};

const Wrapper = styled.div`
  position: fixed;
  ${'' /* height: 100%; */}
  ${'' /* width: 100%;  */}
  
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: white;
 
`;

const Top = styled.div`
  height: ${rhythm(2)};
  display: flex;
  justify-content: flex-end;
  padding: 0 ${rhythm(1)};
`;

const StyledNav = styled.nav`
display: flex;
  padding-top: ${rhythm(2)}
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  & > div {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: ${rhythm(1)};

    :not(:last-child) {
      margin-bottom: ${rhythm(1/2)};
    }
  }
  & > ${NavList} {
  align-items: flex-end;
    flex-direction: column;
  }
`;

const MobileNav = props => (
  <ModalPortal>
    <Transition in={props.isToggled} timeout={duration} appear={true}>
      {state => (
        <Wrapper style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <Top>
            <NavMenuButton handleClick={props.handleClick}><FontAwesomeIcon icon="times" /></NavMenuButton>
          </Top>
          <StyledNav
            id="mobile-nav"
          >
            {props.children}
          </StyledNav>
        </Wrapper>
      )}
    </Transition>
  </ModalPortal>
);

MobileNav.propTypes = {
  isToggled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.array
};

export default MobileNav;
