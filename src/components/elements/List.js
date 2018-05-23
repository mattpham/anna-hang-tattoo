import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-flex;
`;

export default List;
