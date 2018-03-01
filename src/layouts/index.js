import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import 'normalize.css';
import {
  faInstagram,
  faFlickr,
  faFacebook,
  faYoutube
} from '@fortawesome/fontawesome-free-brands';
import {
  GridContainer,
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

const ResponsiveMenu = props => (
  <Responsive minWidth={800}>
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
  // <div style={{ display: 'grid', justifyContent: 'stretch', gridGap: '1rem', position: 'relative'}}>
  <GridContainer id="grid-container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tattoo' },
        { name: 'keywords', content: 'tattoo, art' }
      ]}
    />
    {/* <header
      role="banner"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        paddingTop: '1rem',
        zIndex: 9999,
        display: 'grid',
        justifyContent: 'center',
        // backgroundColor: '#fff3',
        // borderBottom: '2px solid #0004',
        // padding: '0 1rem',
      }}
    > */}
    {/* <Header> */}
    <ResponsiveMenu>
      {/* <Nav flow="column"> */}
      {/* Site Links */}
      {/* <NavButton>Menu</NavButton> */}
      <NavList>
        <NavListItem>
          <NavLink>Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>About</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>Services</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>Gallery</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>Contact</NavLink>
        </NavListItem>
      </NavList>

      {/* Social Links */}
      <NavList flow="column">
        <NavListItem>
          <NavLink>
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>
            <FontAwesomeIcon icon={faFacebook} />
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink>
            <FontAwesomeIcon icon={faFlickr} />
          </NavLink>
        </NavListItem>
      </NavList>

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
    {/* </Nav> */}
    {/* </Header> */}
    <Main>{children()}</Main>
    <Footer>&copy;2018 Anna Hang Tattoo.</Footer>
    {/* </div> */}
  </GridContainer>
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
