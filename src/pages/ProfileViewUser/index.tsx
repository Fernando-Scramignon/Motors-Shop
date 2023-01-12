import {
    StyledProfileBody,
    ProfileBackground,
    ProductListSection,
} from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import ProductCardList from "../../components/ProductCardList";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IUserProfile, UserContext } from "../../providers/user";
import { ISimpleProduct } from "../../providers/product";

function ProfileViewUser() {
    const [cars, setCars] = useState<ISimpleProduct[]>([]);
    const [motos, setMotos] = useState<ISimpleProduct[]>([]);
    const [userView, setUserView] = useState<IUserProfile>({
        name: "",
        description: "",
    } as IUserProfile);
    const { getUserProfileById } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(id);

    useEffect(() => {
        getUserProfileById(id!)
            .then((response) => {
                if (!response) {
                    navigate("/");
                }
                if (response) {
                    console.log(response);
                    const vehiclesList = response!.products;

                    const carsList = vehiclesList.filter(
                        (vehicle) => vehicle.vehicle_type === "Carro"
                    );

                    const bikeList = vehiclesList.filter(
                        (vehicle) => vehicle.vehicle_type === "Moto"
                    );

                    setCars(carsList);
                    setMotos(bikeList);
                    setUserView(response);
                    console.log(response);
                }
            })
            .catch((response) => console.error(response.message));
    }, []);

    return (
        <StyledProfileBody>
            <Header yPositions={{ carsY: 450, bikesY: 1000 }} />
            <ProfileBackground />
            <ProfileCard
                isAdvertiser={false}
                username={userView.name}
                description={userView.description}
                avatar={userView.name}
            />
            <ProductListSection>
                <ProductCardList
                    productList={cars}
                    advertise={false}
                    showActivity={true}
                    title="Carro"
                    username="Fernando"
                />
                <ProductCardList
                    productList={motos}
                    advertise={false}
                    showActivity={true}
                    title="Moto"
                    username="Fernando"
                />
            </ProductListSection>
            <Footer />
        </StyledProfileBody>
    );
}

export default ProfileViewUser;
