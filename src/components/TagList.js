import styled from 'styled-components';

const TagList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
`;

const TagListItem = styled.li`
  margin-right: 1rem;
  border: 1px solid grey;
  padding: 0.5em;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.1s ease-in;
  &:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
    background: rgba(139, 0, 0, 1);
  }
`;

export { TagList, TagListItem };
