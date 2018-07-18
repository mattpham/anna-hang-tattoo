import { List, ListItem } from '../elements';

const FooterList = List.extend`
  flex-direction: column;
  padding-left: 2rem;

  & a {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid var(--accent-color-secondary);
    box-shadow: inset 0 -2px 0 0 var(--accent-color-secondary);
    &:hover {
      background: var(--accent-color-secondary);
    }
  }
`;

export const FooterListItem = ListItem.extend`
  position: relative;
  & span {
    position: absolute;
    left: -2rem;
    width: 1rem;
    text-align: center;
  }
`;

export default FooterList;
