import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: stretch;
  align-items: stretch;
`;

export default Gallery;
