import { useState } from "react";
import { useAuthContext } from "@hooks/useAuthContext";
import validateForm from "@config/validation/validateForm";
import { loginFormValidationSchema } from "@config/validation/formSchemas";
import { Button, Input } from "@components";
import "./loginForm.scss";

const LoginForm = ({ setLoginPopupOpen }) => {
    const { login } = useAuthContext();

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
            if (response.status === "OK")
                setTimeout(() => {
                    setLoginPopupOpen(false);
                    setLoginFormMessage(null);
                }, 750);
        } else {
            setLoginFormErrors(result);
        }
    };

    return (
        <form className="login-form" noValidate onSubmit={handleLoginFormSubmit}>
            {loginFormMessage && (
                <div
                    className={`login-form__general-message ${
                        loginFormMessage.type === "OK" ? "login-form__general-message--ok" : "login-form__general-message--error"
                    }`}
                >
                    {loginFormMessage.content}
                </div>
            )}
            <div className="login-form__row">
                <div className="login-form__group login-form__group--full-width">
                    <label htmlFor="loginEmail">E-mail</label>
                    <Input
                        type="text"
                        id="loginEmail"
                        name="email"
                        placeholder="E-mail"
                        value={loginFormData.email}
                        onChange={handleLoginFormChange}
                        errorMessages={loginFormErrors.email}
                    />
                </div>
            </div>
            <div className="login-form__row login-form__row--last">
                <div className="login-form__group login-form__group--full-width">
                    <label htmlFor="loginPassword">Wachtwoord</label>
                    <Input
                        type="password"
                        id="loginPassword"
                        name="password"
                        placeholder="Wachtwoord"
                        value={loginFormData.password}
                        onChange={handleLoginFormChange}
                        errorMessages={loginFormErrors.password}
                    />
                </div>
            </div>
            <div className="login-form__submit">
                <Button submit={true} type="primary">
                    Login
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
