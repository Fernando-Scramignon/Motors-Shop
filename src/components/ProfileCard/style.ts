import styled from "styled-components";
import { fadeIn, appearFromRight } from "../../styles/animations";

export const StyledCard = styled.div`
    z-index: 2;

    height: fit-content;
    width: 93%;
    max-width: 1240px;
    background: var(--grey-10);

    margin-top: 65px;
    padding: 40px 29px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    align-self: center;
    /* justify-content: space-between; */
    /* justify-content: center; */

    .profileNameDiv {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .profileNameDiv__icon {
        width: 104px;
        height: 104px;

        background: var(--brand-2);
        color: #ffffff;

        border-radius: 150px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Inter", sans-serif;
        font-size: 36px;
        font-weight: 500;

        animation: ${appearFromRight} 500ms;
    }
    .profileNameDiv__name {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
            font-family: "Lexend", sans-serif;
            color: var(--grey-1);
            font-size: 16px;
            display: flex;
            width: 130px;

            animation: ${fadeIn} 1000ms;
        }

        button {
            padding: 4px 8px;

            animation: ${fadeIn} 1000ms;
        }
    }

    .profileDescription {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        line-height: 28px;
        color: var(--grey-2);

        animation: ${appearFromRight} 1300ms;
    }
`;
