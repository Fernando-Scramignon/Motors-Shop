import FeedbackModal from "../FeedbackModal";
import { StyledErrorModal } from "./style";

interface IErrorModalProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
}

function ErrorModal({ state, setState, error }: IErrorModalProps) {
    return (
        <FeedbackModal state={state} setState={setState} title="Erro">
            <StyledErrorModal>
                <h3 className="modalError__h3--subtitle">Ocorreu um erro:</h3>
                <p className="modalError__p--description">{error}</p>
            </StyledErrorModal>
        </FeedbackModal>
    );
}

export default ErrorModal;
