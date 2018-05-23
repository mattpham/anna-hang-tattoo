import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { Section, SectionContent } from '../components';
import { List, ListItem, Title, TagLine } from '../components/elements';

const TagList = List.extend`
  flex-flow: row wrap;
  font-style: italic;
  margin-left: -0.375rem;
  margin-right: -0.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  & a {
    color: var(--accent-color-primary) eeeeee;
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

// Tags will return null or []
const PhotoTemplate = ({ data }) => {
  const { title } = data.contentfulImage;
  const { imageCaptions } = data.contentfulImage.imageCaption;
  const { tags } = data.contentfulImage;
  const { sizes } = data.contentfulImage.photo;

  return (
    <Section>
      <SectionContent>
        <Title>{title}</Title>
        <TagLine>{imageCaptions}</TagLine>
        {tags && (
          <TagList>
            {tags.map(({ tag, id }) => (
              <TagListItem key={id}>
                <Link to={`/tag/${tag}`}>{tag}</Link>
              </TagListItem>
            ))}
          </TagList>
        )}
        <Img sizes={sizes} />
      </SectionContent>
    </Section>
  );
};

PhotoTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query PhotoQuery($id: String!) {
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

export default PhotoTemplate;
