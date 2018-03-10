import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

const GalleryItemWrapper = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: .3em;

  & * {
    border-radius: .3em;
  }

`;

const GalleryItemOverlay = Overlay.extend`
  transition: 0.125s ease;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }

  & > * {
    color: rgba(255,255,255,0.5);
  }
`;

const GalleryItem = props => (
  <GalleryItemWrapper onClick={props.handleClick}>
    {props.children}
    <GalleryItemOverlay>
      <FontAwesomeIcon icon="expand" size="lg" />
    </GalleryItemOverlay>
  </GalleryItemWrapper>
);

export default GalleryItem;
