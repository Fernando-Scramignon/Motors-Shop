import {
    StyledProfileBody,
    ProfileBackground,
    ProductListSection,
} from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import ProductCardList from "../../components/ProductCardList";

import { IProductCard } from "../../components/ProductCardList";
import { useEffect, useState } from "react";

import { APIRequests } from "../../services/api";

function ProfileViewUser() {
    const [cars, setCars] = useState([]);
    const [motos, setMotos] = useState([]);

    useEffect(() => {
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
        <StyledProfileBody>
            <Header />
            <ProfileBackground />
            <ProfileCard isAdvertiser={false} />
            <ProductListSection>
                <ProductCardList
                    productList={cars}
                    advertise={false}
                    showActivity={true}
                    title="Carro"
                />
                <ProductCardList
                    productList={motos}
                    advertise={false}
                    showActivity={true}
                    title="Moto"
                />
            </ProductListSection>
            <Footer />
        </StyledProfileBody>
    );
}

export default ProfileViewUser;
