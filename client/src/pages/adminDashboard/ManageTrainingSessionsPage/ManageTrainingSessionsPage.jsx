import React, { useState } from "react";
import { SlidingMenu, TrainingActions, TrainingCalendar, TrainingParticipants } from "@components";
import "./manageTrainingSessionsPage.scss";

const ManageTrainingSessionsPage = () => {
    const [createTrainingSessionMenuOpen, setCreateTrainingSessionMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <main className="manage-training-page__main">
                <TrainingActions />
                <TrainingCalendar />
                <TrainingParticipants />
            </main>
        </React.Fragment>
    );
};

export default ManageTrainingSessionsPage;
