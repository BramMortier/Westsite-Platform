import { Expectations, Hero } from "@components";
import "./homePage.scss";

const homePage = () => {
    return (
        <main>
            <Hero />
            <Expectations />
        </main>
    );
};

export default homePage;
