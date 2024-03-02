import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${colors.main.backgroud};
        overflow-x: hidden;
    }

    a:hover {
        color: ${colors.main.text.color};
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: ${colors.main.secondaryBackground};
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,

    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: ${colors.main.text.header};
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    h5 {
        font-family: 'Motiva Sans Bold', serif;
        color: ${colors.main.text.header};
        font-size: 47px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 32px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 24px;
        }
    }

    p {
        color: ${colors.main.text.color};
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }
`;