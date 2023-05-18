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

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;

        setLoginFormData({
            ...loginFormData,
            [name]: value,
        });
    };

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        await login(loginFormData);
        navigate("/");
    };

    return (
        <div className="login-page">
            <form className="login-page__form" onSubmit={handleLoginFormSubmit}>
                <h2>Login</h2>
                <div className="login-page__form-row">
                    <label htmlFor="loginEmail">email</label>
                    <input
                        type="text"
                        id="loginEmail"
                        name="email"
                        placeholder="email"
                        value={loginFormData.email}
                        onChange={handleLoginFormChange}
                    />
                </div>
                <div className="login-page__form-row">
                    <label htmlFor="loginPassword">password</label>
                    <input
                        type="password"
                        id="loginPassword"
                        name="password"
                        placeholder="password"
                        value={loginFormData.password}
                        onChange={handleLoginFormChange}
                    />
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
