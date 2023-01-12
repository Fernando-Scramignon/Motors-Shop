import styled from "styled-components";

export const StyledHomeBody = styled.div`
    display: flex;
    flex-direction: column;

    min-height: inherit;
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
