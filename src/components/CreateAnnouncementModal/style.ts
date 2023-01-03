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
`;
