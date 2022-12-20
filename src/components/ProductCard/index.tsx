import { useEffect, useState } from "react";
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

interface IProductCard {
    cover_image: string;
    title: string;
    description: string;
    username: string;
    km: number;
    year: number;
    price: number;
    published: boolean;
}

interface IProductCardProps {
    product: IProductCard;
    showActivity: boolean;
    advertise: boolean;
}

function ProductCard({ product, showActivity, advertise }: IProductCardProps) {
    // ADICIONAR HOVERS

    const {
        cover_image,
        title,
        description,
        username, // Mudará para user_id
        km,
        year,
        price,
        published,
    }: IProductCard = product;
    const [initialLetters, setInitialLetters] = useState<string>("");
    const [convertedPrice, setConvertedPrice] = useState<number>(0);

    useEffect(() => {
        setInitialLetters(
            username
                .split(" ")
                .slice(0, 2)
                .map((elem) => elem[0].toUpperCase())
                .join("")
        );

        setConvertedPrice(price / 100);
    }, []);

    return (
        <StyledProductCard>
            {/* Mudar isso aqui */}
            <StyledImage>
                {showActivity ? (
                    published ? (
                        <StyledActivity background="var(--brand-1)">
                            Ativo
                        </StyledActivity>
                    ) : (
                        <StyledActivity background="var(--grey-4)">
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
            <StyledUsername>
                <span>{initialLetters}</span>
                <p>{username}</p>
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
