import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/Product";
import ProfileViewUser from "../pages/ProfileViewUser";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import Home from "../pages/Home";
import ModalCreateAnnouncement from "../components/CreateAnnouncementModal";
import { useState } from "react";

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
        </Routes>
    );
}
export default Router;
