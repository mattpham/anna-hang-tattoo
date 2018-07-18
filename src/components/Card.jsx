import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { phone, desktop } from '../utils/styles/media';
import { HEADER_FONT_FAMILY, stepDownOne, stepUpThree } from '../utils/styles/typography';

const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

const CardImageWrapper = styled.div`
  margin: 0 1.5rem;
  box-shadow: -0.75rem 0.75rem var(--accent-color-secondary);
  width: 100%;

  & div {
    height: 100%;
  }

  ${desktop`
    flex: 1;
  `};
`;

export const CardImage = props => (
  <CardImageWrapper>
    <Img {...props} />
  </CardImageWrapper>
);

export const CardContent = styled.div`
  margin: 0 1.5rem;
  width: 100%;

  ${phone`
    margin-top: 1.5rem;
  `};

  ${desktop`
    flex: 2;
  `};
`;

export const CardTitle = styled.h3`
  font-family: ${HEADER_FONT_FAMILY};
  font-size: ${stepUpThree.fontSize};
  line-height: ${stepUpThree.lineHeight};
  color: var(--text-color-primary);
`;

export const CardTagLine = styled.h4`
  font-size: ${stepDownOne.fontSize};
  line-height: ${stepDownOne.lineHeight};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0;
  color: var(--accent-color-secondary);
`;

export default Card;
