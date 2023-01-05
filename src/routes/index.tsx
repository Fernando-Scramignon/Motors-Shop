import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/Product";
import ProfileViewUser from "../pages/ProfileViewUser";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import Home from "../pages/Home";
import Register from "../pages/Register";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profileViewUser" element={<ProfileViewUser />} />
            <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
            <Route
                path="/profileViewUser/product/:id"
                element={<ProductPage />}
            />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
export default Router;
