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
    const [avatar, setAvatar] = useState<string>("...");
    const [description, setDescription] = useState<string>("");
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

                    const { name } = response;

                    const nameArray = name.split(" ");
                    let avatar = nameArray[0][0];

                    if (nameArray.length >= 2) {
                        avatar += nameArray[1][0];
                    }

                    setCars(carsList);
                    setMotos(bikeList);
                    setAvatar(avatar);
                    setDescription(response.description);
                    setUsername(response.name);
                }
            }
        );
    }, []);

    return (
        <StyledAdminProfileBody>
            <Header yPositions={{ carsY: 540, bikesY: 1125 }} />
            <ProfileBackground />
            <ProfileCard
                isAdvertiser={true}
                username={username}
                avatar={avatar}
                description={description}
            />
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
