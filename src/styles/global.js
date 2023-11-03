import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0;
    -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
 }

 a {
    text-decoration: none;
 }

 button, a {
    cursor: pointer;
    transition: filter 0.2;
 }

 button:hover, a:hover {
    filter: brightness(0.9);
 }
`;
