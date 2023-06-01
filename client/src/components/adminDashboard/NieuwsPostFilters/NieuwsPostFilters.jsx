import { useState } from "react";
import { Input, Checkbox } from "@components";
import "./nieuwsPostFilters.scss";

const nieuwsPostLabels = ["Aankondigingen", "Giveaway's", "Evenementen", "Annulaties", "Updates"];

const NieuwsPostFilters = () => {
    const [labelFilters, setLabelFilters] = useState({});

    return (
        <section className="nieuws-post-filters">
            <div className="nieuws-post-filters__labels">
                <h4>Weergave</h4>
                <ul className="nieuws-post-filters__allowed-labels-list">
                    {nieuwsPostLabels &&
                        nieuwsPostLabels.map((label, index) => (
                            <li key={index} className="nieuws-post-filters__allowed-label">
                                <Checkbox checked={true} />
                                <p>{label}</p>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="nieuws-post-filters__search">
                <h4>Zoeken</h4>
                <Input placeholder="Nieuwsberichten zoeken">
                    <img className="input__icon" src="/icons/searchglass.svg" alt="searchglass icon" />
                </Input>
            </div>
        </section>
    );
};

export default NieuwsPostFilters;
