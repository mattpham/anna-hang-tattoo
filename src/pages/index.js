import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarker
} from '@fortawesome/fontawesome-free-solid/';

import {
  Hero,
  Section,
  SectionHeader,
  SectionContent,
  TagList,
  TagListItem,
  Gallery,
  GalleryImage,
  GalleryItem
} from '../components';
import logo from '../images/logo.svg';
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

    {/* <main
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 960px 1fr',
        gridTemplateAreas: "'s1 main s2'",
        gridGap: '2rem'
      }}
    > */}
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
            Anna Hang was born and raised in Vietnam. She discovered her passion
            for art at a very young age. As far as she can remember, she loved
            to paint and draw. As a child, she participated in many art
            exhibitions and won many awards for her artwork. Over the years, she
            constantly worked on her artistry and dreamt of becoming a famous
            painter one day.
          </p>
          <p>
            Unfortunately, poor economic circumstances in her homeland caused
            her to put her artwork aside to join the family business. Though she
            felt financially responsible to support her family, as a true
            artist, she was unable to forget about her passion. She studied make
            up art, floral arranging, and fashion design to satisfy her creative
            interests and skills. Yet there was always a yearning for more, and
            to find a profession that she truly loved.
          </p>
          <p>
            After she married, Anna Hang was able to financially support herself
            and with her husband’s encouragement, began to study tattoo art with
            the Department of Tattooing Art in Vietnam. She soon realized how
            much she loved tattooing, even more than painting. She was one of
            the first female government certified Tattoo Artist at that time.
            From there, she started a tattoo shop next to her home, and through
            her workmanship and talent, became one of the most popular tattoo
            artists in Vietnam.
          </p>
          <p>
            Since 2010 Anna Hang and her husband, Peter, have been running a
            successful tattoo shop in Orange County. Her professional success
            shows in customer satisfaction, the many referrals she has received
            from her colleagues and clients, and thousand of miles her clients
            travel to work with her.
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
        <Gallery>
         {/* Dummy Data */}
          <GalleryItem h="3" v="2">
            <GalleryImage src="https://source.unsplash.com/random/600x400/?tattoo" />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x401/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x402/?tattoo"
            />
          </GalleryItem>
          <GalleryItem h="2" v="2">
            <GalleryImage
              src="https://source.unsplash.com/random/600x403/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x404/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x405/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x406/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x407/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x408/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x409/?tattoo"
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src="https://source.unsplash.com/random/600x410/?tattoo"
            />
          </GalleryItem>
        </Gallery>
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
          <input type="text" name="Name" placeholder="Name" />
          <input type="email" name="Email" placeholder="Email" />
          <input type="tel" name="Phone Number" placeholder="Phone Number" />
          <input type="file" name="File" />
          <input type="text" name="Subject" placeholder="Subject" />
          <textarea name="Message" placeholder="Message" />
          <button type="submit">Send</button>
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
        <div className="contact-address">
          <FontAwesomeIcon icon={faMapMarker} /> 13071 Brookhurst St., #225
          Garden Grove, California
        </div>
      </SectionContent>
    </Section>
    <Section id="map">
      <GoogleMap/>
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
  </React.Fragment>
);

export default IndexPage;
