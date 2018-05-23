import styled from 'styled-components';

import Column from './Column';
import { desktop } from '../../utils/styles/media';

// Row component used as a container for Column components
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -0.75rem;
  ${desktop`
    & > ${Column} {
      flex-basis: calc(100% / ${props => props.columns || 1});
    }
  `};
`;

export default Row;
