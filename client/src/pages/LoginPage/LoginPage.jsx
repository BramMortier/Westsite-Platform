import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./loginPage.scss";

const LoginPage = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        });
        handleChange;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(loginFormData);
        navigate("/");
    };

    return (
        <div className="login-page">
            <form className="login-page__form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="login-page__form-row">
                    <label htmlFor="loginEmail">email</label>
                    <input type="text" id="loginEmail" name="email" placeholder="email" onChange={handleChange} />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="loginPassword">password</label>
                    <input type="password" id="loginPassword" name="password" placeholder="password" onChange={handleChange} />
                </div>
                <p>
                    I dont have an account <Link to="/register">Register</Link>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
