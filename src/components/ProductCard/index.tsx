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
    const [initialLetters, setInitialLetters] = useState<string>("");
    const [convertedPrice, setConvertedPrice] = useState<number>(0);

    const navigate = useNavigate();

    function getUsername() {
        return product.user?.name
            ? product.user.name
            : username
            ? username
            : "Nome não identificado";
    }

    // Adicionar dependencia futuramente, provavelmente o product
    useEffect(() => {
        setInitialLetters(
            getUsername()
                .split(" ")
                .slice(0, 2)
                .map((elem) => elem[0].toUpperCase())
                .join("")
        );

        setConvertedPrice(price / 100);
    }, []);

    return (
        <StyledProductCard onClick={() => navigate(`/product/${product.id}`)}>
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
                <span>{initialLetters}</span>
                <p>{getUsername()}</p>
            </StyledUsername>
            <StyledDetails>
                <div>
                    <p>{km} KM</p>
                    <p>{year}</p>
                </div>
                <p>
                    {convertedPrice.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
            </StyledDetails>
            {advertise && (
                <StyledAdvertiseButtons>
                    <button>Editar</button>
                    <button>Ver como</button>
                </StyledAdvertiseButtons>
            )}
        </StyledProductCard>
    );
}

export default ProductCard;
