import styled from "styled-components";

interface IStyledInputProps {
    hasError: boolean;
    width?: string;
}

export const StyledInput = styled.div<IStyledInputProps>`
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    font-family: "Inter", sans-serif;

    width: ${(prop) => (prop.width ? prop.width : "100%")};

    input,
    label,
    span {
        width: 100%;
    }

    input {
        height: 48px;
        border-radius: 4px;
        padding: 0 16px;
        font-size: 16px;
        font-weight: 400;
        background-color: transparent;

        color: var(--grey-1);

        border: 2px solid
            ${(prop) => (prop.hasError ? "var(--alert-1)" : "var(--grey-7)")};

        transition: 0.3s;
        outline: 0;

        &:hover {
            border: 2px solid var(--grey-8);
            background-color: var(--grey-8);
        }

        &:focus {
            border: 2px solid var(--brand-2);
            background-color: transparent;
        }

        &::placeholder {
            color: var(--gray-3);
            font-size: 16px;
            font-weight: 400;
        }
    }

    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    label {
        color: var(--grey-1);
        font-weight: 500;
        font-size: 14px;
    }

    span {
        font-size: 14px;
        font-weight: 500;
        color: var(--alert-1);
    }
`;
