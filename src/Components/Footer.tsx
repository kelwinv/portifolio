import { IoIosArrowUp } from "react-icons/io";

import { Container, Links } from "../styles/components/Footer.modules";

function Footer() {
  return (
    <Container>
      <a href="#home">
        <span>
          <IoIosArrowUp />
          <IoIosArrowUp />
        </span>
        <p>voltar ao Inicio</p>
      </a>
      <h1>me siga</h1>
      <Links>
        <div>
          <a
            href="https://www.linkedin.com/in/kelwinv"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a href="https://github.com/kelwinv" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <a href="https://storyset.com" target="_blank" rel="noreferrer">
          Illustrações por Freepik Storyset
        </a>
      </Links>
    </Container>
  );
}

export default Footer;
