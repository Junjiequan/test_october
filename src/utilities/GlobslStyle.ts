import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size:62.5%;
    };
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        min-height:100vh;
        text-rendering: optimizeSpeed;
        font-family: 'Poppins', sans-serif;
        font-size:1.5rem;
        line-height: 2.2rem;
    }
    button{
        background:transparent;
    }
    li{
        list-style:none;
    }
    a{
        color:inherit;
    }
`;

export default GlobalStyle;
