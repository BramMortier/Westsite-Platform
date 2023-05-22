import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "@components";

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <AdminHeader />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default DashboardLayout;
