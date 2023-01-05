import { useState } from "react";
import Button from "../Button";
import ModalEditAddress from "../EditAddressModal";
import ModalEditUser from "../EditUserModal";
import {
    StyledMobileHeaderModal,
    StyledDesktopHeaderModal,
    ModalContainer,
} from "./style";

interface IHeaderModalProps {
    isDesktop: boolean;
    alternateModalIsOpen: IAlternateModalIsOpen;
}

interface IAlternateModalIsOpen {
    (): void;
}

function HeaderModal({ isDesktop, alternateModalIsOpen }: IHeaderModalProps) {
    const [editUser, setEditUser] = useState(false);
    const [editAddress, setEditAddress] = useState(false);

    return !isDesktop ? (
        <ModalContainer>
            <StyledMobileHeaderModal>
                <div className="mobileHeaderModal__option">
                    <span>Carros</span>
                    <span>Motos</span>
                    <span>Leilão</span>
                </div>
                <div className="mobileHeaderModal__singUp">
                    <span>Fazer login</span>
                    <Button
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
                    <span>Minhas compras</span>
                    <span>Sair</span>
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
