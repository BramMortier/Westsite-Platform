import { Expectations, Hero, TrickList, Newsfeed, TrainingOverview } from "@components";
import "./homePage.scss";

const homePage = () => {
    return (
        <main>
            <Hero />
            <TrainingOverview />
            <Newsfeed />
            <TrickList />
            <Expectations />
        </main>
    );
};

export default homePage;
