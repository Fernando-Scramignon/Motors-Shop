import ProductCard from "../ProductCard";
import { StyledProductCardList } from "./style";

interface IProductCard {
    id: string;
    cover_image: string;
    title: string;
    description: string;
    username: string;
    km: number;
    year: number;
    price: number;
    published: boolean;
    vehicle_type: "Carro" | "Moto";
}

interface IProductCardListProps {
    title: string;
    productList: IProductCard[];
    showActivity: boolean;
    advertise: boolean;
}

function ProductCardList({
    title,
    productList,
    showActivity,
    advertise,
}: IProductCardListProps) {
    return (
        <StyledProductCardList>
            <h5>{title}s</h5>
            <ul>
                {productList?.map(
                    (product) =>
                        product.vehicle_type == title && (
                            <li key={product.id}>
                                <ProductCard
                                    product={product}
                                    showActivity={showActivity}
                                    advertise={advertise}
                                />
                            </li>
                        )
                )}
            </ul>
        </StyledProductCardList>
    );
}

export default ProductCardList;
