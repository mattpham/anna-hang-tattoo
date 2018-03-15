import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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

export const GalleryItem = styled.div`
  cursor: pointer;
  position: relative;
  grid-row: span 1;
  ${'' /* border-radius: .3em;

  & * {
    border-radius: .3em;
  } */}
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
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }

  & > * {
    color: rgba(255,255,255,0.5);
  }
`;

export const GalleryItemDetail = styled.div`
  position: absolute;
  ${'' /* left: -.5em; */}
  z-index: 1;
  overflow: hidden;
`;


export default GalleryItem;
