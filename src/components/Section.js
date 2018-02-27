import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

const SectionHeader = styled.header`

  justify-self: center;
  grid-area: header;
  
  h2 {
    margin: 0;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-area: content;
  grid-gap: 1em;
  padding: 1em;
  justify-items: stretch;
  align-items: stretch;

  @media (min-width: 600px) {
    grid-auto-flow: column;
  }
`;

const SectionFooter = styled.footer`
  grid-area: footer;
`;

export { Section, SectionHeader, SectionContent, SectionFooter };
