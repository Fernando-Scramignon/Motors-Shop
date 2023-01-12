import styled from "styled-components";

export const StyledProfileBody = styled.main`
    /* min-height: 100vh; */

    display: flex;
    flex-direction: column;
    /* align-items: center; */

    background: var(--grey-8);
`;

export const ProfileBackground = styled.section`
    background: var(--brand-1);

    position: absolute;
    top: 80px;

    width: 100%;
    height: 251px;
`;

export const ProductListSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 96px;
    margin-top: 44px;
    margin-bottom: 128px;

    @media (min-width: 768px) {
        margin-top: 100px;
        gap: 150px;
    }
`;
