import React from 'react';
import { Container, Overlay, Text } from './styles';

export const Movie = ({ images, title, onClick }) => {
  const image = images[0]; // Get the 320w thumbnail image so it's full screen on the smallest device = Iphone 5.

  return (
    <Container onClick={onClick}>
      <Overlay>
        <Text>{title}</Text>
      </Overlay>
      <img alt={`${title} movie poster`} {...image} />
    </Container>
  );
};
