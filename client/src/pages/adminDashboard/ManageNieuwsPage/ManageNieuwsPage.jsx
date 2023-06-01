import React, { useState } from "react";
import { NieuwsPostActions, NieuwsPostList, NieuwsPostFilters, SlidingMenu, AddNieuwsPostForm } from "@components";
import "./manageNieuwsPage.scss";

const ManageNieuwsPage = () => {
    const [createNieuwsPostMenuOpen, setCreateNieuwsPostMenuOpen] = useState(false);
    const [labelFilters, setLabelFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <React.Fragment>
            <SlidingMenu title="Nieuw Bericht Opstellen" open={createNieuwsPostMenuOpen} setOpen={setCreateNieuwsPostMenuOpen}>
                <AddNieuwsPostForm />
            </SlidingMenu>
            <main className="manage-nieuws-page__main">
                <div className="manage-nieuws-page__section">
                    <NieuwsPostActions setCreateNieuwsPostMenuOpen={setCreateNieuwsPostMenuOpen} />
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
