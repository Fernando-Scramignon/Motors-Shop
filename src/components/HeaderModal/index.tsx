import Button from "../Button";
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
        <ModalContainer>
            <StyledDesktopHeaderModal onClick={(e) => e.stopPropagation()}>
                <span>Editar Perfil</span>
                <span>Editar Endereço</span>
                <span>Minhas compras</span>
                <span>Sair</span>
            </StyledDesktopHeaderModal>
            <div className="modalBackdrop" onClick={alternateModalIsOpen}></div>
        </ModalContainer>
    );
}

export default HeaderModal;
