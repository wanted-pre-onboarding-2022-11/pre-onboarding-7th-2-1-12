import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLORS } from "styles/theme";

export default createGlobalStyle`
    ${reset}

    html {
        font-size: 62.5%;
    } 

    body {
        background: ${COLORS.LIGHT_GRAY};
    }
`;
