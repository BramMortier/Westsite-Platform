import "./button.scss";

const Button = ({ children, type, onClick }) => {
    return (
        <button className={`button button--${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
