import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/logo.svg';

const IndexPage = () => (
  <React.Fragment>
    {/* Hero */}
    <div
      style={{
        display: 'grid',
        justifyItems: 'center',
        backgroundBlendMode: 'multiply,multiply',
        backgroundImage:
          'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(90, 0,1,0.8) 0%, rgba(34,24,28,1) 120%), url("https://source.unsplash.com/random/?tattoo")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        style={{
          marginTop: '3rem',
          padding: '3rem',
          textAlign: 'center'
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: '250px'
          }}
        />
        <p
          style={{ color: 'white', textShadow: '0 2px 0 rgba(0, 0, 0, 0.07)' }}
        >
          What are you looking for?
        </p>
      </div>
    </div>
    <main style={{
      display: 'grid',
      gridTemplateColumns: '1fr 960px 1fr',
      gridTemplateAreas: "'s1 main s2'",
      gridGap: '2rem',
    }}>
      <section
        className="about"
        style={{
          background: 'white',
          maxWidth: '960px',
          display: 'grid',
          gridGap: '0 2rem',
          justifyContent: 'center',
          gridColumn: 'main',
          gridTemplateColumns: '1fr 2fr'
        }}
      >
        <h2 style={{ gridColumn: '1 / -1' }}>Meet the Artist</h2>
        <img
          src="https://source.unsplash.com/random/?portrait+person"
          alt="Biography Photo"
          className="about__image"
          style={{
            objectFit: 'cover',
            alignSelf: 'stretch',
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
      </section>
      <section
        className="specialties"
        style={{
          gridColumn: 'main'
        }}
      >
        <h2>Specializing In</h2>
        <ul
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            listStyle: 'none'
          }}
        >
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Permanent Makeup</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Half Sleeve</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Koifish</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Cover Up</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>3D Art</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Full Sleeve, Chest, and Arms</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Dragon</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Full Back</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Geisha</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Religion</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Phoenix</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Samurai</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Tiger</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Tribal</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Female Tattoo</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Kanji</li>
          <li style={{padding: '.5rem 1rem', marginRight: '1rem', border: '1px solid grey'}}>Microblading Eyebrows</li>
        </ul>
      </section>
      <section
        className="gallery"
        style={{
          display: 'grid',
          gridColumn: 'main',
      
        }}
      >
        <h2 style={{gridColumn: '1 / -1'}}>Gallery</h2>
        <div
        style={{display: 'grid', gridGap: '1rem', gridAutoFlow: 'dense', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/200x200/?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/202x202?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/203x203?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/204x204?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/205x205?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/206x206?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x207?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x208?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x209?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x210?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x215?tattoo" alt="" />
        <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://source.unsplash.com/random/207x216?tattoo" alt="" />
        </div>
      </section>
    </main>
  </React.Fragment>
);

export default IndexPage;
