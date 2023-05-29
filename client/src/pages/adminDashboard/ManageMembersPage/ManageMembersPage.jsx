import React, { useState } from "react";
import { MemberActions, MemberTable, SlidingMenu, AddUserForm, MemberDetail } from "@components";
import "./manageMembersPage.scss";

const ManageMembersPage = () => {
    const [createUserMenuOpen, setCreateUserMenuOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <React.Fragment>
            <SlidingMenu title="Nieuw Lid Toevoegen" open={createUserMenuOpen} setOpen={setCreateUserMenuOpen}>
                <AddUserForm setCreateUserMenuOpen={setCreateUserMenuOpen} />
            </SlidingMenu>
            <aside className="manage-members-page__sidebar">
                {selectedUser && <MemberDetail user={selectedUser} setSelectedUser={setSelectedUser} />}
            </aside>
            <main className="manage-members-page__main">
                <MemberActions setCreateUserMenuOpen={setCreateUserMenuOpen} />
                <MemberTable setSelectedUser={setSelectedUser} />
            </main>
        </React.Fragment>
    );
};

export default ManageMembersPage;
