import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import flattenTags from '../utils/flattenTags';

export default ({ data }) => {
  const { tags, title, images } = data.contentfulPhotoGallery;

  const tagMap = {};

  if (tags) {
    flattenTags.call(tagMap, tags);
  }

  const imageNodes =
    images &&
    images.map(({ id, photo, tags: imageTags }) => {
      if (imageTags) {
        flattenTags.call(tagMap, imageTags);
      }
      return (
        <Link to={`/image/${id}/`} key={id}>
          <Img
            style={{ height: '250px', width: '250px' }}
            resolutions={photo.resolutions}
          />
        </Link>
      );
    });
    
  const tagNodes = Object.values(tagMap).map(({id, tag}) => <li key={id}><Link to={`/tag/${tag}`}>{tag}</Link></li>)


  return (
    <div>
      <h1>The Gallery</h1>
      <h2>{data.contentfulPhotoGallery.title.title}</h2>
      <p>Tags</p>
      <ul>
        {tagNodes}
      </ul>
      {imageNodes || 'No images'}
    </div>
  );
};

export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulPhotoGallery(slug: { eq: $slug }) {
      title {
        title
      }
      tags {
        id
        tag
      }
      images {
        id
        photo {
          resolutions(width: 250, height: 250) {
            ...GatsbyContentfulResolutions
          }
        }
        tags {
          id
          tag
        }
      }
    }
  }
`;
