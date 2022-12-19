import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 310px;
    width: 100vw;

    background: var(--grey-0);
    color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    font-family: "Inter", sans-serif;

    @media (min-width: 1024px) {
        flex-direction: row;
        height: 140px;
    }
`;

export const FooterParagraph = styled.p`
    font-weight: 400;
    font-size: 14px;
`;

export const GoUpButton = styled.button`
    width: 50px;
    height: 53px;

    border: none;
    border-radius: 4px;

    color: #ffffff;
    background: var(--grey-1);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;
    &:hover {
        filter: brightness(1.2);
    }
`;
