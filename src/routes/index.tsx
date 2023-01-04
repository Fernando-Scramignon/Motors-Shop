import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/Product";
import ProfileViewUser from "../pages/ProfileViewUser";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <h1>Olá, mundo!</h1>
                    </div>
                }
            />
            <Route path="/profileViewUser" element={<ProfileViewUser />} />
            <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
            <Route
                path="/profileViewUser/product/:id"
                element={<ProductPage />}
            />
        </Routes>
    );
}
export default Router;
