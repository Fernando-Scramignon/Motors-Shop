import { ButtonProps, StyledButton } from "./style";

function Button({
    children,
    type,
    onFunction,
    backgroundcolor,
    width,
    height,
    border,
    color,
    hover,
    size,
}: ButtonProps) {
    return (
        <StyledButton
            type={type}
            onClick={() => onFunction && onFunction()}
            backgroundcolor={backgroundcolor}
            width={width}
            border={border}
            color={color}
            hover={hover}
            size={size}
            height={height}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
