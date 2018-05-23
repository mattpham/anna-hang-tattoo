import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { navigateTo } from 'gatsby-link';

import {
  Form,
  FormSelect,
  FormSubmit,
  FormInput,
  FormTextArea,
  Hero,
  Section,
  SectionTitle,
  SectionContent,
  Tile,
  TileContainer,
  TileHeader,
  TileTitle,
  TileBody,
  Gallery,
  Button,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardTagLine,
  Icon,
} from '../components';

import bg from '../images/sample/clem-onojeghuo-145811-unsplash.jpg';
import GoogleMap from '../components/GoogleMap';
import { GRAY } from '../utils/styles/colors';
import { HEADER_FONT_FAMILY, stepUpSix, stepDownTwo } from '../utils/styles/typography';
import { phone } from '../utils/styles/media';

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: ${HEADER_FONT_FAMILY};
  color: #fff;
  font-size: ${stepUpSix.fontSize};
  line-height: 1;
  margin-bottom: 0;
  text-transform: lowercase;
`;
const H4 = styled.h4`
  line-height: 1;
  letter-spacing: 1em;
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
  margin-bottom: 0;
`;

const BrandType = styled.div`
  ${phone`
    font-size: ${stepDownTwo.fontSize};
  `};
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const IndexPage = ({ data }) => (
  <React.Fragment>
    <Hero bgImg={bg}>
      <BrandType>
        <H2>AnnaHang</H2>
        <H4>Tattoo Design</H4>
      </BrandType>

      <Button>Contact Us</Button>
    </Hero>
    <Section bgColor={GRAY} center>
      <SectionContent>
        <p style={{ margin: '0 auto', maxWidth: '48rem' }}>
          We are a <em>Tattoo Studio</em> located in a private office environment in sunny Orange
          County, California. We operate in a
          <em>clean</em> and <em>sterile</em> environment featuring modern medical equipment and
          brand new steamer machines. Brand new tattoo needles are used for each client.
        </p>
      </SectionContent>
    </Section>
    <Section id="about" divider>
      <SectionContent>
        <Card>
          <CardImage sizes={data.contentfulAsset.sizes} />
          <CardContent>
            <CardTagLine>Meet the Artist</CardTagLine>
            <CardTitle>Anna Hang</CardTitle>
            {/* eslint-disable */}
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulHome.about.summary.childMarkdownRemark.html,
              }}
            />
            {/* eslint-enable */}
            <Button onClick={() => navigateTo('/about')}>Learn More</Button>
          </CardContent>
        </Card>
      </SectionContent>
      <div />
    </Section>
    <Section id="gallery">
      <SectionContent>
        <SectionTitle>Recent Work</SectionTitle>
        {/* <Gallery> */}
        <Gallery items={data.allContentfulImage.edges} />
        <ButtonWrapper>
          <Button onClick={() => navigateTo('/gallery')}>View More</Button>
        </ButtonWrapper>
      </SectionContent>
    </Section>

    <Section id="contact-form" bgColor="var(--bg-color-primary)" center>
      <SectionContent invert>
        <SectionTitle invert>Send a Message</SectionTitle>
        <p>Interested in a new tattoo? Contact us below to set up an appointment!</p>
        <Form>
          <FormInput type="text" name="Name" placeholder="Name" />
          <FormInput type="email" name="Email" placeholder="Email" />
          <FormInput type="tel" name="Phone Number" placeholder="Phone Number" />
          <FormSelect type="text" name="Subject">
            <option>Reason For Contacting</option>
            <option value="tattoo">Looking For A Tattoo</option>
            <option value="general">General Question</option>
          </FormSelect>
          <FormTextArea name="Message" placeholder="Message" />
          <FormSubmit>Send Message!</FormSubmit>
        </Form>
      </SectionContent>
    </Section>
    <Section id="contact-info">
      <SectionContent>
        <TileContainer>
          <Tile>
            <TileHeader>
              <Icon>
                <FontAwesomeIcon icon="map-marker-alt" />
              </Icon>
              <TileTitle>Find Us At</TileTitle>
            </TileHeader>
            <TileBody>
              13071 Brookhurst St.,<br />Ste 225<br />Garden Grove, California 92843
            </TileBody>
          </Tile>
          <Tile>
            <TileHeader>
              <Icon>
                <FontAwesomeIcon icon="phone" />
              </Icon>
              <TileTitle>Call Us At</TileTitle>
            </TileHeader>
            <TileBody>(714) 299-3387</TileBody>
          </Tile>
          <Tile>
            <TileHeader>
              <Icon>
                <FontAwesomeIcon icon="at" />
              </Icon>
              <TileTitle>Email Us At</TileTitle>
            </TileHeader>
            <TileBody>info@annahangtattoovn.com</TileBody>
          </Tile>
        </TileContainer>
      </SectionContent>
    </Section>
    <Section id="map" full>
      <GoogleMap />
    </Section>
  </React.Fragment>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
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
