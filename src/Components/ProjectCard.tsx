import { IconType } from "react-icons/lib";

import {
  Container,
  Texts,
  LeftDiv,
  TecList,
  SvgBox,
  RightDiv,
  ProjectLink,
  GithubLink,
} from "../styles/components/ProjectCard.modules";

interface ProjectCardProps {
  imgUrl: string;
  name: string;
  about: string;
  github: string;
  project?: string;
  tecs: IconType[];
}

function ProjectCard({
  imgUrl,
  name,
  about,
  github,
  project,
  tecs,
}: ProjectCardProps) {
  return (
    <Container>
      <img src={imgUrl} alt={`${name}-img`} />
      <Texts>
        <p>{about}</p>
      </Texts>
      <div>
        <LeftDiv>
          <h1>{name}</h1>
          <TecList>
            {tecs?.map(TecIcon => (
              <SvgBox key={TecIcon?.name}>
                <TecIcon />
              </SvgBox>
            ))}
          </TecList>
        </LeftDiv>
        <RightDiv>
          <ProjectLink
            href={project}
            target="_blank"
            rel="noreferrer"
            className={!project && "disabled"}
          >
            VER PROJETO
          </ProjectLink>
          <GithubLink href={github} target="_blank" rel="noreferrer">
            Github Code
          </GithubLink>
        </RightDiv>
      </div>
    </Container>
  );
}

export default ProjectCard;
