import media, { sizes } from '../utils/styles/media';
import styled from 'styled-components';

const Section = styled.section`
  ${'' /* justify-items: stretch; */} display: inherit;
  grid-column: ${props => (props.full ? 'full' : 'main')};
  grid-template-columns: inherit;
`;

const SectionHeader = styled.header`
  ${'' /* justify-self: center; */} grid-column: main;
`;

const SectionContent = styled.div`
  grid-column: main;
  display: inherit;
  ${media.tablet`
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  `};
`;

const SectionFooter = styled.footer`
  ${'' /* grid-area: footer; */};
`;

export { Section, SectionHeader, SectionContent, SectionFooter };
