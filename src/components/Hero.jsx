import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import heroBG from '../images/hero_bg.jpg';
import DuoToneFilter from './DuoToneFilter';
import { phone } from '../utils/styles/media';

const HeroImage = styled.section.attrs({
  role: 'banner',
})`
  height: calc(100vh - 4rem);
  position: relative;
`;

const HeroBackground = styled.div`
  z-index: -2;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: var(--bg-color-secondary);
  background-image: url(${heroBG});
  background-attachment: fixed;
  background-size: cover;
  filter: url(#duotone_default);
`;

const HeroContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeroBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroFooter = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-flow: row wrap;
  color: white;
  justify-content: center;
  padding: 0.75rem 0;
  ${''} ${''};
`;

const HeroFooterText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const Part = styled.div`
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  border-right: 1px dotted rgba(255, 255, 255, 0.25);

  &:last-child {
    border-right: none;
  }
  ${phone`
    flex: 1 1 100%;
  `};
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--accent-color-secondary);
  margin-right: 0.375rem;
`;

const Hero = props => (
  <HeroImage >
    <DuoToneFilter id="duotone_default" shadowColor="#14212B" highlightColor="#4F6373" />
    <HeroContent>
      <HeroBody>{props.children}</HeroBody>
      <HeroFooter>
        <Part>
          <HeroFooterText>
            <Icon icon="map-marker-alt" />
            13071 Brookhurst St., Ste 225, Garden Grove, California 92843
          </HeroFooterText>
        </Part>
        <Part>
          <HeroFooterText>
            <Icon icon="phone" />
            (714) 299-3387
          </HeroFooterText>
        </Part>
        <Part>
          <HeroFooterText>
            <Icon icon="at" />info@anahangtattoovn.com
          </HeroFooterText>
        </Part>
      </HeroFooter>
    </HeroContent>
    {/* <Overlay /> */}
    <HeroBackground />
  </HeroImage>
);

Hero.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Hero;
