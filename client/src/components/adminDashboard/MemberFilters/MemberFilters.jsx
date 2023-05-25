import { Input, DropdownMenu } from "@components";
import "./memberFilters.scss";

const MemberFilters = ({ itemsPerPage, setItemsPerPage, setSearchTerm, filteredUsers, userTypeToggle, setUserTypeToggle }) => {
    const handleOptionChange = (selectedOption) => {
        setItemsPerPage(selectedOption);
    };

    return (
        <section className="member-filters">
            <div className="member-filters__section">
                <Input placeholder="Leden zoeken" onChange={(e) => setSearchTerm(e.target.value)}>
                    <img className="input__icon" src="/icons/searchglass.svg" alt="search icon" />
                </Input>
                <DropdownMenu options={[3, 5, 10, 25]} defaultOption={itemsPerPage} onOptionChange={handleOptionChange} />
                <p>van {filteredUsers.length} resultaten</p>
            </div>
            <div className="member-filters__section">
                <button
                    onClick={() => (userTypeToggle === "Trainers" ? setUserTypeToggle("") : setUserTypeToggle("Trainers"))}
                    className={`member-filters__toggle-button ${userTypeToggle === "Trainers" ? "member-filters__toggle-button--active" : ""}`}
                >
                    Trainers
                </button>
                <button
                    onClick={() => (userTypeToggle === "Leden" ? setUserTypeToggle("") : setUserTypeToggle("Leden"))}
                    className={`member-filters__toggle-button ${userTypeToggle === "Leden" ? "member-filters__toggle-button--active" : ""}`}
                >
                    Leden
                </button>
            </div>
        </section>
    );
};

export default MemberFilters;
