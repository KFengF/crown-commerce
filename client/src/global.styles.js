import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        padding: 20px 2%;
        font-family: 'Open Sans Condensed', sans-serif;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: #111;
    }

    a:hover {
        color: #909494;
    }
`;