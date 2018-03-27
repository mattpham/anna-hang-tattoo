import { css } from 'styled-components';
import {
  DEFAULT_WIDTH,
  LARGE_DISPLAY_WIDTH
} from 'typography-breakpoint-constants';

export const maxWidth = css`
  margin: 0 auto;
  max-width: ${DEFAULT_WIDTH};
`;

export const fullWidth = css`
  margin: 0 calc(50% - 50vw);
`;
