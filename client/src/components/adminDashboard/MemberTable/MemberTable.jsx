import { useState, useEffect } from "react";
import { useUserContext } from "@hooks/useUserContext";
import { MemberFilters, MemberTableRow, Pagination } from "@components";
import "./memberTable.scss";

const MemberTable = () => {
    const { users } = useUserContext();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    const [userTypeToggle, setUserTypeToggle] = useState("");

    const userTableColumns = ["Naam", "Geboortejaar", "Home Cable", "Woonplaats", "Contact Info", "Lid/Trainer"];

    useEffect(() => {
        if (!searchTerm && !userTypeToggle) {
            setFilteredUsers(users);
        } else {
            const term = searchTerm.toLocaleLowerCase();

            let filteredUsers = users.filter((user) => {
                const userName = `${user.firstname} ${user.lastname}`.toLowerCase();
                const userHomeCable = user.homeCable.toLowerCase();
                const userAddress = user.address.toLowerCase();
                return userName.includes(term) || userHomeCable.includes(term) || userAddress.includes(term);
            });

            if (userTypeToggle) {
                filteredUsers = filteredUsers.filter(
                    (user) => (userTypeToggle === "Trainers" && user.trainer) || (userTypeToggle === "Leden" && !user.trainer)
                );
            }

            setFilteredUsers(filteredUsers);
        }
    }, [searchTerm, userTypeToggle, users]);

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const slicedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <section className="member-table">
            <MemberFilters
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                setSearchTerm={setSearchTerm}
                filteredUsers={filteredUsers}
                userTypeToggle={userTypeToggle}
                setUserTypeToggle={setUserTypeToggle}
            />
            <div className="member-table__wrapper">
                <table className="member-table__container">
                    <thead className="member-table__head">
                        <tr>{userTableColumns && userTableColumns.map((column, index) => <th key={index}>{column}</th>)}</tr>
                    </thead>
                    <tbody className="member-table__body">
                        {slicedUsers && slicedUsers.map((user) => <MemberTableRow key={user._id} user={user} />)}
                    </tbody>
                </table>
            </div>
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
