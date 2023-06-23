import { useState } from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiMongodb,
  SiMysql,
  SiReact,
  SiFigma,
  SiNextdotjs
} from "react-icons/si";

import {
  Container,
  LagoSvg,
  Texts,
  SkillsContainer,
  Cards,
  Card,
  TopCard,
  ServerSvg,
  Button,
  FrontSvg,
  DesignSvg,
  TecsSection,
  TecsInUse,
  Title,
  TecsLearning,
  FeaturedProject,
  TecsCard,
  FeaturedTopdiv,
  ImgContainer,
  TecList,
  SvgBox,
  ProjectTexts,
  Buttons,
  GitHubButton,
  ProjectButton,
} from "../styles/components/SkillsSection.modules";

function SkillsSection() {
  const [sectionTec, setSectionTec] = useState("backend");

  return (
    <Container id="skills">
      <LagoSvg />
      <Texts>
        <h1>HABILIDADES</h1>
        <p>
          algumas de minhas escolhas de ferramentas para desenvolvimento web
        </p>
      </Texts>
      <SkillsContainer>
        <Cards>
          <Card className={sectionTec === "backend" ? "open" : undefined}>
            <TopCard>
              <div>
                <ServerSvg />
                <p>Back-end</p>
              </div>
              <Button onClick={() => setSectionTec("backend")}>
                {sectionTec === "backend" ? "Ver menos" : "Ver mais"}
              </Button>
            </TopCard>
            <p>
              Estudo back end desde 2019, comecei com java criando jogos,
              depois fui para node, que é meu foco atual
            </p>
          </Card>
          <Card className={sectionTec === "frontend" ? "open" : undefined}>
            <TopCard>
              <div>
                <FrontSvg />
                <p>FRONT-END</p>
              </div>
              <Button onClick={() => setSectionTec("frontend")}>
                {sectionTec === "frontend" ? "Ver menos" : "Ver mais"}
              </Button>
            </TopCard>
            <p>
              Iniciei no frontend no inicio de 2020, com o Javascript, linguagem
              que uso ate hoje, front end é meu principal foco hoje
            </p>
          </Card>
          <Card className={sectionTec === "design" ? "open" : undefined}>
            <TopCard>
              <div>
                <DesignSvg />
                <p>Design</p>
              </div>
              <Button onClick={() => setSectionTec("design")}>
                {sectionTec === "design" ? "Ver menos" : "Ver mais"}
              </Button>
            </TopCard>
            <p>
              Dei inicio a design web em 2021, para aprimorar meus projetos no
              front end
            </p>
          </Card>
        </Cards>

        <TecsSection>
          {sectionTec === "backend" && (
            <>
              <TecsInUse>
                <Title>Tecs em uso</Title>
                <ul>
                  <TecsCard>
                    <SiNodedotjs />
                    <p>Node</p>
                  </TecsCard>
                  <TecsCard>
                    <SiTypescript />
                    <p>Typescript</p>
                  </TecsCard>
                  <TecsCard>
                    <SiJavascript />
                    <p>Javascript</p>
                  </TecsCard>
                  <TecsCard>
                    <SiPostgresql />
                    <p>Postgresql</p>
                  </TecsCard>
                  <TecsCard>
                    <SiGit />
                    <p>Git</p>
                  </TecsCard>
                </ul>
              </TecsInUse>
              <TecsLearning>
                <Title>Em estudo</Title>
                <ul>
                  <TecsCard>
                    <SiMysql />
                    <p>Mysql</p>
                  </TecsCard>
                  <TecsCard>
                    <SiMongodb />
                    <p>Mongodb</p>
                  </TecsCard>
                </ul>
              </TecsLearning>
              <FeaturedProject>
                <Title>Projeto em destaque</Title>
                <FeaturedTopdiv>
                  <ImgContainer>
                    <img src="img/dev-list.png" alt="imagem do projeto" />
                  </ImgContainer>
                  <TecList>
                    <SvgBox>
                      <SiTypescript />
                    </SvgBox>
                    <SvgBox>
                      <SiNodedotjs />
                    </SvgBox>
                    <SvgBox>
                      <SiPostgresql />
                    </SvgBox>
                  </TecList>
                </FeaturedTopdiv>
                <ProjectTexts>
                  <h1>Dev List Server</h1>
                  <p>
                    uma forma de compartilhar seu perfil no github com quem
                    passar pelo site
                  </p>
                </ProjectTexts>
                <Buttons>
                  <a
                    href="https://github.com/kelwinv/dev-list-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubButton>github code</GitHubButton>
                  </a>
                  <a
                    href="https://dev-list.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProjectButton>Ver projeto</ProjectButton>
                  </a>
                </Buttons>
              </FeaturedProject>
            </>
          )}
          {sectionTec === "frontend" && (
            <>
              <TecsInUse>
                <Title>Tecs em uso</Title>
                <ul>
                  <TecsCard>
                    <SiTypescript />
                    <p>Typescript</p>
                  </TecsCard>
                  <TecsCard>
                    <SiJavascript />
                    <p>Javascript</p>
                  </TecsCard>
                  <TecsCard>
                    <SiReact />
                    <p>React.js</p>
                  </TecsCard>
                  <TecsCard>
                    <SiSass />
                    <p>Sass</p>
                  </TecsCard>
                  <TecsCard>
                    <SiHtml5 />
                    <p>Html</p>
                  </TecsCard>
                  <TecsCard>
                    <SiCss3 />
                    <p>Css </p>
                  </TecsCard>
                  <TecsCard>
                    <SiNextdotjs />
                    <p>Next.js </p>
                  </TecsCard>
                </ul>
              </TecsInUse>
              <TecsLearning>
                <Title>Em estudo</Title>
                <ul>
                  <TecsCard>
                    <SiReact />
                    <p>React Native</p>
                  </TecsCard>
                </ul>
              </TecsLearning>
              <FeaturedProject>
                <Title>Projeto em destaque</Title>
                <FeaturedTopdiv>
                  <ImgContainer>
                    <img src="img/hollow-knight.png" alt="imagem do projeto" />
                  </ImgContainer>
                  <TecList>
                    <SvgBox>
                      <SiSass />
                    </SvgBox>
                    <SvgBox>
                      <SiJavascript />
                    </SvgBox>
                    <SvgBox>
                      <SiHtml5 />
                    </SvgBox>
                    <SvgBox>
                      <SiCss3 />
                    </SvgBox>
                  </TecList>
                </FeaturedTopdiv>
                <ProjectTexts>
                  <h1>Hollow knight Site</h1>
                  <p>
                    um site feito com sass, inspirado em hollow knight, apesar
                    de não conter nem um frame work, foi o projeto que mais
                    gostei de fazer
                  </p>
                </ProjectTexts>
                <Buttons>
                  <a
                    href="https://github.com/kelwinv/hollow-knight-scss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubButton>github code</GitHubButton>
                  </a>
                  <a
                    href="https://kelwinv.github.io/hollow-knight-scss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProjectButton>Ver projeto</ProjectButton>
                  </a>
                </Buttons>
              </FeaturedProject>
            </>
          )}
          {sectionTec === "design" && (
            <>
              <TecsInUse>
                <Title>Tecs em uso</Title>
                <ul>
                  <TecsCard>
                    <SiFigma />
                    <p>Figma</p>
                  </TecsCard>
                </ul>
              </TecsInUse>

              <FeaturedProject>
                <Title>Projeto em destaque</Title>
                <FeaturedTopdiv>
                  <ImgContainer>
                    <img src="img/capa.png" alt="imagem do projeto" />
                  </ImgContainer>
                </FeaturedTopdiv>
                <ProjectTexts>
                  <h1>Meu portifolio</h1>
                  <p>
                    esse foi um otimo lugar para testar meu conhecimento tanto
                    no design quanto na programação, e sem duvidas fica como
                    projeto em destaque
                  </p>
                </ProjectTexts>
                <Buttons>
                  <a
                    href="https://www.figma.com/file/DH9z5S0G60USUVLTUeGhJV/portifolio?node-id=160%3A536"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProjectButton>Ver projeto</ProjectButton>
                  </a>
                </Buttons>
              </FeaturedProject>
            </>
          )}
        </TecsSection>
      </SkillsContainer>
    </Container>
  );
}

export default SkillsSection;
