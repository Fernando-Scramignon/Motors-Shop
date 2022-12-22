import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import ModalCreateAnnouncement from "../components/CreateAnnouncementModal";

function Router() {
    const [modalOpen, setModalOpen] = useState(false);

    function abrirFecharModal() {
        setModalOpen(!modalOpen);
    }

    return (
        <Routes>
            <>
                <Route
                    path="/"
                    element={
                        <>
                            {modalOpen && (
                                <ModalCreateAnnouncement
                                    abrirFecharModal={abrirFecharModal}
                                    modalOpen={modalOpen}
                                />
                            )}
                            <button onClick={abrirFecharModal}>
                                aperte aqui para modal
                            </button>
                        </>
                    }
                />
                {/*       {toast.success("Olá, mundo!")} */}
            </>
        </Routes>
    );
}

export default Router;
