import React, { Component } from 'react';
import styled from 'styled-components';

import { Gallery, GalleryItem, GalleryImage } from '../components';
import ModalPortal from '../components/ModalPortal';
import Img from 'gatsby-image';

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
  handleClick = index => {
    console.log(`Image ${index} clicked!`);
    this.setState({ clicked: index });
  };
  mapImages(elements) {
    return elements.map(({ node }, index) => (
      <GalleryItem
        src={node.photo.file.url}
        id={index}
        key={node.id}
        clickHandler={this.handleClick}
      >
        {/* <GalleryImage src={ele.src} /> */}

        <Img sizes={node.photo.sizes} />
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
              <div
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  textAlign: 'center'
                }}
              >
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
              <Img sizes={elements[lastClicked].node.photo.sizes} />
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
