import * as React from 'react';
import { Link } from 'gatsby';

import '../css/style.css';
// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      Welcome to Opposite Development Website. Here we make new components for testing (less than half the components
      actually end up in production ;)) Anyways, here are the links to the latest testing components
      <br />
      <br />
      <Link to="hueRotation">Hue rotation effect on Card</Link>
      <br />
      <br />
      <Link to="hoverLinks">Hoverable Links with image rotation</Link>
      <br />
      <br />
      <Link to="scrollEffect">Vertical scroll effect</Link>
    </main>
  );
};

export default IndexPage;
