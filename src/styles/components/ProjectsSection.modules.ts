import styled, { css } from "styled-components";

import { design, code, allProject } from "../../../public/svgs";

export const Container = styled.section`
  min-height: 755px;

  background: url("/projects-bg.svg") no-repeat, var(--dark-linear);
  background-size: 100% 85px, 100%;
`;

export const TopBar = styled.div`
  padding-top: 64px;
  margin: auto;
  width: 90vw;
  max-width: 1170px;

  box-shadow: 0px 1px 0px #fbf9fa;

  h1 {
    font-family: Archivo;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;

    color: var(--white-ice);
    margin-bottom: 32px;
  }

  @media (min-width: 1170px) {
    h1 {
      font-size: 48px;
    }
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  height: 64px;

  button {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 100%;
    background: transparent;

    cursor: pointer;

    p {
      color: var(--grey);
      font-weight: normal;
      font-size: 12px;
      text-transform: uppercase;
      transition: 0.4s;
    }
  }

  .selected,
  button:hover {
    p {
      color: var(--purple-light);
    }
    svg path {
      fill: var(--purple-light);
    }
  }
  .selected:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: var(--purple-dark);
    box-shadow: 0px -20px 37px 6px rgba(105, 0, 168, 0.4);
    border-radius: 1px;
  }

  @media (min-width: 1170px) {
    button {
      gap: 14px;

      p {
        font-size: 18px;
      }
    }
  }
`;

const iconsCss = css`
  width: 24px;
  height: 24px;
  path {
    transition: 0.4s;

    fill: var(--grey);
  }

  @media (min-width: 1170px) {
    width: 33px;
    height: 33px;
  }
`;

export const AllProjectIcon = styled(allProject)`
  ${iconsCss}
`;

export const CodeIcon = styled(code)`
  ${iconsCss}
`;

export const SkillsIcon = styled(design)`
  ${iconsCss}
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  max-height: 670px;
  max-width: 1170px;

  gap: 32px;
  padding: 32px 0;
  margin: 4px auto;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 11px;
  }

  & {
    scrollbar-width: thin;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey-black);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 8px;
    border: 3px solid var(--grey-black);
  }
`;
