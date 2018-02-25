module.exports = {
  siteMetadata: {
    title: `Anna Hang Tattoo`
  },
  pathPrefix: '/tattoo-site',
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};
