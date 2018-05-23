import styled from 'styled-components';

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
`;

const TagListItem = styled.li`
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
