import { Routes, Route } from "react-router-dom";
import ProfileViewUser from "../pages/ProfileViewUser";

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
                <Route path="/profileViewUser" element={<ProfileViewUser />} />
            </>
        </Routes>
    );
}

export default Router;
