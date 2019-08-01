import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html, body {
        margin: 0;
    }

    body {
        font-family: 'Lato', sans-serif;
        
    }

    scene {
        perspective: 10em;
    }

    input, textarea, button, select, a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;

// font-family: 'Raleway', sans-serif;
// font-family: 'Raleway Dots', cursive;
// font-family: 'Lato', sans-serif;
