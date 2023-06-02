import "./profileInfo.scss";

const ProfileInfo = () => {
    return (
        <section className="profile-info">
            <div className="profile-info__general">
                <div className="profile-info__banner"></div>
                <div className="profile-info__general-content">
                    <div className="profile-info__avatar"></div>
                    <p>Bram Mortier</p>
                    <div>
                        <span>2003</span>
                        <span className="profile-info__tag">Trainer</span>
                    </div>
                </div>
            </div>
            <ul className="profile-info__details">
                <li className="profile-info__infopiece">
                    <div className="profile-info__infopiece-title">
                        <img src="/icons/location-lighter.svg" alt="location icon" />
                        <h5>Home Cable</h5>
                    </div>
                    <p>The Outsider Cablepark</p>
                </li>
                <li className="profile-info__infopiece">
                    <div className="profile-info__infopiece-title">
                        <img src="/icons/target-lighter.svg" alt="location icon" />
                        <h5>Woonplaats</h5>
                    </div>
                    <p>Oudenaarde, Belgie</p>
                </li>
                <li className="profile-info__infopiece">
                    <div className="profile-info__infopiece-title">
                        <img src="/icons/email-lighter.svg" alt="location icon" />
                        <h5>E-mail adres</h5>
                    </div>
                    <p>bram@gmail.com</p>
                </li>
                <li className="profile-info__infopiece">
                    <div className="profile-info__infopiece-title">
                        <img src="/icons/phone-lighter.svg" alt="location icon" />
                        <h5>Telefoonnummer</h5>
                    </div>
                    <p>0484 79 62 29</p>
                </li>
            </ul>
        </section>
    );
};

export default ProfileInfo;
