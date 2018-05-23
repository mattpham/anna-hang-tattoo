import styled from 'styled-components';

import { desktop } from '../../utils/styles/media';

const StyledGallery = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-auto-flow: dense;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(1, 1fr);

    ${desktop`
      grid-template-columns: repeat(3, 1fr);
    `};
  }
`;

export default StyledGallery;
