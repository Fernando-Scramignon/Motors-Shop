import styled from "styled-components";

interface IThemeProps {
    background?: string;
}

export const StyledCommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    width: 100%;
    max-width: 752px;
    margin: 0 auto;

    @media (min-width: 768px) {
        gap: 33px;
    }

    @media (min-width: 1440px) {
        max-width: 1147.8px;
        align-items: flex-start;
    }
`;

export const StyledComments = styled.div`
    width: 90%;
    max-width: 752px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    padding: 36px 28px 36px 28px;
    background-color: var(--grey-10);
    border-radius: 4px;
    > h6 {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--grey-1);
    }

    > ul {
        display: flex;
        flex-direction: column;
        gap: 44px;
    }

    @media (min-width: 1440px) {
        max-width: 676.8px;
    }
`;

export const StyledComment = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;

    > p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: var(--grey-2);
    }
`;

export const StyledUsername = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 32px;
        width: 32px;
        height: 32px;
        background-color: ${({ background }: IThemeProps) => background};
        border-radius: 150px;
        color: var(--white-fixed);
    }

    > p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 600;
        color: var(--grey-1);
    }
`;

export const StyledCommentInput = styled.div`
    width: 90%;
    max-width: 752px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    padding: 36px 28px 36px 28px;
    background-color: var(--grey-10);
    border-radius: 4px;
    margin-bottom: 45px;

    @media (min-width: 1440px) {
        max-width: 676.8px;
        margin-bottom: 73px;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    position: relative;
    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        width: 108px;
        height: 38px;
        background: var(--brand-1);
        border: 1.5px solid var(--brand-1);
        border-radius: 4px;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: var(--white-fixed);
    }

    > textarea {
        padding: 8px 16px;
        height: 128px;
        color: var(--grey-2);
        font-family: "Inter";
        font-style: normal;
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        resize: none;
        border: 2px solid var(--grey-7);

        &::-webkit-scrollbar {
            display: none;
        }
        &:hover {
            border: 2px solid var(--grey-8);
            background-color: var(--grey-8);
        }

        &:focus {
            border: 2px solid var(--brand-2);
            background-color: transparent;
            outline: none;
        }

        &::placeholder {
            color: var(--gray-3);
            font-size: 16px;
            font-weight: 400;
        }
    }

    > span {
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 500;
        color: var(--alert-1);
    }

    @media (min-width: 1440px) {
        > button {
            position: absolute;
            bottom: 13px;
            right: 11px;
        }

        > textarea {
            padding-right: 20%;
        }

        > span {
            position: absolute;
            bottom: -33px;
        }
    }
`;

export const StyledSuggestions = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 8px;

    > p {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 12px;
        height: 24px;
        background: var(--grey-7);
        border-radius: 24px;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: var(--grey-3);
    }

    @media (min-width: 1440px) {
        > p {
            margin-top: 10px;
        }
    }
`;
