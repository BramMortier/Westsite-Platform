import { useState } from "react";
import { SectionLabel, Input, DropdownMenu, TrickCardV2, Pagination } from "@components";
import { typeOptions, difficultyOptions, variantOptions } from "@config/dropdownMenus";
import { useTrickContext } from "@hooks/useTrickContext";
import "./trickList.scss";

const TrickList = () => {
    const { tricks } = useTrickContext();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastTrick = currentPage * itemsPerPage;
    const indexOfFirstTrick = indexOfLastTrick - itemsPerPage;
    const slicedTricks = tricks.slice(indexOfFirstTrick, indexOfLastTrick);

    return (
        <section className="trick-list">
            <div className="trick-list__filters-wrapper">
                <div className="trick-list__filters">
                    <SectionLabel name="West Site Trick List" />
                    <div className="trick-list__filters-row">
                        <div className="trick-list__filters-group trick-list__filters-group--full-width">
                            <label>Naam</label>
                            <Input darkmode={true} placeholder="Zoek een trick">
                                <img src="/icons/searchglass-dark.svg" alt="searchglass icon" className="input__icon" />
                            </Input>
                        </div>
                    </div>
                    <div className="trick-list__filters-row">
                        <div className="trick-list__filters-group">
                            <label>Moeilijkheidsgraad</label>
                            <DropdownMenu darkmode={true} type="stretched" options={difficultyOptions} />
                        </div>
                        <div className="trick-list__filters-group">
                            <label>Soort</label>
                            <DropdownMenu darkmode={true} type="stretched" options={typeOptions} />
                        </div>
                        <div className="trick-list__filters-group">
                            <label>Type</label>
                            <DropdownMenu darkmode={true} type="stretched" options={variantOptions} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="trick-list__tricks">
                <ul className="trick-list__tricks-list">{tricks && slicedTricks.map((trick) => <TrickCardV2 key={trick._id} trick={trick} />)}</ul>
                <Pagination
                    items={tricks}
                    itemsPerPage={itemsPerPage}
                    maxVisiblePageNumbers={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </section>
    );
};

export default TrickList;
