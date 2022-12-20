import styled from "styled-components";

export const StyledModal = styled.div`
    padding: 0 16px 25px 16px;
    border-radius: 8px;

    display: flex;
    flex-flow: column nowrap;
    gap: 18px;

    background-color: #ffffff;

    @media (min-width: 500px) {
        padding: 0 24px 25px 24px;
    }

    .modal__header {
        max-width: 472px;
        width: 83.73vw;
        height: 56px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            color: #212529;
            font-weight: 500;
            font-size: 16px;
            font-family: "Lexend", sans-serif;
        }
        button {
            padding: 0;
            margin: 0;
            border: 0;
            background-color: transparent;
            line-height: 0;
            margin-right: 6px;

            img {
                width: 12px;
                height: 12px;
            }
        }
    }
`;
