import styled from "styled-components";

export const StyledProductCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 62px;
    margin: 38px 0 0 23px;

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

        > .inner {
            display: flex;
            gap: 12px;
        }
    }

    @media (min-width: 1440px) {
        margin: 100px 0 0 60px;
        > ul {
            gap: 48px;
        }
    }
`;
