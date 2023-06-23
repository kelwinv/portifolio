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

import hollowKnightImg from "public/img/hollow-knight.png";
import nodeImg from "public/img/node.jpg";
import nlw4Img from "public/img/nlw4.png";
import devListImg from "public/img/dev-list.png";
import chatComSocketImg from "public/img/chat-com-socket.png";
import amongUsImg from "public/img/among-us.jpeg";
import ecoletaImg from "public/img/ecoleta.png";
import beTheHeroImg from "public/img/be-the-hero.png";
import gameListImg from "public/img/game-list.png";
import happyvideoImg from "public/img/happyvideo.gif";
import proffyImg from "public/img/proffy.png";

const projects_info = [
  {
    imgUrl: hollowKnightImg,
    name: "hollowKnight site",
    about: "um site feito com sass, quem tem como base o jogo hollowKnight",
    github: "https://github.com/kelwinv/hollow-knight-scss",
    project: "https://kelwinv.github.io/hollow-knight-scss",
    tecs: [SiSass, SiJavascript, SiHtml5, SiCss3],
    tag: "design",
  },
  {
    imgUrl: nodeImg,
    name: "nlw04-node",
    about: "Feito na nlw 4, é um projeto de email que recebe nps dos usuários",
    github: "https://github.com/kelwinv/nlw04-node",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite],
    tag: "code",
  },
  {
    imgUrl: nlw4Img,
    name: "moveit",
    about:
      "é uma aplicação que visa melhorar a saúde, dando exercícios a cada 25 minutos",
    github: "https://github.com/kelwinv/moveit",
    project: "https://nextmoveit.vercel.app",
    tecs: [SiTypescript, SiNextdotjs],
    tag: "design",
  },
  {
    imgUrl: devListImg,
    name: "dev list",
    about:
      "uma forma de compartilhar seu perfil no github com quem passar pelo site",
    github: "https://github.com/kelwinv/dev-list",
    project: "https://dev-list.vercel.app",
    tecs: [SiTypescript, SiReact, SiStyledcomponents],
    tag: "design",
  },
  {
    imgUrl: devListImg,
    name: "dev list server",
    about:
      "uma forma de compartilhar seu perfil no github com quem passar pelo site",
    github: "https://github.com/kelwinv/dev-list-server",
    tecs: [SiTypescript, SiNodedotjs, SiPostgresql],
    tag: "code",
  },
  {
    imgUrl: chatComSocketImg,
    name: "chat com socket.io",
    about: "chat em tempo real com node + socket",
    github: "https://github.com/kelwinv/chat-com-socket.io",
    tecs: [
      SiTypescript,
      SiNodedotjs,
      SiSocketdotio,
      SiReact,
      SiStyledcomponents,
    ],
    tag: "all",
  },

  {
    imgUrl: amongUsImg,
    name: "among Us css",
    about: "um desafio de css feito com objetivo de testar conhecimento",
    github: "https://github.com/kelwinv/amongUs-css-drawing",
    project: "https://kelwinv.github.io/amongUs-css-drawing/",
    tecs: [SiHtml5, SiCss3],
    tag: "design",
  },
  {
    imgUrl: ecoletaImg,
    name: "Ecoleta",
    about:
      "conecta empresas de coleta de resíduos as pessoas que precisam descartar seus resíduos",
    github: "https://github.com/kelwinv/NLW-Booster",
    tecs: [SiTypescript, DiSqllite, SiNodedotjs, SiReact],
    tag: "all",
  },
  {
    imgUrl: beTheHeroImg,
    name: "be the hero",
    about:
      "Conecta ONGs e outras instituições a pessoas que tem disponibilidade para ajudar",
    github: "https://github.com/kelwinv/semanaOminiStack11",
    tecs: [SiJavascript, DiSqllite, SiNodedotjs, SiReact],
    tag: "all",
  },
  {
    imgUrl: gameListImg,
    name: "Game List",
    about: "Aplicação que permite que você salve seu jogos favoritos",
    github: "https://github.com/kelwinv/Game-list",
    tecs: [SiTypescript, SiPostgresql, SiReact, SiStyledcomponents],
    tag: "all",
  },
  {
    imgUrl1: "https://i.ibb.co/T87z2py/Screenshot-3.png",
    name: "Randomizador de texto",
    about:
      "permite que você escolha uma palavra que retornara as letras embaralhadas ",
    github: "https://github.com/kelwinv/Game-list",
    project: "https://randomizador-de-texto.herokuapp.com/",
    tecs: [SiTypescript, SiReact, SiStyledcomponents],
    tag: "design",
  },
  {
    imgUrl: happyvideoImg,
    name: "Happy",
    about: "um app voltado a vistas a casas de adoção, Feito na nlw3",
    github: "https://github.com/kelwinv/NextLevelWeek3",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite, SiReact],
    tag: "all",
  },
  {
    imgUrl: proffyImg,
    name: "Proffy",
    about: "um app que conecta professores a alunos, feito na nlw2",
    github: "https://github.com/kelwinv/nextlevelweek02",
    tecs: [SiTypescript, SiNodedotjs, DiSqllite, SiReact],
    tag: "all",
  },
  {
    imgUrl1:
      "https://github.com/kelwinv/nlw06-letmeask/blob/main/.github/Capa.png?raw=true",
    name: "letmeask",
    about:
      "Letmeask é uma aplicação feita para facilitar as pergutas de seus espectadores",
    github: "https://github.com/kelwinv/nlw06-letmeask/",
    project: "https://nlw06letmeask.web.app",
    tecs: [SiTypescript, SiFirebase, SiReact],
    tag: "code",
  },
];

export default projects_info;
