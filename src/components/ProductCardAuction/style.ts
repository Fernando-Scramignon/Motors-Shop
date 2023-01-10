import styled from "styled-components";
import auctionCardImage from "../../assets/auctionCardImage.png";

export const StyledCard = styled.div`
    width: 320px;

    @media (min-width: 768px) {
        width: 735px;
        /* height: 388px; */
    }
`;

export const BackgroundCard = styled.div`
    height: 446px;

    background-image: url(${auctionCardImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px auto;

    @media (min-width: 768px) {
        height: 328px;
    }
    /* img {
        max-height: auto;
        max-width: 450px;
    } */
`;

export const UpperCard = styled.div`
    height: inherit;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

    padding: 33px 22px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    .time-card {
        background: #ffffff;
        width: 45%;
        max-width: 123px;

        padding: 8px 16px;
        border-radius: 32px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 16px;
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        line-height: 20px;
        color: var(--grey-1);
    }

    .auction-info {
        h2 {
            color: var(--grey-10);
            font-family: "Lexend", sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
        }
        p {
            color: var(--grey-5);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
        }

        display: flex;
        flex-direction: column;
        gap: 20px;

        .auction-info__profile {
            font-size: 14px;
            line-height: 24px;
            font-weight: 500;
            font-family: "Inter";
            color: white;

            display: flex;
            align-items: center;
            justify-content: start;
            gap: 8px;

            .auction-info__profile--avatar {
                width: 32px;
                height: 32px;

                border-radius: 100%;

                background: var(--brand-1);

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .auction-info__priceDiv {
            display: flex;
            flex-direction: column;
            gap: 24px;

            @media (min-width: 768px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }

            .auction-info__priceDiv--tags {
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 12px;

                .tag {
                    padding: 4px 8px;
                    background: var(--brand-4);

                    color: var(--brand-1);
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 500;
                    font-family: "Inter", sans-serif;
                    border-radius: 4px;
                }
            }
            .auction-info__priceDiv--price {
                color: white;
                font-size: 16px;
                font-family: "Lexend", sans-serif;
                font-weight: 500;
            }
        }
    }

    cursor: pointer;
    transition: 500ms;
    &:hover {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.71) 0%,
            #000000 100%
        );
    }
`;

export const CardFooter = styled.div`
    height: 50px;
    width: 100%;
    padding: 0 22px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--brand-1);

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;

    cursor: pointer;
`;
