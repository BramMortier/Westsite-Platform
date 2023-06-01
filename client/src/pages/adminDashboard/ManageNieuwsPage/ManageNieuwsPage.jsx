import React from "react";
import { NieuwsPostActions, NieuwsPostList } from "@components";
import "./manageNieuwsPage.scss";

const ManageNieuwsPage = () => {
    return (
        <React.Fragment>
            <main className="manage-nieuws-page__main">
                <div className="manage-nieuws-page__section">
                    <NieuwsPostActions />
                    <NieuwsPostList />
                </div>
                <div className="manage-nieuws-page__section"></div>
            </main>
        </React.Fragment>
    );
};

export default ManageNieuwsPage;
