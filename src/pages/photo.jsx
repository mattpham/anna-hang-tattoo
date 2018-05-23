import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Link, Title, TagLine } from '../components/elements';
import { Section, SectionContent } from '../components';
import GalleryComponent from '../components/Gallery/Gallery';
import GalleryNav from '../components/Gallery/GalleryNav';

const PhotoPage = ({ data }) => {
  const galleryNodes = data.allContentfulImage.edges.map(({ node }) => (
    <div key={node.id}>
      <Link to={`/photo/${node.id}`}>
        <Img sizes={node.photo.sizes} />
      </Link>
    </div>
  ));

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

PhotoPage.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query AllPhotosQuery {
    allContentfulImage {
      edges {
        node {
          id
          photo {
            sizes {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;

export default PhotoPage;
