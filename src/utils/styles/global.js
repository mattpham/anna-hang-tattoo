import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { EczarBoldWoff2, WorkSansNormalWoff2, WorkSansSemiBoldWoff2 } from '../fonts';
import { BASE_LINE_HEIGHT, BASE_FONT_SIZE, BODY_FONT_FAMILY } from './typography';

export default injectGlobal`

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Work Sans'), local('WorkSans-Regular'), url(${WorkSansNormalWoff2}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Eczar';
    font-style: normal;
    font-weight: 700;
    src: local('Eczar Bold'), local('Eczar-Bold'), url(${EczarBoldWoff2}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Work Sans SemiBold'), local('WorkSans-SemiBold'), url(${WorkSansSemiBoldWoff2}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  ${normalize};

  html, body {
    --color-blue-1: #14212B;
    --color-blue-2: #293845;
    --color-blue-3: #4F6373;
    --color-gold-1: #8F8164;
    --color-gold-2: #D9D7AC;

    --text-color-primary: var(--color-blue-1);
    --text-color-secondary: var(--color-blue-2);
    --text-color-tertiary: var(--color-blue-3);
    --bg-color-primary: var(--color-blue-1);
    --bg-color-secondary: var(--color-blue-3);
    --bg-color-tertiary: var(--color-gold-2);
    --accent-color-primary: var(--color-blue-3);
    --accent-color-secondary: var(--color-gold-1);

    font-size: ${BASE_FONT_SIZE};
    line-height: ${BASE_LINE_HEIGHT};
    font-family: ${BODY_FONT_FAMILY};
    margin: 0;
    color: var(--text-color-secondary);
  }

  h1, h2, h3, h4, h5, h6,
   p, ul {
    margin: 0 0 1.5rem;
  }
`;
