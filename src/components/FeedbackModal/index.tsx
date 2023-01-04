import React from "react";
import Modal from "react-modal";
import { StyledModal } from "./style";
import closeIcon from "../../assets/x_modal.png";

interface IFeedbackModalProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
    closeIconMarginRight?: string;
    bodyPaddingRight?: string;
    onClose?: () => void;
}

Modal.setAppElement("#root");

function FeedbackModal({
    state,
    setState,
    children,
    title,
    closeIconMarginRight,
    bodyPaddingRight,
    onClose,
}: IFeedbackModalProps) {
    return (
        <Modal
            isOpen={state}
            onRequestClose={() => {
                setState(false);
                onClose && onClose();
            }}
            style={{
                overlay: {
                    minHeight: "100vh",
                    overflowY: "scroll",
                    backgroundColor: "#00000080",
                    display: "flex",
                    justifyContent: "center",
                    padding: "80px 0 80px 0",
                    zIndex: 20,
                },
                content: {
                    position: "relative",
                    inset: 0,
                    width: "fit-content",
                    height: "fit-content",
                    padding: "0",
                    border: "0",
                    backgroundColor: "transparent",
                    borderRadius: "0",
                    overflow: "initial",
                },
            }}
        >
            <StyledModal
                closeIconMarginRight={closeIconMarginRight}
                bodyPaddingRight={bodyPaddingRight}
            >
                <div className="modal__header">
                    <h3>{title}</h3>
                    <button onClick={() => setState(false)}>
                        <img src={closeIcon} />
                    </button>
                </div>
                {children}
            </StyledModal>
        </Modal>
    );
}

export default FeedbackModal;
