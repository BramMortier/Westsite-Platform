import { useState } from "react";
import "./dropdownMenu.scss";

// TODO find a better way to add darkmode or other styles to this component

const DropdownMenu = ({ options, darkmode, defaultOption, onOptionChange, type, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

    return (
        <div className={`dropdown-menu dropdown-menu--${type} ${darkmode ? "dropdown-menu--darkmode" : ""} ${isOpen ? "dropdown-menu--active" : ""}`}>
            <div className="dropdown-menu__selected-value" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption}</span>
                {darkmode ? (
                    <img src="/icons/chevron-down-light.svg" alt="chevron icon" />
                ) : (
                    <img src="/icons/chevron-down-dark.svg" alt="chevron icon" />
                )}
            </div>
            <ul className="dropdown-menu__options">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`dropdown-menu__option ${option === selectedOption ? "dropdown-menu__option--active" : ""}`}
                        onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                            if (onOptionChange) onOptionChange(option, name);
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
