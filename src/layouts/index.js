import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInstagram, faFlickr, faFacebook, faYoutube } from '@fortawesome/fontawesome-free-brands'

// const ListItem = (props) => (
//   <li
//     style={{
//       display: 'inline-block',
//       marginRight: '1rem',
//     }}
//   >
//     <Link
//       to="/"
//       style={{
//         color: 'white'
//       }}
//       >
//     {props.children}
//     </Link>
//   </li>
// );

// const Header = (props) => (
//   <header
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem'
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem'
//       }}
//     >
//       {props.children}
//     </div>
//   </header>
// );

const TemplateWrapper = ({ data, children }) => (
  <div style={{display: 'grid', justifyContent: 'center', gridGap: '1rem'}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tattoo' },
        { name: 'keywords', content: 'tattoo, art' }
      ]}
    />
    <header
      role="banner"
      style={{
        position: 'relative',
        display: 'grid',
        gridAutoFlow: 'column',
        backgroundColor: '#0002',
        padding: '0 1rem',
      }}
    >
      <h1>{data.site.siteMetadata.title}</h1>
      <nav role="menu"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {/* Site Links */}
        <ul
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridGap: '1rem',
            listStyle: 'none',
          }}>
          <li style={{margin: 0}}><Link to="/">Home</Link></li>
          <li style={{margin: 0}}><Link to="/">About</Link></li>
          <li style={{margin: 0}}><Link to="/">Services</Link></li>
          <li style={{margin: 0}}><Link to="/">Gallery</Link></li>
          <li style={{margin: 0}}><Link to="/">Contact</Link></li>
        </ul>

        {/* Social Links */}
        <ul
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridGap: '1rem',
            listStyle: 'none',
          }}>
          <li style={{margin: 0}}><Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
          <li style={{margin: 0}}><Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
          <li style={{margin: 0}}><Link to="/"><FontAwesomeIcon icon={faFlickr} /></Link></li>
        </ul>

        {/* Language Links */}
        <ul
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridGap: '1rem',
            listStyle: 'none',
          }}>
          <li style={{margin: 0}}><Link to="/">English</Link></li>
          <li style={{margin: 0}}><Link to="/">Vietnamese</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        style={{
          display: 'none'
        }}
      >
        Menu
      </button>
    </header>
    <main
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      {children()}
    </main>
    <footer
      style={{
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: '#0002',
      }}>
      &copy; 2018 Anna Hang Tattoo.
    </footer>
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
