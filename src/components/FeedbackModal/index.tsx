import React from "react";
import Modal from "react-modal";
import { StyledModal } from "./style";
import closeIcon from "../../assets/x_modal.png";

interface IFeedbackModalProps {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
}

Modal.setAppElement("#root");

function FeedbackModal({
    state,
    setState,
    children,
    title,
}: IFeedbackModalProps) {
    return (
        <Modal
            isOpen={state}
            onRequestClose={() => setState(false)}
            style={{
                overlay: {
                    backgroundColor: "#00000080",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
            <StyledModal>
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
