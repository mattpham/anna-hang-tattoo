import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: stretch;
  align-items: stretch;
`;

const GalleryImage = styled.img`
  object-fit: 'cover';
  margin: 0;
  @media (min-width: 600px) {
    grid-column: span ${props => props.colSpan ? props.colSpan : 'auto' };
    grid-row: span ${props => props.rowSpan ? props.rowSpan : 'auto' };
      }
`;

export { Gallery, GalleryImage };
