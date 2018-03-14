import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

// Tags will return null or []
export default ({ data }) => {
  return (
    <div>
      <h1>The Gallery</h1>
      <h2>{data.contentfulImage.title}</h2>
      <h3>{data.contentfulImage.imageCaption.imageCaptions}</h3>
      <p>Tags</p>
      <ul>
        {data.contentfulImage.tags ? (
          data.contentfulImage.tags.map(({ tag, id }) => (
            <li key={id}>
              <Link to={`/tag/${tag}`}>{tag}</Link>
            </li>
          ))
        ) : (
          <p>No tags.</p>
        )}
      </ul>
      <Img sizes={data.contentfulImage.photo.sizes} />
    </div>
  );
};

export const query = graphql`
  query ImageQuery($id: String!) {
    contentfulImage(id: { eq: $id }) {
      id
      title
      tags {
        id
        tag
      }
      imageCaption {
        imageCaption
      }
      imageCredits {
        imageCredits
      }
      photo {
        sizes(maxWidth: 2400) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;
