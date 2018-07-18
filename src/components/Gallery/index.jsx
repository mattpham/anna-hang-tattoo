import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import StyledGallery from './Gallery';
import GalleryItem, { GalleryItemOverlay } from './GalleryItem';
import GalleryModal from './GalleryModal';

const Gallery = ({ items }) => (
  <StyledGallery>
    {items.map(({ node }) => (
      <GalleryItem key={node.id}>
        <Link to={`/photo/${node.id}`}>
          <Img style={{ height: 'inherit' }} sizes={node.photo.sizes} />
        </Link>
      </GalleryItem>
    ))}
  </StyledGallery>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object
    })
  ).isRequired
};

export default Gallery;
export { GalleryItem };
export { default as GalleryCollectionCard } from './GalleryCollectionCard';
