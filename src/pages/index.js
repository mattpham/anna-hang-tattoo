import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';
import {
  faPhone,
  faEnvelope,
  faMapMarker
} from '@fortawesome/fontawesome-free-solid/';

import {
  Main,
  Form,
  FormInput,
  FormTextArea,
  FormSelect,
  Hero,
  Section,
  SectionHeader,
  SectionContent,
  SectionWrapper,
  TagList,
  TagListItem,
  Gallery
} from '../components';
import logo from '../images/logo.svg';
import GoogleMap from '../components/GoogleMap';

const Button = styled.button`
  margin: ${rhythm(1)};
  background: none;
  border-radius: 3px;
  border: ${rhythm(1 / 12)} solid white;
  padding: ${rhythm(1/2)} ${rhythm(1)};
  outline: none;
  text-transform: uppercase;
  color: white;

  &:hover {
    background: white;
    color: black;
  }
`;

const Avatar = styled.div`
  width: 100%;
  ${'' /* margin-bottom: ${rhythm(1)}; */} & div {
  }
`;

const IndexPage = ({ data }) => {
  return (
    // <React.Fragment>
    <Main>
      <Hero>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '175px',
            // margin: 0
          }}
        />
        {/* <div style={{ marginBottom: rhythm(5) }}>
          <h1 style={{ marginBottom: 0, color: 'white' }}>
            Anna Hang
          </h1>
          <span style={{ fontSize: rhythm(1), color: 'white' }}>
            Tattoo Design
          </span>
        </div> */}
        <Button>Contact Us</Button>
      </Hero>
      <Section id="about" maxHeight="30rem">
        <SectionHeader>
          <h1>Meet the Artist</h1>
        </SectionHeader>
        <SectionWrapper>
          <SectionContent>
            <Avatar>
              <Img
                sizes={data.contentfulAsset.sizes}
                style={{ height: '20em' }}
              />
            </Avatar>
          </SectionContent>
          <SectionContent  align='center'>
            <div
              className="about__details"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulHome.about.summary.childMarkdownRemark.html
              }}
            />
            <button>Read More</button>
          </SectionContent>
        </SectionWrapper>
      </Section>

      {/* Specialties */}

      <Section id="specialties">
        <SectionHeader>
          <h1>Services</h1>
        </SectionHeader>
        <SectionContent>
          <TagList>
            {data.contentfulHome.specialties.map(({ id, tag }) => (
              <TagListItem key={id}>{tag}</TagListItem>
            ))}
          </TagList>
        </SectionContent>
      </Section>
      <Section id="gallery">
        <SectionHeader>
          <h1 style={{ gridColumn: '1 / -1' }}>Gallery</h1>
        </SectionHeader>
        <SectionContent>
          {/* <Gallery> */}

          <Gallery items={data.allContentfulImage.edges} />
        </SectionContent>
      </Section>
      <Section id="contact-form">
        <SectionHeader>
          <h1>Send a Message</h1>
        </SectionHeader>
        <SectionContent>
          <form
            style={{
              display: 'grid',
              gridGap: '1rem',
              justifyItems: 'center'
            }}
          >
            <FormInput type="text" name="Name" placeholder="Name" />
            <FormInput type="email" name="Email" placeholder="Email" />
            <FormInput
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
            />
            {/* <FormInput type="file" name="File" /> */}
            <FormSelect type="text" name="Subject">
              <option>Reason For Contacting</option>
              <option value="tattoo">Looking For A Tattoo</option>
              <option value="general">General Question</option>
            </FormSelect>
            <FormTextArea name="Message" placeholder="Message" />
            <FormInput type="submit" value="Submit" />
          </form>
        </SectionContent>
      </Section>
      <Section id="contact-info">
        <SectionHeader>
          <h1>Contact</h1>
        </SectionHeader>
        <SectionContent flow="row">
          <div className="contact-phone">
            <FontAwesomeIcon icon="phone" />
            <span> (714) 299-3387</span>
          </div>
          <div className="contact-email">
            <FontAwesomeIcon icon="envelope" />
            <span> info@annahangtattoovn.com</span>
          </div>
        </SectionContent>
      </Section>
      <Section id="address">
        <SectionHeader>
          <h1>Address</h1>
        </SectionHeader>
        <SectionContent>
          <div
            className="contact-address"
            style={{
              display: 'grid',
              justifyContent: 'center',
              gridTemplateColumns: 'auto 1fr'
            }}
          >
            <div>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div>
              <div>13071 Brookhurst St.,</div>
              <div>#225</div>
              <div>Garden Grove, California</div>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section id="map">
        <GoogleMap />
        {/* <img
        style={{
          margin: 0,
          objectFit: 'cover',
          height: '300px',
          width: '100%'
        }}
        src={map}
      /> */}
      </Section>
      {/* </main> */}
    </Main>
    // </React.Fragment>
  );
};

export const query = graphql`
  query PageQuery {
    contentfulHome {
      about {
        copy {
          childMarkdownRemark {
            html
          }
        }
        summary {
          childMarkdownRemark {
            html
          }
        }
      }
      specialties {
        id
        tag
      }
    }
    contentfulAsset(title: { eq: "portrait" }) {
      sizes(maxWidth: 600, maxHeight: 600) {
        ...GatsbyContentfulSizes
      }
    }
    allContentfulImage {
      totalCount
      edges {
        node {
          id
          title
          photo {
            sizes(maxWidth: 1200) {
              ...GatsbyContentfulSizes
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
