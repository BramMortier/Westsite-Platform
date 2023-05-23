import { Input, DropdownMenu } from "@components";
import "./memberFilters.scss";

const MemberFilters = ({ itemsPerPage, setItemsPerPage }) => {
    const handleOptionChange = (selectedOption) => {
        setItemsPerPage(selectedOption);
    };

    return (
        <section className="member-filters">
            <div className="member-filters__section">
                <Input placeholder="Leden zoeken" />
                <DropdownMenu options={[3, 5, 10, 25]} defaultOption={itemsPerPage} onOptionChange={handleOptionChange} />
            </div>
        </section>
    );
};

export default MemberFilters;
