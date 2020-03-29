import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        /* Dzięki temu 1rem = 10px */
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        background-color: #07142C;
        color: white;
        /* Ale nadal bazową wielkością fontu jest 16px */
    }
`

export default GlobalStyle
