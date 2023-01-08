import { StyledCard } from "./style";
import Button from "../Button";
import ModalCreateAnnouncement from "../CreateAnnouncementModal";
import { useState } from "react";

import { limitString } from "../../utils";

interface IProfileProps {
    isAdvertiser: boolean;
    description: string;
    username: string;
    avatar: string;
}

function ProfileCard({
    isAdvertiser,
    avatar,
    description,
    username,
}: IProfileProps) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <StyledCard>
                <div className="profileNameDiv">
                    <div className="profileNameDiv__icon">{avatar}</div>
                    <div className="profileNameDiv__name">
                        <h2>{username && limitString(username, 19)}</h2>
                        <Button
                            size="small"
                            type="button"
                            height="fit-content"
                            width="90px"
                            backgroundcolor="var(--brand-4)"
                            border="2px solid var(--brand-4)"
                            color="var(--brand-1)"
                            hover={{
                                backgroundColorHover: "var(--brand-2)",
                                colorHover: "#ffffff",
                                border: "2px solid var(--brand-4)",
                            }}
                        >
                            Anunciante
                        </Button>
                    </div>
                </div>
                <p className="profileDescription">{description}</p>
                {isAdvertiser && (
                    <Button
                        size="small"
                        type="button"
                        height="fit-content"
                        width="150px"
                        backgroundcolor="transparent"
                        border="2px solid var(--brand-4)"
                        color="var(--brand-1)"
                        hover={{
                            backgroundColorHover: "var(--brand-2)",
                            colorHover: "#ffffff",
                            border: "2px solid var(--brand-1)",
                        }}
                        onFunction={() => setModal(true)}
                    >
                        Criar Anuncio
                    </Button>
                )}
            </StyledCard>
            <ModalCreateAnnouncement
                setModalOpen={setModal}
                modalOpen={modal}
            />
        </>
    );
}

export default ProfileCard;
