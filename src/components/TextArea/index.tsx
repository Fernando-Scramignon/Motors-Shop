import { ITextAreaProps, StyledContainer } from "./style";

function TextArea({
    label,
    width,
    height,
    placeholder,
    name,
    register,
    errors,
}: ITextAreaProps) {
    return (
        <StyledContainer error={!!errors[name]} width={width} height={height}>
            <label>{label}</label>
            <textarea placeholder={placeholder} {...register(`${name}`)} />
            <span>{errors[name]?.message}</span>
        </StyledContainer>
    );
}

export default TextArea;
