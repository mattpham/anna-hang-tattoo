import React, { Component } from 'react';

import Header, { HeaderContentWrapper, HeaderLogoLink } from './Header';
import NavBar from './NavBar';
import SiteLogo from '../SiteLogo';
import NavHamburgerButton from './NavHamburgerButton';
import MobileNav from './MobileNav';
import NavLinks from './NavLinks';

class HeaderNavigation extends Component {
  state = { isToggled: false };

  handleToggle = () => {
    this.setState(({ isToggled }) => ({ isToggled: !this.state.isToggled }));
    console.log('clicked');
  };

  render() {
    const isToggled = this.state.isToggled;

    return (
      <Header>
        <HeaderContentWrapper justify="flex-start">
          <HeaderLogoLink>
            <SiteLogo />
          </HeaderLogoLink>
        </HeaderContentWrapper>
        <HeaderContentWrapper justify="flex-end">
          <NavBar />
        </HeaderContentWrapper>
        <NavHamburgerButton isToggled={isToggled} handleClick={this.handleToggle} />
        <MobileNav isToggled={isToggled}>
          <NavLinks handleClick={this.handleToggle} />
        </MobileNav>
      </Header>
    );
  }
}

export default HeaderNavigation;
