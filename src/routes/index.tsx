import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

function Router() {
    return (
        <Routes>
            <>
                <Route path="/" element={<h1>olá mundo</h1>} />
                {toast.success("Olá, mundo!")}
            </>
        </Routes>
    );
}

export default Router;
