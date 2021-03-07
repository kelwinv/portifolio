import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 98px;
  width: 100%;

  gap: 16px;

  background: var(--white-linear);
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.04);

  z-index: 4;

  transition: 0.4s;

  a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    font-family: Archivo, sans-serif;

    width: 80px;
    height: 48px;
    font-size: 12px;
    font-weight: 600;

    text-decoration: none;
    color: var(--grey-dark);

    text-transform: capitalize;

    p {
      line-height: 13px;
      letter-spacing: 0.04em;
      margin-bottom: 18px;
      transition: 0.2s;
    }

    &:hover span {
      width: 100%;
    }

    &:hover p {
      color: var(--pink);
    }
  }

  @media (min-width: 1170px) {
    a {
      width: 152px;
      height: 48px;
      font-size: 18px;
    }
  }
`;

export const Underline = styled.span`
  width: 0%;
  height: 3px;
  background: var(--pink);
  border-radius: 2px;
  transition: 0.2s ease-in;
`;
