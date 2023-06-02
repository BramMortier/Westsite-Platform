import { TrickInfo, MatchingTricks } from "@components";
import "./trickInfoPage.scss";

const TrickInfoPage = () => {
    return (
        <main className="trick-info-page__main">
            <TrickInfo />
            <MatchingTricks />
        </main>
    );
};

export default TrickInfoPage;
