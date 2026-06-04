export type Recommendation = {
  author: string;
  role?: string;
  quote: string;
  linkedinUrl?: string;
};

/** Textos extraídos do perfil LinkedIn (seção Recomendações). */
export const recommendations: Recommendation[] = [
  {
    author: "Samuel Sousa",
    linkedinUrl: "https://www.linkedin.com/in/samuelsousaarts",
    quote:
      "Recomendo meu colega fullstack com a toda confiança pelo seu conhecimento e habilidade demonstrada em javascript, python e outros. O Kelwin é comprometido com seu trabalho, dedicado, sempre disposto e proativo a aprender. Tenho certeza de que ele será uma boa adição a qualquer equipa de desenvolvimento.",
  },
  {
    author: "Rafael Gomes",
    role: "Colega na ENLINE",
    linkedinUrl: "https://www.linkedin.com/in/rafael-gomes-de-sousa",
    quote:
      "Trabalhei com o Kelwin na Enline por um ano, mais ou menos, e ele sabe muito do front e backend. Com o grande conhecimento que tem e sua proatividade fará uma diferença positiva onde trabalhar. Estava sempre ajudando quando podia e colaborando com boas ideias no desenvolvimento do projeto.",
  },
];
