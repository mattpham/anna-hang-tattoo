import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Link, Title, TagLine } from '../components/elements';
import { Section, SectionContent } from '../components';
import GalleryComponent from '../components/Gallery/Gallery';
import GalleryNav from '../components/Gallery/GalleryNav';

const GalleryPage = ({ data }) => {
  const galleryNodes = data.allContentfulTag.edges.map(({ node }) => (
    <div key={node.id}>
      <Link to={`/tag/${node.tag}`}>
        <Img
          style={{ height: '6rem' }}
          sizes={
            node.image[Math.floor(Math.random() * node.image.length)].photo
              .sizes
          }
        />
        {node.tag}
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

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query AllTagsQuery {
    allContentfulTag {
      edges {
        node {
          id
          tag
          image {
            photo {
              sizes {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
