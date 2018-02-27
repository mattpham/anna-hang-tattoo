import styled from 'styled-components';

const Hero = styled.section.attrs({
  role: 'banner'
})`
  display: grid;
  justify-items: center;
  align-content: center;
  background-blend-mode: multiply,multiply;
  background-image:
    linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(90, 0,1,0.8) 0%, rgba(34,24,28,1) 120%), url("https://source.unsplash.com/random/?tattoo");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  grid-gap: 2em;
`;

export default Hero;
