import React from 'react';
import Link from 'gatsby-link';
import flattenTags from '../utils/flattenTags';

const Gallery = ({ data, location }) => {
  // Flatten tags and add unique tag to map
  const tagMap = {};
  // const addTagsToList = tags => {
  //   tags.forEach(tag => {
  //     if (!tagMap[tag.id]) tagMap[tag.id] = tag;
  //   });
  // };

  const galleryNodes = data.allContentfulPhotoGallery.edges.map(({ node }) => {
    const { tags: galleryTags, images: galleryImages } = node;
    if (galleryTags) {
      flattenTags.call(tagMap, galleryTags);
    }
    if (galleryImages) {
      galleryImages.forEach(image => image.tags && flattenTags.call(tagMap, image.tags));
    }

    return (
      <li key={node.id}>
        <Link data-id={node.id} to={`${location.pathname}/${node.slug}`}>
          {node.title.title}
        </Link>
      </li>
    );
  });

  const tagNodes = Object.values(tagMap).map(({id, tag}) => <li key={id}><Link to={`/tag/${tag}`}>{tag}</Link></li>)

  return (
    <div>
      <h1>The Gallery</h1>
      <p>Tags</p>
      <ul>
        {tagNodes}
      </ul>
      <p>Galleries</p>
      <ul>{galleryNodes}</ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export const query = graphql`
  query AllGalleryQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          id
          slug
          title {
            title
          }
          coverImage {
            sizes {
              ...GatsbyContentfulSizes
            }
          }
          tags {
            id
            tag
          }
          images {
            tags {
              id
              tag
            }
          }
        }
      }
    }
  }
`;

export default Gallery;
