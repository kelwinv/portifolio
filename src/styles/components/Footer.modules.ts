import styled from "styled-components";

export const Container = styled.footer`
  padding: 80px 8px 32px;

  background: url("/footer-bg.svg") no-repeat center bottom;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-decoration: none;
    color: var(--grey);

    margin-bottom: 40px;
    width: 12rem;
  }

  > a p {
    font-family: Archivo;
    font-weight: 600;
    font-size: 24px;
  }

  > a span {
    display: flex;
    flex-direction: column;
    margin-bottom: -16px;
  }

  > a span svg {
    width: 80px;
    height: 80px;
    margin-top: -60px;
  }

  h1 {
    font-family: Archivo;
    font-weight: 600;
    font-size: 24px;
    color: var(--white);
    max-width: 1170px;
    margin: auto;
  }

  @media (min-width: 700px) {
    background-size: 100vw 212px;
  }
`;

export const Links = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 46px auto;
  gap: 20px;

  max-width: 1170px;

  a {
    font-size: 13px;
    color: var(--white);
  }

  div {
    display: flex;
    gap: 16px;
  }
`;
