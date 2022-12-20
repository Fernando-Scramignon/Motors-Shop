import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";

let data = {
    cover_image: "https://i.imgur.com/2iMvini.png",
    title: "Ferrari a8shduashduisahduiashdiuashdiuhs",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry LoremIpsumla",
    username: "Luccas Queiroz dos Santos dos Santos dos Santos", // Mudará para user_id
    km: 0,
    year: 2007,
    price: 5000075,
    published: true,
};

function Router() {
    return (
        <Routes>
            {/* <>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Olá, mundo!</h1>
                        </div>
                    }
                />
                {toast.success("Olá, mundo!")}
            </> */}
            <Route
                path="/"
                element={
                    <ProductCard
                        product={data}
                        showActivity={true}
                        advertise={false}
                    />
                }
            />
        </Routes>
    );
}

export default Router;
