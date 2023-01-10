import styled from "styled-components";
import { fadeIn, appearFromLeft } from "../../styles/animations";

export const StyledBackground = styled.div`
    width: 100%;
    min-height: 251px;
    background: var(--brand-1);

    /* position: absolute; */
    /* top: 80px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;

    padding: 60px 0;

    h1 {
        font-family: "Lexend", sans-serif;
        font-size: 32px;
        font-weight: 600;

        text-align: center;
        color: var(--grey-10);

        animation: ${fadeIn} 1000ms;
    }

    p {
        font-family: "Inter", sans-serif;
        font-size: 16px;

        text-align: center;
        color: var(--grey-9);

        animation: ${appearFromLeft} 3000ms;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;

    gap: 16px;

    a,
    button {
        animation: ${fadeIn} 3000ms;
        width: 100%;
        text-decoration: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        width: 50%;
        max-width: 475px;
    }
`;
