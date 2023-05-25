import React, { useState } from "react";
import { MemberActions, MemberTable, SlidingMenu, AddUserForm } from "@components";
import "./manageMembersPage.scss";

const ManageMembersPage = () => {
    const [userDetailSidebarOpen, setUserDetailSidebarOpen] = useState(false);
    const [createUserMenuOpen, setCreateUserMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <SlidingMenu title="Nieuw Lid Toevoegen" open={createUserMenuOpen} setOpen={setCreateUserMenuOpen}>
                <AddUserForm />
            </SlidingMenu>
            <aside className="manage-members-page__sidebar"></aside>
            <main className="manage-members-page__main">
                <MemberActions setCreateUserMenuOpen={setCreateUserMenuOpen} />
                <MemberTable />
            </main>
        </React.Fragment>
    );
};

export default ManageMembersPage;
