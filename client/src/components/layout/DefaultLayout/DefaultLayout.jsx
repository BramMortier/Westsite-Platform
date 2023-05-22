import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";
import React from "react";
import "./defaultLayout.scss";

const DefaultLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default DefaultLayout;
