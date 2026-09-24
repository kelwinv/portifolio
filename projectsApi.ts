import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

import hollowKnightImg from "@/public/img/hollow-knight.png";
import nodeImg from "@/public/img/node.jpg";
import nlw4Img from "@/public/img/nlw4.png";
import devListImg from "@/public/img/dev-list.png";
import chatComSocketImg from "@/public/img/chat-com-socket.png";
import amongUsImg from "@/public/img/among-us.jpeg";
import ecoletaImg from "@/public/img/ecoleta.png";
import beTheHeroImg from "@/public/img/be-the-hero.png";
import gameListImg from "@/public/img/game-list.png";
import randomizadorImg from "@/public/img/randomizador.png";
import happyVideo from "@/public/img/happyvideo.gif";
import proffyImg from "@/public/img/proffy.png";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type projectInfoType = {
  imgUrl: StaticImageData | string;
  name: string;
  about: string;
  github: string;
  project?: string;
  tecs: IconType[];
  tag: string;
  featured?: boolean;
};

const projectsInfo: projectInfoType[] = [
  {
    imgUrl: hollowKnightImg,
    name: "Hollow Knight",
    about:
      "Página temática desenvolvida com Sass, inspirada no jogo Hollow Knight.",
    github: "https://github.com/kelwinv/hollow-knight-scss",
    project: "https://kelwinv.github.io/hollow-knight-scss",
    tecs: [SiSass, SiJavascript, SiHtml5, SiCss3],
    tag: "design",
    featured: false,
  },
  {
    imgUrl: nodeImg,
    name: "NLW 04 — NPS",
    about: "Projeto da NLW 4 para envio de e-mails com pesquisa NPS.",
    github: "https://github.com/kelwinv/nlw04-node",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite],
    tag: "code",
    featured: false,
  },
  {
    imgUrl: nlw4Img,
    name: "Move.it",
    about:
      "Projeto de estudo que combina pausas programadas com exercícios durante o trabalho.",
    github: "https://github.com/kelwinv/moveit",
    project: "https://nextmoveit.vercel.app",
    tecs: [SiTypescript, SiNextdotjs],
    tag: "design",
    featured: false,
  },
  {
    imgUrl: devListImg,
    name: "Dev List",
    about: "Página para compartilhar dados de perfil do GitHub.",
    github: "https://github.com/kelwinv/dev-list",
    project: "https://dev-list.vercel.app",
    tecs: [SiTypescript, SiReact, SiStyledcomponents],
    tag: "design",
    featured: false,
  },
  {
    imgUrl: devListImg,
    name: "Dev List Server",
    about:
      "API para disponibilizar dados de perfil do GitHub em conjunto com a interface Dev List.",
    github: "https://github.com/kelwinv/dev-list-server",
    tecs: [SiTypescript, SiNodedotjs, SiPostgresql],
    tag: "code",
    featured: false,
  },
  {
    imgUrl: chatComSocketImg,
    name: "Chat com Socket.IO",
    about:
      "Projeto de estudo de comunicação em tempo real entre interface React e servidor Node.js.",
    github: "https://github.com/kelwinv/chat-com-socket.io",
    tecs: [
      SiTypescript,
      SiNodedotjs,
      SiSocketdotio,
      SiReact,
      SiStyledcomponents,
    ],
    tag: "all",
    featured: false,
  },

  {
    imgUrl: amongUsImg,
    name: "Among Us CSS",
    about: "Desafio de desenho feito com HTML e CSS.",
    github: "https://github.com/kelwinv/amongUs-css-drawing",
    project: "https://kelwinv.github.io/amongUs-css-drawing/",
    tecs: [SiHtml5, SiCss3],
    tag: "design",
    featured: false,
  },
  {
    imgUrl: ecoletaImg,
    name: "Ecoleta",
    about:
      "Aplicação para conectar pessoas que precisam descartar resíduos a pontos de coleta.",
    github: "https://github.com/kelwinv/NLW-Booster",
    tecs: [SiTypescript, DiSqllite, SiNodedotjs, SiReact],
    tag: "all",
    featured: false,
  },
  {
    imgUrl: beTheHeroImg,
    name: "Be The Hero",
    about: "Aplicação que conecta ONGs a pessoas interessadas em ajudar.",
    github: "https://github.com/kelwinv/semanaOminiStack11",
    tecs: [SiJavascript, DiSqllite, SiNodedotjs, SiReact],
    tag: "all",
    featured: false,
  },
  {
    imgUrl: gameListImg,
    name: "Game List",
    about: "Aplicação de estudo para organizar jogos favoritos.",
    github: "https://github.com/kelwinv/Game-list",
    tecs: [SiTypescript, SiPostgresql, SiReact, SiStyledcomponents],
    tag: "all",
    featured: false,
  },
  {
    imgUrl: randomizadorImg,
    name: "Randomizador de texto",
    about: "Ferramenta para embaralhar as letras de uma palavra.",
    github: "https://github.com/kelwinv/randomizador-de-texto",
    project: "https://randomizador-de-texto.herokuapp.com/",
    tecs: [SiTypescript, SiReact, SiStyledcomponents],
    tag: "design",
    featured: false,
  },
  {
    imgUrl: happyVideo,
    name: "Happy",
    about:
      "Projeto de estudo relacionado a visitas a casas de adoção, feito na NLW 3.",
    github: "https://github.com/kelwinv/NextLevelWeek3",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite, SiReact],
    tag: "all",
    featured: false,
  },
  {
    imgUrl: proffyImg,
    name: "Proffy",
    about: "Projeto da NLW 2 que conecta professores e alunos.",
    github: "https://github.com/kelwinv/nextlevelweek02",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite, SiReact],
    tag: "all",
    featured: false,
  },
  {
    imgUrl:
      "https://github.com/kelwinv/nlw06-letmeask/blob/main/.github/Capa.png?raw=true",
    name: "Letmeask",
    about:
      "Projeto de estudo para organizar perguntas enviadas por espectadores durante transmissões.",
    github: "https://github.com/kelwinv/nlw06-letmeask/",
    project: "https://nlw06letmeask.web.app",
    tecs: [SiTypescript, SiFirebase, SiReact],
    tag: "code",
    featured: false,
  },
];

export { projectsInfo };
