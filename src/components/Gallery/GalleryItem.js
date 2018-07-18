import styled from 'styled-components';

import { BLACK_50, WHITE_50 } from '../../utils/styles/colors';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

const GalleryItem = styled.div`
  cursor: pointer;
  position: relative;
  & div {
    height: 100%;
  }
  @supports (display: grid) {
    &:nth-child(6n + 1) {
      grid-row: span 2;
    }
  }
`;

export const GalleryItemOverlay = Overlay.extend`
  cursor: zoom-in;
  transition: 0.125s ease;
  background-color: ${BLACK_50};

  &:hover {
    opacity: 1;
  }

  & > * {
    color: ${WHITE_50};
  }
`;

export const GalleryItemDetail = styled.div`
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

export default GalleryItem;
