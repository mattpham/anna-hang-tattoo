import { List, ListItem } from '../elements';
import { stepUpTwo } from '../../utils/styles/typography';
import { WHITE, WHITE_75 } from '../../utils/styles/colors';

const FooterSocialList = List.extend`
  flex-direction: row;
  margin-bottom: 1.5rem;
  font-size: ${stepUpTwo.fontSize};
  line-height: ${stepUpTwo.lineHeight};
`;

export const FooterSocialListItem = ListItem.extend`
  margin-right: 1.5rem;

  & a {
    color: ${WHITE};
  }
  & a:hover {
    color: ${WHITE_75};
  }
`;

export default FooterSocialList;
