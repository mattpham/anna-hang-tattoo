import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styledComponents, {
  ThemeProvider,
  injectGlobal
} from 'styled-components';
import Responsive from 'react-responsive';
import '../utils/fontAwesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { sizes } from '../utils/styles/media';
import {
  Header,
  // Nav,
  // NavList,
  // Link,
  // NavButton,
  // ToggleNav,
  Main,
  Footer
} from '../components';
import theme from '../themes';
import { Nav, NavList, NavListSocial } from '../components/Nav';

injectGlobal`
  body {
    background-color: ${theme.background};
  }
`;

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

        <Nav>
          {/* Site Links */}
          {/* <NavButton>Menu</NavButton> */}
          <NavList>
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#specialties">Services</Link>
            <Link to="gallery">Gallery</Link>
            <Link to="#contact-form">Contact</Link>
          </NavList>

          {/* Social Links */}
          <NavListSocial>
            <Link to="/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={["fab", "flickr"]} />
            </Link>
          </NavListSocial>
        </Nav>
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
