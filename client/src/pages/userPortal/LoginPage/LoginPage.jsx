import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "@config/routes";
import validateForm from "@config/validation/validateForm";
import { loginFormValidationSchema } from "@config/validation/formSchemas";
import { useAuthContext } from "@hooks/useAuthContext";
import "./loginPage.scss";

const LoginPage = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const loginFormInitialState = {
        email: "",
        password: "",
    };

    const [loginFormData, setLoginFormData] = useState(loginFormInitialState);
    const [loginFormErrors, setLoginFormErrors] = useState({});
    const [loginFormMessage, setLoginFormMessage] = useState(null);

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;

        setLoginFormData({
            ...loginFormData,
            [name]: value,
        });
    };

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();

        setLoginFormErrors({});
        setLoginFormMessage(null);

        const result = await validateForm(loginFormValidationSchema, loginFormData);

        if (result === true) {
            const response = await login(loginFormData);
            setLoginFormMessage({ type: response.status, content: response.message });
            setLoginFormData(loginFormInitialState);
            if (response.status === "OK") setTimeout(() => navigate("/"), 750);
        } else {
            setLoginFormErrors(result);
        }
    };

    return (
        <div className="login-page">
            <form className="login-page__form" noValidate onSubmit={handleLoginFormSubmit}>
                <h2>Login</h2>
                {loginFormMessage && (
                    <div
                        className={`login-page__form-general-message ${
                            loginFormMessage.type === "OK" ? "login-page__form-general-message--ok" : "login-page__form-general-message--error"
                        }`}
                    >
                        {loginFormMessage.content}
                    </div>
                )}
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
                    {loginFormErrors.email && <p className="login-page__form-error">{loginFormErrors.email}</p>}
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
                    {loginFormErrors.password && <p className="login-page__form-error">{loginFormErrors.password}</p>}
                </div>
                <p>
                    I dont have an account <Link to={routes.register}>Register</Link>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
