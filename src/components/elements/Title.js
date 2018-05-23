import styled from 'styled-components';

import { stepUpOne, stepUpFour, HEADER_FONT_FAMILY } from '../../utils/styles/typography';

export const Title = styled.h1`
  font-family: ${HEADER_FONT_FAMILY};
  text-transform: capitalize;
  margin-bottom: 0;
  color: ${props => (props.invert ? '#FFF' : 'var(--text-color-primary)')};
  font-size: ${stepUpFour.fontSize};
  line-height: ${stepUpFour.lineHeight};
`;

export const PreTitle = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--accent-color-secondary);
`;

export const TagLine = styled.p`
  max-width: 48rem;
  color: ${props => (props.invert ? 'rgba(255,255,255,.75)' : 'var(--text-color-tertiary)')};
  font-size: ${stepUpOne.fontSize};
  line-height: ${stepUpOne.lineHeight};
`;
