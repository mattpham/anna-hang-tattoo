import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: dense;
  width:100%;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  ${'' /* grid-template-rows: repeat(auto-fill, minmax(256px, 1fr)); */}
  grid-auto-columns: minmax(256px, auto);
  ${'' /* grid-auto-rows: minmax(256px, auto); */}
`;

export default StyledGallery;
