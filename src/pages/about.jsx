import React from 'react';
import PropTypes from 'prop-types';

import { Section, SectionContent, Card, CardImage, CardContent } from '../components';
import { Title, PreTitle, TagLine } from '../components/elements';

const AboutPage = ({ data }) => (
  <React.Fragment>
    <Section id="about">
      <SectionContent>
        <PreTitle>About our artist</PreTitle>
        <Title>Anna Hang</Title>
        <TagLine>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum urna, lacinia
          fermentum leo eget, ornare scelerisque purus. Duis aliquet quis justo in hendrerit.
        </TagLine>
        <Card>
          <CardImage sizes={data.contentfulAsset.sizes} />
          <CardContent>
            {/* eslint-disable */}
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulHome.about.copy.childMarkdownRemark.html,
              }}
            />
            {/* eslint-enable */}
          </CardContent>
        </Card>
      </SectionContent>
    </Section>
  </React.Fragment>
);

AboutPage.propTypes = {
  data: PropTypes.any.isRequired,
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutPageQuery {
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
  }
`;

export default AboutPage;
