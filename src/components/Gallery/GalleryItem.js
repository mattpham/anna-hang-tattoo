import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/fontawesome-free-solid/';

const StyledGalleryItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  @media (min-width: 600px) {
    grid-column: span ${props => (props.h ? props.h : '1')};
    grid-row: span ${props => (props.v ? props.v : '1')};
  }
`;

const GalleryItemOverlay = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  justify-content: center;
  align-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`;

class GalleryItem extends Component {
  state = {
    isHovered: false
  };
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    let overlay = null;
    if (this.state.isHovered) {
      overlay = (
        <GalleryItemOverlay>
          <FontAwesomeIcon icon={faExpandArrowsAlt} size="3x" />
        </GalleryItemOverlay>
      );
    }
    return (
      <StyledGalleryItem
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...this.props}
      >
        {this.props.children}
        {overlay}
      </StyledGalleryItem>
    );
  }
}

export default GalleryItem;
