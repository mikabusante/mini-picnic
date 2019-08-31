import { createGlobalStyle } from 'styled-components'
import Savate from './savate/savate-regular-webfont.woff2'
import SavateItalique from './savate/savate-italique-webfont.woff2'
console.log('Savate:', Savate)

const Global = createGlobalStyle`
  :root {
    --black: #212121;
  }

  @font-face {
    font-family: 'Savate';
    src: url(${Savate});
  }

  @font-face {
    font-family: 'Savate Italique';
    src: url(${SavateItalique});
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin:0;
  }

  html {
    background: #FBFBFB;
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    color: var(--black)
  }

  
`

export default Global
