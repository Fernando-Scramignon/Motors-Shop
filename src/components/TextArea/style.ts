import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import styled from "styled-components";

export interface ITextAreaProps {
    label: string;
    width: string;
    height: string;
    placeholder: string;
    register: UseFormRegister<any>;
    name: string;
    errors: Partial<
        FieldErrorsImpl<{
            [x: string]: string;
        }>
    >;
}

interface ITextAreaPropertiesProps {
    width: string;
    height: string;
    error: boolean;
}

export const StyledContainer = styled.div<ITextAreaPropertiesProps>`
    display: flex;
    flex-flow: column;
    width: ${(props) => props.width};
    gap: 8px;
    font-family: "Inter", sans-serif;
    font-style: normal;

    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: var(--grey-1);
    }

    span {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 500;
        color: var(--alert-1);
    }

    textarea {
        padding: 8px 16px;
        height: ${(props) => props.height};
        color: var(--grey-2);
        font-family: "Inter";
        font-style: normal;
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        resize: none;
        border: 1.5px solid
            ${(prop) => (prop.error ? "var(--alert-1)" : "var(--grey-7)")};

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
`;
