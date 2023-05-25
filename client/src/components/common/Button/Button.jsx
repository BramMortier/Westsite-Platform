import "./button.scss";

const Button = ({ children, type, variant, onClick }) => {
    return (
        <button className={`button button--${type} button--${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
