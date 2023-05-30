import React, { useState } from "react";
import { SlidingMenu, PopupMenu, TrickActions, TrickList, TrickFilters, TrickStatistics, TrickDetail, AddTrickForm, FileGallery } from "@components";
import "./manageTricksPage.scss";

const ManageTricksPage = () => {
    const [createTrickMenuOpen, setCreateTrickMenuOpen] = useState(false);
    const [fileGalleryMenuOpen, setFileGalleryMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <PopupMenu title="File gallery" open={fileGalleryMenuOpen} setOpen={setFileGalleryMenuOpen}>
                <FileGallery />
            </PopupMenu>
            <SlidingMenu title="Nieuwe Trick Toevoegen" open={createTrickMenuOpen} setOpen={setCreateTrickMenuOpen}>
                <AddTrickForm setFileGalleryMenuOpen={setFileGalleryMenuOpen} />
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
