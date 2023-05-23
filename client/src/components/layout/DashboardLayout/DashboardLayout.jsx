import { Outlet } from "react-router-dom";
import { AdminHeader } from "@components";
import "./dashboardLayout.scss";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <AdminHeader />
            <div className="dashboard-layout__page-content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
