import { StyledHomeBody, ProductListSection } from "./style";

import UnderHeaderBackground from "../../components/UnderHeaderBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardList from "../../components/ProductCardList";

import { useState, useEffect, useContext } from "react";

import { IFullProduct, ProductContext } from "../../providers/product";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";

function Home() {
    const [cars, setCars] = useState<IFullProduct[]>([]);
    const [motos, setMotos] = useState<IFullProduct[]>([]);
    const { listProducts } = useContext(ProductContext);
    const { isAuthenticated } = useContext(UserContext);

    useEffect(() => {
        listProducts().then((response) => {
            if (response) {
                const carsList = response.filter(
                    (vehicle) => vehicle.vehicle_type === "Carro"
                );

                const bikeList = response.filter(
                    (vehicle) => vehicle.vehicle_type === "Moto"
                );

                setCars(carsList);
                setMotos(bikeList);
            }
        });
    }, []);

    return (
        <StyledHomeBody>
            <Header />
            <UnderHeaderBackground />
            <ProductListSection>
                <ProductCardList
                    advertise={false}
                    showActivity={true}
                    title={"Carro"}
                    productList={cars}
                />
                <ProductCardList
                    advertise={false}
                    showActivity={true}
                    title={"Moto"}
                    productList={motos}
                />
            </ProductListSection>
            <Footer />
        </StyledHomeBody>
    );
}

export default Home;
