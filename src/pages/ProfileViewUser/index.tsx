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
import { useState } from "react";

const car: IProductCard = {
    id: "a",
    cover_image:
        "https://auto-didakt.com/assets/images/5/tesla_cybertruck_1-7cc6c0d5.jpg",
    description: "lorem ipsum",
    km: 10000,
    price: 150000,
    published: true,
    title: "title",
    username: "Luccas Queiroz",
    vehicle_type: "Carro",
    year: 2021,
};

const moto: IProductCard = {
    id: "a",
    cover_image:
        "https://i.pinimg.com/736x/39/67/d0/3967d0a5d1ab1659399b8ecab30df3a3.jpg",
    description: "vrummmmm",
    km: 5000,
    price: 90000,
    published: true,
    title: "title",
    username: "Caio Marinho",
    vehicle_type: "Moto",
    year: 2078,
};

const carsList: IProductCard[] = [];
const motoList: IProductCard[] = [];

for (let i = 0; i < 6; i++) {
    if (i % 2 !== 0) {
        carsList.push({ ...car, id: String(i), published: false });
        continue;
    }
    carsList.push({ ...car, id: String(i) });
}

for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) {
        motoList.push({ ...moto, id: String(i * 10), published: false });
        continue;
    }
    motoList.push({ ...moto, id: String(i * 10) });
}

for (let i = 0; i < 6; i++) {}

function ProfileViewUser() {
    const [cars, setCars] = useState(carsList);
    const [motos, setMotos] = useState(motoList);

    return (
        <StyledProfileBody>
            <Header />
            <ProfileBackground />
            <ProfileCard />
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
