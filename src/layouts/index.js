import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInstagram, faFlickr, faFacebook, faYoutube } from '@fortawesome/fontawesome-free-brands'

const ListItem = (props) => (
  <li
    style={{
      display: 'inline-block',
      marginRight: '1rem',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'white'
      }}
      >
    {props.children}
    </Link>
  </li>
);

const Header = () => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ display: 'inline'}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Tattoo Site
        </Link>
      </h1>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Gallery</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem><FontAwesomeIcon icon={faInstagram} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faFlickr} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faFacebook} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faYoutube} /></ListItem>
      </ul>
    </div>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tattoo Site"
      meta={[
        { name: 'description', content: 'Tattoo' },
        { name: 'keywords', content: 'tattoo, art' }
      ]}
    />
    <Header />
    <main
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
