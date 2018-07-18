const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) =>
    resolve(graphql(`
        {
          allContentfulPhotoGallery {
            edges {
              node {
                slug
              }
            }
          }
          allContentfulImage {
            totalCount
            edges {
              node {
                id
              }
            }
          }
          allContentfulTag {
            edges {
              node {
                id
                tag
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create the Gallery Collections pages
      result.data.allContentfulPhotoGallery.edges.forEach(({ node }) => {
        createPage({
          path: `/gallery/${node.slug}`,
          component: path.resolve('./src/templates/gallery-collection.jsx'),
          context: {
            slug: node.slug,
          },
        });
      });
      // Create the Gallery photos pages
      result.data.allContentfulImage.edges.forEach(({ node }) => {
        createPage({
          path: `/photo/${node.id}`,
          component: path.resolve('./src/templates/gallery-photo.jsx'),
          context: {
            id: node.id,
          },
        });
      });
      // Create the Gallery Tags pages
      result.data.allContentfulTag.edges.forEach(({ node }) => {
        createPage({
          path: `/tag/${node.tag}`,
          component: path.resolve('./src/templates/gallery-tag.jsx'),
          context: {
            id: node.id,
          },
        });
      });
    })));
};
