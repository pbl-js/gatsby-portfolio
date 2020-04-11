import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        background-color: #07142C;
        color: white;
    }
`

export default GlobalStyle
