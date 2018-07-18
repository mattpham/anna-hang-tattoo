import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';

import { Row, Column, Container } from '../elements';
import SiteLogo from '../SiteLogo';
import FooterList, { FooterListItem } from './FooterList';
import FooterSocialList, { FooterSocialListItem } from './FooterSocialList';
import FooterCopyright from './FooterCopyright';
import FooterTitle from './FooterTitle';

const StyledFooter = styled.footer`
  padding-top: 3rem;
  background: var(--bg-color-primary);
  color: #FFF;
`;

const Description = styled.p`
  margin-top: .75rem;
  color: rgba(255,255,255,.75);
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row columns={3}>
        {/* Footer Logo */}
        <Column>
          <SiteLogo maxWidth='200px' />
          <Description>We are a tattoo studio located in Orange County, California.</Description>
        </Column>
        {/* Footer Contact List */}
        <Column>
          <FooterTitle>Contact</FooterTitle>
          <FooterList>
            <FooterListItem>
              <span>
                <FontAwesomeIcon icon="map-marker-alt" />
              </span>
              13071 Brookhurst St., Ste #225, Garden Grove, CA 92843
            </FooterListItem>
            <FooterListItem>
              <span>
                <FontAwesomeIcon icon="phone" />
              </span>
              <a href="tel:7142993387">(714) 299-3387</a>
            </FooterListItem>
            <FooterListItem>
              <span>
                <FontAwesomeIcon icon="at" />
              </span>
              <a href="mailto:info@annahangtattoovn.com">
                info@annahangtattoovn.com
              </a>
            </FooterListItem>
          </FooterList>
          {/* Footer Social Links */}
          <FooterSocialList>
            <FooterSocialListItem>
              <Link to="/">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </Link>
            </FooterSocialListItem>
            <FooterSocialListItem>
              <Link to="/">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </Link>
            </FooterSocialListItem>
            <FooterSocialListItem>
              <Link to="/">
                <FontAwesomeIcon icon={['fab', 'flickr']} />
              </Link>
            </FooterSocialListItem>
          </FooterSocialList>
        </Column>
      </Row>
      <Row>
        {/* Footer Copyright */}
        <Column>
          <FooterCopyright>
            &copy; 2018 Anna Hang Tattoo. All Rights Reserved.
          </FooterCopyright>
        </Column>
      </Row>
    </Container>
  </StyledFooter>
);

export default Footer;
