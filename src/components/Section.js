import media, { sizes } from '../utils/styles/media';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import {
  DEFAULT_WIDTH,
  LARGE_DISPLAY_WIDTH
} from 'typography-breakpoint-constants';
export const Section = styled.section`
  ${'' /* padding: ${rhythm(1)}; */} margin: 0 auto;
  margin-top: ${rhythm(2)};
  max-width: ${props => (props.full ? '100%' : LARGE_DISPLAY_WIDTH)};
`;

export const SectionHeader = styled.header`
  ${'' /* display: inline-block; */}
  ${
    '' /* position: relative;
  justify-content: center;

  ${media.tablet`
    justify-content: flex-start;
  `}; */
  }
  padding: 0 ${rhythm(1)};

`;

export const SectionContent = styled.div`
  flex: 1 1 0;
  align-self: ${props => props.align ? props.align : '' };
  padding: 0 ${rhythm(1)};

  :not(:last-child) {
    margin-bottom: ${rhythm(1)};
   
    ${media.tablet`
      margin-bottom: 0;
    `};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;

  `};
`;

export const SectionFooter = styled.footer`
  ${'' /* grid-area: footer; */};
`;
