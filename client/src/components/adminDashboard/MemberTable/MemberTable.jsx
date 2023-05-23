import { useState, useEffect } from "react";
import axios from "@config/axios";
import { MemberFilters } from "@components";
import "./memberTable.scss";

const MemberTable = () => {
    const [users, setUsers] = useState([]);

    const memberTableColumns = ["Naam", "Geboortejaar", "Home Cable", "Woonplaats", "Contact Info", "Lid/Trainer"];

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("/users");
            setUsers(response.data.users);
        };
        fetchUsers();
    }, []);

    return (
        <section className="member-table">
            <MemberFilters />
            <table className="member-table__container">
                <thead className="member-table__head">
                    <tr>{memberTableColumns && memberTableColumns.map((column, index) => <th key={index}>{column}</th>)}</tr>
                </thead>
                <tbody className="member-table__body">
                    {users &&
                        users.map((user) => (
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
        </section>
    );
};

export default MemberTable;
