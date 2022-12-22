import { ReactNode } from "react";
import styled from "styled-components";

export interface IButtonProps {
    children: ReactNode;
    onFunction?: () => void;
    type?: "button" | "submit" | "reset";
    id?: string;
    backgroundcolor: string;
    width: string;
    height: string;
    border: string;
    color: string;
    hover: {
        backgroundColorHover: string;
        colorHover: string;
        border: string;
    };

    size: "big" | "small";
}

export const StyledButton = styled.button<IButtonProps>`
    font-family: "Inter";
    font-style: normal;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    gap: 10px;
    background-color: ${(props) => props.backgroundcolor};
    border: ${(props) => props.border};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 4px;
    padding: ${(props) => (props.size === "big" ? "12px 28px" : "12px 20px")};
    font-size: ${(props) => (props.size === "big" ? "16px" : "14px")};
    &:hover {
        background-color: ${(props) => props.hover.backgroundColorHover};
        color: ${(props) => props.hover.colorHover};
        border: ${(props) => props.hover.border};
    }
`;
