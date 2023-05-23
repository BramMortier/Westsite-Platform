import "./input.scss";

const Input = ({ id, name, placeholder, value, onChange, errorMessage }) => {
    return (
        <div className="input">
            <img className="input__icon" src="/icons/searchglass.svg" alt="search icon" />
            <div className="input__main">
                <input type="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default Input;
