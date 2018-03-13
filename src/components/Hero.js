import styled from 'styled-components';

const Hero = styled.section.attrs({
  role: 'banner'
})`
  display: grid;
  justify-items: center;
  align-content: center;
  background-blend-mode: darken;
  background-image:
    radial-gradient(ellipse at center, rgba(173,0,40,1) 0%, rgba(143,0,33,1) 44%, rgba(107,0,25,1) 100%), url("https://source.unsplash.com/random/?tattoo");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  grid-gap: 2em;
  margin-bottom: 1em;
`;

export default Hero;
