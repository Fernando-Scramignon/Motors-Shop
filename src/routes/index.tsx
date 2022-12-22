import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Comments from "../components/Comments";

let data = [
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Júlia Lima",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Marcos Antônio",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Camila Silva",
        },
    },
    {
        comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            username: "Camila Silva",
        },
    },
];

function Router() {
    return (
        <Routes>
            {/* <>
                <Route path="/" element={<h1>olá mundo</h1>} />
                {toast.success("Olá, mundo!")}
            </> */}
            <Route
                path="/"
                element={
                    <Comments
                        comments={data}
                        user={{ username: "Luccas Queiroz" }}
                    />
                }
            />
        </Routes>
    );
}

export default Router;
