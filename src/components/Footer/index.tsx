import { StyledFooter, GoUpButton, FooterParagraph } from "./style";

import logo from "../../assets/motorsShop.svg";
import angleUp from "../../assets/angleUp.svg";

function Footer() {
    return (
        <StyledFooter>
            <img src={logo} />
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
