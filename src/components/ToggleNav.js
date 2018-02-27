import React from 'react';
import styled from 'styled-components';
import noScroll from 'no-scroll';

import { Nav, NavButton } from './';

const ToggleOverlay = styled.div`
  background: rgba(139, 0, 0, 1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

class ToggleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  handleToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
    console.log(this.state.isToggled);
  };

  render() {
    const isToggled = this.state.isToggled;

    let button = null;
    let menu = null;
    let display = null;

    if (isToggled) {
      noScroll.on();
      button = 'Menu [-]';
      menu = this.props.children;
      display = 'fixed';
    } else {
      noScroll.off();
      button = 'Menu [+]';
      display = 'none';
    }
    return (
      <Nav>
        <NavButton onClick={this.handleToggle}>{button}</NavButton>
        {menu}
        {isToggled ? <ToggleOverlay /> : ''}
      </Nav>
    );
  }
}

export { ToggleNav };
