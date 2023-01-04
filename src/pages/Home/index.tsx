import { StyledHomeBody, ProductListSection } from "./style";

import UnderHeaderBackground from "../../components/UnderHeaderBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardList from "../../components/ProductCardList";

import { useState, useEffect } from "react";

import { APIRequests } from "../../services/api";

import { IProductCard } from "../../components/ProductCardList";

function Home() {
    const [cars, setCars] = useState([]);
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        const mockedUserName = "Fernando Scramignon";

        APIRequests.getProducts()
            .then((response: any) => {
                const vehiclesList = response.data.map(
                    (vehicle: IProductCard) => {
                        vehicle.username = mockedUserName;
                        return vehicle;
                    }
                );

                const carsList = vehiclesList.filter(
                    (vehicle: IProductCard) => vehicle.vehicle_type === "Carro"
                );

                const bikeList = vehiclesList.filter(
                    (vehicle: IProductCard) => vehicle.vehicle_type === "Moto"
                );

                setCars(carsList);
                setMotos(bikeList);
            })
            .catch((response: any) => console.error(response.message));
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
