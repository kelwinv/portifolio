import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, :root{
    max-width: 100vw;
    width: 100%;
    overflow-x: hidden;
  }

  *,input,button,textarea{
    border: none;
    font-family: 'Poppins','Archivo', sans-serif;
  }

  body{
    background: var(--white-linear);
  }

  :root{
    --purple-light:#722ACE ;
    --purple:#6726BA ;
    --purple-dark:#44197C ;
    --pink:#E62E62 ;
    --pink-dark:#CF2958 ;
    --white:#FAF7FC ;
    --white-ice:#EFE9F5 ;
    --grey-light1:#AEA7B5 ;
    --grey-light:#80748A ;
    --grey:#54475E ;
    --grey-dark:#2F2338 ;
    --grey-black:#19111F ;
    --purple-linear:linear-gradient(90deg, var(--purple-light) 0%, var(--purple-dark) 100%);
    --white-linear: linear-gradient(90deg, var(--white-ice) 0%, var(--white) 100%);
    --dark-linear: linear-gradient(180deg, var(--grey-black) 49.11%, var(--grey-dark) 100%);
  }
`;

export default GlobalStyles;
