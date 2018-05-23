import React from 'react';
import PropTypes from 'prop-types';

import { Section, SectionContent } from '../components';
import GalleryComponent from '../components/Gallery/Gallery';
import GalleryCollectionCard from '../components/Gallery/GalleryCollectionCard';
import GalleryNav from '../components/Gallery/GalleryNav';
import { Title, TagLine } from '../components/elements';

const Gallery = ({ data }) => {
  const galleryNodes = data.allContentfulPhotoGallery.edges.map(({ node }) =>
    GalleryCollectionCard(node));

  return (
    <React.Fragment>
      <Section>
        <SectionContent>
          <Title>Gallery</Title>
          <TagLine>Take a look at our latest and past work.</TagLine>
          <GalleryNav />
          <GalleryComponent>{galleryNodes}</GalleryComponent>
        </SectionContent>
      </Section>
    </React.Fragment>
  );
};

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query AllCollectionsQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          id
          slug
          title {
            title
          }
          description {
            description
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
