import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

export const Spinner = styled.div`
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    width: 50px;
    height: 50px;
    border: 10px solid var(--gray-500);
    border-top: 10px solid var(--primary);
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
`;