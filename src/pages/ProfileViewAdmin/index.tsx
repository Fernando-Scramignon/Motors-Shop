import {
    StyledAdminProfileBody,
    ProfileBackground,
    ProductListSection,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import ProductCardList from "../../components/ProductCardList";

import { IProductCard } from "../../components/ProductCardList";

import { useState, useEffect } from "react";

import { APIRequests } from "../../services/api";

function ProfileViewAdmin() {
    const [cars, setCars] = useState([]);
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        const mockedUserName = "Fernando Scramignon";

        APIRequests.getProducts()
            .then((response: any) => {
                const vehiclesList = response.data.map(
                    (vehicle: IProductCard) => {
                        vehicle.username = vehicle.user.name;
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
        <StyledAdminProfileBody>
            <Header />
            <ProfileBackground />
            <ProfileCard isAdvertiser={true} />
            <ProductListSection>
                <ProductCardList
                    title="Carro"
                    advertise={true}
                    showActivity={false}
                    productList={cars}
                    username="Luccas"
                />
                <ProductCardList
                    title="Moto"
                    advertise={true}
                    showActivity={false}
                    productList={motos}
                    username="Luccas"
                />
            </ProductListSection>
            <Footer />
        </StyledAdminProfileBody>
    );
}

export default ProfileViewAdmin;
