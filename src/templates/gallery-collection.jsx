import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import flattenTags from '../utils/flattenTags';
import { Section, SectionContent } from '../components';
import Gallery from '../components/Gallery/Gallery';
import GalleryItem from '../components/Gallery/GalleryItem';
import { List, ListItem, Title, TagLine } from '../components/elements';

const TagList = List.extend`
  flex-flow: row wrap;
  font-style: italic;
  margin-left: -0.375rem;
  margin-right: -0.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  & a {
    color: var(--accent-color-primary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TagListItem = ListItem.extend`
  margin-left: 0.375rem;
  margin-right: 0.375rem;
`;

const CollectionTemplate = ({ data }) => {
  const { tags, images } = data.contentfulPhotoGallery;

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
          <Link to={`/photo/${id}/`} key={id}>
            <Img sizes={photo.sizes} style={{ height: 'inherit', margin: 0 }} />
          </Link>
        </GalleryItem>
      );
    });

  const tagNodes = Object.values(tagMap).map(({ id, tag }) => (
    <TagListItem key={id}>
      <Link to={`/tag/${tag}`}>{tag}</Link>
    </TagListItem>
  ));

  return (
    <Section>
      <SectionContent>
        <Title>{data.contentfulPhotoGallery.title.title}</Title>
        <TagLine>{data.contentfulPhotoGallery.description.description}</TagLine>
        <TagList>{tagNodes}</TagList>
        <Gallery>{imageNodes || 'No images'}</Gallery>
      </SectionContent>
    </Section>
  );
};

CollectionTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulPhotoGallery(slug: { eq: $slug }) {
      title {
        title
      }
      description {
        description
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

export default CollectionTemplate;
