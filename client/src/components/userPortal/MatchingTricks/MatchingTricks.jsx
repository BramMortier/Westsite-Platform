import { useTrickContext } from "@hooks/useTrickContext";
import "./matchingTricks.scss";

const MatchingTricks = () => {
    const { tricks } = useTrickContext();

    return (
        <section className="matching-tricks">
            <div className="matching-tricks__content">
                <h4>Gerelateerde tricks die je kan leren</h4>
                <ul className="matching-tricks__list">
                    {tricks &&
                        tricks.slice(0, 6).map((trick) => (
                            <li key={trick._id} className="matching-tricks__trick">
                                <p>{trick.name}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

export default MatchingTricks;
