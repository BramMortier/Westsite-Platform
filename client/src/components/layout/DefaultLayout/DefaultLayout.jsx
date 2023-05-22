import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";
import "./defaultLayout.scss";

const DefaultLayout = () => {
    return (
        <div className="default-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
