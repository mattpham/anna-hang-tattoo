import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
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
  Gallery,
  GalleryImage,
  GalleryItem,
  ModalPortal
} from '../components';
import logo from '../images/logo.svg';
import ImageGallery from '../containers/ImageGallery';
// import Map from '../images/map-dark.jpg';
import GoogleMap from '../components/GoogleMap';

const IndexPage = () => (
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
          <div className="about__details">
            <p>
              Anna Hang was born and raised in Vietnam. She discovered her
              passion for art at a very young age. As far as she can remember,
              she loved to paint and draw. As a child, she participated in many
              art exhibitions and won many awards for her artwork. Over the
              years, she constantly worked on her artistry and dreamt of
              becoming a famous painter one day.
            </p>
            <p>
              Unfortunately, poor economic circumstances in her homeland caused
              her to put her artwork aside to join the family business. Though
              she felt financially responsible to support her family, as a true
              artist, she was unable to forget about her passion. She studied
              make up art, floral arranging, and fashion design to satisfy her
              creative interests and skills. Yet there was always a yearning for
              more, and to find a profession that she truly loved.
            </p>
            <p>
              After she married, Anna Hang was able to financially support
              herself and with her husband’s encouragement, began to study
              tattoo art with the Department of Tattooing Art in Vietnam. She
              soon realized how much she loved tattooing, even more than
              painting. She was one of the first female government certified
              Tattoo Artist at that time. From there, she started a tattoo shop
              next to her home, and through her workmanship and talent, became
              one of the most popular tattoo artists in Vietnam.
            </p>
            <p>
              Since 2010 Anna Hang and her husband, Peter, have been running a
              successful tattoo shop in Orange County. Her professional success
              shows in customer satisfaction, the many referrals she has
              received from her colleagues and clients, and thousand of miles
              her clients travel to work with her.
            </p>
          </div>
        </SectionContent>
      </Section>
      <Section id="specialties">
        <SectionHeader>
          <h2>Specializing In</h2>
        </SectionHeader>
        <SectionContent>
          <TagList>
            {[
              'Permanent Makeup',
              'Half Sleeve',
              'Koifish',
              'Cover Up',
              '3D Art',
              'Full Sleeve, Chest, and Arms',
              'Dragon',
              'Full Back',
              'Geisha',
              'Religion',
              'Phoenix',
              'Samurai',
              'Tiger',
              'Tribal',
              'Female Tattoo',
              'Kanji',
              'Microblading Eyebrows'
            ].map((tag, index) => <TagListItem key={index}>{tag}</TagListItem>)}
          </TagList>
        </SectionContent>
      </Section>
      <Section id="gallery">
        <SectionHeader>
          <h2 style={{ gridColumn: '1 / -1' }}>Gallery</h2>
        </SectionHeader>
        <SectionContent>
          {/* <Gallery> */}
          {/* Dummy Data */}
          <ImageGallery
            data={[
              {
                id: 0,
                src: 'https://source.unsplash.com/random/600x400/?tattoo'
              },
              {
                id: 1,
                src: 'https://source.unsplash.com/random/600x401/?tattoo'
              },
              {
                id: 2,
                src: 'https://source.unsplash.com/random/600x402/?tattoo'
              },
              {
                id: 3,
                src: 'https://source.unsplash.com/random/600x403/?tattoo'
              },
              {
                id: 4,
                src: 'https://source.unsplash.com/random/600x404/?tattoo'
              },
              {
                id: 5,
                src: 'https://source.unsplash.com/random/600x405/?tattoo'
              },
              {
                id: 6,
                src: 'https://source.unsplash.com/random/600x406/?tattoo'
              },
              {
                id: 7,
                src: 'https://source.unsplash.com/random/600x407/?tattoo'
              },
              {
                id: 8,
                src: 'https://source.unsplash.com/random/600x408/?tattoo'
              },
              {
                id: 9,
                src: 'https://source.unsplash.com/random/600x409/?tattoo'
              },
              {
                id: 10,
                src: 'https://source.unsplash.com/random/600x410/?tattoo'
              },
              {
                id: 11,
                src: 'https://source.unsplash.com/random/600x411/?tattoo'
              },
              {
                id: 12,
                src: 'https://source.unsplash.com/random/600x412/?tattoo'
              }
            ]}
          />
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
          <div className="contact-address" style={{display: 'grid', justifyContent: 'center', gridTemplateColumns: 'auto 1fr'}}>
            <div>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div>
            <div>13071 Brookhurst St.,</div>
            <div>#225</div>
            <div>Garden Grove, California</div></div>
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

export default IndexPage;
