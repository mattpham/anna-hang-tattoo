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

const Header = (props) => (
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
      {props.children}
    </div>
  </header>
);

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tattoo' },
        { name: 'keywords', content: 'tattoo, art' }
      ]}
    />
    <Header>
    <h1 style={{ display: 'inline'}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {data.site.siteMetadata.title}
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
        <ListItem>EN</ListItem>
        <ListItem>|</ListItem>
        <ListItem>VN</ListItem>
      </ul>
    </Header>
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
