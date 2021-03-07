import styled from "styled-components";

export const Container = styled.section`
  width: 80%;

  max-width: 770px;

  padding-top: 48px;
  margin: auto;

  h1 {
    font-family: Archivo;
    font-weight: 600;
    font-size: 18px;
    color: var(--pink);
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 24px;
    margin-top: 40px;
  }

  form label {
    display: flex;
    flex-direction: column;
  }

  form label p {
    display: none;
    margin-left: 0;
    font-size: 14px;
    margin-bottom: 8px;
    color: var(--pink);
  }

  form label.error {
  }

  form label.error p {
    display: initial;
  }

  form label.error input,
  form label.error textarea {
    border: 1px solid var(--pink);
  }

  form label.error input::placeholder,
  form label.error textarea::placeholder {
    color: var(--pink);
  }

  form label input {
    height: 48px;
  }

  form label textarea {
    min-height: 122px;
    max-width: 100%;
    min-width: 100%;
  }

  form label input,
  form label textarea {
    border: 1px solid var(--grey-light);
    box-sizing: border-box;
    border-radius: 4px;
    background: var(--white);
    padding: 10px 24px;

    font-size: 16px;
    color: var(--grey-light);
  }

  form button {
    border-radius: 3px;
    height: 72px;
    background: var(--pink);

    font-family: Archivo;
    font-weight: bold;
    font-size: 24px;

    color: var(--white);
    transition: 0.4s;

    cursor: pointer;
  }

  form button:hover {
    background: var(--pink-dark);
    color: var(--white);
  }

  a,
  p {
    display: block;

    font-family: Archivo;
    font-weight: bold;
    margin: 24px auto 0;
    text-align: center;
  }

  p {
    font-size: 24px;
    color: var(--purple-light);
  }

  a {
    text-decoration: none;
    color: var(--grey-black);
  }

  a strong {
    text-decoration: underline;
    color: var(--pink);
  }
`;
