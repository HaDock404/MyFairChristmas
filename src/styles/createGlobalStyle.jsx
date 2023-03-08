import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction column;
        width: 100%;
        min-height: 100vh;
        background-color: white;
    }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle