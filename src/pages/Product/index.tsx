import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfilePicture from "../../components/userProfilePicture";
import {
    IComment,
    IFullProduct,
    ProductContext,
} from "../../providers/product";
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
} from "./style";

interface ISellerProductPage {
    name: string;
    description: string;
    id: string;
}

interface IImageResponse {
    url: string;
}

function ProductPage() {
    const navigate = useNavigate();

    const [product, setProduct] = useState<IFullProduct>({} as IFullProduct);
    const [comments, setComments] = useState<IComment[]>([]);
    const [seller, setSeller] = useState<ISellerProductPage>(
        {} as ISellerProductPage
    );
    const [name, setName] = useState<string>("");

    const [convertedPrice, setConvertedPrice] = useState<number>(0);
    const { id } = useParams();
    const { getProductById } = useContext(ProductContext);

    console.log(seller);
    useEffect(() => {
        getProductById(id!).then((res) => {
            setProduct(res!);
            setConvertedPrice(Number(product.price / 100));
            setComments(res!.comments);
            setSeller(res!.user);
            setName(res!.user.name);
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
                                {product?.images?.map(
                                    ({ url }: IImageResponse) => (
                                        <li>
                                            <img src={url} />
                                        </li>
                                    )
                                )}
                            </ul>
                        </StyledImages>
                        <StyledUserDetails>
                            <UserProfilePicture
                                name={name}
                                widthAndHeight="77px"
                                fontSize="26.6538px"
                            />

                            <h6>{name}</h6>
                            <p className="description">{seller.description}</p>
                            <button
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    navigate("/profileViewUser");
                                }}
                            >
                                Ver todos anuncios
                            </button>
                        </StyledUserDetails>
                    </StyledProductUserDetails>
                </StyledSectionProduct>
                <Comments comments={comments} user={{ username: "Fernando" }} />
            </StyledProductPage>
            <Footer />
        </>
    );
}

export default ProductPage;
