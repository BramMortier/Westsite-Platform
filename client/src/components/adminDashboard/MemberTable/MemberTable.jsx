import { useState, useEffect } from "react";
import axios from "@config/axios";
import { MemberFilters, Pagination } from "@components";
import "./memberTable.scss";

const MemberTable = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const userTableColumns = ["Naam", "Geboortejaar", "Home Cable", "Woonplaats", "Contact Info", "Lid/Trainer"];

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const slicedUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("/users");
            setUsers(response.data.users);
        };
        fetchUsers();
    }, []);

    return (
        <section className="member-table">
            <MemberFilters itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
            <table className="member-table__container">
                <thead className="member-table__head">
                    <tr>{userTableColumns && userTableColumns.map((column, index) => <th key={index}>{column}</th>)}</tr>
                </thead>
                <tbody className="member-table__body">
                    {users &&
                        slicedUsers.map((user) => (
                            <tr key={user._id}>
                                <td className="member-table__user-name">
                                    <div className="member-table__value">{`${user.firstname} ${user.lastname}`}</div>
                                </td>
                                <td className="member-table__user-birth-year">
                                    <div className="member-table__value">{user.birthYear}</div>
                                </td>
                                <td className="member-table__user-home-cable">
                                    <div className="member-table__value">
                                        <img src="/icons/location-dark.svg" alt="location icon" />
                                        <span>{user.homeCable}</span>
                                    </div>
                                </td>
                                <td className="member-table__user-address">
                                    <div className="member-table__value">{user.address}</div>
                                </td>
                                <td className="member-table__user-contact-info">
                                    <div className="member-table__value">
                                        <div className="member-table__user-phone-number">
                                            <img src="/icons/email-dark.svg" alt="email icon" />
                                            <span>{user.email}</span>
                                        </div>
                                        <div className="member-table__user-email">
                                            <img src="/icons/phone-dark.svg" alt="phone icon" />
                                            <span>{user.phoneNumber}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="member-table__user-is-trainer">
                                    <div className="member-table__value">{user.trainer ? "Trainer" : "Lid"}</div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="member-table__pagination">
                <Pagination
                    items={users}
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
