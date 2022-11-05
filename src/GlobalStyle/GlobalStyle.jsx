import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        color:#444;
    }
    a{
        text-decoration: none;
        color: inherit;
        display: block;
    }
    ul,ol,li{
        list-style: none;
    }
`;
