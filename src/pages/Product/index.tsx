import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ProductContext } from "../../providers/product";
import {
    StyledProductPage,
    StyledProductsInfo,
    StyledProductUserDetails,
    StyledSectionProduct,
    StyledProductImage,
    StyledProductDetail,
    StyledProductDescription,
    StyledYearKmPriceDiv,
    StyledImages,
    StyledUserDetails,
    StyledInitialLetters,
} from "./style";

let data = [
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Júlia Lima",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Marcos Antônio",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Camila Silva",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Camila Silva",
        },
    },
];

interface IUserProductPage {
    name: string;
    description: string;
}

export interface IProductPage {
    id: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicle_type: string;
    announcement_type: string;
    published: boolean;
    cover_image: string;
    images: string[];
    // user_id
}

function ProductPage() {
    // Tirar any
    const [product, setProduct] = useState<any | IProductPage>({});
    // Mudar esse state mockado
    const [initialLetters, setInitialLetters] = useState<string>("LQ");
    const [convertedPrice, setConvertedPrice] = useState<number>(0);
    const { id } = useParams();
    const { getProductById } = useContext(ProductContext);

    // Adicionar novas ependencias futuramente
    useEffect(() => {
        getProductById(id!).then((res) => {
            setProduct(res!);
            setConvertedPrice(Number(product.price / 100));
            // Adicionar Initial Letters
        });
    }, [convertedPrice]);

    return (
        <>
            <Header />
            <StyledProductPage>
                <StyledSectionProduct>
                    <StyledProductsInfo>
                        <StyledProductImage>
                            <img
                                src={product?.cover_image}
                                alt="Imagem de capa"
                            />
                        </StyledProductImage>
                        <StyledProductDetail>
                            <h6>{product?.title}</h6>
                            <StyledYearKmPriceDiv>
                                <div>
                                    <p>{product?.year}</p>
                                    <p>{product?.km} KM</p>
                                </div>
                                <p>
                                    {convertedPrice?.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </p>
                            </StyledYearKmPriceDiv>
                            <button>Comprar</button>
                        </StyledProductDetail>
                        <StyledProductDescription>
                            <h6>Descrição</h6>
                            <p>{product?.description}</p>
                        </StyledProductDescription>
                    </StyledProductsInfo>
                    <StyledProductUserDetails>
                        <StyledImages>
                            <h6>Fotos</h6>
                            <ul>
                                {product?.images?.map((img: string) => (
                                    <li>
                                        <img src={img} />
                                    </li>
                                ))}
                            </ul>
                        </StyledImages>
                        <StyledUserDetails>
                            <StyledInitialLetters>
                                {initialLetters}
                            </StyledInitialLetters>

                            <h6>Fernando</h6>
                            <p className="description">Um vendedor</p>
                            <button>Ver todos anuncios</button>
                        </StyledUserDetails>
                    </StyledProductUserDetails>
                </StyledSectionProduct>
                <Comments comments={data} user={{ username: "Fernando" }} />
            </StyledProductPage>
            <Footer />
        </>
    );
}

export default ProductPage;
