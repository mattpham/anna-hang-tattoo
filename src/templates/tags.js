import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { Main, Section, SectionHeader, SectionContent } from '../components';
import GalleryComponent from '../components/Gallery/Gallery';
import GalleryItem, {
  GalleryItemDetail
} from '../components/Gallery/GalleryItem';

export default ({ data }) => {
  const { tag, image, photo_gallery } = data.contentfulTag;

  const galleryNodes =
    photo_gallery &&
    photo_gallery.map(gallery => (
      <GalleryItem
        key={gallery.id}
        style={{ background: 'grey', gridRow: 'span 1' }}
      >
        <Link to={`/gallery/${gallery.slug}`}>
          <div style={{ height: '100%' }}>
            <GalleryItemDetail>
              <span
                style={{
                  background: 'black',
                  color: 'white',
                  padding: '.5em',
                  boxDecorationBreak: 'clone'
                }}
              >
                {gallery.title.title}
              </span>
            </GalleryItemDetail>
            {gallery.coverImage ? <Img sizes={gallery.coverImage.sizes} /> : ''}
          </div>
        </Link>
      </GalleryItem>
    ));

  const imageNodes =
    image &&
    image.map(img => (
      <GalleryItem key={img.id}>
        <Link to={`/image/${img.id}`}>
          <Img sizes={img.photo.sizes} style={{ height: 'inherit' }} />
        </Link>
      </GalleryItem>
    ));

  return (
    <Main>
      <Section>
        <SectionHeader>
          <h1>
            <Link to="/gallery">The Gallery</Link>
          </h1>
          <h2>#{data.contentfulTag.tag}</h2>
        </SectionHeader>
        <SectionContent>
          <div>
            <Section full>
              <SectionHeader>
                <h3>Galleries</h3>
              </SectionHeader>
              <SectionContent>
                <GalleryComponent columns={4}>
                  {galleryNodes || <p>Nothing here.</p>}
                </GalleryComponent>
              </SectionContent>
            </Section>
            <Section full>
              <SectionHeader>
                <h3>Images</h3>
              </SectionHeader>
              <SectionContent>
                <GalleryComponent>
                  {imageNodes || <p>Nothing here.</p>}
                </GalleryComponent>
              </SectionContent>
            </Section>
          </div>
        </SectionContent>
      </Section>
    </Main>
  );
};

export const query = graphql`
  query TagQuery($id: String!) {
    contentfulTag(id: { eq: $id }) {
      id
      tag
      image {
        id
        photo {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
      photo_gallery {
        id
        title {
          title
        }
        slug
        coverImage {
          sizes {
            ...GatsbyContentfulSizes
          }
        }
      }
    }
  }
`;
