import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Link, List, ListItem } from '../elements';

const SocialNavList = List.extend`
  margin-bottom: 0;
`;

const SocialNavListItem = ListItem.extend`
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialNavLink = Link.withComponent('a').extend.attrs({})`
  color: #FFF;
`;

const SocialNavLinks = () => (
  <SocialNavList>
    <SocialNavListItem>
      <SocialNavLink href="/">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </SocialNavLink>
    </SocialNavListItem>
    <SocialNavListItem>
      <SocialNavLink href="/">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </SocialNavLink>
    </SocialNavListItem>
    <SocialNavListItem>
      <SocialNavLink href="/">
        <FontAwesomeIcon icon={['fab', 'flickr']} />
      </SocialNavLink>
    </SocialNavListItem>
  </SocialNavList>
);

export default SocialNavLinks;
