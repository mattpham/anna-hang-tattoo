import styled from 'styled-components';

import { desktop } from '../../utils/styles/media';
import { WHITE_25, WHITE_50 } from '../../utils/styles/colors';
import { stepDownOne } from '../../utils/styles/typography';

const FooterCopyright = styled.div`
margin-bottom: 0;
flex: 1;
padding: 0.75rem 1.5rem;
font-size: ${stepDownOne.fontSize};
line-height: ${stepDownOne.lineHeight}
border-top: 1px solid ${WHITE_25};
color: ${WHITE_50};
text-align: center;

${desktop`
  text-align: left;
`}
`;

export default FooterCopyright;
