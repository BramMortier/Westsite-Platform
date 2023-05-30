import "./trickList.scss";
import { TrickCard } from "@components";

const TrickList = () => {
    return (
        <section className="trick-list">
            <TrickCard />
            <TrickCard />
            <TrickCard />
            <TrickCard />
        </section>
    );
};

export default TrickList;
