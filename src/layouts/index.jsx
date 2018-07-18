import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../utils/fontAwesome';
import { Main, Footer } from '../components';
import HeaderNavigation from '../components/HeaderNavigation';
// Inject global styles
import '../utils/styles/global';

const TemplateWrapper = ({ data, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/*
        Site Meta Data
        */}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tattoo' },
        { name: 'keywords', content: 'tattoo, art' },
      ]}
    />
    {/*
        Site Navigation
       */}
    <HeaderNavigation />
    {/*
        Site Content
        */}
    <Main>{children()}</Main>
    {/*
        Site Footer
        */}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired,
};

// eslint-disable-next-line
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
