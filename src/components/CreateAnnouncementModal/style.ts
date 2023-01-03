import styled from "styled-components";

export const StyledModalCreate = styled.div`
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    gap: 18px;
    background-color: var(--white-fixed);
    font-family: "Inter";
    font-style: normal;
    max-width: 472px;
    width: 83.73vw;

    label {
        margin-top: 24px;
    }

    .containerButtons {
        gap: 10px;
        display: flex;
        width: 100%;
    }
    .containerButtonsFinal {
        gap: 10px;
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
    }

    .createProductModal__div--numbersContainer {
        width: 100%;
        max-width: 472px;
        flex-flow: row wrap;
        display: flex;
        gap: 11px;
    }
    .createProductModal__div--numbersContainer div:nth-child(3) {
        label {
            margin-top: 13px;
        }
    }

    @media (min-width: 425px) {
        .createProductModal__div--numbersContainer {
            flex-flow: row nowrap;
        }
        .createProductModal__div--numbersContainer div:nth-child(3) {
            label {
                margin-top: 24px;
            }
        }
    }

    #veichleTypeId {
        margin-bottom: 18px;
    }

    .disableButtonImage {
        margin-top: 24px;
        font-family: "Inter";
        font-style: normal;
        max-height: 48px;
        height: 48px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        gap: 10px;
        background-color: var(--brand-4);
        border: none;
        color: var(--brand-1);
        width: 100%;
        border-radius: 4px;
        font-size: 14px;
        cursor: not-allowed;
    }

    .disableButton {
        font-family: "Inter";
        font-style: normal;
        max-height: 48px;
        height: 48px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        gap: 10px;
        background-color: var(--brand-3);
        border: none;
        color: var(--brand-4);
        width: 193px;
        border-radius: 4px;
        font-size: 14px;
        cursor: not-allowed;
    }

    #imagesSpan {
        margin-bottom: 24px;
    }

    #AddFieldImg {
        margin-top: 24px;
    }

    .buttonDeleteInput {
        display: flex;
        padding: 0;
        margin: 0;
        margin-top: 25px;
        width: 85%;
        justify-content: flex-end;
        position: absolute;
        border: 0;
        background-color: transparent;
        line-height: 0;
        margin-right: 6px;
    }

    @media (min-width: 668px) {
        .disableButtonImage {
            width: 318px;
        }
    }
`;

export const StyledSuccessModal = styled.div`
    margin-top: 22px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    max-width: 472px;

    .modalSuccess__h3--subtitle {
        color: var(--grey-1);
        font-size: 16px;
        font-weight: 500;
        font-family: "Lexend", sans-serif;
    }
    .modalSuccess__p--description {
        color: var(--grey-2);
        font-size: 16px;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        margin-bottom: 13px;
        line-height: 28px;
    }
`;
