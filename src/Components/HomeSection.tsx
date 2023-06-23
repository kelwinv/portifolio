import { GiStarsStack } from "react-icons/gi";
import { GrMail, GrGithub, GrLinkedinOption } from "react-icons/gr";

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
              👋 Oi, me chamo Kelwin e sou Desenvolvedor full-stack web,
              apaixonado por tecnologias,Estou sempre buscando aprimoramento
              profissional e desafios.
            </p>
            <p>
              {" "}
              Esse é meu site pessoal, aqui você pode ver meus projetos mais
              recentes.
            </p>
            <strong>
              <GiStarsStack /> Fique à vontade <GiStarsStack />
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
          href="mailto:kelwin.v.goncalves@gmail.com?subject=Assunto do email&body=olá kelwin vim pelo seu site"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
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
