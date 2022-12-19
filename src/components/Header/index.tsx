import { StyledHeader, LogoContainer, MobileMenu, DesktopMenu } from "./style";

import colorizedLogo from "../../assets/motorsShopColor.svg";
import bars from "../../assets/bars.svg";

import MobileHeaderModal from "../MobileHeaderModal";

import { useState, useEffect } from "react";

function Header() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    function handleResize() {
        if (window.innerWidth > 1024) return setIsDesktop(true);
        return setIsDesktop(false);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return (
        <>
            <StyledHeader id="header">
                <LogoContainer>
                    <img
                        className="colorizedLogo"
                        src={colorizedLogo}
                        alt="Motors Shop logo colorized"
                    />
                </LogoContainer>
                {!isDesktop ? (
                    <MobileMenu>
                        <img className="bars" src={bars} alt="bars menu" />
                    </MobileMenu>
                ) : (
                    <DesktopMenu isAuthenticated={isAuthenticated}>
                        <div className="desktopMenu__options">
                            <span>Carros</span>
                            <span>Motos</span>
                            <span>Leilão</span>
                        </div>
                        <div className="desktopMenu__separator"></div>
                        {isAuthenticated ? (
                            <div className="desktopMenu__profile">
                                <div className="desktopMenu__profile--icon">
                                    FS
                                </div>
                                <div className="desktopMenu__profile--name">
                                    Fernando Scramignon
                                </div>
                            </div>
                        ) : (
                            <div className="desktopMenu__singUp">
                                <span>Fazer Login</span>
                                {/* This is a placeholder */}
                                <button>Cadastrar</button>
                            </div>
                        )}
                    </DesktopMenu>
                )}
            </StyledHeader>
            <MobileHeaderModal />
        </>
    );
}

export default Header;
