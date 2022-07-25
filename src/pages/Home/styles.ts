import styled from "styled-components";
import { shade } from 'polished';

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
`;

export const ImageNorris = styled.img`
    height: 150px;
    width: 50%;
    border-radius: .2rem;
`;

export const ContainerForm = styled.section`
    margin-top: 2rem;
    input {
        height: 30px;
        padding: .5rem;
        border: 1px solid var(--primary);
        border-radius: .2rem;
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
        border-radius: .2rem;
        transition: .1s;
        &:hover {
            background-color: ${shade(0.2, '#5333ed')};
        }
    }
`;