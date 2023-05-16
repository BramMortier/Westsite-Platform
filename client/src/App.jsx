import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="*" element={<HomePage />}></Route>
        </Routes>
    );
};

export default App;
