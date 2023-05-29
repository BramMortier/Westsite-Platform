import { Button } from "@components";
import "./memberDetail.scss";

const MemberDetail = ({ user, setSelectedUser }) => {
    return (
        <section className="member-detail">
            <div className="member-detail__actions">
                <div className="member-detail__action-btns">
                    <Button type="tertiary">
                        Bewerken
                        <img src="/icons/pencil-dark.svg" alt="pencil icon" />
                    </Button>
                    <Button type="secondary" variant="square" onClick={() => setSelectedUser(null)}>
                        <img src="/icons/close-light.svg" alt="close icon" />
                    </Button>
                </div>
                <div className="member-detail__profile-icon"></div>
            </div>
            <div className="member-detail__info">
                <div className="member-detail__general-info">
                    <p>
                        {user.firstname} {user.lastname}
                    </p>
                    <div>
                        <span>{user.birthYear}</span>
                        <span className="member-detail__tag">{user.trainer ? "Trainer" : "Lid"}</span>
                    </div>
                </div>
                <ul className="member-detail__detailed-info">
                    <li className="member-detail__infopiece">
                        <div className="member-detail__infopiece-title">
                            <img src="/icons/location-dark.svg" alt="location-icon" />
                            <h5>Home Cable</h5>
                        </div>
                        <p>{user.homeCable}</p>
                    </li>
                    <li className="member-detail__infopiece">
                        <div className="member-detail__infopiece-title">
                            <img src="/icons/email-dark.svg" alt="email icon" />
                            <h5>E-mail adres</h5>
                        </div>
                        <p>{user.email}</p>
                    </li>
                    <li className="member-detail__infopiece">
                        <div className="member-detail__infopiece-title">
                            <img src="/icons/target-dark.svg" alt="target icon" />
                            <h5>Woonplaats</h5>
                        </div>
                        <p>{user.address}</p>
                    </li>
                    <li className="member-detail__infopiece">
                        <div className="member-detail__infopiece-title">
                            <img src="/icons/phone-dark.svg" alt="phone icon" />
                            <h5>Telefoonnummer</h5>
                        </div>
                        <p>{user.phoneNumber}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MemberDetail;
