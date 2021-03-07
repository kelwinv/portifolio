import styled, { css } from "styled-components";
import { HomeIllustration } from "../../../public/svgs";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 90vw;
  padding-top: 172px;
  margin: auto;
`;

export const TopSection = styled.div`
  display: flex;
`;

export const HomeLeftDiv = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const Texts = styled.div`
  height: 216px;
  p,
  strong {
    font-size: 14px;
    margin-top: 8px;
  }

  p {
    color: var(--grey-light);
    line-height: 24px;
    font-weight: 300;
  }

  strong {
    display: block;
    color: var(--grey);
    font-weight: 500;

    svg {
      fill: var(--purple-light);
      height: 1.2em;
      width: 1.2em;
      vertical-align: middle;
    }
  }

  @media (min-width: 1170px) {
    p,
    strong {
      font-size: 24px;
    }

    p {
      line-height: initial;
    }

    strong{
      margin-top: 24px;
    }


    height: initial;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  font-family: "Archivo", sans-serif;
  color: var(--purple-light);

  @media (min-width: 1170px) {
    font-size: 64px;
    line-height: 70px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Archivo;
  font-style: normal;
  font-weight: 600;

  font-size: 18px;
  line-height: 24px;

  color: var(--grey);
  margin: 4px 0 24px;

  @media (min-width: 1170px) {
    font-size: 48px;
    line-height: 52px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 56px;

  @media (min-width: 1170px) {
    flex-direction: row;
    gap: 64px;
  }
`;

const buttonStyles = css`
  box-shadow: -5px 5px 10px rgba(114, 42, 206, 0.2);
  border-radius: 2px;
  width: 216px;
  height: 56px;

  font-family: Archivo, sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: var(--white);
  cursor: pointer;

  transition: 0.4s;
`;

export const ButtonCv = styled.button`
  background: var(--pink);

  &:hover {
    background: var(--pink-dark);
    color: var(--white-ice);
  }

  ${buttonStyles}
`;

export const ButtonContact = styled.button`
  background: var(--purple-light);
  ${buttonStyles}

  &:hover {
    background: var(--purple-dark);
    color: var(--white-ice);
  }
`;

export const SvgContainer = styled.div`
  position: fixed;
  right: -600vw;

  @media (min-width: 1170px) {
    position: relative;
    right: 0;
  }
`;

export const WalkSvg = styled(HomeIllustration)``;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  max-width: 510px;
  width: 100%;
  height: 48px;
  margin: 64px auto 0;

  a {
    height: 48px;
  }

  a svg {
    fill: var(--grey-black);
    width: 48px;
    height: 48px;
    transition: cubic-bezier(1, -1.03, 0.33, 2.41) 0.5s;
  }

  a:hover svg {
    fill: var(--purple-dark);
    transform: translatey(-20px);
  }
`;
