import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
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
  TagList,
  TagListItem,
<<<<<<< HEAD
  Gallery
} from '../components';
import logo from '../images/logo.svg';
=======
  Gallery,
} from '../components';
import logo from '../images/logo.svg';
// import Map from '../images/map-dark.jpg';
>>>>>>> feature/contenful
import GoogleMap from '../components/GoogleMap';
const StyledImg = styled(Img)`
  display: grid;
`;
const IndexPage = ({ data }) => {
<<<<<<< HEAD
  console.log(data.allContentfulImage.edges.length);
=======
>>>>>>> feature/contenful
  return (
    <React.Fragment>
      <Hero>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '175px',
            margin: 0
          }}
        />
        <h2
          style={{
            color: 'white',
            textShadow: '0 2px 0 rgba(0, 0, 0, 0.07)',
            margin: 0
          }}
        >
          What are you looking for?
        </h2>
      </Hero>
      <Main>
<<<<<<< HEAD
        <Section>
          <SectionHeader>Test</SectionHeader>
          <SectionContent>
          </SectionContent>
        </Section>
=======
>>>>>>> feature/contenful
        <Section id="about">
          <SectionHeader>
            <h2>Meet the Artist</h2>
          </SectionHeader>
          <SectionContent>
            <img
              src="https://source.unsplash.com/random/?portrait+person"
              alt="Biography Photo"
              className="about__image"
              style={{
                objectFit: 'cover',
                width: '100%',
                margin: 0
              }}
            />
            <div className="about__details" dangerouslySetInnerHTML={{__html: data.contentfulHome.about.copy.childMarkdownRemark.html}}>
            </div>
          </SectionContent>
        </Section>
        <Section id="specialties">
          <SectionHeader>
            <h2>Specializing In</h2>
          </SectionHeader>
          <SectionContent>
            <TagList>
              {data.contentfulHome.specialties.map(({id, tag}) => (
                <TagListItem key={id}>{tag}</TagListItem>
              ))}
            </TagList>
          </SectionContent>
        </Section>
        <Section id="gallery">
          <SectionHeader>
            <h2 style={{ gridColumn: '1 / -1' }}>Gallery</h2>
          </SectionHeader>
          <SectionContent>
            {/* <Gallery> */}
<<<<<<< HEAD

            <Gallery items={data.allContentfulImage.edges} />
=======
            <Gallery
              items={data.allContentfulImage.edges}
            />
>>>>>>> feature/contenful
          </SectionContent>
        </Section>
        <Section id="contact-form">
          <SectionHeader>
            <h2>Send a Message</h2>
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
            <h2>Contact</h2>
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
            <h2>Address</h2>
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
    </React.Fragment>
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
      }
      specialties {
        id
        tag
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
