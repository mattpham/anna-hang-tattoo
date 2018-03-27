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
  Nav,
  NavList,
  NavListSocial,
  Main,
  Footer,
  FooterFooter,
  FooterFooterCopy,
  FooterContent,
  FooterRow,
  FooterColumn,
  FooterNav,
  FooterNavSocial,
  SectionRow,
  SectionContent,
  Container
} from '../components';
import theme from '../themes';

injectGlobal`
  body {
    background-color: ${theme.background};
  }
`;

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      {/*
        Site Meta Data
        */}
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Tattoo' },
          { name: 'keywords', content: 'tattoo, art' }
        ]}
      />

      {/*
        Site Navigation
        */}
      <Nav>
        {/* Site Links */}
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
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={['fab', 'flickr']} />
          </Link>
        </NavListSocial>
      </Nav>

      {/*
        Site Content
        */}
      <Main>{children()}</Main>

      {/*
        Site Footer
        */}
      <Footer>
        <FooterContent>
          <FooterRow>
            <FooterColumn>
              <div>
     
                  <h1
                    style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    border: '2px solid white',
                    color: 'rgba(255,255,255,.8)',
                    marginBottom: '12px'
                      // fontSize: '24px',
                    }}
                  >
                    Anna Hang Tattoo
                  </h1>
                </div>
              <p>
                <small>
                  We are a tattoo studio located in Orange County, California.
                </small>
              </p>
            </FooterColumn>
            {/* <div style={{ display: 'flex' }}> */}
            <FooterColumn>
              <FooterNav style={{ flexDirection: 'column' }}>
                <h3>Menu</h3>
                <Link to="/">Home</Link>
                <Link to="#about">About</Link>
                <Link to="#specialties">Services</Link>
                <Link to="gallery">Gallery</Link>
                <Link to="#contact-form">Contact</Link>
              </FooterNav>
            </FooterColumn>
            <FooterColumn>
              <div >
                {/* <div>13071 Brookhurst St.,</div>
                <div>Ste #225</div>
                <div>Garden Grove, California</div> */}
                <h3>Contact</h3>
                <p>
                  13071 Brookhurst St.,<br />
                  Ste #225<br />
                  Garden Grove, California
                </p>
                <p>
                  <a href="tel:7142993387">(714) 299-3387</a>
                  <br />
                  <a href="mailto:info@annahangtattoovn.com">
                    info@annahangtattoovn.com
                  </a>
                </p>
              </div>
              <FooterNavSocial>
                <Link to="/">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={['fab', 'flickr']} />
                </Link>
              </FooterNavSocial>
            </FooterColumn>
            {/* </div> */}
          </FooterRow>
        </FooterContent>
        <FooterFooter>
          <FooterFooterCopy>
            &copy; 2018 Anna Hang Tattoo. All Rights Reserved.
          </FooterFooterCopy>
        </FooterFooter>
      </Footer>
    </Container>
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
