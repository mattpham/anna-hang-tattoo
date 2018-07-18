import styled from 'styled-components';

import { SECONDARY } from '../../utils/styles/colors';
import { stepDownOne, stepZero } from '../../utils/styles/typography';

const FooterTitle = styled.h2`
  color: var(--accent-color-secondary);
  text-transform: uppercase;
  font-size: ${stepZero.fontSize};
  line-height: ${stepZero.lineHeight};
  letter-spacing: 2px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export default FooterTitle;
