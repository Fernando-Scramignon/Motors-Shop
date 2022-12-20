import { StyledInput } from "./style";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

interface IInputProps {
    label: string;
    register: UseFormRegister<any>;
    name: string;
    errors: Partial<
        FieldErrorsImpl<{
            [x: string]: string;
        }>
    >;
    placeholder: string;
    type: string;
    width?: string;
}

interface IExpectedErrors {
    error: string;
    message: string;
}

const Input = ({
    label,
    register,
    name,
    errors,
    placeholder,
    type,
    width,
}: IInputProps) => {
    const expectedErrors: IExpectedErrors[] = [
        {
            error: "name must be a `number` type",
            message: "Campo deve ser um número",
        },
        {
            error: "name must be a `date` type",
            message: "Campo deve ser uma data válida",
        },
    ];

    function formatError() {
        if (errors[name]) {
            const formatedError = expectedErrors.find(({ error }) =>
                errors[name]?.message?.includes(error)
            );

            return (
                <span>
                    {formatedError
                        ? formatedError.message
                        : errors[name]?.message}
                </span>
            );
        }
    }

    return (
        <StyledInput hasError={!!errors[name]} width={width}>
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />

            {formatError()}
        </StyledInput>
    );
};

export default Input;
