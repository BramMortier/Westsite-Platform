import { Input, Checkbox } from "@components";
import { nieuwsPostLabels } from "@config/dropdownMenus";
import "./nieuwsPostFilters.scss";

const NieuwsPostFilters = () => {
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
                <Input darkmode={true} placeholder="Nieuwsberichten zoeken">
                    <img className="input__icon" src="/icons/searchglass-dark.svg" alt="searchglass icon" />
                </Input>
            </div>
        </section>
    );
};

export default NieuwsPostFilters;
