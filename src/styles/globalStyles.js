import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
 ${reset}
 html { 
	font-size: 62.5%;
 }
 button,a {all:unset}
 div,li,section{
	box-sizing: border-box;
 }

 
`;

export default GlobalStyle;
