import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import routes from "../../config/routes";
import "./homePage.scss";
import { Header, Footer } from "../../components";

const homePage = () => {
    const { state, logout } = useAuthContext();

    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    );
};

export default homePage;
