import React from "react";
import styled from "styled-components";

const EmbeddedMap = ({ street, city, state, district }) => {
  const apiKey = "AIzaSyA-M0jiYyWeks2H4RXskG0jvs3ie4X2Jjw";
  const query = `${district}, ${street}, ${city} - ${state}`;
  const zoom = 15;
  const src = `https://www.google.com/maps/embed/v1/place?q=${query}&zoom=${zoom}&key=${apiKey}`;
  return <MapFrame src={src} frameBorder="0" />;
};

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

export default EmbeddedMap;
