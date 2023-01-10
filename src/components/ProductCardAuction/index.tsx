import { StyledCard, BackgroundCard, CardFooter, UpperCard } from "./style";
import rightArrow from "../../assets/rightArrow.svg";
import clock from "../../assets/clock.svg";

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductCardAuction() {
    const navigator = useNavigate();
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        startTime();
    }, [hour, minutes, seconds]);

    function startTime() {
        setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (seconds == 0 && minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (seconds == 0 && minutes == 0 && hour > 0) {
                setHour(hour - 1);
                setSeconds(59);
                setMinutes(59);
            } else {
                setHour(23);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);
    }

    useEffect(() => {}, []);

    return (
        <StyledCard>
            <BackgroundCard>
                <UpperCard className="upper-card">
                    <div className="time-card">
                        <img src={clock} alt="clock icon" />
                        <span className="time-card__time">{`${
                            String(hour).length == 1 ? "0" + String(hour) : hour
                        }:${
                            String(minutes).length == 1
                                ? "0" + String(minutes)
                                : minutes
                        }:${
                            String(seconds).length == 1
                                ? "0" + String(seconds)
                                : seconds
                        }`}</span>
                    </div>
                    <div className="auction-info">
                        <h2>Mercedez Benz A 200 CGI Advanced SEDAN Mercedes</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem...
                        </p>
                        <div className="auction-info__profile">
                            <div className="auction-info__profile--avatar">
                                R
                            </div>
                            <span>Rodrigo Tavares</span>
                        </div>
                        <div className="auction-info__priceDiv">
                            <div className="auction-info__priceDiv--tags">
                                <div className="tag">2013</div>
                                <div className="tag">0 KM</div>
                            </div>
                            <span className="auction-info__priceDiv--price">
                                R$ 78.500,00
                            </span>
                        </div>
                    </div>
                </UpperCard>
            </BackgroundCard>
            <CardFooter onClick={() => navigator("#")}>
                <p>Acessar página do leilão</p>
                <Link to={"#"}>
                    <img src={rightArrow} alt="right arrow" />
                </Link>
            </CardFooter>
        </StyledCard>
    );
}

export default ProductCardAuction;
