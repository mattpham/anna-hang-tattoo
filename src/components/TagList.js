import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  ${'' /* justify-content: center; */}
  list-style: none;
  margin: 0;
`;

const TagListItem = styled.li`
  ${'' /* margin-right: 1rem; */}
  ${'' /* border: ${rhythm(1/8)} solid #6f533a; */}
  padding: ${rhythm(1/8)} ${rhythm(1/2)};
  ${'' /* color: #6f533a; */}
  color: white;
  background: #806b48;
  border-radius: 3px;

  transition: all 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: #fbfbfb;
    background: #6f533a;
    border-color: #806b48;
  }
`;

export { TagList, TagListItem };
