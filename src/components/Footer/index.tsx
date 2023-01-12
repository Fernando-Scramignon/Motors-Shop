import { StyledFooter, GoUpButton, FooterParagraph } from "./style";

import logo from "../../assets/motorsShop.svg";
import angleUp from "../../assets/angleUp.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <StyledFooter>
            <img
                src={logo}
                onClick={() => {
                    window.scrollTo({ top: 0 });
                    navigate("/");
                }}
            />
            <FooterParagraph>
                © 2022 - Todos os direitos reservados.
            </FooterParagraph>
            <GoUpButton
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <img src={angleUp} />
            </GoUpButton>
        </StyledFooter>
    );
}

export default Footer;
