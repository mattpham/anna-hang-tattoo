import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { Section, SectionContent } from '../components';
import { Row, Column, Title } from '../components/elements';
import GalleryComponent from '../components/Gallery/Gallery';
import GalleryCollectionCard from '../components/Gallery/GalleryCollectionCard';

const TagTemplate = ({ data }) => {
  // eslint-disable-next-line camelcase
  const { tag, image, photo_gallery } = data.contentfulTag;

  const galleryNodes =
    // eslint-disable-next-line camelcase
    photo_gallery && photo_gallery.map(GalleryCollectionCard);

  const imageNodes =
    image &&
    image.map(node => (
      <div key={node.id}>
        <Link to={`/photo/${node.id}`}>
          <Img sizes={node.photo.sizes} />
        </Link>
      </div>
    ));

  return (
    <Section>
      <SectionContent>
        <Title>#{tag}</Title>
        <Row>
          <Column>
            <h3>Galleries</h3>
            <GalleryComponent columns={4}>{galleryNodes || <p>Nothing here.</p>}</GalleryComponent>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Images</h3>
            <GalleryComponent>{imageNodes || <p>Nothing here.</p>}</GalleryComponent>
          </Column>
        </Row>
      </SectionContent>
    </Section>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
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
        description {
          description
        }
        slug
        tags {
          id
          tag
        }
        coverImage {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
    }
  }
`;

export default TagTemplate;
