import React from "react";
import { Expectations, Hero } from "../../components";
import "./homePage.scss";

const homePage = () => {
    return (
        <React.Fragment>
            <Hero />
            <Expectations />
        </React.Fragment>
    );
};

export default homePage;
