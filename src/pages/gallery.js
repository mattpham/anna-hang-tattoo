import React from 'react';
import Link from 'gatsby-link';

const Gallery = ({ data, location }) => (
  <div>
    <h1>Hi from the gallery</h1>
    <p>Welcome to the gallery</p>
    <ul>
      {data.allContentfulPhotoGallery.edges.map(({ node }) => (
        <li key={node.id}>
          <Link data-id={node.id} to={`${location.pathname}/${node.slug}`}>
            {node.title.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export const query = graphql`
  query AllGalleryQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          id
          title {
            title
          }
          slug
        }
      }
    }
  }
`;

export default Gallery;
