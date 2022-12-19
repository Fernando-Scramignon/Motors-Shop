import { StyledHeaderModal } from "./style";

function MobileHeaderModal() {
    return (
        <StyledHeaderModal>
            <div className="mobileHeaderModal__option">
                <span>Carros</span>
                <span>Motos</span>
                <span>Leilão</span>
            </div>
            <div className="mobileHeaderModal__singUp">
                <span>Fazer login</span>
            </div>
        </StyledHeaderModal>
    );
}

export default MobileHeaderModal;
