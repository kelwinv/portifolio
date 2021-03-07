import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 8px;

  width: 344px;
  height: 239px;

  border-radius: 2px;
  background: var(--white);

  transition: 0.2s;

  border-radius: 4px;

  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 74%;
    border-radius: 2px;
    transition: 0.4s;
    z-index: 2;
    object-fit: cover;
  }

  &:hover {
    padding: 16px 8px;

    img {
      left: 8px;
      top: 16px;
      width: 48%;
      height: 38%;
      border-radius: 8px;
    }

    & > div:last-child > div:first-child {
      height: 100%;

      h1 {
        white-space: initial;
      }
    }
  }

  & > div:last-child {
    display: flex;
    align-items: flex-end;
    max-width: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 5px;
    width: 100%;

    background: var(--purple);
    border-radius: 0 0 2px 2px;
  }
`;

export const Texts = styled.div`
  display: flex;
  justify-content: flex-end;

  transition: 0.2s;

  p {
    font-weight: 300;
    font-size: 14px;
    width: 156px;
  }
`;

export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 164px;
  height: 48px;

  transition: 0.6s;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: var(--grey-dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const TecList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SvgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  margin-top: 4px;

  background: var(--white);
  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  svg {
    fill: var(--purple-dark);
  }
`;

export const RightDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ButtonsCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 40px;

  cursor: pointer;

  text-decoration: none;
`;

export const ProjectLink = styled.a`
  ${ButtonsCss}
  border-radius: 2px;
  background: var(--purple-light);

  font-family: Archivo;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--white);

  transition: 0.4s;

  &:hover {
    border: none;
    background: var(--purple-dark);
    color: var(--white-ice);
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const GithubLink = styled.a`
  ${ButtonsCss}
  width: 160px;
  height: 40px;
  border: 1px solid var(--purple);
  border-radius: 2px;

  font-family: Archivo;
  font-weight: 600;
  font-size: 12px;
  text-transform: capitalize;
  color: var(--purple-light);

  transition: 0.4s;

  &:hover {
    border: none;

    background: rgba(114, 42, 206, 0.5);
    color: var(--white-ice);
  }
`;
