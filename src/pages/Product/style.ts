import styled from "styled-components";

export const StyledProductPage = styled.div`
    min-width: 100%;
    min-height: 74.1vh;
    background: linear-gradient(var(--brand-1) 436px, var(--grey-8) 436px 100%);

    @media (min-width: 1440px) {
        background: linear-gradient(
            var(--brand-1) 566px,
            var(--grey-8) 566px 100%
        );
    }
`;

export const StyledSectionProduct = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 45px;
    gap: 15px;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding-top: 40px;
        gap: 46px;
    }
`;

export const StyledProductsInfo = styled.div`
    width: 100%;
    max-width: 752px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledProductUserDetails = styled.div`
    width: 100%;
    max-width: 425px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) and (max-width: 1439px) {
        width: 676.8px;
        max-width: 676.8px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const StyledProductImage = styled.div`
    width: 90%;
    max-width: 752px;
    height: 355px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-10);
    border-radius: 4px;

    > img {
        width: 90%;
        max-width: 441px;
        object-fit: contain;
        height: 253px;
    }
`;

export const StyledProductDetail = styled.div`
    width: 90%;
    max-width: 752px;
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 44px 0 28px 28px;
    background-color: var(--grey-10);
    border-radius: 4px;

    > h6 {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--grey-1);
        margin-bottom: 32px;
    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        width: 100px;
        height: 38px;
        background: var(--brand-1);
        border: 1.5px solid var(--brand-1);
        border-radius: 4px;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: var(--white-fixed);

        &:hover {
            background: var(--brand-2);
            border: 1.5px solid var(--brand-2);
        }
    }

    @media (min-width: 768px) {
        padding-right: 28px;
    }
`;

export const StyledYearKmPriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 24px;

    > div {
        display: flex;
        gap: 12px;
        > p {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 8px;
            height: 32px;
            background: var(--brand-4);
            border-radius: 4px;

            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: var(--brand-1);
        }
    }
    > p {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: var(--grey-1);
    }

    @media (min-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const StyledProductDescription = styled.div`
    width: 90%;
    max-width: 752px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    padding: 36px 0 36px 28px;
    background-color: var(--grey-10);
    border-radius: 4px;

    > h6 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--grey-1);
    }
    > p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: var(--grey-2);
    }

    @media (min-width: 1440px) {
        margin-bottom: 16px;
    }
`;

export const StyledImages = styled.div`
    width: 90%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 36px 26px 36px 44px;
    gap: 32px;
    background-color: var(--grey-10);
    border-radius: 4px;
    margin-bottom: 52px;

    > h6 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--grey-1);
    }

    > ul {
        width: max-content;
        max-width: 110%;
        display: flex;
        flex-wrap: wrap;
        gap: 5.5px;
        > li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90px;
            height: 90px;
            padding: 27px 7px;
            background: var(--grey-7);
            border-radius: 4px;

            > img {
                width: 90px;
                object-fit: contain;
                height: 54px;
            }
        }
        > li:nth-child(1) {
            margin-bottom: 50px;
        }
        > li:nth-child(3) {
            margin-bottom: 50px;
        }
    }

    @media (min-width: 1440px) {
        margin-bottom: 36px;
    }
`;

export const StyledUserDetails = styled.div`
    width: 90%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    gap: 28px;
    background-color: var(--grey-10);
    border-radius: 4px;
    margin-bottom: 18px;

    > h6 {
        font-family: "Lexend", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: var(--grey-1);
    }

    > .description {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        padding: 0 28px;
        color: var(--grey-2);
    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        height: 48px;
        background: var(--grey-0);
        border: 1.5px solid var(--grey-0);
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: var(--white-fixed);

        &:hover {
            background: var(--grey-1);
            border: 1.5px solid var(--grey-1);
        }
    }
`;

export const StyledInitialLetters = styled.p`
    width: 77px;
    height: 77px;
    background: var(--brand-1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 26.6538px;
    color: var(--white-fixed);
`;
