import styled, { css } from 'styled-components';
import { row, column, insetMd, insetSquishMd, marginRightMd, marginBottomMd, maxWidth, fullWidth } from './mixin';
import { rhythm } from '../utils/typography';
import {
  DEFAULT_WIDTH,
  LARGE_DISPLAY_WIDTH,
  MIN_TABLET_MEDIA_QUERY
} from 'typography-breakpoint-constants';
import {tablet, phone} from './mixin/media';

export const Footer = styled.footer`
  ${'' /* flex-direction: column;
  align-items: center; */} 
  background: #282c34;
  color: rgba(251, 251, 251, 0.8);
`;

export const FooterContent = styled.div`
  ${maxWidth};
  ${insetMd};
`;

export const FooterRow = styled.div`
  ${'' /* ${row}
  flex-flow: row wrap; */}
  ${'' /* width: 100%; */}
  ${tablet(row)}
`;

export const FooterColumn = styled.div`
  ${'' /* align-items: center; */}
  ${'' /* ${column}; */}
  ${'' /* ${marginRightMd}; */}
  ${phone(marginBottomMd)}
  ${tablet(css(column, marginRightMd))}
`;

export const FooterFooter = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;

export const FooterFooterCopy = styled.p`
  ${maxWidth};
  ${insetSquishMd}
  font-size: ${rhythm(1/2)};
  color: rgba(255,255,255, .5);
  border-top: 1px solid rgba(255,255,255,0.1);
`

const StyledFooterNav = styled.div`
  display: flex;
  flex-flow: row wrap;
  & :hover {
    color: rgba(251, 251, 251, 0.8);
  }
  & a {
    text-decoration: none;
  }
`;

export const FooterNav = StyledFooterNav.extend`
  & a {
    min-width: 50%;
    margin-bottom: ${rhythm(1 / 2)};
  }
`;
export const FooterNavSocial = StyledFooterNav.extend`
  font-size: x-large;
  & a {
    margin-right: ${rhythm(1)};
  }
`;
