import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@context/AuthContextProvider.jsx";
import { UserProvider } from "@context/UserContextProvider.jsx";
import { TrickProvider } from "@context/TrickContextProvider.jsx";
import App from "./App.jsx";

import "./sass/breakpoints.scss";
import "./sass/colors.scss";
import "./sass/reset.scss";
import "./sass/spacing.scss";
import "./sass/typography.scss";
import "./sass/fonts.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <UserProvider>
                    <TrickProvider>
                        <App />
                    </TrickProvider>
                </UserProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
