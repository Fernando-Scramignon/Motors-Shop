import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

function Router() {
    function name() {
        console.log("olá");
        return console.log("oii");
    }
    return (
        <Routes>
            <>
                <Route
                    path="/"
                    element={
                        <div>
                            oii
                        </div>
                    }
                />
                {toast.success("Olá, mundo!")}
            </>
        </Routes>
    );
}

export default Router;
