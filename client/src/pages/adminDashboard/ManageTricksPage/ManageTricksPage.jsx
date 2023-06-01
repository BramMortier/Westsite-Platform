import React, { useState } from "react";
import { SlidingMenu, TrickActions, TrickList, TrickFilters, TrickStatistics, TrickDetail, AddTrickForm } from "@components";
import "./manageTricksPage.scss";

const ManageTricksPage = () => {
    const [createTrickMenuOpen, setCreateTrickMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <SlidingMenu title="Nieuwe Trick Toevoegen" open={createTrickMenuOpen} setOpen={setCreateTrickMenuOpen}>
                <AddTrickForm setCreateTrickMenuOpen={setCreateTrickMenuOpen} />
            </SlidingMenu>
            <aside className="manage-tricks-page__sidebar">
                <TrickFilters />
                <TrickStatistics />
                <TrickDetail />
            </aside>
            <main className="manage-tricks-page__main">
                <TrickActions setCreateTrickMenuOpen={setCreateTrickMenuOpen} />
                <TrickList />
            </main>
        </React.Fragment>
    );
};

export default ManageTricksPage;
