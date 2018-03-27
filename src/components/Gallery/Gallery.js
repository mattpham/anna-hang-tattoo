import React from 'react';
import styled, { css } from 'styled-components';
import { phone, tablet, desktop } from '../mixin/media';
import { spacing } from '../mixin/spacing';

const gridStyles = css`
  display: grid;
  grid-auto-flow: dense;
  grid-gap: ${spacing.md};
  grid-template-columns: repeat(2, 1fr);
`;

const gridStylesDesktop = css`
  grid-template-columns: repeat(3, 1fr);
`;

const StyledGallery = styled.div`
  ${'' /* display: grid;
  grid-gap: ${rhythm(1)};
  grid-auto-flow: dense; */}
  ${'' /* width:100%; */}
  ${'' /* grid-auto-rows: minmax(100px, 1fr); */}
  ${
    '' /* grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-auto-columns: minmax(256px, auto); */
  }
  ${
    '' /* grid-template-columns: repeat(${props => props.columns || 3}, 1fr); */
  }
  @supports (display: grid) {
    ${tablet(gridStyles)}
    ${desktop(gridStylesDesktop)}
  }

  
`;

export default StyledGallery;
