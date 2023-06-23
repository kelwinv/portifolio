import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { IconType } from "react-icons/lib";

import { projectInfoType, projectsInfo } from "../../projectsApi";

import {
  Container,
  TopBar,
  Menu,
  AllProjectIcon,
  CodeIcon,
  SkillsIcon,
  CardsContainer,
} from "../styles/components/ProjectsSection.modules";

function ProjectsSection() {
  const [section, setSection] = useState("all");
  const [projectsSelected, setProjectsSelected] =
    useState<projectInfoType[]>(projectsInfo);

  useEffect(() => {
    const res = projectsInfo.filter(
      (project) =>
        (project.tag === section ||
          project.tag === "all" ||
          section === "all") &&
        project
    );
    setProjectsSelected(res);
  }, [section]);

  return (
    <Container id="projects">
      <TopBar>
        <h1>Projetos</h1>
        <Menu>
          <button
            onClick={() => setSection("all")}
            className={section === "all" ? "selected" : undefined}
          >
            <AllProjectIcon />
            <p>Todos</p>
          </button>
          <button
            onClick={() => setSection("code")}
            className={section === "code" ? "selected" : undefined}
          >
            <CodeIcon />
            <p>Back-end</p>
          </button>
          <button
            onClick={() => setSection("design")}
            className={section === "design" ? "selected" : undefined}
          >
            <SkillsIcon />
            <p>Front/design</p>
          </button>
        </Menu>
      </TopBar>
      <CardsContainer>
        {projectsSelected.map((project) => (
          <ProjectCard
            key={`${project.name}-${project.tag}`}
            imgUrl={project.imgUrl}
            name={project.name}
            about={project.about}
            github={project.github}
            project={project?.project}
            tecs={project.tecs}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default ProjectsSection;
