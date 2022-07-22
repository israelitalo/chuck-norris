import styled from "styled-components";

export const Count = styled.h3`
    width: 100%;
    text-align: right;
    margin-top: 1.2rem;
`;

export const ContainerCards = styled.aside`
    display: grid;
    grid-gap: 15px;
    margin: 1.2rem auto;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.a`    
    background-color: var(--primary);
    padding: .5rem;
    border-radius: 0.2rem;
    color: var(--background);
    min-width: 250px;
    text-decoration: none;
    p {
        padding: 0px 0px .5rem 1rem;
        word-wrap: break-word;
    }
`;