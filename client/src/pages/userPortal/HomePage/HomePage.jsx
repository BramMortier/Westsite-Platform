import { Expectations, Hero, TrickList } from "@components";
import "./homePage.scss";

const homePage = () => {
    return (
        <main>
            <Hero />
            <TrickList />
            <Expectations />
        </main>
    );
};

export default homePage;
