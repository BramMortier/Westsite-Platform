import React, { useState } from "react";
import { Input, DropdownMenu } from "@components";
import { difficultyOptions, typeOptions, variantOptions } from "@config/dropdownMenus";
import "./trickFilters.scss";

const TrickFilters = () => {
    const [trickFiltersMenuOpen, setTrickFiltersMenuOpen] = useState(false);

    return (
        <section className={`trick-filters ${trickFiltersMenuOpen ? "trick-filters--active" : ""}`}>
            <div className="trick-filters__menu-label" onClick={() => setTrickFiltersMenuOpen(!trickFiltersMenuOpen)}>
                <h4>Tricks filteren</h4>
                <img src="/icons/chevron-down-dark.svg" alt="chevron icon" />
            </div>
            <div className="trick-filters__menu-content">
                <div className="trick-filters__search">
                    <Input placeholder="Tricks zoeken">
                        <img className="input__icon" src="/icons/searchglass.svg" alt="" />
                    </Input>
                    <p>118 Resultaten</p>
                </div>
                <div className="trick-filters__attributes">
                    <div className="trick-filters__difficulty">
                        <h5>Moeilijkheidsgraad</h5>
                        <DropdownMenu type="stretched" options={difficultyOptions} />
                    </div>
                    <div className="trick-filters__type">
                        <h5>Type</h5>
                        <DropdownMenu type="stretched" options={typeOptions} />
                    </div>
                    <div className="trick-filters__variant">
                        <h5>Soort</h5>
                        <DropdownMenu type="stretched" options={variantOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrickFilters;
