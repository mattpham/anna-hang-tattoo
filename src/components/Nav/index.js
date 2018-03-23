import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import NavMenuButton from './NavMenuButton';
import NavBar from './NavBar';
import MobileNav from './MobileNav';

class Nav extends Component {
  state = { isToggled: false };

  handleToggle = () => {
    this.setState(({ isToggled }) => ({ isToggled: !this.state.isToggled }));
  };

  render() {
    const isToggled = this.state.isToggled;

    return (
      <NavBar id="site-nav">
        <MediaQuery minDeviceWidth={700}>
          {matches =>
            matches ? (
              this.props.children
            ) : (
              <NavMenuButton handleClick={this.handleToggle}>
                <FontAwesomeIcon icon="bars" />
              </NavMenuButton>
            )
          }
        </MediaQuery>
        {isToggled && (
          <MobileNav isToggled={isToggled} handleClick={this.handleToggle}>
            {this.props.children}
          </MobileNav>
        )}
      </NavBar>
    );
  }
}

export { Nav };
export { default as NavList, NavListSocial } from './NavList';
