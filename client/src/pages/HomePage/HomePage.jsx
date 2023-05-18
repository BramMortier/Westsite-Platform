import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import routes from "../../config/routes";
import "./homePage.scss";

const homePage = () => {
    const { state, logout } = useAuthContext();

    return (
        <div className="home-page">
            {state.user ? (
                <React.Fragment>
                    <Link>
                        <button onClick={() => logout()}>Logout</button>
                    </Link>
                    <span>Welkom {state.user.firstname}</span>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link to={routes.login}>
                        <button>Login</button>
                    </Link>
                    <Link to={routes.register}>
                        <button>Register</button>
                    </Link>
                </React.Fragment>
            )}
        </div>
    );
};

export default homePage;
