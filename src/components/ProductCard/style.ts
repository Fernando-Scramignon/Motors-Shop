import styled from "styled-components";

interface IThemeProps {
    background?: string;
}

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 312px;
    max-width: 312px;
    cursor: grab;

    &:hover .activity {
        top: 9px;
        left: 14px;
    }

    &:hover {
        > .containerImg {
            border: 2px solid var(--brand-1);
            > .activity {
                opacity: 0;
                transition: opacity 0.3s;
            }
            > img {
                transform: scale(1.2);
                transition: transform 0.3s;
            }
        }
    }

    position: relative;
`;

export const StyledImage = styled.div`
    width: 100%;
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--grey-7);
    overflow: hidden;

    > img {
        width: 262px;
        height: 150px;
        cursor: grabbing;
        pointer-events: none;
        object-fit: contain;
    }
`;

export const StyledActivity = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    position: absolute;
    top: 11px;
    left: 16px;
    width: 51px;
    height: 24px;
    padding: 0px 8px;
    background-color: ${({ background }: IThemeProps) => background};

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: var(--white-fixed);
`;

export const StyledTitle = styled.h6`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Lexend", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    max-width: 100%;
    color: var(--grey-1);
`;

export const StyledDescription = styled.p`
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: var(--grey-2);
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
        color: var(--grey-2);
    }
`;

export const StyledDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        gap: 12px;

        > p {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 4px 8px;
            height: 32px;
            background: var(--brand-4);
            border-radius: 4px;
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: var(--brand-1);
        }
    }

    > p {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: var(--grey-1);
    }
`;

export const StyledAdvertiseButtons = styled.div`
    display: flex;
    gap: 16px;

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        border: 1.5px solid var(--grey-1);
        border-radius: 4px;
        background-color: transparent;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: var(--grey-1);
    }
`;
