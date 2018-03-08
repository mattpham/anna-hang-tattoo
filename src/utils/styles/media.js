import { css } from 'styled-components';

export const sizes = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
