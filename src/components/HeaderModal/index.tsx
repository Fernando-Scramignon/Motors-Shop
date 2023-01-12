import { MutableRefObject, useState } from "react";
import Button from "../Button";
import ModalEditAddress from "../EditAddressModal";
import ModalEditUser from "../EditUserModal";
import {
    StyledMobileHeaderModal,
    StyledDesktopHeaderModal,
    ModalContainer,
} from "./style";

import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";
import { IProductsListYPositions } from "../../interfaces/header";

interface IHeaderModalProps {
    isDesktop: boolean;
    alternateModalIsOpen: IAlternateModalIsOpen;
    isAdvertiser: boolean;
    yPositions?: IProductsListYPositions;
}

interface IAlternateModalIsOpen {
    (): void;
}

function HeaderModal({
    isDesktop,
    alternateModalIsOpen,
    isAdvertiser,
    yPositions,
}: IHeaderModalProps) {
    const [editUser, setEditUser] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const { setIsAuthenticated, isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

    return !isDesktop ? (
        <ModalContainer>
            <StyledMobileHeaderModal>
                <div className="mobileHeaderModal__option">
                    <a href="#cars">
                        <span
                            onClick={(event) => {
                                event.stopPropagation();
                                alternateModalIsOpen();
                                // yPositions?.carsY &&
                                //     window.scrollTo({
                                //         top: yPositions?.carsY,
                                //         behavior: "smooth",
                                //     });
                            }}
                        >
                            Carros
                        </span>
                    </a>
                    <a href="#motorcycles">
                        <span
                            onClick={(event) => {
                                event.stopPropagation();
                                alternateModalIsOpen();
                            }}
                        >
                            Motos
                        </span>
                    </a>
                    <a href="#auction">
                        <span
                            onClick={(event) => {
                                event.stopPropagation();
                                alternateModalIsOpen();
                            }}
                        >
                            Leilão
                        </span>
                    </a>
                </div>

                <div className="mobileHeaderModal__singUp">
                    {!isAuthenticated ? (
                        <>
                            <span onClick={() => navigate("/login")}>
                                Fazer login
                            </span>
                            <Button
                                onFunction={() => navigate("/register")}
                                size="small"
                                type="button"
                                height="fit-content"
                                width="100%"
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
                        </>
                    ) : (
                        <Button
                            onFunction={() => {
                                localStorage.clear();
                                setIsAuthenticated(false);
                                navigate("/login");
                            }}
                            size="small"
                            type="button"
                            height="fit-content"
                            width="100%"
                            backgroundcolor="transparent"
                            border="2px solid var(--grey-6)"
                            color="var(--grey-0)"
                            hover={{
                                backgroundColorHover: "var(--grey-1)",
                                colorHover: "var(--grey-10)",
                                border: "2px solid var(--grey-1)",
                            }}
                        >
                            Sair
                        </Button>
                    )}
                </div>
            </StyledMobileHeaderModal>
            <div className="modalBackdrop" onClick={alternateModalIsOpen}></div>
        </ModalContainer>
    ) : (
        <>
            <ModalContainer>
                <StyledDesktopHeaderModal onClick={(e) => e.stopPropagation()}>
                    <span onClick={() => setEditUser(true)}>Editar Perfil</span>
                    <span onClick={() => setEditAddress(true)}>
                        Editar Endereço
                    </span>
                    {isAdvertiser ? (
                        <span onClick={() => navigate("/profileViewAdmin")}>
                            Meus anúncios
                        </span>
                    ) : (
                        <span>Minhas compras</span>
                    )}
                    <span
                        onClick={() => {
                            localStorage.clear();
                            setIsAuthenticated(false);
                            navigate("/login");
                        }}
                    >
                        Sair
                    </span>
                </StyledDesktopHeaderModal>
                <div
                    className="modalBackdrop"
                    onClick={alternateModalIsOpen}
                ></div>
            </ModalContainer>
            <ModalEditUser modalOpen={editUser} setModalOpen={setEditUser} />
            <ModalEditAddress
                modalOpen={editAddress}
                setModalOpen={setEditAddress}
            />
        </>
    );
}

export default HeaderModal;
