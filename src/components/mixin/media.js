import { css } from 'styled-components';

export const LARGER_DISPLAY_WIDTH = '1600px'
export const LARGE_DISPLAY_WIDTH = '1280px'
export const DEFAULT_WIDTH = '980px'
export const TABLET_WIDTH = '768px'
export const MOBILE_WIDTH = '480px'

export const desktop = inner => css`
  @media (min-width: ${DEFAULT_WIDTH}) {
    ${inner}
  }
`
export const tablet = inner => css`
  @media (min-width: ${TABLET_WIDTH}) {
    ${inner}
  }
`
export const phone = inner => css`
  @media (max-width: ${TABLET_WIDTH}) {
    ${inner}
  }
`
