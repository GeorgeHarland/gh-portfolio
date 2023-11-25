'use client';

import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  siteWidth: 1900,
  verylarge: 1650,
  large: 1400,
  medium: 1150,
  bigtablet: 900,
  tablet: 768,
  mobile: 480,
};

export const colors = {
  backgroundGrey: '#dddddd',
  backgroundTurquoise: '#53cfcd',
  turquoiseBanners: '#31adab',
  primaryText: '#000000'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    /* background: linear-gradient(
      55deg, 
      ${colors.backgroundTurquoise}, 
      ${colors.backgroundGrey}, 
      ${colors.backgroundTurquoise}
    ); */
    background-color: ${colors.backgroundGrey};
    height: 100%;
    color: ${colors.primaryText};
  }
  html {
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  /* a:hover {
    text-decoration: underline;
  } */
`;
