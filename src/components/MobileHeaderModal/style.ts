import styled from "styled-components";

export const StyledHeaderModal = styled.div`
    height: 420px;
    width: 100vw;

    background: #ffffff;

    color: var(--grey-2);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;

    .mobileHeaderModal__option {
        display: flex;
        flex-direction: column;
        gap: 44px;

        padding: 32px 16px;
        border-bottom: 2px solid var(--grey-6);
    }
`;
