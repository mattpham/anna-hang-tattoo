import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import StyledGallery from './Gallery';
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';

class Gallery extends Component {
  state = {
    currentIndex: 0,
    isOpened: false
  };

  handleClickImage = index => {
    console.log('clicked ' + index);
    this.setState({
      currentIndex: index,
      isOpened: true
    });
  };

  handleNext = () => {
    console.log('next');
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  };

  handlePrev = () => {
    console.log('prev');
    this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
  };
  handleClose = () => {
    console.log('close');
    this.setState({
      isOpened: false
    });
  };

  renderGalleryItems() {
    const { items } = this.props;
    return items.map(({ node }, index) => (
      <GalleryItem
        key={node.id}
        handleClick={() => this.handleClickImage(index)}
      >
          <Img style={{height: 'inherit'}} sizes={node.photo.sizes} />
      </GalleryItem>
    ));
  }

  render() {
    const { items } = this.props;
    const { currentIndex, isOpened } = this.state;
    const currentItem = items[currentIndex];

    return (
      <StyledGallery>
        {this.renderGalleryItems()}
        {this.renderGalleryItems()}
        {this.renderGalleryItems()}
        {console.log(items)}
          {this.state.isOpened ? (
            <GalleryModal
              index={currentIndex}
              item={currentItem}
              length={items.length}
              handlePrev={this.handlePrev}
              handleNext={this.handleNext}
              handleClose={this.handleClose}
            />
          ) : null}
      </StyledGallery>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object
    })
  ).isRequired
};

export { Gallery, GalleryItem };
