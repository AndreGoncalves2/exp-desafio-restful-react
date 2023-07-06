import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
        height: 100vh;
        overflow: hidden;
    }

    body, button, a {
        font-family: 'Roboto Slab', serif;
    }

    button, a {
        cursor: pointer;
    }
`