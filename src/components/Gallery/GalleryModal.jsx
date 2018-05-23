import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ModalPortal from '../ModalPortal';
import { BLACK_25, WHITE, WHITE_75 } from '../../utils/styles/colors';
import { stepUpOne } from '../../utils/styles/typography';

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
  color: ${WHITE};
  background-color: ${BLACK_25};
  z-index: 1;
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
  color: ${WHITE_75};
  padding: 0.75rem;
  font-size: ${stepUpOne.fontSize};
  line-height: ${stepUpOne.lineHeight};
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
          <ModalButton onClick={handleClose}>
            <FontAwesomeIcon icon="times" />
          </ModalButton>
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
