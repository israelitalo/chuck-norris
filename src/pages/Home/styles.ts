import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
`;

export const ContainerTitle = styled.section`
  display: grid;
  grid-gap: 15px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  }

  > div {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    div {
      justify-content: center;
    }
  }
`;

export const ImageNorris = styled.img`
  height: 150px;
  width: 50%;
  border-radius: 0.2rem;
  @media (max-width: 425px) {
    width: 70%;
  }
`;

export const ContainerForm = styled.section`
  margin-top: 2rem;
  form {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
  }
  input {
    height: 30px;
    padding: 0.5rem;
    border: 1px solid var(--primary);
    border-radius: 0.2rem;
    background-color: var(--background);
    width: 20rem;
    @media (max-width: 426px) {
      width: 15rem;
    }
  }
  button {
    height: 30px;
    width: 5rem;
    background-color: var(--primary);
    color: var(--background);
    border: 0px;
    border-radius: 0.2rem;
    transition: 0.1s;
    &:hover {
      background-color: ${shade(0.2, "#2151a1")};
    }
  }
  span {
    color: var(--red);
    font-weight: 400;
    font-size: 1rem;
  }
`;
