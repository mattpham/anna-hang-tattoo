import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styledComponents, { ThemeProvider, injectGlobal } from 'styled-components';
import Responsive from 'react-responsive';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { sizes } from '../utils/styles/media';
import {
  faInstagram,
  faFlickr,
  faFacebook,
  faYoutube
} from '@fortawesome/fontawesome-free-brands';
import {
  Header,
  Nav,
  NavList,
  NavListItem,
  NavLink,
  NavButton,
  ToggleNav,
  Main,
  Footer
} from '../components';
import theme from '../themes';

injectGlobal`
  body {
    background-color: ${theme.background};
  }
`

const SocialNavList = NavList.extend`
  flex-direction: row;
`;

const ResponsiveMenu = props => (
  <Responsive minWidth={sizes.phone}>
    {matches =>
      matches ? (
        <Nav>{props.children}</Nav>
      ) : (
        <ToggleNav>{props.children}</ToggleNav>
      )
    }
  </Responsive>
);

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Tattoo' },
          { name: 'keywords', content: 'tattoo, art' }
        ]}
      />

      {/* <Header> */}
      <ResponsiveMenu>
        {/* Site Links */}
        {/* <NavButton>Menu</NavButton> */}
        <NavList>
          <NavListItem>
            <NavLink to="/">Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#about">About</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#specialties">Services</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="gallery">Gallery</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#contact-form">Contact</NavLink>
          </NavListItem>
        </NavList>

        {/* Social Links */}
        <SocialNavList flow="column">
          <NavListItem>
            <NavLink to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/">
              <FontAwesomeIcon icon={faFacebook} />
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/">
              <FontAwesomeIcon icon={faFlickr} />
            </NavLink>
          </NavListItem>
        </SocialNavList>

        {/* Language Links
          <NavList>
            <NavListItem>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>English</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Vietnamese</Link>
            </NavListItem>
          </NavList> */}

        {/* Mobile Menu Toggle */}

        {/* </div> */}
      </ResponsiveMenu>
      {children()}
      <Footer>&copy;2018 Anna Hang Tattoo.</Footer>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
