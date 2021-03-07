import { useEffect, useState } from "react";

import { Container, Underline } from "../styles/components/Header.modules";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Container style={{ top: visible ? -0 : -98 }}>
      <a href="#home">
        <p>home</p>
        <Underline />
      </a>
      <a href="#skills">
        <p>habilidades</p>
        <Underline />
      </a>
      <a href="#projects">
        <p>projetos</p>
        <Underline />
      </a>
      <a href="#contact">
        <p>Contato</p>
        <Underline />
      </a>
    </Container>
  );
}

export default Header;
