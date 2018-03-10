import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ModalPortal from '../ModalPortal';

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.125s ease;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vh;
  flex: 1;

  & img {
    margin: 0;
  }
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  color: rgba(255, 255, 255, 0.8);
  padding: .5em;
  font-size: 2em;
  line-height: 1em;
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    visibility: hidden;
  }
`;

const GalleryModal = ({
  handlePrev,
  handleNext,
  handleClose,
  index,
  length,
  item
}) => (
  <ModalPortal>
    <StyledModalWrapper>
      <ModalButton onClick={handlePrev} disabled={index <= 0}>
        <FontAwesomeIcon icon="angle-left" />
      </ModalButton>
      <InnerWrapper>
        <InnerHeader>
          <ModalButton onClick={handleClose}>&times;</ModalButton>
        </InnerHeader>
        <Img sizes={item.node.photo.sizes} />
        <div>{`Image ${index + 1} of ${length}`}</div>
      </InnerWrapper>
      <ModalButton onClick={handleNext} disabled={index >= length - 1}>
        <FontAwesomeIcon icon="angle-right" />
      </ModalButton>
    </StyledModalWrapper>
  </ModalPortal>
);

GalleryModal.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
};

export default GalleryModal;
