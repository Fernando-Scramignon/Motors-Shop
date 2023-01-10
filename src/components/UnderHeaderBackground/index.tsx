import { StyledBackground, ButtonDiv } from "./style";

import Button from "../Button";
import { IHeaderProps } from "../../interfaces/header";

function UnderHeaderBackground({ yPositions }: IHeaderProps) {
    return (
        <StyledBackground>
            <h1>Velocidade e experiência em um lugar perfeito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
            <ButtonDiv>
                <a href="#cars">
                    <Button
                        size="small"
                        type="button"
                        height="fit-content"
                        width="150px"
                        backgroundcolor="transparent"
                        border="2px solid var(--brand-4)"
                        color="var(--grey-10)"
                        hover={{
                            backgroundColorHover: "var(--grey-10)",
                            colorHover: "var(--grey-1)",
                            border: "2px solid var(--brand-1)",
                        }}
                    >
                        Carros
                    </Button>
                </a>
                <a href="#motorcycles">
                    <Button
                        size="small"
                        type="button"
                        height="fit-content"
                        width="150px"
                        backgroundcolor="transparent"
                        border="2px solid var(--brand-4)"
                        color="var(--grey-10)"
                        hover={{
                            backgroundColorHover: "var(--grey-10)",
                            colorHover: "var(--grey-1)",
                            border: "2px solid var(--brand-1)",
                        }}
                    >
                        Motos
                    </Button>
                </a>
            </ButtonDiv>
        </StyledBackground>
    );
}

export default UnderHeaderBackground;
