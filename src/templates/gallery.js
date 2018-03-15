import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import flattenTags from '../utils/flattenTags';
import { Main, Section, SectionHeader, SectionContent } from '../components';
import Gallery from '../components/Gallery/Gallery';
import GalleryItem from '../components/Gallery/GalleryItem';

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
        <GalleryItem>
          <Link to={`/image/${id}/`} key={id}>
            <Img sizes={photo.sizes} style={{ height: 'inherit', margin: 0 }} />
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
          <h2>{data.contentfulPhotoGallery.title.title}</h2>
          <p>Tags</p>
          <ul>{tagNodes}</ul>
        </SectionHeader>
        <SectionContent>
          <Gallery>{imageNodes || 'No images'}</Gallery>
        </SectionContent>
      </Section>
    </Main>
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
          sizes(maxWidth: 1200) {
            ...GatsbyContentfulSizes
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
