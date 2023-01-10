import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    StyledActivity,
    StyledAdvertiseButtons,
    StyledDescription,
    StyledDetails,
    StyledImage,
    StyledProductCard,
    StyledTitle,
    StyledUsername,
} from "./style";
import { IFullProduct, ISimpleProduct } from "../../providers/product";
import UpdateAnnouncementModal from "../UpdateAnnouncementModal";

interface IProductCardProps {
    product: IFullProduct | ISimpleProduct;
    showActivity: boolean;
    advertise: boolean;
    username?: string;
}

function ProductCard({
    product,
    showActivity,
    advertise,
    username,
}: IProductCardProps) {
    const { cover_image, title, description, km, year, price, published } =
        product;
    const [editModal, setEditModal] = useState<boolean>(false);

    const navigate = useNavigate();

    function getUsername() {
        return product.user?.name
            ? product.user.name
            : username
            ? username
            : "Nome não identificado";
    }

    function initialLetters() {
        return getUsername()
            .split(" ")
            .slice(0, 2)
            .map((elem) => elem[0].toUpperCase())
            .join("");
    }

    return (
        <>
            <StyledProductCard
                onClick={() => navigate(`/product/${product.id}`)}
            >
                <StyledImage className="containerImg">
                    {showActivity ? (
                        published ? (
                            <StyledActivity
                                className="activity"
                                background="var(--brand-1)"
                            >
                                Ativo
                            </StyledActivity>
                        ) : (
                            <StyledActivity
                                className="activity"
                                background="var(--grey-4)"
                            >
                                Inativo
                            </StyledActivity>
                        )
                    ) : (
                        <></>
                    )}
                    <img src={cover_image} alt="Imagem de Capa" />
                </StyledImage>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                <StyledUsername
                    background={`var(${
                        "--random-" + Math.floor(Math.random() * 12 + 1)
                    })`}
                >
                    <span>{initialLetters()}</span>
                    <p>{getUsername()}</p>
                </StyledUsername>
                <StyledDetails>
                    <div>
                        <p>{km} KM</p>
                        <p>{year}</p>
                    </div>
                    <p>
                        {(price / 100).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                </StyledDetails>
                {advertise && (
                    <StyledAdvertiseButtons>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setEditModal(true);
                            }}
                        >
                            Editar
                        </button>
                        <button>Ver como</button>
                    </StyledAdvertiseButtons>
                )}
            </StyledProductCard>
            <UpdateAnnouncementModal
                modalOpen={editModal}
                setModalOpen={setEditModal}
                product_id={product.id}
            />
        </>
    );
}

export default ProductCard;
