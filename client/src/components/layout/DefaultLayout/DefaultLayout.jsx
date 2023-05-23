import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";
import "./defaultLayout.scss";

const DefaultLayout = () => {
    return (
        <div className="default-layout">
            <Header />
            <div className="default-layout__page-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
