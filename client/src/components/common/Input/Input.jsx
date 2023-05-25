import "./input.scss";

const Input = ({ id, name, placeholder, value, onChange, errorMessage, children }) => {
    return (
        <div className="input">
            {children}
            <div className="input__main">
                <input type="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default Input;
