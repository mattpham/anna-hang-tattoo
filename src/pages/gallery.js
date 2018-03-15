import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import flattenTags from '../utils/flattenTags';
import { Main, Section, SectionHeader, SectionContent } from '../components';

import GalleryComponent from '../components/Gallery/Gallery';
import GalleryItem, {
  GalleryItemDetail
} from '../components/Gallery/GalleryItem';

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
      galleryImages.forEach(
        image => image.tags && flattenTags.call(tagMap, image.tags)
      );
    }

    return (
      <GalleryItem
        key={node.id}
        style={{ background: 'grey', gridRow: 'span 1' }}
      >
        <Link data-id={node.id} to={`${location.pathname}/${node.slug}`}>
          <div style={{ height: '100%' }}>
            <GalleryItemDetail>
              <span
                style={{
                  background: 'black',
                  color: 'white',
                  padding: '.5em',
                  boxDecorationBreak: 'clone'
                }}
              >
                {node.title.title}
              </span>
            </GalleryItemDetail>
            {node.coverImage ? <Img sizes={node.coverImage.sizes} /> : ''}
          </div>
        </Link>
      </GalleryItem>
    );
  });

  const tagNodes = Object.values(tagMap).map(({ id, tag }) => (
    <li style={{ display: 'inline', padding: '0 1em' }} key={id}>
      <Link to={`/tag/${tag}`}>{tag}</Link>
    </li>
  ));

  return (
    <Main>
      <Section>
        <SectionHeader>
          <h1>
            <Link to="/gallery">The Gallery</Link>
          </h1>
          <p>Tags</p>
          <ul>{tagNodes}</ul>
          <p>Galleries</p>
        </SectionHeader>
        <SectionContent>
          <GalleryComponent>{galleryNodes}</GalleryComponent>
        </SectionContent>
      </Section>
    </Main>
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
