import { GiStarsStack } from "react-icons/gi";
import { GrInstagram, GrGithub, GrLinkedinOption } from "react-icons/gr";

import {
  Container,
  TopSection,
  HomeLeftDiv,
  Texts,
  Title,
  SubTitle,
  Buttons,
  ButtonCv,
  ButtonContact,
  SvgContainer,
  WalkSvg,
  Icons,
} from "../styles/components/HomeSection.modules";

function HomeSection() {
  return (
    <Container id="home">
      <TopSection>
        <HomeLeftDiv>
          <Texts>
            <Title>Kelwin vieira</Title>
            <SubTitle>Dev FullStack</SubTitle>
            <p>
              {" "}
              👋 Oi, me chamo kelwin tenho 18 anos, e sou um desenvolvedor
              fullstack.
            </p>
            <p>
              {" "}
              Esse é meu site pessoal, aqui você pode ver meus projetos mais
              recentes.
            </p>
            <strong>
              <GiStarsStack /> Fique a vontade <GiStarsStack />
            </strong>
          </Texts>
          <Buttons>
            <a href="/cv/kelwin-vieira.pdf" download>
              <ButtonCv>BAIXAR CV</ButtonCv>
            </a>
            <a href="#contact">
              <ButtonContact>ENTRAR EM CONTATO</ButtonContact>
            </a>
          </Buttons>
        </HomeLeftDiv>
        <SvgContainer>
          <WalkSvg />
        </SvgContainer>
      </TopSection>
      <Icons>
        <a
          href="https://www.instagram.com/kelwindev"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>
        <a href="https://github.com/kelwinv" target="_blank" rel="noreferrer">
          <GrGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kelwinv"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
        </a>
      </Icons>
    </Container>
  );
}

export default HomeSection;
