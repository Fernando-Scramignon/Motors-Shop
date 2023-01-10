import { StyledHomeBody, ProductListSection } from "./style";

import UnderHeaderBackground from "../../components/UnderHeaderBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardList from "../../components/ProductCardList";
import ProductCardAuction from "../../components/ProductCardAuction";

import { useState, useEffect, useContext, useRef } from "react";

import { IFullProduct, ProductContext } from "../../providers/product";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";
import ProductCardAuctionList from "../../components/ProductCardAuctionList";

function Home() {
    const [cars, setCars] = useState<IFullProduct[]>([]);
    const [motos, setMotos] = useState<IFullProduct[]>([]);
    const { listProducts } = useContext(ProductContext);
    const { isAuthenticated } = useContext(UserContext);

    // const leilao: any = useRef();

    useEffect(() => {
        listProducts().then((response) => {
            if (response) {
                const carsList = response.filter(
                    (vehicle) =>
                        vehicle.vehicle_type === "Carro" && vehicle.published
                );

                const bikeList = response.filter(
                    (vehicle) =>
                        vehicle.vehicle_type === "Moto" && vehicle.published
                );

                setCars(carsList);
                setMotos(bikeList);
            }
        });
    }, []);

    // console.log(leilao.current.getBoundingClientRect());

    return (
        <StyledHomeBody>
            <Header yPositions={{ carsY: 400, bikesY: 950 }} />
            <UnderHeaderBackground />
            <ProductCardAuctionList />
            <ProductListSection>
                <ProductCardList
                    id="cars"
                    advertise={false}
                    showActivity={false}
                    title={"Carro"}
                    productList={cars}
                />
                <ProductCardList
                    id="motorcycles"
                    advertise={false}
                    showActivity={false}
                    title={"Moto"}
                    productList={motos}
                />
            </ProductListSection>
            <Footer />
        </StyledHomeBody>
    );
}

export default Home;
