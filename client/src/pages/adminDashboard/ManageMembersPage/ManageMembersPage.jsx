import React from "react";
import { MemberActions } from "@components";
import "./manageMembersPage.scss";
import { MemberTable } from "@components";

const ManageMembersPage = () => {
    return (
        <React.Fragment>
            <aside className="manage-members-page__sidebar"></aside>
            <main className="manage-members-page__main">
                <MemberActions />
                <MemberTable />
            </main>
        </React.Fragment>
    );
};

export default ManageMembersPage;
