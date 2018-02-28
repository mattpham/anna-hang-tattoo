import styled from 'styled-components';

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
`;

const TagListItem = styled.li`
  margin-right: 1rem;
  border: 3px solid #6f533a;
  padding: 0.5em;
  color: #6f533a;
  transition: all 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: #fbfbfb;
    background: #806b48;
    border-color: #806b48;
  }
`;

export { TagList, TagListItem };
