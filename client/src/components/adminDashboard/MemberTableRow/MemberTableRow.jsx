import "./memberTableRow.scss";

const MemberTableRow = ({ user, setSelectedUser }) => {
    return (
        <tr className="member-table-row" onClick={() => setSelectedUser(user)}>
            <td className="member-table-row__user-name">
                <div className="member-table-row__value">{`${user.firstname} ${user.lastname}`}</div>
            </td>
            <td className="member-table-row__user-birth-year">
                <div className="member-table-row__value">{user.birthYear}</div>
            </td>
            <td className="member-table-row__user-home-cable">
                <div className="member-table-row__value">
                    <img src="/icons/location-medium.svg" alt="location icon" />
                    <span>{user.homeCable}</span>
                </div>
            </td>
            <td className="member-table-row__user-address">
                <div className="member-table-row__value">{user.address}</div>
            </td>
            <td className="member-table-row__user-contact-info">
                <div className="member-table-row__value">
                    <div className="member-table-row__user-phone-number">
                        <img src="/icons/email-medium.svg" alt="email icon" />
                        <span>{user.email}</span>
                    </div>
                    <div className="member-table-row__user-email">
                        <img src="/icons/phone-medium.svg" alt="phone icon" />
                        <span>{user.phoneNumber}</span>
                    </div>
                </div>
            </td>
            <td className="member-table-row__user-is-trainer">
                <div className="member-table-row__value">{user.trainer ? "Trainer" : "Lid"}</div>
            </td>
        </tr>
    );
};

export default MemberTableRow;
