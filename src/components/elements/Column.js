import styled from 'styled-components';

import { phone } from '../../utils/styles/media';

const Column = styled.div`
  padding: 0 0.75rem;
  box-sizing: border-box;
  ${phone`
    flex-basis: 100%;
  `};
`;

export default Column;
