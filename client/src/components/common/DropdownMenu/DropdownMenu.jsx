import { useState } from "react";
import "./dropdownMenu.scss";

const DropdownMenu = ({ options, defaultOption, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

    return (
        <div className={`dropdown-menu ${isOpen ? "dropdown-menu--active" : ""}`}>
            <div className="dropdown-menu__selected-value" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
                <img src="/icons/chevron-down-dark.svg" alt="chevron icon" />
            </div>
            <ul className="dropdown-menu__options">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`dropdown-menu__option ${option === selectedOption ? "dropdown-menu__option--active" : ""}`}
                        onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                            if (onOptionChange) onOptionChange(option);
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
