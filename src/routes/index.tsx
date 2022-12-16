import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

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
        </Routes>
    );
}

export default Router;
