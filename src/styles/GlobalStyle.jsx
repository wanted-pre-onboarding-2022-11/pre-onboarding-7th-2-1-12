import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}

    html {
        font-size: 62.5%;
    }  
`;
