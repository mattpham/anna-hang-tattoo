import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-auto-flow: dense;
  width:100%;
  grid-auto-rows: minmax(100px, 1fr);
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-auto-columns: minmax(256px, auto); */}
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  

  
`;

export default StyledGallery;
