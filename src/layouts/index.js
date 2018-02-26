import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFlickr,
  faFacebook,
  faYoutube
} from '@fortawesome/fontawesome-free-brands';
import { GridContainer, Header, Nav, NavList } from '../components';

const TemplateWrapper = ({ data, children }) => (
  // <div style={{ display: 'grid', justifyContent: 'stretch', gridGap: '1rem', position: 'relative'}}>
  <GridContainer>
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
    <Header>
      
      <Nav>
        {/* <div
        style={{
          display: 'flex',
          width: '1280px',
          justifyContent: 'space-between',          
        }}
      > */}
        {/* <h1 style={{color: 'white', textShadow: '0 2px 0 rgba(0, 0, 0, 0.07)'}}>{data.site.siteMetadata.title}</h1> */}
        {/* <nav
          role="menu"
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        > */}
          {/* Site Links */}
          <ul
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridGap: '1rem',
              listStyle: 'none',
            }}
          >
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Home</Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>About</Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Services</Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Gallery</Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Contact</Link>
            </li>
          </ul>

          {/* Social Links */}
          <ul
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridGap: '1rem',
              listStyle: 'none'
            }}
          >
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>
                <FontAwesomeIcon icon={faFlickr} />
              </Link>
            </li>
          </ul>

          {/* Language Links */}
          <ul
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridGap: '1rem',
              listStyle: 'none'
            }}
          >
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>English</Link>
            </li>
            <li style={{ margin: 0 }}>
              <Link to="/" style={{color: 'rgba(255,255,255,.8)'}}>Vietnamese</Link>
            </li>
          </ul>
        {/* </nav> */}

        {/* Mobile Menu Toggle */}
        <button
          style={{
            display: 'none'
          }}
        >
          Menu
        </button>
      {/* </div> */}
      </Nav>
    </Header>
    <div
      style={{
        display: 'grid',
        justifyContent: 'stretch',
        gridGap: '2rem',
      }}
    >
      {children()}
    </div>
    <footer
      style={{
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: '#0002'
      }}
    >
      &copy; 2018 Anna Hang Tattoo.
    </footer>
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
