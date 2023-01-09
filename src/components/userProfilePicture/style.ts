import styled from "styled-components";

export interface IProfilePictureProps {
    widthAndHeight: string;
    fontSize: string;
    backgroundColor: string;
}

export const StyledBackgroundPicture = styled.div<IProfilePictureProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-family: "Inter";
    font-style: normal;
    color: #ffffff;
    background-color: var(${(props) => props.backgroundColor});
    width: ${(props) => props.widthAndHeight};
    height: ${(props) => props.widthAndHeight};
    font-size: ${(props) => props.fontSize};
`;

export default StyledBackgroundPicture;
