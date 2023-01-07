import { StyledHomeBody, ProductListSection } from "./style";

import UnderHeaderBackground from "../../components/UnderHeaderBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardList from "../../components/ProductCardList";

import { useState, useEffect, useContext } from "react";

import { IFullProduct, ProductContext } from "../../providers/product";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";

// Criar interface e o objeto onde vão ficar as cordenadas y
// Criar interface do header que aceita o objeto acima
// Fazer ele ser opcional
// Passar para o header como props
// Adicinar função on click nos links de navegação
//    Se a posição y correspondente existir, navege para ela, se não, faça nada

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
            <Header yPositions={{ carsY: 400, bikesY: 950 }} />
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
