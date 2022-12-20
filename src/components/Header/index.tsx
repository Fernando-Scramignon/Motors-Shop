import { StyledHeader, LogoContainer, MobileMenu, DesktopMenu } from "./style";

import colorizedLogo from "../../assets/motorsShopColor.svg";
import bars from "../../assets/bars.svg";
import xMark from "../../assets/xMark.svg";

import HeaderModal from "../HeaderModal";
import Button from "../Button";

import { useState, useEffect } from "react";

function Header() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function alternateModalIsOpen() {
        setModalIsOpen(!modalIsOpen);
    }

    function handleResize() {
        if (window.innerWidth >= 768) {
            return setIsDesktop(true);
        }
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
                        {!modalIsOpen ? (
                            <img
                                className="bars"
                                src={bars}
                                alt="bars menu"
                                onClick={alternateModalIsOpen}
                            />
                        ) : (
                            <img
                                src={xMark}
                                alt="Close modal icon"
                                onClick={alternateModalIsOpen}
                            />
                        )}
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
                            <div
                                className="desktopMenu__profile"
                                onClick={alternateModalIsOpen}
                            >
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
                                <Button
                                    size="small"
                                    type="button"
                                    height="fit-content"
                                    width="fit-content"
                                    backgroundcolor="transparent"
                                    border="2px solid var(--grey-6)"
                                    color="var(--grey-0)"
                                    hover={{
                                        backgroundColorHover: "var(--grey-1)",
                                        colorHover: "var(--grey-10)",
                                        border: "2px solid var(--grey-1)",
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </div>
                        )}
                    </DesktopMenu>
                )}
            </StyledHeader>
            {modalIsOpen && (
                <HeaderModal
                    isDesktop={isDesktop}
                    alternateModalIsOpen={alternateModalIsOpen}
                />
            )}
        </>
    );
}

export default Header;
