import styled from "styled-components";

export const StyledProductCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 62px;
    margin-left: 23px;

    > h5 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: var(--black);
    }

    > .carousel {
        display: flex;
        cursor: grab;
        overflow: hidden;
        /* gap: 12px; */
        /* overflow: auto;
        &::-webkit-scrollbar {
            height: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--grey-3);
            border-radius: 20px;
        } */

        > .inner {
            display: flex;
            gap: 12px;
            /* ADICIONAR NA IMAGEM pointer-events: none; */
        }
    }

    @media (min-width: 1440px) {
        margin-left: 60px;
        > ul {
            gap: 48px;
        }
    }
`;
