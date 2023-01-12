import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/Product";
import ProfileViewUser from "../pages/ProfileViewUser";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RedefinePassword from "../pages/RedefinePassword";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/redefinePassword" element={<RedefinePassword />} />
            <Route path="/profileViewUser/:id" element={<ProfileViewUser />} />
            <Route path="/profileViewAdmin" element={<ProfileViewAdmin />} />
            <Route
                path="/profileViewUser/product/:id"
                element={<ProductPage />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    );
}
export default Router;
