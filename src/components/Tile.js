import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { desktop } from '../utils/styles/media';
import { stepZero } from '../utils/styles/typography';

export const TileContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Tile = styled.div`
  ${''} flex: 1 1 100%;
  text-align: center;
  margin-bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  ${desktop`
      flex-basis: 0;
      margin-bottom: 0;
    `};
`;

export const TileIcon = styled(FontAwesomeIcon)``;

export const TileHeader = styled.div`
  position: relative;
`;

export const TileTitle = styled.h3`
  ${''}
  font-size: ${stepZero.fontSize};
  line-height: ${stepZero.lineHeight};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  color: #212121;
  position: relative;
  margin-bottom: .75rem;

 
`;

export const TileBody = styled.p`
  text-transform: uppercase;
  color: #383838;
  letter-spacing: 2px;
  margin: 0;
  word-break: break-all;
`;

export const TileDivider = styled.div`
  & {
    height: 1px;
    width: 200px;
    background: var(--accent-color-secondary);
    position: relative;
    margin: 0 auto;
  }

  &:before {
    content: '';
    top: -2px;
    bottom: 0px;
    height: 2px;
    left: 10%;
    right: 10%;
    border-bottom: 1px solid var(--accent-color-secondary);
    border-top: 1px solid var(--accent-color-secondary);
    position: absolute;
    background: transparent;
  }

  &:after {
    left: 50%;
    top: -4px;
    height: 3px;
    width: 3px;
    content: '';
    box-sizing: border-box;

    outline: 3px solid #FFF;
    background: var(--accent-color-secondary);
    position: absolute;
    transform: rotate(45deg);
  }
`;

export default Tile;
