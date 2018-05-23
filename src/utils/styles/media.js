import { css } from 'styled-components';

// export const sizes = {
//   phone: '37rem', //592px
//   tablet: '48rem', //768,
//   laptop: '62rem', //992
//   desktop: '75rem', //1200
//   extended: '112rem', //1792
// };

// export const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label]}) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// export default media;

export const desktop = (...args) => css`
  @media (min-width: 992px) {
    ${css(...args)};
  }
`;

export const phone = (...args) => css`
  @media (max-width: 992px) {
    ${css(...args)};
  }
`;
