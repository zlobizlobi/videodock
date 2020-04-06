import { createGlobalStyle } from 'styled-components';
import Gotu from './fonts/Gotu-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Gotu';
        font-weight: normal;
        src: url(${Gotu});
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;  
    }

    html, body {
        min-height: 100%;
    }

    body {
        font-family: 'Gotu', sans-serif;
        display: flex;
        flex-direction: column;
    }
`;
