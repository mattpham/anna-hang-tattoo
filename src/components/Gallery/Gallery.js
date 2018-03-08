import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-auto-rows: minmax(256px, auto);
`;

export default Gallery;
