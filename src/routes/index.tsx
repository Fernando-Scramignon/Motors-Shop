import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/Product";
import ProfileViewUser from "../pages/ProfileViewUser";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import ModalCreateAnnouncement from "../components/CreateAnnouncementModal";
import { useState } from "react";

let product = {
    id: "1",
    cover_image: "https://i.imgur.com/uRnumCd.png",
    title: "Um carro que comporta até 5 pessoas, mas se apertar direitinho cabe 7",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry LoremIpsumla",
    user: {
        name: "Luccas Queiroz",
        description:
            "Luccas mora em Serrinha e vende carros tops da balada, mais algumas coisas pra dar mais linhas na descrição",
    }, // Mudará para user_id
    km: 0,
    year: 2007,
    price: 5000075,
    published: true,
    vehicle_type: "Carro",
    images: [
        "https://i.imgur.com/uRnumCd.png",
        "https://i.imgur.com/uRnumCd.png",
        "https://i.imgur.com/uRnumCd.png",
        "https://i.imgur.com/uRnumCd.png",
        "https://i.imgur.com/uRnumCd.png",
        "https://i.imgur.com/uRnumCd.png",
    ],
};
function Router() {
    return (
        <Routes>
            <>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Olá, mundo!</h1>
                        </div>
                    }
                />
                <Route path="/profileViewUser" element={<ProfileViewUser />} />
                <Route
                    path="/profileViewAdmin"
                    element={<ProfileViewAdmin />}
                />
                <Route
                    path="/product"
                    element={<ProductPage product={product} />}
                />
            </>
        </Routes>
    );
}
export default Router;
