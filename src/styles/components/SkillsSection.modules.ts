import styled from "styled-components";

import { design, lago, server, web } from "../../../public/svgs";

export const Container = styled.section`
  position: relative;
  padding-top: 96px;

  @media (min-width: 1170px) {
    margin-top: 64px;
  }
`;

export const LagoSvg = styled(lago)`
  position: absolute;
  left: -100vh;
  height: 549px;
  z-index: -2;

  @media (min-width: 1170px) {
    left: 45px;
    top: -50px;
  }
`;

export const Texts = styled.div`
  margin: auto;
  max-width: 70vw;

  h1 {
    font-family: Archivo, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;

    color: var(--purple);
  }
  p {
    font-size: 14px;
    color: var(--grey);
  }

  @media (min-width: 1170px) {
    max-width: 60vw;

    h1 {
      font-size: 48px;
      line-height: 52px;
    }

    p {
      font-size: 24px;
      width: 570px;
      margin-top: 4px;
    }
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 84px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  max-width: 970px;
  min-height: 248px;
  gap: 8px;
  margin: auto;
  margin-bottom: -136px;

  @media (min-width: 1170px) {
    gap: 80px;

    min-height: 320px;
    margin-bottom: -208px;
  }
`;

export const Card = styled.div`
  background: var(--white-linear);
  height: 112px;
  max-width: 270px;
  overflow: hidden;

  box-shadow: 5px -5px 8px rgba(15, 11, 56, 0.04),
    -10px 11px 14px rgba(15, 11, 56, 0.1);
  border-radius: 2px;

  > p {
    color: var(--grey-dark);
    font-weight: 300;
    font-size: 12px;
    margin: 0 4px;
  }

  transition: 0.4s;

  &.open {
    height: 248px;
  }

  @media (min-width: 1170px) {
    > p {
      font-size: 18px;
      margin: 18px 24px;
    }

    &.open {
      height: 320px;
    }
  }
`;

export const TopCard = styled.div`
  margin: 8px 4px;

  > div {
    display: flex;
    align-items: center;

    p {
      font-size: 12px;
      font-weight: 500;
      margin-left: 8px;
      text-transform: uppercase;
    }

    svg {
      width: 32px;
      fill: var(--grey);
    }
  }

  @media (min-width: 1170px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin: 32px 24px 0;

    > div {
      width: 100%;
      align-items: flex-start;
      justify-content: space-between;

      p {
        font-size: 18px;
      }

      svg {
        width: 64px;
      }
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 34px;
  background: var(--pink);
  color: var(--white);

  font-family: Archivo;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--pink-dark);
    color: var(--white-ice);
  }

  @media (min-width: 1170px) {
    transform: translateY(-20px);
    width: 144px;
  }
`;

export const ServerSvg = styled(server)``;

export const FrontSvg = styled(web)``;

export const DesignSvg = styled(design)``;

export const TecsSection = styled.section`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 28px;

  padding-top: 224px;
  padding-left: 24px;
  background-image: url("skills-bg.svg"), var(--purple-linear);
  background-size: contain;

  @media (min-width: 1170px) {
    padding-bottom: 80px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  font-family: Archivo;
  color: var(--white);
  margin-bottom: 16px;
`;

export const TecsInUse = styled.div`
  width: 327px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const TecsLearning = styled.div`
  width: 327px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const FeaturedProject = styled.div`
  width: 327px;
`;

export const TecsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: 80px;
  height: 104px;
  background: var(--purple);

  box-shadow: 5px -5px 8px rgba(15, 11, 56, 0.04),
    -10px 11px 14px rgba(15, 11, 56, 0.1);
  border-radius: 2px;

  svg {
    width: 56px;
    height: 100%;
    color: var(--grey-black);
  }

  p {
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: var(--white-ice);
    text-transform: uppercase;
  }
`;

export const ImgContainer = styled.div`
  width: 204px;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const FeaturedTopdiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const TecList = styled.div`
  width: 117px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SvgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  background: var(--white);
  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.04);
  border-radius: 6px;

  svg {
    fill: var(--purple-dark);
  }
`;

export const ProjectTexts = styled.div`
  h1 {
    font-weight: normal;
    font-size: 14px;
    color: var(--white);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    color: var(--white-ice);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;

  a {
    text-decoration: none;
  }
`;

export const GitHubButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 40px;

  border: 1px solid var(--pink);
  box-sizing: border-box;
  border-radius: 2px;

  font-family: Archivo;
  font-weight: 600;
  font-size: 12px;
  text-transform: capitalize;
  color: var(--pink);

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    background: rgba(230, 46, 98, 0.3);

    border: 1px solid #bc4767;
    box-sizing: border-box;
    border-radius: 2px;

    color: var(--white-ice);
  }
`;

export const ProjectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 40px;

  background: var(--pink);
  border-radius: 2px;

  font-family: Archivo;
  font-weight: 600;
  font-size: 12px;
  text-transform: capitalize;
  color: var(--white);

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    background: var(--pink-dark);
    border-radius: 2px;

    color: var(--white-ice);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
