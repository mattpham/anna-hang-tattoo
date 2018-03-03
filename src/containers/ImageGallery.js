import React, { Component } from 'react';
import styled from 'styled-components';

import { Gallery, GalleryItem, GalleryImage } from '../components';
import ModalPortal from '../components/ModalPortal';

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.125s ease;
`;

class ImageGallery extends Component {
  state = {
    elements: this.props.data,
    clicked: null
  };
  handleClick = id => {
    console.log(`Image ${id} clicked!`);
    this.setState({ clicked: id });
  };
  mapImages(elements) {
    return elements.map(ele => (
      <GalleryItem id={ele.id} key={ele.id} clickHandler={this.handleClick}>
        <GalleryImage src={ele.src} />
      </GalleryItem>
    ));
  }

  render() {
    const elements = this.state.elements;
    const lastClicked = this.state.clicked;

    return (
      <Gallery>
        {this.mapImages(elements)}
        {!isNaN(lastClicked) && typeof lastClicked == 'number' ? (
          <ModalPortal>
            <ImageModal>
              <div style={{display: 'grid', gridAutoFlow: 'column', textAlign: 'center'}}>
                <button
                  onClick={() =>
                    this.setState({
                      clicked:
                        (elements.length + lastClicked - 1) % elements.length
                    })
                  }
                >
                  Prev
                </button>
                {`Image #${lastClicked} of ${elements.length}`}
                <button
                  onClick={() =>
                    this.setState({
                      clicked: (lastClicked + 1) % elements.length
                    })
                  }
                >
                  Next
                </button>
              </div>
              <img src={this.state.elements[lastClicked].src} />
              <button onClick={() => this.setState({ clicked: null })}>
                Close
              </button>
            </ImageModal>
          </ModalPortal>
        ) : (
          ''
        )}
      </Gallery>
    );
  }
}

export default ImageGallery;
