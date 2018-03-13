import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

export default ({ data }) => {
  return (
    <div>
      <h2>{data.contentfulPhotoGallery.title.title}</h2>
      {data.contentfulPhotoGallery.images.map(({ id, photo }) => (
        <Link to={`/image/${id}/`} key={id}>
          <Img
            style={{ height: '250px', width: '250px' }}
            resolutions={photo.resolutions}
          />
        </Link>
      ))}
    </div>
  );
};

export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulPhotoGallery(slug: { eq: $slug }) {
      title {
        title
      }
      images {
        id
        photo {
          resolutions(width: 250, height: 250) {
            ...GatsbyContentfulResolutions
          }
        }
      }
    }
  }
`;
