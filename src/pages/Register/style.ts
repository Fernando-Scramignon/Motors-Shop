import styled from "styled-components";
import { appearFromLeft } from "../../styles/animations";

export const ResgisterPage = styled.div`
    background: var(--grey-8);

    min-height: inherit;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    /* gap: 50px; */
`;

export const RegisterForm = styled.form`
    animation: ${appearFromLeft} 1s;

    min-height: 300px;
    width: 90%;
    max-width: 420px;

    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 32px;

    background: var(--grey-10);

    border-radius: 4px;
    padding: 44px 28px;
    margin: 50px 0;

    h1 {
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: #000000;
    }

    h2 {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
    }

    #register-form-input {
        height: 48px;
        background: var(--brand-1);
        color: white;

        font-family: "Inter", sans-serif;
        font-weight: 600;
        border-radius: 4px;

        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background: var(--brand-4);
            border: 2px solid var(--brand-4);
            color: var(--brand-1);
        }
    }

    @media (min-width: 768px) {
        padding: 44px 48px;
    }
`;

export const InputsDiv = styled.div`
    display: flex;

    flex-direction: column;
    gap: 28px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const AddressInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .sideBySideDiv {
        display: flex;
        gap: 10px;
    }
`;

export const TypeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .sideBySideDiv {
        display: flex;
        gap: 10px;
    }
`;

export const PasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
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
