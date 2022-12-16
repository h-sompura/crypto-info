import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    body{
        background-color:${(props) => props.theme.colors.black};
        font-family:${(props) => ` ${props.theme.fonts.nunito}, sans-serif`};
        color: ${(props) => props.theme.colors.greyText}
    }
`;

export default GlobalStyle;
