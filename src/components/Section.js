
import media, { sizes } from '../utils/styles/media';
import styled from 'styled-components';

const Section = styled.section`
  justify-items: stretch;
  display: grid;
`;

const SectionHeader = styled.header`
  justify-self: center;
`;

const SectionContent = styled.div`
  display: grid;
  justify-self: center;
  grid-gap: 1em;
  padding: 0 1em;
  width: 100%;

  ${
    media.medium`
      grid-auto-flow: ${props => props.flow ? props.flow : 'column'};
    `
  }
  ${
    media.xlarge`
      max-width: ${sizes.xlarge}px;
    `
  }
  
`;

const SectionFooter = styled.footer`
  ${'' /* grid-area: footer; */}
`;

export { Section, SectionHeader, SectionContent, SectionFooter };
