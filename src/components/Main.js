import styled from 'styled-components';
import media, {sizes} from '../utils/styles/media'

const Main = styled.main`
justify-items: center;
  display: grid;
  grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, ${sizes.desktop}) [main-end] minmax(1em, 1fr) [full-end];
${'' /*   
  ${
    media.extended`
      grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, 112rem) [main-end] minmax(1em, 1fr) [full-end];
    `
  } */}
  ${'' /* grid-gap: 1em; */}
  ${'' /* justify-items: stretch; */}
`;

export { Main };
