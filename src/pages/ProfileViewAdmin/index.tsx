import {
    StyledAdminProfileBody,
    ProfileBackground,
    ProductListSection,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import ProductCardList from "../../components/ProductCardList";

import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../providers/user";
import { ISimpleProduct } from "../../providers/product";
import { useNavigate } from "react-router-dom";

function ProfileViewAdmin() {
    const [cars, setCars] = useState<ISimpleProduct[]>([]);
    const [motos, setMotos] = useState<ISimpleProduct[]>([]);
    const [username, setUsername] = useState<string>("");
    const { getUserById } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        getUserById(window.localStorage.getItem("user_id")!).then(
            (response) => {
                if (response?.isAdvertiser == false) {
                    navigate("/");
                    return;
                }

                if (response) {
                    const carsList = response.products.filter(
                        (vehicle) => vehicle.vehicle_type === "Carro"
                    );

                    const bikeList = response.products.filter(
                        (vehicle) => vehicle.vehicle_type === "Moto"
                    );

                    setCars(carsList);
                    setMotos(bikeList);
                    setUsername(response.name);
                }
            }
        );
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
                    username={username}
                />
                <ProductCardList
                    title="Moto"
                    advertise={true}
                    showActivity={false}
                    productList={motos}
                    username={username}
                />
            </ProductListSection>
            <Footer />
        </StyledAdminProfileBody>
    );
}

export default ProfileViewAdmin;
