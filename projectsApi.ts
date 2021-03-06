import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSocketDotIo,
  SiStyledComponents,
  SiTypescript,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

export default [
  {
    imgUrl: "img/hollow-knight.png",
    name: "hollowKnight site",
    about: "um site feito com sass, quem tem como base o jogo hollowKnight",
    github: "https://github.com/kelwinv/hollow-knight-scss",
    project: "https://kelwinv.github.io/hollow-knight-scss",
    tecs: [SiSass, SiJavascript, SiHtml5, SiCss3],
    tag: "design",
  },
  {
    imgUrl: "img/node.jpg",
    name: "nlw04-node",
    about: "Feito na nlw 4, é um projeto de email que recebe nps dos usuários",
    github: "https://github.com/kelwinv/nlw04-node",
    tecs: [SiTypescript, SiNodeDotJs, DiSqllite],
    tag: "code",
  },
  {
    imgUrl: "img/nlw4.png",
    name: "moveit",
    about:
      "é uma aplicação que visa melhorar a saúde, dando exercícios a cada 25 minutos",
    github: "https://github.com/kelwinv/moveit",
    project: "https://nextmoveit.vercel.app",
    tecs: [SiTypescript, SiNextDotJs],
    tag: "design",
  },
  {
    imgUrl: "img/dev-list.png",
    name: "dev list",
    about:
      "uma forma de compartilhar seu perfil no github com quem passar pelo site",
    github: "https://github.com/kelwinv/dev-list",
    project: "https://dev-list.vercel.app",
    tecs: [SiTypescript, SiReact, SiStyledComponents],
    tag: "design",
  },
  {
    imgUrl: "img/dev-list.png",
    name: "dev list server",
    about:
      "uma forma de compartilhar seu perfil no github com quem passar pelo site",
    github: "https://github.com/kelwinv/dev-list-server",
    tecs: [SiTypescript, SiNodeDotJs, SiPostgresql],
    tag: "code",
  },
  {
    imgUrl: "img/chat-com-socket.png",
    name: "chat com socket.io",
    about: "chat em tempo real com node + socket",
    github: "https://github.com/kelwinv/chat-com-socket.io",
    tecs: [
      SiTypescript,
      SiNodeDotJs,
      SiSocketDotIo,
      SiReact,
      SiStyledComponents,
    ],
    tag: "all",
  },

  {
    imgUrl: "img/among-us.jpeg",
    name: "among Us css",
    about: "um desafio de css feito com objetivo de testar conhecimento",
    github: "https://github.com/kelwinv/amongUs-css-drawing",
    project: "https://kelwinv.github.io/amongUs-css-drawing/",
    tecs: [SiHtml5, SiCss3],
    tag: "design",
  },
  {
    imgUrl: "img/ecoleta.png",
    name: "Ecoleta",
    about:
      "conecta empresas de coleta de resíduos as pessoas que precisam descartar seus resíduos",
    github: "https://github.com/kelwinv/NLW-Booster",
    tecs: [SiTypescript, DiSqllite, SiNodeDotJs, SiReact],
    tag: "all",
  },
  {
    imgUrl: "img/be-the-hero.png",
    name: "be the hero",
    about:
      "Conecta ONGs e outras instituições a pessoas que tem disponibilidade para ajudar",
    github: "https://github.com/kelwinv/semanaOminiStack11",
    tecs: [SiJavascript, DiSqllite, SiNodeDotJs, SiReact],
    tag: "all",
  },
  {
    imgUrl: "img/game-list.png",
    name: "Game List",
    about: "Aplicação que permite que você salve seu jogos favoritos",
    github: "https://github.com/kelwinv/Game-list",
    tecs: [SiTypescript,SiPostgresql,SiReact,SiStyledComponents],
    tag: "all",
  },
  {
    imgUrl: "https://i.ibb.co/T87z2py/Screenshot-3.png",
    name: "Randomizador de texto",
    about: "permite que você escolha uma palavra que retornara as letras embaralhadas ",
    github: "https://github.com/kelwinv/Game-list",
    project: "https://randomizador-de-texto.herokuapp.com/",
    tecs: [SiTypescript,SiReact,SiStyledComponents],
    tag: "design",
  },
  {
    imgUrl: "img/happyvideo.gif",
    name: "Happy",
    about: "um app voltado a vistas a casas de adoção, Feito na nlw3",
    github: "https://github.com/kelwinv/NextLevelWeek3",
    tecs: [SiTypescript,SiNodeDotJs,DiSqllite,SiReact],
    tag: "all",
  },
  {
    imgUrl: "img/proffy.png",
    name: "Proffy",
    about: "um app que conecta professores a alunos, feito na nlw2",
    github: "https://github.com/kelwinv/nextlevelweek02",
    tecs: [SiTypescript,SiNodeDotJs,DiSqllite,SiReact],
    tag: "all",
  },
  {
    imgUrl: "https://github.com/kelwinv/nlw06-letmeask/blob/main/.github/Capa.png?raw=true",
    name: "letmeask",
    about: "Letmeask é uma aplicação feita para facilitar as pergutas de seus espectadores",
    github: "https://github.com/kelwinv/nlw06-letmeask/",
    project: "https://nlw06letmeask.web.app",
    tecs: [SiTypescript,SiFirebase,SiReact],
    tag: "code",
  },
];
