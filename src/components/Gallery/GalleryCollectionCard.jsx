import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Link, List, ListItem } from '../elements';
import { stepZero, stepDownHalf, stepDownOne } from '../../utils/styles/typography';

const Title = styled.h3`
  text-decoration: none;
  font-size: ${stepZero.fontSize};
  line-height: ${stepZero.lineHeight};
  margin-bottom: 0;
  color: var(--text-color-primary);
`;

const Subtitle = styled.p`
  margin-bottom: 0;
  font-size: ${stepDownHalf.fontSize};
  line-height: ${stepDownHalf.lineHeight};
  color: var(--text-color-tertiary);
`;

const TagList = List.extend`
  font-size: ${stepDownOne.fontSize};
  line-height: ${stepDownOne.lineHeight};
  margin-bottom: 0;
  flex-flow: row wrap;
`;

const Tag = ListItem.extend`
  margin-right: 0.75rem;
`;

const TagLink = Link.extend`
  color: var(--accent-color-primary);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CollectionCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionBody = styled.div`
  padding-top: 0.75rem;
  flex: 1 1 100%;
`;

const GalleryCollectionCard = node => (
  <CollectionCard key={node.id}>
    {/* Collection Image */}
    <div>
      <Link data-id={node.id} to={`/gallery/${node.slug}`}>
        {/* TODO: put placeholder image */}
        {node.coverImage ? <Img sizes={node.coverImage.sizes} /> : ''}
      </Link>
    </div>

    {/* Collection Info */}
    <CollectionBody>
      <Link data-id={node.id} to={`/gallery/${node.slug}`}>
        <Title>{node.title.title}</Title>
      </Link>
      <Subtitle>{node.description.description}</Subtitle>
      <TagList>
        {node.tags &&
          node.tags.map(({ id, tag }) => (
            <Tag key={id}>
              <TagLink to={`/tag/${tag}`}>{tag}</TagLink>
            </Tag>
          ))}
      </TagList>
    </CollectionBody>
  </CollectionCard>
);

export default GalleryCollectionCard;
