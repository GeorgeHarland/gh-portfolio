'use client';

import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  siteWidth: '1900px',
  verylarge: '1650px',
  large: '1400px',
  medium: '1150px',
  bigtablet: '900px',
  tablet: '768px',
  mobile: '480px',
};

export const colors = {
  backgroundGrey: '#dddddd',
  turquoise: '#31adab'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.backgroundGrey};
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
