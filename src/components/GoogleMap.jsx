import React, { Component } from 'react';
import styled from 'styled-components';
import cachedScriptLoader from '../utils/cachedScriptLoader';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = null;

    this.setMapRef = (element) => {
      this.mapRef = element;
    };
  }

  componentWillMount() {
    this.scriptCache = cachedScriptLoader(
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.GATSBY_GOOGLE_API
      }&callback=googleMapCallback`,
      'googleMapCallback',
      // eslint-disable-next-line
    ).catch(console.error);
  }

  componentDidMount() {
    this.scriptCache.then(() => {
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(this.mapRef, {
        center: { lat: 33.773005, lng: -117.955946 },
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#212121',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#212121',
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#181818',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1b1b1b',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#2c2c2c',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#8a8a8a',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#373737',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3c3c3c',
              },
            ],
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: '#4e4e4e',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#3d3d3d',
              },
            ],
          },
        ],
      });
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: { lat: 33.773005, lng: -117.955946 },
        title: 'Anna Hang',
      });

      marker.setMap(this.map);
    });
  }

  render() {
    return <StyledMap innerRef={this.setMapRef}>I should be a map!</StyledMap>;
  }
}

const StyledMap = styled.div`
  width: 100%;
  height: 24rem;
`;

export default GoogleMap;
