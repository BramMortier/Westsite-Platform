import React, { useState } from "react";
import { NieuwsPostActions, NieuwsPostList, NieuwsPostFilters } from "@components";
import "./manageNieuwsPage.scss";

const ManageNieuwsPage = () => {
    const [labelFilters, setLabelFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <React.Fragment>
            <main className="manage-nieuws-page__main">
                <div className="manage-nieuws-page__section">
                    <NieuwsPostActions />
                    <NieuwsPostList />
                </div>
                <div className="manage-nieuws-page__section">
                    <NieuwsPostFilters
                        setSearchTerm={setSearchTerm}
                        labelFilters={labelFilters}
                        searchTerm={searchTerm}
                        setLabelFilters={setLabelFilters}
                    />
                </div>
            </main>
        </React.Fragment>
    );
};

export default ManageNieuwsPage;
