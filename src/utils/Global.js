import { createGlobalStyle } from 'styled-components'
import Savate from './savate/savate-regular-webfont.woff2'
import SavateItalique from './savate/savate-italique-webfont.woff2'
console.log('Savate:', Savate)

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Savate';
    src: url(${Savate});
  }

  @font-face {
    font-family: 'Savate Italique';
    src: url(${SavateItalique});
  }

  body {
    background: #FBFBFB;
  }

  
`

export default Global
