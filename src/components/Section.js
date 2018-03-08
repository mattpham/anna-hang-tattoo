
import media from '../utils/styles/media';
import styled from 'styled-components';

const Section = styled.section`
  justify-items: stretch;
  display: grid;

  ${'' /* grid-template-areas:
    'header'
    'content'
    'footer'; */}
`;

const SectionHeader = styled.header`

  justify-self: center;
  ${'' /* grid-area: header; */}
  
  ${'' /* h2 {
    margin: 0;
  } */}
`;

const SectionContent = styled.div`
  display: grid;
  ${'' /* grid-area: content; */}
  grid-gap: 1em;
  padding: 0 1em;


  ${
    media.medium`grid-auto-flow: ${props => props.flow ? props.flow : 'column'};`
  }
`;

const SectionFooter = styled.footer`
  ${'' /* grid-area: footer; */}
`;

export { Section, SectionHeader, SectionContent, SectionFooter };
