import { SectionLabel, ProfileInfo, TricksCompletion } from "@components";
import "./profilePage.scss";

const ProfilePage = () => {
    return (
        <main className="profile-page__main">
            <div className="profile-page__section">
                <ProfileInfo />
                <TricksCompletion />
            </div>
        </main>
    );
};

export default ProfilePage;
