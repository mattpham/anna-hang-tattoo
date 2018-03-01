import styled from 'styled-components';

const GalleryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
`;

export default GalleryImage;
