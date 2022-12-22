import styled from "styled-components";

interface IThemeProps {
    background?: string;
}

export const StyledCommentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;

    @media (min-width: 768px) {
        gap: 33px;
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
`;

export const StyledForm = styled.form`
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
`;
