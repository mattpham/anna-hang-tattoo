import React from 'react';

import media, { sizes } from '../utils/styles/media';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import {
  DEFAULT_WIDTH,
  LARGE_DISPLAY_WIDTH
} from 'typography-breakpoint-constants';

const StyledSection = styled.section`
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`;

const Wrapper = styled.div`
  ${StyledSection} & {
    background-color: ${props => (props.fgColor ? props.fgColor : '')};
    padding: ${props => (props.full ? '' : rhythm(1))};
    margin: 0 auto;
    max-width: ${props => (props.full ? '100%' : DEFAULT_WIDTH)};
  }
`;

export const Section = props => (
  <StyledSection {...props}>
    <Wrapper fgColor={props.fgColor} full={props.full}>
      {props.children}
    </Wrapper>
  </StyledSection>
);

export const SectionHeader = styled.header`
  padding: 0 ${rhythm(1)};
  padding-top: ${rhythm(1)};
  text-align: center;
`;

export const SectionContent = styled.div`
  flex: 1 1 0;
  align-self: ${props => (props.align ? props.align : '')};
  padding: 0 ${rhythm(1)};

  :not(:last-child) {
    margin-bottom: ${rhythm(1)};

    ${media.tablet`
      margin-bottom: 0;
    `};
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
  `};
`;

export const SectionFooter = styled.footer`
  ${'' /* grid-area: footer; */};
`;
