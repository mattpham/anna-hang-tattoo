import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {
  Form,
  FormSelect,
  FormSubmit,
  FormInput,
  FormTextArea,
  Section,
  SectionTitle,
  SectionContent,
  Tile,
  TileContainer,
  TileHeader,
  TileTitle,
  TileBody,
  Icon,
  GoogleMap,
} from '../components';

const ContactPage = () => (
  <React.Fragment>
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

// // eslint-disable-next-line no-undef
// export const query = graphql`
//   query ContactPageQuery {
//     contentfulHome {
//       about {
//         copy {
//           childMarkdownRemark {
//             html
//           }
//         }
//         summary {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//       specialties {
//         id
//         tag
//       }
//     }
//     contentfulAsset(title: { eq: "portrait" }) {
//       sizes(maxWidth: 600, maxHeight: 600) {
//         ...GatsbyContentfulSizes
//       }
//     }
//   }
// `;

export default ContactPage;
