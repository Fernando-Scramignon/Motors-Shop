import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import ProductPage from "../pages/Product";

let data = {
    id: "1",
    cover_image: "https://i.imgur.com/2iMvini.png",
    title: "Ferrari Carro com aparência de hamburguer",
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
        "https://i.imgur.com/2iMvini.png",
        "https://i.imgur.com/2iMvini.png",
        "https://i.imgur.com/2iMvini.png",
        "https://i.imgur.com/2iMvini.png",
        "https://i.imgur.com/2iMvini.png",
        "https://i.imgur.com/2iMvini.png",
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
                {toast.success("Olá, mundo!")}
            </>
            <Route path="/products" element={<ProductPage product={data} />} />
        </Routes>
    );
}

export default Router;
