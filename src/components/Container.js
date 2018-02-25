import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: 'grid';
  justify-items: 'center',
  backgroundBlendMode: 'multiply,multiply';
  backgroundImage:
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(90, 0,1,0.8) 0%, rgba(34,24,28,1) 120%), url("https://source.unsplash.com/random/?tattoo")';
  backgroundSize: 'cover';
  backgroundPosition: 'center';
  backgroundAttachment: 'fixed';
`;
