import "./button.scss";

const Button = ({ children, type, variant, onClick, submit = false }) => {
    return (
        <button type={submit ? "submit" : "button"} className={`button button--${type} button--${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
