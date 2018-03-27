import { css } from 'styled-components';
import { rhythm } from '../../utils/typography';

export const spacing = {
  xs: rhythm(1 / 4),
  sm: rhythm(1 / 2),
  md: rhythm(1),
  lg: rhythm(2),
  xl: rhythm(4)
};

export const marginRightMd = css`
  margin-right: ${spacing.md};
`;
export const marginBottomMd = css`
  margin-bottom: ${spacing.md};
`

export const insetMd = css`
  padding: ${spacing.md};
`;
export const insetSquishMd = css`
  padding: ${spacing.sm} ${spacing.md};
`
