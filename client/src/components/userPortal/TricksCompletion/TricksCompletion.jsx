import { Input, Checkbox } from "@components";
import { useTrickContext } from "@hooks/useTrickContext";
import { useState } from "react";
import "./tricksCompletion.scss";

const TricksCompletion = () => {
    const { tricks } = useTrickContext();

    const [hideLearnedTricks, setHideLearnedTricks] = useState(true);

    const groupedTricks = tricks.reduce((accumulator, trick) => {
        if (!accumulator[trick.type]) {
            accumulator[trick.type] = [];
        }
        accumulator[trick.type].push(trick);
        return accumulator;
    }, {});

    console.log(tricks);

    return (
        <section className="tricks-completion">
            <div className="tricks-completion__filters">
                <Input placeholder="Zoek naar tricks">
                    <img className="input__icon" src="/icons/searchglass.svg" alt="searchglass icon" />
                </Input>
                <div className="tricks-completion__filters-results">
                    118 Resultaten
                    <div className="tricks-completion__hide-learned">
                        <Checkbox checked={hideLearnedTricks} onChange={() => setHideLearnedTricks(!hideLearnedTricks)} />
                        Verberg geleerde tricks
                    </div>
                </div>
            </div>
            <div className="tricks-completion__overview">
                {Object.entries(groupedTricks).map(([type, tricks]) => (
                    <div className="tricks-completion__trick-group" key={type}>
                        <h4>
                            {type}
                            <span> ({tricks.length})</span>
                        </h4>
                        <ul className="tricks-completion__group-list">
                            {tricks.map((trick) => (
                                <li className="tricks-completion__group-trick" key={trick._id}>
                                    <p>{trick.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TricksCompletion;
