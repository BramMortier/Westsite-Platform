import { Link } from "react-router-dom";
import "./homePage.scss";

const homePage = () => {
    return (
        <div className="home-page">
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};

export default homePage;
