import styled, { css } from 'styled-components';

import { maxWidth } from '../utils/styles/width';
import { BLACK_25 } from '../utils/styles/colors';
import { desktop } from '../utils/styles/media';
import { HEADER_FONT_FAMILY, stepUpThree } from '../utils/styles/typography';

const SectionDivider = css`
  &:after {
    width: 100%;
    content: '';
    height: 1px;
    position: absolute;
    background: ${BLACK_25};
  }
`;

export const Section = styled.section`
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  text-align: ${props => (props.center ? 'center' : '')};
  ${props => (props.divider ? SectionDivider : '')};
`;

export const SectionContent = styled.div`
  padding: 3rem 1.5rem;
  ${maxWidth};
  margin: 0 auto;
  color: ${props => (props.invert ? 'rgba(255,255,255,.8)' : 'var(--text-color-secondary)')};

  ${desktop`
    padding-left: 3rem;
    padding-right: 3rem;
  `};
`;

export const SectionRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

export const SectionColumn = styled.div`
  padding: 0 1.5rem;
  flex: 1 1 100%;
  text-align: ${props => (props.center ? 'center' : '')};
  ${desktop`0
      flex-basis: 0;
    `};
`;

export const SectionTitle = styled.h2`
  color: ${props => (props.invert ? '#FFF' : 'var(--text-color-primary)')};
  font-family: ${HEADER_FONT_FAMILY};
  font-size: ${stepUpThree.fontSize};
  line-height: ${stepUpThree.lineHeight};
  text-align: center;
  margin-bottom: 0;
`;
