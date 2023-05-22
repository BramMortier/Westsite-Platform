import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "./pages";
import { DashboardLayout, DefaultLayout } from "./components";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}></Route>

            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default App;
