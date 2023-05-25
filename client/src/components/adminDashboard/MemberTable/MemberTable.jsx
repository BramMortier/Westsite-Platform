import { useState, useEffect } from "react";
import { useUserContext } from "../../../hooks/useUserContext";
import { MemberFilters, MemberTableRow, Pagination } from "@components";
import "./memberTable.scss";

const MemberTable = () => {
    const { users } = useUserContext();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");

    const userTableColumns = ["Naam", "Geboortejaar", "Home Cable", "Woonplaats", "Contact Info", "Lid/Trainer"];

    useEffect(() => {
        if (!searchTerm) {
            setFilteredUsers(users);
        } else {
            const term = searchTerm.toLocaleLowerCase();

            const result = users.filter((user) => {
                const userName = `${user.firstname} ${user.lastname}`.toLowerCase();
                const userHomeCable = user.homeCable.toLowerCase();
                const userAddress = user.address.toLowerCase();
                return userName.includes(term) || userHomeCable.includes(term) || userAddress.includes(term);
            });

            setFilteredUsers(result);
        }
    }, [searchTerm, users]);

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const slicedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <section className="member-table">
            <MemberFilters itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setSearchTerm={setSearchTerm} />
            <table className="member-table__container">
                <thead className="member-table__head">
                    <tr>{userTableColumns && userTableColumns.map((column, index) => <th key={index}>{column}</th>)}</tr>
                </thead>
                <tbody className="member-table__body">{users && slicedUsers.map((user) => <MemberTableRow key={user._id} user={user} />)}</tbody>
            </table>
            <div className="member-table__pagination">
                <Pagination
                    items={filteredUsers}
                    itemsPerPage={itemsPerPage}
                    maxVisiblePageNumbers={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </section>
    );
};

export default MemberTable;
