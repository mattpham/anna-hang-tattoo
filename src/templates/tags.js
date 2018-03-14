import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

export default ({ data }) => {
  const { tag, image, photo_gallery } = data.contentfulTag;

  const galleryNodes =
    photo_gallery &&
    photo_gallery.map(gallery => (
      <li key={gallery.id}>
        <Link to={`/gallery/${gallery.slug}`}>
          {gallery.title.title}
          {gallery.coverImage && <Img sizes={gallery.coverImage.sizes} />}
        </Link>
      </li>
    ));

  const imageNodes =
    image &&
    image.map(img => (
      <li key={img.id}>
        <Link to={`/image/${img.id}`}>
          <Img sizes={img.photo.sizes} />
        </Link>
      </li>
    ));

  return (
    <div>
      <h1>The Gallery</h1>
      <h2>#{data.contentfulTag.tag}</h2>
      <p>Galleries</p>
      <ul>{galleryNodes || <p>Nothing here.</p>}</ul>
      <p>Images</p>
      <ul>{imageNodes || <p>Nothing here.</p>}</ul>
    </div>
  );
};

export const query = graphql`
  query TagQuery($id: String!) {
    contentfulTag(id: { eq: $id }) {
      id
      tag
      image {
        id
        photo {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
      photo_gallery {
        id
        title {
          title
        }
        slug
        coverImage {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
    }
  }
`;
