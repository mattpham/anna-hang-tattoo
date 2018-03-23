import styled from 'styled-components';
import { rhythm } from '../../utils/typography';
import { NavList } from './';

const NavBar = styled.nav`
${'' /* font-size: ${rhythm(3/4)}; */} top: 0;
position: fixed;
z-index: 1;
height: ${rhythm(2)};
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 0 ${rhythm(1)};
background: white;
& ${NavList} {
  padding: 0 ${rhythm(1)};
}
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default NavBar;
